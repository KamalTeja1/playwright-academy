import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "modules-packages",
  title: "Modules and Packages",
  summary:
    "Split code into files and folders, and bring it back with import. The basis of every project layout.",
  whyItMatters:
    "A test framework is dozens of files that import each other. Understanding imports prevents the most common project errors.",
  notes: `A module is **a Python file that other files can use**. A package is **a folder of modules**.

Think of a toolbox. Each drawer holds one kind of tool. A module is a drawer, and the package is the whole box.

### Your first module

Create a file named helpers.py:

~~~python
def build_email(run_id):
    return f"user_{run_id}@example.com"

BASE_URL = "https://example.com"
~~~

In another file in the same folder, called main.py:

~~~python
import helpers

print(helpers.build_email(5))
print(helpers.BASE_URL)
~~~

The dot reaches inside the module.

### Ways to import

~~~python
import helpers
from helpers import build_email
from helpers import build_email, BASE_URL
import helpers as h
~~~

- import module keeps the module name, so calls read helpers.build_email
- from import brings a name in directly
- as gives a shorter alias

Avoid from helpers import *. It hides where names come from and can overwrite your own.

### Standard library modules

Python ships with many ready modules.

~~~python
import math
import random
from datetime import date

print(math.sqrt(16))
print(random.randint(1, 6))
print(date.today())
~~~

### Packages

A folder becomes a package when it holds modules. Example layout:

~~~text
project/
    main.py
    utils/
        __init__.py
        strings.py
        numbers.py
~~~

Then you import like this:

~~~python
from utils import strings
from utils.numbers import add
import utils.strings as s
~~~

The next topic covers the __init__.py file.

### Where Python looks

Python searches the current folder, then installed packages, in the list sys.path.

~~~python
import sys
print(sys.path)
~~~

If an import fails with ModuleNotFoundError, the file is not on that path.

### Common import errors

- ModuleNotFoundError: No module named 'x' means a typo, a missing install or the wrong folder
- ImportError: cannot import name 'x' means the module exists but has no such name
- Running a script from a different folder than you expect

### Do not shadow standard names

Never name your file random.py, math.py or test.py. Python may import your file instead of the real module, causing strange errors.

### The main guard

Code at the top level of a module runs on import. To run code only when the file is executed directly, use this guard.

~~~python
def main():
    print("Running directly")

if __name__ == "__main__":
    main()
~~~

When another file imports this one, main does not run. This is important for helpers that also have a demo.

### Circular imports

If a.py imports b.py and b.py imports a.py, Python can fail. Fix it by moving shared code into a third module.

### Installing outside packages

Packages from the internet are installed with pip, inside a virtual environment.

~~~bash
pip install requests
~~~

Then import them like any module.

### Why this matters for testing

You will keep page helpers, test data and settings in separate modules, and import them into your test files. A clean structure makes this smooth.

### The takeaway

A file is a module and a folder is a package. Use import with clear names, avoid star imports, avoid clashing with standard names, and use the main guard for runnable files.`,
  handsOn: `Let's build a tiny two-file project.

### Step 1: Make the folder

~~~bash
cd /workspaces/playwright-academy/python-practice
mkdir -p modlab
cd modlab
touch helpers.py main.py
code helpers.py main.py
~~~

### Step 2: helpers.py

~~~python
BASE_URL = "https://shop.example.com"

def build_url(path):
    return f"{BASE_URL}/{path}"

def main():
    print("helpers run directly")

if __name__ == "__main__":
    main()
~~~

### Step 3: main.py

~~~python
import helpers
from helpers import build_url
import helpers as h

print(helpers.BASE_URL)
print(build_url("cart"))
print(h.build_url("login"))
~~~

### Step 4: Run both

~~~bash
python3 main.py
python3 helpers.py
~~~

Notice that the main guard runs only in the second command.

### Step 5: Use the standard library

Import math and random, and print a square root and a random number.

### Step 6: Cause an error

Import a name that does not exist and read the ImportError. Then import a missing module and read the ModuleNotFoundError.

### Deliverable

You built a two-file project, used three import styles, saw the main guard work and read two import errors.`,
  challenge: `Create a folder called toolkit with the files below.

1. strings_tools.py with a function that cleans and lowercases text
2. math_tools.py with average and percentage functions
3. app.py that imports from both using three different import styles
4. A main guard in each tool file with a small demo
5. Run app.py and each tool file directly

Then answer:

- What is the difference between a module and a package?
- Why is from module import * discouraged?
- What does the main guard do?
- Why must you never name your own file random.py?

Finish with a proposed folder layout for a small test project.`,
  proTips: [
    "Prefer import module over star imports. It shows where names come from.",
    "Never name your file after a standard module such as random.py.",
    "Use the main guard in files that are also runnable.",
    "Run scripts from the project root so imports resolve consistently.",
    "Use as to shorten long module names, not to confuse readers.",
  ],
  commonMistakes: [
    {
      mistake: "Naming your file random.py or test.py",
      fix: "Rename it. Python imports your file instead of the real module.",
    },
    {
      mistake: "Using from module import * everywhere",
      fix: "Import only the names you need.",
    },
    {
      mistake: "Running a script from the wrong folder and getting ModuleNotFoundError",
      fix: "Run from the project root, and check the file location.",
    },
    {
      mistake: "Creating circular imports between two files",
      fix: "Move shared code into a third module.",
    },
    {
      mistake: "Forgetting to install a third-party package",
      fix: "Activate the virtual environment and run pip install.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Import styles",
      code: `import math
from random import randint
import datetime as dt

print(math.sqrt(16))
print(randint(1, 6))
print(dt.date.today())`,
    },
    {
      language: "python",
      title: "The main guard",
      code: `def main():
    print("Running directly")

if __name__ == "__main__":
    main()`,
    },
    {
      language: "text",
      title: "A package layout",
      code: `project/
    main.py
    utils/
        __init__.py
        strings.py
        numbers.py`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Modules",
      url: "https://docs.python.org/3/tutorial/modules.html",
    },
    {
      title: "Python Docs — The import system",
      url: "https://docs.python.org/3/reference/import.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 35,
  tags: ["python", "modules", "packages", "import", "functions-modules"],
};

export default topic;