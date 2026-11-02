import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "custom-markers",
  title: "Custom Markers",
  summary:
    "Label tests with custom markers and register them in pytest configuration.",
  whyItMatters:
    "Markers help organise tests by purpose, such as slow tests or tests that need a particular environment.",
  notes: `A marker adds information to a test. pytest includes built-in markers, and projects can define their own.

### Add a custom marker

~~~python
import pytest

@pytest.mark.slow
def test_large_sample():
    values = list(range(1000))
    assert len(values) == 1000

def test_small_sample():
    assert 2 + 3 == 5
~~~

### Register the marker

Create pytest.ini in the project root:

~~~text
[pytest]
markers =
    slow: tests that take longer to run
~~~

Registration documents the marker and prevents pytest from warning that it is unknown.

### Select tests by marker

Run only tests marked slow:

~~~bash
python -m pytest -m slow
~~~

Run tests that are not marked slow:

~~~bash
python -m pytest -m "not slow"
~~~

Marker expressions can combine conditions. Keep them readable so the selection is clear.

### Use markers consistently

A marker is a label, not a guarantee. A slow marker does not make a test slower or faster. Agree on what each project marker means, register it, and apply it consistently.

### The takeaway

Use markers to classify tests and select useful groups. Register custom markers in project configuration so their meaning is clear and pytest can validate them.`,
  handsOn: `Mark and select a slow test.

### Step 1: Create pytest.ini

~~~text
[pytest]
markers =
    slow: tests that take longer to run
~~~

### Step 2: Create tests/test_markers.py

~~~python
import pytest

@pytest.mark.slow
def test_large_sample():
    values = list(range(1000))
    assert len(values) == 1000

def test_small_sample():
    assert 2 + 3 == 5
~~~

### Step 3: Run only the marked test

~~~bash
python -m pytest -m slow
~~~

### Step 4: Run tests without that marker

~~~bash
python -m pytest -m "not slow"
~~~

### Deliverable

Keep the configuration and test file. Explain what the marker labels and what the selection expression does.`,
  challenge: `Create and register a custom integration marker.

1. Add an integration marker description to pytest.ini
2. Mark one test with pytest.mark.integration
3. Add a regular test without that marker
4. Run only the integration test with -m
5. Run tests that are not integration tests

Then explain why registering a marker is useful even though pytest can still collect an unregistered marker.`,
  proTips: [
    "Register custom markers in pytest.ini.",
    "Write a short description of what each marker means.",
    "Use -m to run or exclude a group of marked tests.",
    "Use marker names consistently across the project.",
  ],
  commonMistakes: [
    {
      mistake: "Using a custom marker without registering it",
      fix: "Add its name and description under markers in pytest.ini.",
    },
    {
      mistake: "Expecting a marker to change how a test behaves by itself",
      fix: "A marker labels a test; use selection or plugin behaviour to act on it.",
    },
    {
      mistake: "Using unclear marker names",
      fix: "Choose names that describe a useful test category.",
    },
    {
      mistake: "Writing an incorrect marker selection expression",
      fix: "Quote expressions such as not slow so the shell passes them together.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Mark a test",
      code: `import pytest

@pytest.mark.slow
def test_large_sample():
    values = list(range(1000))
    assert len(values) == 1000`,
    },
    {
      language: "text",
      title: "Register the marker",
      code: `[pytest]
markers =
    slow: tests that take longer to run`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Marking Test Functions",
      url: "https://docs.pytest.org/en/stable/how-to/mark.html",
    },
    {
      title: "pytest Documentation — Configuration",
      url: "https://docs.pytest.org/en/stable/reference/customize.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "markers", "testing"],
};

export default topic;
