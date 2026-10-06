import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "init-file",
  title: "The __init__.py File",
  summary:
    "The special file that marks a folder as a package, and lets you shape what users of the package can import.",
  whyItMatters:
    "Missing or misused __init__.py files cause many import errors in test projects, and it is also where you make imports short and tidy.",
  notes: `The __init__.py file is **the file Python runs when a package is imported**. Its presence tells Python that a folder is a package.

Think of the reception desk of an office building. Visitors reach the desk first. The desk decides what they see and where they are directed.

### Marking a package

~~~text
project/
    main.py
    utils/
        __init__.py
        strings.py
        numbers.py
~~~

The file can be completely empty. Its existence is enough.

### Do I always need it?

Modern Python (3.3 and later) can import folders without __init__.py. These are called namespace packages. Even so, add the file for your own packages. It is clearer, tools such as pytest behave more predictably, and you can put code in it.

### What runs on import

~~~python
# utils/__init__.py
print("utils package loaded")
~~~

~~~python
# main.py
import utils
~~~

Running main.py prints the message once. Keep this code minimal. Printing on import is only for demonstration.

### Shortening imports

Without help, users import from the inner module.

~~~python
from utils.strings import clean_text
~~~

Inside __init__.py you can lift names up.

~~~python
# utils/__init__.py
from .strings import clean_text
from .numbers import average
~~~

Now users write:

~~~python
from utils import clean_text, average
~~~

The leading dot means from this package. It is a relative import.

### Relative and absolute imports

- Absolute: from utils.strings import clean_text, the full path from the project root
- Relative: from .strings import clean_text, relative to the current package
- Two dots, as in from ..other import x, mean the parent package

Relative imports work only inside a package, not in a script run directly.

### The __all__ list

It controls what from package import * brings in.

~~~python
# utils/__init__.py
from .strings import clean_text
from .numbers import average

__all__ = ["clean_text", "average"]
~~~

It also documents the public names of the package.

### Package version and constants

~~~python
# utils/__init__.py
__version__ = "1.0.0"
~~~

### Nested packages

~~~text
framework/
    __init__.py
    pages/
        __init__.py
        login_page.py
    data/
        __init__.py
        users.py
~~~

Each folder with code gets its own __init__.py.

### Common errors

- ModuleNotFoundError because the folder is not on the path or is misspelled
- ImportError from a relative import in a file run directly
- Circular imports when __init__.py imports a module that imports the package back
- Putting heavy code in __init__.py, which slows every import

### Why this matters for testing

Pytest projects usually have a tests folder and a package folder. A missing __init__.py can lead to two test files with the same name clashing, or to imports that work on one machine and fail on another.

### The takeaway

Put an __init__.py in each package folder. Keep it small, use it to expose a clean public API, and prefer relative imports within a package.`,
  handsOn: `Let's build a small package.

### Step 1: Create the layout

~~~bash
cd /workspaces/playwright-academy/python-practice
mkdir -p pkglab/toolkit
cd pkglab
touch main.py toolkit/__init__.py toolkit/texts.py toolkit/maths.py
code main.py toolkit/__init__.py toolkit/texts.py toolkit/maths.py
~~~

### Step 2: toolkit/texts.py

~~~python
def clean(text):
    return text.strip().lower()
~~~

### Step 3: toolkit/maths.py

~~~python
def average(numbers):
    return sum(numbers) / len(numbers)
~~~

### Step 4: Long imports first

main.py:

~~~python
from toolkit.texts import clean
from toolkit.maths import average

print(clean("  HELLO  "))
print(average([2, 4, 6]))
~~~

Run it with python3 main.py.

### Step 5: Shorten with __init__.py

toolkit/__init__.py:

~~~python
from .texts import clean
from .maths import average

__all__ = ["clean", "average"]
~~~

Change main.py to from toolkit import clean, average and run again.

### Step 6: Remove the file

Delete toolkit/__init__.py and run again. Note what happens, then restore it.

### Deliverable

You built a package, used long and short imports and saw the effect of removing __init__.py.`,
  challenge: `Create a package called framework with the layout below.

1. framework/__init__.py exposing three helper functions
2. framework/pages/__init__.py and login_page.py with a function that returns a login URL
3. framework/data/__init__.py and users.py with a dictionary of test users
4. A run.py at the top that imports using the short form
5. Add __version__ and __all__ to the main __init__.py

Then answer:

- Is __init__.py always required? Why add it anyway?
- What does the single dot in a relative import mean?
- Why avoid heavy code in __init__.py?

Finish with a diagram, in text, of your package layout.`,
  proTips: [
    "Add an __init__.py to every package folder, even if empty.",
    "Keep __init__.py light. Do not run heavy work on import.",
    "Use it to expose a short public import path.",
    "Use relative imports inside a package, absolute ones outside it.",
    "Define __all__ to document the public names.",
  ],
  commonMistakes: [
    {
      mistake: "Forgetting the __init__.py file in a package folder",
      fix: "Add an empty file. It avoids many path and test discovery surprises.",
    },
    {
      mistake: "Using a relative import in a script you run directly",
      fix: "Run it as a module from the project root, or use an absolute import.",
    },
    {
      mistake: "Putting slow code in __init__.py",
      fix: "Move it into a function that is called when needed.",
    },
    {
      mistake: "Importing the package from inside its own __init__.py in a circle",
      fix: "Move shared code into a separate module.",
    },
    {
      mistake: "Misspelling the file as _init_.py or init.py",
      fix: "It needs two underscores on each side: __init__.py.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Lift names into the package",
      code: `# toolkit/__init__.py
from .texts import clean
from .maths import average

__all__ = ["clean", "average"]`,
    },
    {
      language: "python",
      title: "Short import for users",
      code: `# main.py
from toolkit import clean, average

print(clean("  HELLO  "))
print(average([2, 4, 6]))`,
    },
    {
      language: "text",
      title: "Nested package layout",
      code: `framework/
    __init__.py
    pages/
        __init__.py
        login_page.py
    data/
        __init__.py
        users.py`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Packages",
      url: "https://docs.python.org/3/tutorial/modules.html#packages",
    },
    {
      title: "Python Docs — Regular packages and namespace packages",
      url: "https://docs.python.org/3/reference/import.html#regular-packages",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "packages", "init", "imports", "functions-modules"],
};

export default topic;