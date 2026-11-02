import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "logging-in-pytest",
  title: "Logging in pytest",
  summary:
    "Use Python logging and pytest's caplog fixture to check log messages.",
  whyItMatters:
    "Logs help explain what an application did. Tests can check important log behaviour without relying on printed output.",
  notes: `Python's logging module records messages at different levels. pytest captures log messages during tests.

### Write a log message

~~~python
import logging

def load_user(user_id):
    logging.getLogger(__name__).info("Loading user %s", user_id)
    return {"id": user_id, "name": "Asha"}
~~~

Use the logging module rather than print for application diagnostics. Logging levels include DEBUG, INFO, WARNING, ERROR, and CRITICAL.

### Check logs with caplog

~~~python
import logging

def announce_ready():
    logging.getLogger(__name__).warning("Service is ready")

def test_ready_message_is_logged(caplog):
    with caplog.at_level(logging.WARNING):
        announce_ready()

    assert "Service is ready" in caplog.text
~~~

caplog is a pytest fixture. It captures log records so a test can inspect their messages and levels.

### Check a log level

~~~python
import logging

def test_log_level(caplog):
    with caplog.at_level(logging.WARNING):
        logging.getLogger("sample").warning("Check the configuration")

    assert any(
        record.levelno == logging.WARNING
        for record in caplog.records
    )
~~~

Set the capture level when a test needs messages below pytest's default level.

### Check logs only when they are part of the behaviour

Most tests should check returned values or visible outcomes. Check logs when the application contract requires a message or level, not simply because a log exists.

### The takeaway

Use caplog to inspect captured records and messages. Prefer meaningful assertions about the log behaviour your application promises.`,
  handsOn: `Check a warning message with caplog.

### Step 1: Create tests/test_logging.py

~~~python
import logging

def report_missing_value():
    logging.getLogger(__name__).warning("Value is missing")

def test_missing_value_is_logged(caplog):
    with caplog.at_level(logging.WARNING):
        report_missing_value()

    assert "Value is missing" in caplog.text
    assert any(
        record.levelno == logging.WARNING
        for record in caplog.records
    )
~~~

### Step 2: Run pytest

~~~bash
python -m pytest
~~~

### Deliverable

Keep the test. Explain what caplog.text and caplog.records provide.`,
  challenge: `Test a function that logs an error when a fictional record is missing.

1. Use logging.getLogger to write the message
2. Capture logs with caplog
3. Set the capture level to ERROR
4. Assert the message appears
5. Assert a captured record has the expected level

Then explain why an application should use logging rather than print for diagnostics.`,
  proTips: [
    "Use logging levels that match the importance of the message.",
    "Use caplog to inspect messages and LogRecord values.",
    "Set caplog.at_level when the test needs a particular level.",
    "Assert logs only when they are part of the behaviour under test.",
  ],
  commonMistakes: [
    {
      mistake: "Checking logs without generating a log record",
      fix: "Call the code that logs while caplog is capturing.",
    },
    {
      mistake: "Expecting debug messages without lowering the capture level",
      fix: "Set caplog.at_level(logging.DEBUG) for the test.",
    },
    {
      mistake: "Using print when the application needs structured diagnostics",
      fix: "Use Python's logging module for application log messages.",
    },
    {
      mistake: "Asserting every incidental log message",
      fix: "Check only messages and levels that are part of the intended behaviour.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Capture a warning message",
      code: `import logging

def test_warning_is_captured(caplog):
    with caplog.at_level(logging.WARNING):
        logging.getLogger("sample").warning("Check the configuration")

    assert "Check the configuration" in caplog.text`,
    },
    {
      language: "python",
      title: "Inspect captured record levels",
      code: `import logging

def test_record_level(caplog):
    with caplog.at_level(logging.ERROR):
        logging.getLogger("sample").error("Request failed")

    assert any(
        record.levelno == logging.ERROR
        for record in caplog.records
    )`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — caplog",
      url: "https://docs.pytest.org/en/stable/how-to/logging.html",
    },
    {
      title: "Python Docs — logging",
      url: "https://docs.python.org/3/library/logging.html",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "logging", "caplog"],
};

export default topic;
