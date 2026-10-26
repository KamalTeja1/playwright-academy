import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "pathlib",
  title: "Paths with pathlib",
  summary:
    "Build portable paths, inspect filenames and organise fixtures and reports using Path.",
  whyItMatters:
    "Tests need predictable locations for input and output. Explicit paths help avoid works-on-my-machine failures.",
  notes: `A path is an address for a file or directory. pathlib represents that address as an object.

### Build a path

~~~python
from pathlib import Path

report = Path("reports") / "login.txt"
print(report)
~~~

The slash joins path components. Constructing this object creates neither the directory nor the file.

### Inspect the address

~~~python
from pathlib import Path

path = Path("fixtures") / "users.json"
print(path.name)
print(path.stem)
print(path.suffix)
print(path.parent)
~~~

### Find your starting point

Path.cwd() returns the current working directory. For a saved script, Path(__file__).resolve().parent locates its containing directory.

### Create output directories

~~~python
from pathlib import Path

folder = Path("demo-reports")
folder.mkdir(parents=True, exist_ok=True)
report = folder / "summary.txt"
report.write_text("Passed: 3\\n", encoding="utf-8")
~~~

parents creates missing parent directories. exist_ok allows an existing directory; it does not allow a file occupying that address.

### Find files

~~~python
from pathlib import Path

for path in sorted(Path("demo-reports").glob("*.txt")):
    print(path.name)
~~~

Use rglob for recursive searching. Sort results when your report requires a predictable order.

### Handle failures where they happen

An existence check is not a guarantee that a later read will succeed. Attempt the operation and handle the relevant error.

### The takeaway

Choose a clear base directory, join components with Path, and keep generated output separate from source files.`,
  handsOn: `Build a small report directory.

### Step 1: Create the script

~~~bash
cd /workspaces/playwright-academy
mkdir -p python-practice/filelab
cd python-practice/filelab
touch paths_lab.py
code paths_lab.py
~~~

### Step 2: Paste and run

~~~python
from pathlib import Path

base = Path(__file__).resolve().parent
output = base / "pathlab-output"
output.mkdir(parents=True, exist_ok=True)

for name in ["login", "cart"]:
    path = output / f"{name}.txt"
    path.write_text(f"{name}: PASS\\n", encoding="utf-8")

for path in sorted(output.glob("*.txt")):
    print(path.name, path.read_text(encoding="utf-8").strip())
~~~

~~~bash
python3 paths_lab.py
~~~

### Step 3: Check the base

Print Path.cwd() and base. Explain why they need not be the same directory.

### Deliverable

Keep the script and its disposable output folder. Identify which statements create the directory and files.`,
  challenge: `Create fixture_inventory.py.

1. Create a disposable directory containing three text files
2. List the files in sorted order
3. Print each filename, stem and suffix
4. Count the text files
5. Save an inventory in a separate output directory

Then explain:

- Why is joining paths better than manually adding separators?
- Does constructing Path("missing.txt") create a file?
- Why should tests use an explicit base directory?

Do not delete or overwrite existing project source files.`,
  proTips: [
    "Choose a base directory deliberately.",
    "Keep generated reports outside source directories.",
    "Sort search results when order matters.",
    "Use disposable output folders while practising.",
  ],
  commonMistakes: [
    {
      mistake: "Expecting a Path object to create a file",
      fix: "Use a write operation to create the file.",
    },
    {
      mistake: "Writing before the parent folder exists",
      fix: "Create the directory with mkdir first.",
    },
    {
      mistake: "Depending on an unspecified working directory",
      fix: "Use a known project root or a script-relative base.",
    },
    {
      mistake: "Assuming a file search has a useful order",
      fix: "Sort the paths before producing ordered output.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Inspect a path without creating it",
      code: `from pathlib import Path

path = Path("fixtures") / "users.json"
print(path.name)
print(path.stem)
print(path.suffix)
print(path.parent)`,
    },
    {
      language: "python",
      title: "Create a disposable report",
      code: `from pathlib import Path

folder = Path("path-demo")
folder.mkdir(parents=True, exist_ok=True)
report = folder / "summary.txt"
report.write_text("Passed: 3\\n", encoding="utf-8")
print(report.read_text(encoding="utf-8"))`,
    },
    {
      language: "python",
      title: "List report files",
      code: `from pathlib import Path

for path in sorted(Path("path-demo").glob("*.txt")):
    print(path.name)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — pathlib",
      url: "https://docs.python.org/3/library/pathlib.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pathlib", "paths", "files-json-exceptions"],
};

export default topic;