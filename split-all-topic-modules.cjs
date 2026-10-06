// Run safely first:
//   node split-all-topic-modules.cjs
//
// Perform the migration:
//   node split-all-topic-modules.cjs --write
//
// Undo before committing:
//   git restore lib/data/topics
//   rm -rf .topic-split-backups

const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const ROOT = path.join(process.cwd(), "lib", "data", "topics");
const BACKUP_ROOT = path.join(process.cwd(), ".topic-split-backups");

const MODULES = [
  { phase: "phase--1", module: "module-1-1" },
  { phase: "phase--1", module: "module-1-2" },
  { phase: "phase--1", module: "module-1-3" },
  { phase: "phase--1", module: "module-1-4" },
  { phase: "phase--1", module: "module-1-5" },
  { phase: "phase-0", module: "module-0-1" },
  { phase: "phase-0", module: "module-0-2" },
];

const shouldWrite = process.argv.includes("--write");

function fail(message) {
  throw new Error(message);
}

function getPropertyName(property) {
  if (ts.isStringLiteral(property.name) || ts.isIdentifier(property.name)) {
    return property.name.text;
  }

  fail(`Unsupported topic key: ${property.name.getText()}`);
}

function findTopicsObject(sourceFile) {
  for (const statement of sourceFile.statements) {
    if (
      !ts.isVariableStatement(statement) ||
      !statement.modifiers?.some(
        (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword
      )
    ) {
      continue;
    }

    for (const declaration of statement.declarationList.declarations) {
      if (
        ts.isIdentifier(declaration.name) &&
        declaration.name.text === "topics" &&
        declaration.initializer &&
        ts.isObjectLiteralExpression(declaration.initializer)
      ) {
        return declaration.initializer;
      }
    }
  }

  fail('Could not find `export const topics = { ... }`.');
}

function getTopicSlug(topicObject) {
  const slugProperty = topicObject.properties.find(
    (property) =>
      ts.isPropertyAssignment(property) &&
      getPropertyName(property) === "slug" &&
      ts.isStringLiteral(property.initializer)
  );

  if (!slugProperty || !ts.isPropertyAssignment(slugProperty)) {
    fail("A topic object is missing a string `slug` property.");
  }

  return slugProperty.initializer.text;
}

function splitModule({ phase, module }) {
  const sourcePath = path.join(ROOT, phase, `${module}.ts`);
  const outputDirectory = path.join(ROOT, phase, module);

  if (!fs.existsSync(sourcePath)) {
    console.log(`SKIP  ${phase}/${module}: source file not found`);
    return;
  }

  if (fs.existsSync(outputDirectory)) {
    fail(
      `${phase}/${module}: output folder already exists.\n` +
        `Refusing to overwrite existing files: ${outputDirectory}`
    );
  }

  const source = fs.readFileSync(sourcePath, "utf8");
  const sourceFile = ts.createSourceFile(
    sourcePath,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  );

  const diagnostics = sourceFile.parseDiagnostics;
  if (diagnostics.length > 0) {
    fail(
      `${phase}/${module}: TypeScript syntax errors exist already.\n` +
        diagnostics
          .map((diagnostic) =>
            ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")
          )
          .join("\n")
    );
  }

  const topicsObject = findTopicsObject(sourceFile);
  const entries = [];

  for (const property of topicsObject.properties) {
    if (!ts.isPropertyAssignment(property)) {
      fail(
        `${phase}/${module}: expected only normal topic properties; found: ${property.getText(
          sourceFile
        )}`
      );
    }

    if (!ts.isObjectLiteralExpression(property.initializer)) {
      fail(
        `${phase}/${module}: topic "${getPropertyName(
          property
        )}" is not an object literal.`
      );
    }

    const key = getPropertyName(property);
    const slug = getTopicSlug(property.initializer);

    if (key !== slug) {
      fail(
        `${phase}/${module}: key "${key}" does not match slug "${slug}".`
      );
    }

    entries.push({
      slug,
      objectText: property.initializer.getText(sourceFile),
    });
  }

  if (entries.length === 0) {
    fail(`${phase}/${module}: no topic entries found.`);
  }

  const duplicateSlugs = entries
    .map((entry) => entry.slug)
    .filter((slug, index, all) => all.indexOf(slug) !== index);

  if (duplicateSlugs.length > 0) {
    fail(
      `${phase}/${module}: duplicate topic slug(s): ${[
        ...new Set(duplicateSlugs),
      ].join(", ")}`
    );
  }

  console.log(
    `${shouldWrite ? "WRITE" : "PLAN "}  ${phase}/${module} → ${
      entries.length
    } topic files`
  );

  if (!shouldWrite) {
    for (const entry of entries) {
      console.log(`       - ${entry.slug}.ts`);
    }
    return;
  }

  const backupPath = path.join(
    BACKUP_ROOT,
    phase,
    `${module}.ts`
  );

  fs.mkdirSync(path.dirname(backupPath), { recursive: true });
  fs.copyFileSync(sourcePath, backupPath);

  fs.mkdirSync(outputDirectory, { recursive: true });

  for (const entry of entries) {
    const content = `import type { TopicContent } from "../../types";

const topic: TopicContent = ${entry.objectText};

export default topic;
`;

    fs.writeFileSync(
      path.join(outputDirectory, `${entry.slug}.ts`),
      content,
      "utf8"
    );
  }

  const imports = entries
    .map(
      (entry, index) =>
        `import topic${index + 1} from "./${entry.slug}";`
    )
    .join("\n");

  const topicMap = entries
    .map(
      (entry, index) =>
        `  "${entry.slug}": topic${index + 1},`
    )
    .join("\n");

  const indexContent = `import type { TopicContent } from "../../types";
${imports}

export const topics: Record<string, TopicContent> = {
${topicMap}
};
`;

  fs.writeFileSync(
    path.join(outputDirectory, "index.ts"),
    indexContent,
    "utf8"
  );

  fs.unlinkSync(sourcePath);
}

try {
  console.log(
    shouldWrite
      ? "Splitting topic modules (write mode)...\n"
      : "Checking split plan (dry run)...\n"
  );

  for (const moduleInfo of MODULES) {
    splitModule(moduleInfo);
  }

  console.log(
    shouldWrite
      ? "\nDone. Backups are in .topic-split-backups/"
      : "\nDry run passed. No files changed."
  );
} catch (error) {
  console.error(`\nMigration stopped:\n${error.message}`);
  process.exitCode = 1;
}