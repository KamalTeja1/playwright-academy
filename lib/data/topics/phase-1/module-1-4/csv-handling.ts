import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "csv-handling",
  title: "Working with CSV Files",
  summary:
    "Read and write tabular test data with csv, DictReader and DictWriter.",
  whyItMatters:
    "CSV is useful for test cases and exported reports. The csv module handles quoted fields that simple string splitting gets wrong.",
  notes: `CSV stores rows of fields as text. A header row can name each column.

### A small dataset

~~~csv
name,role,expected_status
Priya,admin,200
Arjun,guest,403
~~~

Think of each row as one test case.

### Read by column name

~~~python
import csv

with open("users.csv", newline="", encoding="utf-8") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row["name"], row["role"])
~~~

DictReader uses the first row as column names unless you supply names yourself.

### Convert values deliberately

With the normal reader settings, fields are strings.

~~~python
status = int(row["expected_status"])
~~~

Do this while processing the row. A blank or invalid value can fail conversion, so decide how your application should handle bad records.

### Write dictionaries

~~~python
import csv

rows = [
    {"name": "Priya", "role": "admin", "expected_status": 200},
    {"name": "Arjun", "role": "guest", "expected_status": 403},
]

with open("users.csv", "w", newline="", encoding="utf-8") as file:
    writer = csv.DictWriter(
        file,
        fieldnames=["name", "role", "expected_status"],
    )
    writer.writeheader()
    writer.writerows(rows)
~~~

fieldnames controls column order. writeheader writes the column names.

### Why not split on commas?

A field may itself contain a comma.

~~~csv
name,city
Priya,"Pune, Maharashtra"
~~~

Splitting that line on every comma creates too many fields. The CSV parser understands quoting.

### Other delimiters

Some exports use semicolons. Pass delimiter=";" to the reader and writer for that format.

### Keep reading inside with

The reader consumes the file as you iterate. If you need rows after the file closes, collect them inside the block.

~~~python
with open("users.csv", newline="", encoding="utf-8") as file:
    rows = list(csv.DictReader(file))

print(len(rows))
~~~

For large files, process one row at a time instead.

### The takeaway

Use the csv module, open with newline="", convert numeric fields, and let the writer handle quoting.`,
  handsOn: `Build a CSV round trip.

### Step 1: Create the script

~~~bash
cd /workspaces/playwright-academy/python-practice/filelab
touch csv_lab.py
code csv_lab.py
~~~

### Step 2: Write test data

~~~python
import csv
from pathlib import Path

path = Path(__file__).resolve().parent / "cases.csv"
cases = [
    {"name": "login", "expected_status": 200},
    {"name": "guest-admin", "expected_status": 403},
    {"name": "search, with filters", "expected_status": 200},
]

with path.open("w", newline="", encoding="utf-8") as file:
    writer = csv.DictWriter(
        file,
        fieldnames=["name", "expected_status"],
    )
    writer.writeheader()
    writer.writerows(cases)
~~~

### Step 3: Read it back

Add:

~~~python
with path.open(newline="", encoding="utf-8") as file:
    for row in csv.DictReader(file):
        status = int(row["expected_status"])
        print(row["name"], status, type(status).__name__)
~~~

### Step 4: Run and inspect

~~~bash
python3 csv_lab.py
~~~

Open cases.csv and inspect the quoted field containing a comma.

### Deliverable

Keep the script and CSV. Confirm the third case remains one record with two columns.`,
  challenge: `Create csv_report.py.

1. Write five records with test_name, outcome and duration_ms columns
2. Include a test name containing a comma
3. Read the records with DictReader
4. Convert duration_ms to int
5. Calculate total duration and count failed tests
6. Write only failed records to a second CSV with a header

Then explain:

- Why use newline=""?
- Why is splitting on commas unsafe?
- Why does a numeric-looking field need conversion?
- What happens if a required column name is misspelled?

Use fictional data only.`,
  proTips: [
    "Use DictReader when headers describe the fields.",
    "Open CSV files with newline=''.",
    "Convert numeric fields before calculations.",
    "Let DictWriter handle commas and quotes.",
    "Read rows while the input file is still open.",
  ],
  commonMistakes: [
    {
      mistake: "Parsing CSV with split(',')",
      fix: "Use csv.reader or DictReader so quoted commas are handled.",
    },
    {
      mistake: "Adding numeric-looking strings",
      fix: "Convert the fields to int or float first.",
    },
    {
      mistake: "Forgetting the output header",
      fix: "Call writeheader before writing dictionary rows.",
    },
    {
      mistake: "Iterating the reader after the file closes",
      fix: "Process or collect its rows inside the with block.",
    },
    {
      mistake: "Assuming headers match your expected spelling",
      fix: "Inspect reader.fieldnames and validate required columns.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Parse quoted CSV without a disk file",
      code: `import csv
from io import StringIO

text = 'name,city\\nPriya,"Pune, Maharashtra"\\n'
for row in csv.DictReader(StringIO(text)):
    print(row["name"], row["city"])`,
    },
    {
      language: "python",
      title: "Write a result row",
      code: `import csv

with open("demo-report.csv", "w", newline="", encoding="utf-8") as file:
    writer = csv.DictWriter(file, fieldnames=["test", "outcome"])
    writer.writeheader()
    writer.writerow({"test": "login", "outcome": "PASS"})`,
    },
    {
      language: "python",
      title: "Validate required columns",
      code: `import csv
from io import StringIO

reader = csv.DictReader(StringIO("name,status\\nlogin,200\\n"))
required = {"name", "status"}

if not required.issubset(set(reader.fieldnames or [])):
    raise ValueError("Required CSV columns are missing")

for row in reader:
    print(row["name"], int(row["status"]))`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — csv",
      url: "https://docs.python.org/3/library/csv.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["python", "csv", "test-data", "files-json-exceptions"],
};

export default topic;