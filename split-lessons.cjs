const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const sourcePath = path.join(process.cwd(), "lib", "data", "lessons.ts");
const outputDir = path.join(process.cwd(), "lib", "data", "lessons");
const backupPath = path.join(
  process.cwd(),
  ".lesson-split-backups",
  "lessons.ts"
);
const shouldWrite = process.argv.includes("--write");

function fail(message) {
  throw new Error(message);
}

function isExported(node) {
  return Boolean(
    node.modifiers?.some(
      (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword
    )
  );
}

function propertyName(property) {
  if (ts.isStringLiteral(property.name) || ts.isIdentifier(property.name)) {
    return property.name.text;
  }

  fail(`Unsupported property name: ${property.name.getText()}`);
}

function safeVariableName(value, index) {
  return `module${index + 1}`;
}

function findRequiredNodes(sourceFile) {
  let topicType;
  let lessonType;
  let lessonsObject;

  for (const statement of sourceFile.statements) {
    if (
      isExported(statement) &&
      ts.isTypeAliasDeclaration(statement) &&
      statement.name.text === "Topic"
    ) {
      topicType = statement;
    }

    if (
      isExported(statement) &&
      ts.isTypeAliasDeclaration(statement) &&
      statement.name.text === "Lesson"
    ) {
      lessonType = statement;
    }

    if (!ts.isVariableStatement(statement) || !isExported(statement)) {
      continue;
    }

    for (const declaration of statement.declarationList.declarations) {
      if (
        ts.isIdentifier(declaration.name) &&
        declaration.name.text === "lessonsByModule" &&
        declaration.initializer &&
        ts.isObjectLiteralExpression(declaration.initializer)
      ) {
        lessonsObject = declaration.initializer;
      }
    }
  }

  if (!topicType) fail("Could not find `export type Topic`.");
  if (!lessonType) fail("Could not find `export type Lesson`.");
  if (!lessonsObject) {
    fail("Could not find `export const lessonsByModule = { ... }`.");
  }

  return { topicType, lessonType, lessonsObject };
}

function run() {
  if (!fs.existsSync(sourcePath)) {
    fail(`Source file not found: ${sourcePath}`);
  }

  if (fs.existsSync(outputDir)) {
    fail(
      `Output directory already exists: ${outputDir}\n` +
        "Refusing to overwrite it."
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

  if (sourceFile.parseDiagnostics.length > 0) {
    const errors = sourceFile.parseDiagnostics
      .map((diagnostic) =>
        ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")
      )
      .join("\n");

    fail(`Existing syntax errors found in lessons.ts:\n${errors}`);
  }

  const { topicType, lessonType, lessonsObject } = findRequiredNodes(sourceFile);

  const modules = [];

  for (const property of lessonsObject.properties) {
    if (!ts.isPropertyAssignment(property)) {
      fail(
        `Expected lesson-module properties only; found:\n${property.getText(
          sourceFile
        )}`
      );
    }

    if (!ts.isArrayLiteralExpression(property.initializer)) {
      fail(
        `Module "${propertyName(
          property
        )}" is not an array of lessons.`
      );
    }

    modules.push({
      slug: propertyName(property),
      arrayText: property.initializer.getText(sourceFile),
    });
  }

  if (modules.length === 0) {
    fail("No lesson modules found.");
  }

  const slugs = modules.map((module) => module.slug);
  const duplicates = slugs.filter(
    (slug, index) => slugs.indexOf(slug) !== index
  );

  if (duplicates.length > 0) {
    fail(`Duplicate module slug(s): ${[...new Set(duplicates)].join(", ")}`);
  }

  console.log(
    shouldWrite
      ? "Splitting lessons (write mode)...\n"
      : "Checking lesson split plan (dry run)...\n"
  );

  console.log(`Found ${modules.length} lesson modules:`);
  for (const module of modules) {
    console.log(`  - ${module.slug}.ts`);
  }

  if (!shouldWrite) {
    console.log("\nDry run passed. No files changed.");
    return;
  }

  fs.mkdirSync(path.dirname(backupPath), { recursive: true });
  fs.copyFileSync(sourcePath, backupPath);

  const modulesDir = path.join(outputDir, "modules");
  fs.mkdirSync(modulesDir, { recursive: true });

  const typesContent = `${topicType.getText(sourceFile)}

${lessonType.getText(sourceFile)}
`;

  fs.writeFileSync(path.join(outputDir, "types.ts"), typesContent, "utf8");

  for (const module of modules) {
    const content = `import type { Lesson } from "../types";

export const lessons: Lesson[] = ${module.arrayText};

export default lessons;
`;

    fs.writeFileSync(
      path.join(modulesDir, `${module.slug}.ts`),
      content,
      "utf8"
    );
  }

  const imports = modules
    .map(
      (module, index) =>
        `import ${safeVariableName(module.slug, index)} from "./modules/${
          module.slug
        }";`
    )
    .join("\n");

  const moduleMap = modules
    .map(
      (module, index) =>
        `  "${module.slug}": ${safeVariableName(module.slug, index)},`
    )
    .join("\n");

  const indexContent = `import type { Lesson } from "./types";
${imports}

export type { Topic, Lesson } from "./types";

export const lessonsByModule: Record<string, Lesson[]> = {
${moduleMap}
};

export function getModuleLessons(moduleSlug: string): Lesson[] | undefined {
  return lessonsByModule[moduleSlug];
}
`;

  fs.writeFileSync(path.join(outputDir, "index.ts"), indexContent, "utf8");

  // Delete only after all new files have been written successfully.
  fs.unlinkSync(sourcePath);

  console.log("\nDone.");
  console.log(`Backup created at: ${backupPath}`);
}

try {
  run();
} catch (error) {
  console.error(`\nMigration stopped:\n${error.message}`);
  process.exitCode = 1;
}
