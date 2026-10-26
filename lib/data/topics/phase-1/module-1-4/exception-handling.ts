import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "exception-handling",
  title: "Handling Exceptions",
  summary:
    "Use try, except, else and finally to handle expected failures without hiding bugs.",
  whyItMatters:
    "Missing fixtures and invalid data need clear outcomes. Catching everything can make broken tests look successful.",
  notes: `An exception interrupts normal execution. Handle it when your code has a meaningful recovery action.

### Catch a specific failure

~~~python
text = "forty"

try:
    number = int(text)
except ValueError as error:
    print("Invalid number:", error)
else:
    print("Converted:", number)
~~~

If conversion raises ValueError, its handler runs. Otherwise, the else block runs.

### Keep try small

Put the operation you expect might fail inside try. Keep unrelated work outside it so you do not accidentally handle a bug as an expected input problem.

### Handle different failures separately

~~~python
from pathlib import Path

try:
    text = Path("missing-demo-file.txt").read_text(encoding="utf-8")
except FileNotFoundError:
    print("Input file is missing")
except PermissionError:
    print("Input file cannot be accessed")
else:
    print(text)
~~~

Each handler should explain a useful next step.

### Cleanup with finally

~~~python
try:
    print(int("bad"))
except ValueError:
    print("Conversion failed")
finally:
    print("Attempt finished")
~~~

finally is for cleanup, not for announcing success. Avoid return statements there because they can replace a result or suppress a pending error.

For file closing, prefer with rather than writing manual cleanup.

### Re-raise when recovery is impossible

Inside an exception handler, a bare raise passes the active exception onward.

~~~python
try:
    int("bad")
except ValueError:
    print("Cannot continue")
    raise
~~~

This demonstration ends with a traceback intentionally.

### Do not hide test failures

An empty handler such as except Exception: pass can conceal broken setup or failed checks. Catch only failures you can genuinely handle.

### The takeaway

Catch specific exceptions, keep try focused and preserve failures that should stop the operation.`,
  handsOn: `Practise success and failure paths.

### Step 1: Create the script

~~~bash
cd /workspaces/playwright-academy
mkdir -p python-practice/filelab
cd python-practice/filelab
touch exceptions_lab.py
code exceptions_lab.py
~~~

### Step 2: Process several inputs

~~~python
values = ["12", "bad", "0"]

for text in values:
    try:
        number = int(text)
    except ValueError:
        print(f"Rejected: {text}")
    else:
        print(f"Accepted: {number}")
    finally:
        print("Input processed")
~~~

### Step 3: Run

~~~bash
python3 exceptions_lab.py
~~~

Predict the output before running.

### Step 4: Missing file

Add a separate try block that reads a deliberately missing fixture and catches FileNotFoundError.

### Step 5: Preserve a failure

In a separate script, catch ValueError, print context and use bare raise. Inspect the traceback.

### Deliverable

Show one successful conversion, one rejected input and one deliberately re-raised error.`,
  challenge: `Create exception_report.py.

1. Process a list containing valid and invalid integer strings
2. Keep accepted values in one list
3. Keep rejected text in another
4. Report both lists and the accepted total
5. Handle a missing input file with a specific error message

Then explain:

- Why keep try blocks small?
- How do else and finally differ?
- Why is silently catching every exception dangerous in tests?
- When should you re-raise instead of returning a fallback?

Do not replace a failed operation with a fake passing result.`,
  proTips: [
    "Catch the narrowest expected exception.",
    "Keep normal success work outside the try block.",
    "Use with for file cleanup.",
    "Re-raise when your code cannot recover meaningfully.",
  ],
  commonMistakes: [
    {
      mistake: "Catching Exception and doing nothing",
      fix: "Handle a specific failure or allow it to propagate.",
    },
    {
      mistake: "Using a variable that was never assigned because conversion failed",
      fix: "Use the converted value in else or return from the failure branch.",
    },
    {
      mistake: "Treating finally as a success block",
      fix: "Use else for successful completion and finally for cleanup.",
    },
    {
      mistake: "Returning from finally",
      fix: "Return from normal branches so pending failures are not suppressed.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Handle invalid input",
      code: `try:
    number = int("bad")
except ValueError as error:
    print("Invalid input:", error)
else:
    print(number)`,
    },
    {
      language: "python",
      title: "Handle a missing fixture",
      code: `from pathlib import Path

try:
    text = Path("missing-demo-fixture.txt").read_text(encoding="utf-8")
except FileNotFoundError:
    print("Provide the required fixture")
else:
    print(text)`,
    },
    {
      language: "python",
      title: "Report completion independently of success",
      code: `try:
    print(int("42"))
except ValueError:
    print("Invalid integer")
finally:
    print("Attempt finished")`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Errors and Exceptions",
      url: "https://docs.python.org/3/tutorial/errors.html",
    },
    {
      title: "Python Docs — The try statement",
      url: "https://docs.python.org/3/reference/compound_stmts.html#the-try-statement",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 35,
  tags: ["python", "exceptions", "try-except", "files-json-exceptions"],
};

export default topic;