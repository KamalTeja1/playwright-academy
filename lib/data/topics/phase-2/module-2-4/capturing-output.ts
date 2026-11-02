import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "capturing-output",
  title: "Capturing Test Output",
  summary:
    "Use pytest's capsys and capfd fixtures to capture output written by code.",
  whyItMatters:
    "When a function's expected behaviour is printed output, capturing it lets tests check the message without cluttering the terminal.",
  notes: `pytest captures output during test runs. Its capsys and capfd fixtures let a test inspect captured output.

### Capture print output

~~~python
def greet():
    print("Hello, Asha")

def test_greeting_is_printed(capsys):
    greet()
    captured = capsys.readouterr()

    assert captured.out == "Hello, Asha\\n"
    assert captured.err == ""
~~~

capsys captures text written to Python's standard output and standard error. The newline from print is part of captured.out.

### Capture standard error

~~~python
import sys

def report_problem():
    print("Something needs attention", file=sys.stderr)

def test_problem_is_reported(capsys):
    report_problem()
    captured = capsys.readouterr()

    assert captured.err == "Something needs attention\\n"
~~~

### Use capfd for file-descriptor output

Most Python code can be tested with capsys. Use capfd when code writes directly to the operating system's file descriptors, such as output from some native libraries or subprocesses.

### Read output in parts

Calling capsys.readouterr() returns the output collected so far and resets the captured buffers. This is useful when a test needs to check output at different stages.

### Do not test incidental output

Capture output when printing is part of the function's expected behaviour. For application diagnostics, logging and caplog are usually more suitable.

### The takeaway

Use capsys for Python-level stdout and stderr. Use capfd when output bypasses Python's stream objects, and compare the captured text with the expected output.`,
  handsOn: `Check standard output and standard error.

### Step 1: Create tests/test_output.py

~~~python
import sys

def print_status():
    print("Ready")
    print("Check details", file=sys.stderr)

def test_status_output(capsys):
    print_status()
    captured = capsys.readouterr()

    assert captured.out == "Ready\\n"
    assert captured.err == "Check details\\n"
~~~

### Step 2: Run pytest

~~~bash
python -m pytest
~~~

### Deliverable

Keep the test. Explain which captured value contains stdout and which contains stderr.`,
  challenge: `Test a small command-line helper that prints a result.

1. Capture its output using capsys
2. Check the complete output, including its newline
3. Add a message written to stderr and assert that separately
4. Run pytest
5. Explain when capfd might be needed instead of capsys

Avoid testing incidental debug output that is not part of the helper's expected behaviour.`,
  proTips: [
    "Use capsys for Python writes to stdout and stderr.",
    "Remember that print adds a newline by default.",
    "Use capsys.readouterr() to inspect output collected so far.",
    "Use capfd for output written directly to file descriptors.",
  ],
  commonMistakes: [
    {
      mistake: "Comparing captured output without accounting for print's newline",
      fix: "Include the trailing newline in the expected string.",
    },
    {
      mistake: "Checking stdout when the function writes to stderr",
      fix: "Inspect captured.err for standard error output.",
    },
    {
      mistake: "Using capsys for output that bypasses Python stream objects",
      fix: "Use capfd when code writes directly to file descriptors.",
    },
    {
      mistake: "Testing incidental debug output instead of the function's contract",
      fix: "Assert only output that is part of the expected behaviour.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Capture printed text",
      code: `def test_printed_text(capsys):
    print("Ready")
    captured = capsys.readouterr()

    assert captured.out == "Ready\\n"
    assert captured.err == ""`,
    },
    {
      language: "python",
      title: "Capture stderr",
      code: `import sys

def test_stderr_text(capsys):
    print("Problem", file=sys.stderr)
    captured = capsys.readouterr()

    assert captured.err == "Problem\\n"`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Capturing of the stdout/stderr Output",
      url: "https://docs.pytest.org/en/stable/how-to/capture-stdout-stderr.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "output", "capsys"],
};

export default topic;
