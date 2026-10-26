import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "file-reading-writing",
  title: "Reading and Writing Files",
  summary:
    "Read text, write reports and append results using open, with and explicit file modes.",
  whyItMatters:
    "Tests read fixtures and save evidence. Correct file handling keeps results reliable and prevents accidental data loss.",
  notes: `A file stores data after your program stops. A variable disappears when the process ends, but a saved report remains.

### Opening a text file

Use open with a path, a mode and an encoding.

~~~python
with open("results.txt", "w", encoding="utf-8") as file:
    file.write("login: PASS\\n")
~~~

The with statement closes the file when the block ends, including when an exception leaves the block.

### Choose the mode carefully

- r reads an existing file
- w creates a file or erases the contents of an existing file
- a creates a file or adds text at the end
- x creates a new file and fails if it already exists

Opening a missing file in read mode raises FileNotFoundError. Opening in write mode does not create missing parent folders.

Practise only with disposable files.

### Reading all the text

~~~python
with open("results.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)
~~~

The text remains available after the file closes.

### Reading line by line

~~~python
with open("results.txt", encoding="utf-8") as file:
    for number, line in enumerate(file, start=1):
        print(number, line.rstrip("\\n"))
~~~

Looping over the file avoids loading the whole document into one string. Removing only the newline preserves other spaces.

### Appending

~~~python
with open("results.txt", "a", encoding="utf-8") as file:
    file.write("cart: PASS\\n")
~~~

write does not add a newline automatically. Include one when you want separate lines.

### Relative paths

A path such as results.txt is relative to the current working directory, not automatically to the script.

For a file beside a saved Python script:

~~~python
from pathlib import Path

folder = Path(__file__).resolve().parent
report = folder / "results.txt"

with report.open(encoding="utf-8") as file:
    print(file.read())
~~~

The __file__ name belongs to saved modules and scripts. It is not normally available in an interactive Python prompt.

### Small-file shortcuts

~~~python
from pathlib import Path

path = Path("sample.txt")
path.write_text("Hello, file!\\n", encoding="utf-8")
print(path.read_text(encoding="utf-8"))
~~~

write_text replaces existing contents, just like write mode.

### Text and binary files

Text mode reads and writes strings. Binary modes such as rb and wb work with bytes and are suitable for images or downloaded files. Do not pass an encoding in binary mode.

### The takeaway

Choose the mode deliberately, use with, specify an encoding for text, and know where your relative paths point.`,
  handsOn: `Create a disposable file lab.

### Step 1: Prepare the folder

~~~bash
cd /workspaces/playwright-academy
mkdir -p python-practice/filelab
cd python-practice/filelab
touch file_lab.py
code file_lab.py
~~~

### Step 2: Write and append

~~~python
from pathlib import Path

folder = Path(__file__).resolve().parent
report = folder / "results.txt"

with report.open("w", encoding="utf-8") as file:
    file.write("login: PASS\\n")
    file.write("search: FAIL\\n")

with report.open("a", encoding="utf-8") as file:
    file.write("cart: PASS\\n")
~~~

### Step 3: Read and count

Add:

~~~python
passed = 0

with report.open(encoding="utf-8") as file:
    for line in file:
        print(line.rstrip("\\n"))
        if line.rstrip("\\n").endswith("PASS"):
            passed += 1

print("Passed:", passed)
~~~

### Step 4: Run

~~~bash
python3 file_lab.py
~~~

Expect three result lines and Passed: 2.

### Step 5: Understand replacement

Run the script again. Explain why the report still has three lines rather than six.

### Deliverable

Keep file_lab.py and its generated report. Explain where the report is saved and which line replaces old results.`,
  challenge: `Create report_lab.py in your disposable filelab folder.

1. Store five test names and their outcomes in a list
2. Write one result per line to a report
3. Read the report and count PASS and FAIL outcomes
4. Write the counts to a separate summary file
5. Append a final line saying the run is complete

Then:

- Use x mode with a fresh filename, then repeat it to observe FileExistsError
- Read a deliberately missing filename to observe FileNotFoundError
- Explain the difference between w and a
- Explain why write needs an explicit newline

Do not experiment with overwrite mode on source files.`,
  proTips: [
    "Use with so files close when the block ends.",
    "Specify encoding='utf-8' for text.",
    "Use disposable files when learning write mode.",
    "Loop over large text files instead of reading everything at once.",
    "Anchor fixture paths to a known folder.",
  ],
  commonMistakes: [
    {
      mistake: "Using w when you intended to keep existing results",
      fix: "Use a to append. Write mode replaces the old contents.",
    },
    {
      mistake: "Expecting write to add a newline",
      fix: "Include a newline character in the text you write.",
    },
    {
      mistake: "Reading from a file after leaving its with block",
      fix: "Read inside the block, then use the stored text outside.",
    },
    {
      mistake: "Assuming relative paths start beside the script",
      fix: "They start at the working directory. Build a script-relative path when needed.",
    },
    {
      mistake: "Writing into a folder that does not exist",
      fix: "Create the parent directory before opening the output file.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Write and read a disposable report",
      code: `from pathlib import Path

path = Path("demo-results.txt")
with path.open("w", encoding="utf-8") as file:
    file.write("login: PASS\\n")

with path.open(encoding="utf-8") as file:
    print(file.read())`,
    },
    {
      language: "python",
      title: "Append a result",
      code: `with open("demo-results.txt", "a", encoding="utf-8") as file:
    file.write("cart: PASS\\n")`,
    },
    {
      language: "python",
      title: "Create a report directory",
      code: `from pathlib import Path

folder = Path("demo-reports")
folder.mkdir(parents=True, exist_ok=True)
(folder / "summary.txt").write_text("Passed: 2\\n", encoding="utf-8")`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Reading and Writing Files",
      url: "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files",
    },
    {
      title: "Python Docs — pathlib",
      url: "https://docs.python.org/3/library/pathlib.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 35,
  tags: ["python", "files", "open", "files-json-exceptions"],
};

export default topic;