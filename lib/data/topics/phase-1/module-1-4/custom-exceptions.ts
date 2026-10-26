import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "custom-exceptions",
  title: "Raising and Customising Exceptions",
  summary:
    "Reject invalid values with raise, define a domain-specific error and preserve underlying causes.",
  whyItMatters:
    "A clear setup error is more useful than a mysterious failure several steps later. Custom errors identify problems in your own domain.",
  notes: `Handling an error and creating an error are different jobs. Use raise when an operation cannot satisfy its contract.

### Start with a built-in exception

~~~python
def validate_timeout(seconds):
    if type(seconds) is not int:
        raise TypeError("timeout must be an integer")
    if seconds <= 0:
        raise ValueError("timeout must be positive")
    return seconds

print(validate_timeout(30))
~~~

TypeError describes an inappropriate type. ValueError describes an inappropriate value of an accepted type.

### Define a named domain error

~~~python
class ConfigurationError(Exception):
    """Report invalid application configuration."""
    pass
~~~

This class syntax creates a new kind of exception. You will study classes more fully in the OOP module.

### Raise and catch it

~~~python
class ConfigurationError(Exception):
    """Report invalid application configuration."""
    pass

def require_environment(config):
    environment = config.get("environment")
    if environment not in ("staging", "production"):
        raise ConfigurationError("Choose staging or production")
    return environment

try:
    require_environment({"environment": "unknown"})
except ConfigurationError as error:
    print("Configuration failed:", error)
~~~

### Preserve an underlying cause

When translating an error, connect the new exception to the original.

~~~python
class ConfigurationError(Exception):
    pass

def parse_timeout(text):
    try:
        return int(text)
    except ValueError as error:
        raise ConfigurationError("timeout must contain integer text") from error
~~~

### Write useful messages

Say which setting failed and what is expected. Do not include passwords, tokens or full secret-bearing configuration.

### Avoid unnecessary custom types

Use built-in errors when they communicate the problem well. Create a custom type when callers benefit from identifying a domain-specific failure.

### The takeaway

Raise errors early, choose meaningful types and keep useful diagnostic causes.`,
  handsOn: `Create a small configuration validator.

### Step 1: Create the script

~~~bash
cd /workspaces/playwright-academy
mkdir -p python-practice/filelab
cd python-practice/filelab
touch custom_errors_lab.py
code custom_errors_lab.py
~~~

### Step 2: Paste

~~~python
class ConfigurationError(Exception):
    """Report invalid test settings."""
    pass

def parse_timeout(text):
    try:
        timeout = int(text)
    except ValueError as error:
        raise ConfigurationError("timeout must contain integer text") from error

    if timeout <= 0:
        raise ConfigurationError("timeout must be positive")
    return timeout

for text in ["30", "bad", "0"]:
    try:
        timeout = parse_timeout(text)
    except ConfigurationError as error:
        print(f"Rejected {text}: {error}")
        if error.__cause__ is not None:
            print("Cause:", type(error.__cause__).__name__)
    else:
        print("Accepted:", timeout)
~~~

### Step 3: Run

~~~bash
python3 custom_errors_lab.py
~~~

### Step 4: Inspect a traceback

In a separate script, call parse_timeout("bad") without an outer handler. Inspect both the original conversion error and your custom error.

### Deliverable

Demonstrate a valid setting, an invalid numeric value and an invalid text value with a preserved cause.`,
  challenge: `Create config_validator.py.

1. Define ConfigurationError
2. Validate an environment against staging and production
3. Validate a positive integer retry count
4. Raise useful errors for invalid settings
5. Catch ConfigurationError at the script boundary

Then:

- Translate one conversion error using raise from
- Explain when a built-in error is sufficient
- Explain why messages must not contain secrets
- Show that an uncaught invalid configuration stops normal execution

Keep validation separate from printing the final report.`,
  proTips: [
    "Use built-in exceptions when they fit.",
    "Name custom exception types clearly.",
    "Preserve a cause when translating a failure.",
    "Keep secrets out of diagnostic messages.",
  ],
  commonMistakes: [
    {
      mistake: "Raising a string instead of an exception",
      fix: "Raise an exception instance such as ValueError('Invalid setting').",
    },
    {
      mistake: "Defining application errors directly from BaseException",
      fix: "Derive them from Exception or an appropriate subclass.",
    },
    {
      mistake: "Discarding the underlying conversion error",
      fix: "Use raise CustomError('Context') from error.",
    },
    {
      mistake: "Creating a custom error for every possible problem",
      fix: "Introduce domain types only when callers benefit from distinguishing them.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Reject an invalid value",
      code: `def require_positive(number):
    if number <= 0:
        raise ValueError("number must be positive")
    return number

print(require_positive(3))`,
    },
    {
      language: "python",
      title: "Raise a domain error",
      code: `class ConfigurationError(Exception):
    pass

try:
    raise ConfigurationError("environment is required")
except ConfigurationError as error:
    print(error)`,
    },
    {
      language: "python",
      title: "Preserve the cause",
      code: `class ConfigurationError(Exception):
    pass

try:
    try:
        int("bad")
    except ValueError as error:
        raise ConfigurationError("Invalid timeout text") from error
except ConfigurationError as error:
    print(error)
    print("Cause:", type(error.__cause__).__name__)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — User-defined Exceptions",
      url: "https://docs.python.org/3/tutorial/errors.html#user-defined-exceptions",
    },
    {
      title: "Python Docs — The raise statement",
      url: "https://docs.python.org/3/reference/simple_stmts.html#the-raise-statement",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "raise", "custom-exceptions", "files-json-exceptions"],
};

export default topic;