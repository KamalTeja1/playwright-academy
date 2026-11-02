import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "built-in-fixtures",
  title: "Useful Built-in Fixtures",
  summary:
    "Use pytest's built-in fixtures for temporary paths, captured output, and test metadata.",
  whyItMatters:
    "Built-in fixtures handle common testing needs without requiring custom setup code or extra dependencies.",
  notes: `pytest includes fixtures for common test tasks. Request one by adding its name as a test parameter.

### Use a temporary directory with tmp_path

~~~python
def test_write_file(tmp_path):
    path = tmp_path / "result.txt"
    path.write_text("passed", encoding="utf-8")

    assert path.read_text(encoding="utf-8") == "passed"
~~~

tmp_path is a unique pathlib.Path directory for the test. pytest manages its temporary location.

### Capture printed output with capsys

~~~python
def greet():
    print("Hello, Asha")

def test_greet_prints_message(capsys):
    greet()
    captured = capsys.readouterr()

    assert captured.out == "Hello, Asha\\n"
    assert captured.err == ""
~~~

capsys captures text written to standard output and standard error.

### Access test information with request

~~~python
def test_current_test_name(request):
    assert request.node.name.startswith("test_")
~~~

The request fixture provides information about the running test and its fixture context.

### Request more built-in fixtures

pytest also provides fixtures for temporary paths such as tmp_path_factory, captured file-descriptor output through capfd, and monkeypatching through monkeypatch. Learn each fixture when you need its particular behaviour.

### The takeaway

Built-in fixtures are already available. Request them by name, and choose one that matches the test's need.`,
  handsOn: `Use temporary files and capture printed output.

### Step 1: Create tests/test_builtin_fixtures.py

~~~python
def test_temporary_file_round_trip(tmp_path):
    path = tmp_path / "note.txt"
    path.write_text("practice", encoding="utf-8")

    assert path.read_text(encoding="utf-8") == "practice"

def show_message():
    print("Ready")

def test_printed_message(capsys):
    show_message()
    captured = capsys.readouterr()

    assert captured.out == "Ready\\n"
    assert captured.err == ""
~~~

### Step 2: Run pytest

~~~bash
python -m pytest
~~~

### Deliverable

Keep the tests. Explain what tmp_path provides and how capsys captures output.`,
  challenge: `Write tests that use two built-in fixtures.

1. Use tmp_path to write and read a temporary JSON text file
2. Use capsys to capture a function's printed message
3. Assert the exact expected file text and captured output
4. Run the tests with pytest
5. Confirm no temporary files need to be committed to the project

Then describe one other built-in fixture you would like to explore.`,
  proTips: [
    "Use tmp_path for per-test temporary filesystem work.",
    "Use capsys to inspect text written to stdout and stderr.",
    "Request built-in fixtures as test parameters.",
    "Use the fixture that matches the output or resource you need to test.",
  ],
  commonMistakes: [
    {
      mistake: "Trying to import tmp_path or capsys",
      fix: "Request the built-in fixture by adding its name to the test parameters.",
    },
    {
      mistake: "Writing temporary test data into the repository unnecessarily",
      fix: "Use tmp_path for files that only need to exist during a test.",
    },
    {
      mistake: "Checking output before calling the function that prints",
      fix: "Call the function, then read the captured output.",
    },
    {
      mistake: "Checking only stdout when the function writes to stderr",
      fix: "Inspect both captured.out and captured.err when relevant.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Write through tmp_path",
      code: `def test_temp_file(tmp_path):
    path = tmp_path / "data.txt"
    path.write_text("hello", encoding="utf-8")
    assert path.read_text(encoding="utf-8") == "hello"`,
    },
    {
      language: "python",
      title: "Capture printed output",
      code: `def test_printed_output(capsys):
    print("Ready")
    captured = capsys.readouterr()
    assert captured.out == "Ready\\n"
    assert captured.err == ""`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Built-in Fixtures",
      url: "https://docs.pytest.org/en/stable/reference/fixtures.html#built-in-fixtures",
    },
    {
      title: "pytest Documentation — Temporary Directory and Files",
      url: "https://docs.pytest.org/en/stable/how-to/tmp_path.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["python", "pytest", "fixtures", "tmp-path", "capsys"],
};

export default topic;
