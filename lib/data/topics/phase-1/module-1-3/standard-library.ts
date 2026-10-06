import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "standard-library",
  title: "The Standard Library",
  summary:
    "A tour of the modules that ship with Python: os, sys, time, datetime, random, math, re, collections, itertools and more.",
  whyItMatters:
    "Before installing anything, check what Python already gives you. Dates, random data, text patterns and timing are all built in.",
  notes: `The standard library is **the large set of ready-made modules that come with Python**. No install is needed. You only import them.

Think of a new flat that already has a fan, a stove and a fridge. Before buying anything, see what is already there.

### math

~~~python
import math

print(math.sqrt(25))
print(math.ceil(4.1))
print(math.floor(4.9))
print(math.pi)
~~~

### random

~~~python
import random

print(random.randint(1, 10))
print(random.choice(["a", "b", "c"]))
items = [1, 2, 3, 4]
random.shuffle(items)
print(items)
~~~

For repeatable test data, set a seed.

~~~python
random.seed(42)
print(random.randint(1, 100))
~~~

### datetime

~~~python
from datetime import datetime, date, timedelta

now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M"))
print(date.today() + timedelta(days=7))
~~~

strftime turns a date into text. timedelta adds or subtracts time.

### time

~~~python
import time

start = time.time()
time.sleep(0.2)
print(round(time.time() - start, 1))
~~~

sleep pauses the program. It is fine for tiny demos, but real tests should wait for conditions, not fixed time.

### os and sys

~~~python
import os
import sys

print(os.getcwd())
print(os.environ.get("HOME"))
print(sys.version)
~~~

os talks to the operating system. sys describes the Python itself. We cover environment variables properly in a later module.

### re: text patterns

~~~python
import re

text = "Order 1001 and order 1002"
print(re.findall(r"\\d+", text))
print(re.sub(r"\\d+", "N", text))
~~~

re finds and replaces text by pattern, called a regular expression.

### collections

~~~python
from collections import Counter, defaultdict

words = ["a", "b", "a", "c", "a"]
print(Counter(words))

groups = defaultdict(list)
groups["x"].append(1)
print(dict(groups))
~~~

- Counter counts items
- defaultdict creates a missing key automatically

### itertools

~~~python
from itertools import combinations, product

print(list(combinations([1, 2, 3], 2)))
print(list(product(["chrome", "firefox"], ["win", "mac"])))
~~~

product is perfect for building test matrices.

### uuid and string

~~~python
import uuid
import string

print(uuid.uuid4())
print(string.ascii_lowercase)
~~~

uuid4 makes a unique ID, handy for unique test emails.

### json, csv and pathlib

You meet these in the next module, on files.

### logging and argparse

logging writes proper log lines. argparse reads options from the command line. Both appear when you build frameworks.

### Finding more

~~~python
import math
print(dir(math))
help(math.sqrt)
~~~

The online docs at docs.python.org list every module.

### Prefer the standard library first

Third-party packages are useful but add install steps and risk. If the standard library does the job, use it.

### Why this matters for testing

You will use datetime for timestamps, uuid and random for unique data, re for checking text, collections for counting results and itertools for combinations.

### The takeaway

Python comes with batteries included. Learn a handful of modules well, and check the docs before you install or write something yourself.`,
  handsOn: `Let's try several modules.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch stdlib.py
code stdlib.py
~~~

### Step 2: Dates

~~~python
from datetime import datetime, timedelta

now = datetime.now()
print(now.strftime("%d-%m-%Y %H:%M"))
print((now + timedelta(days=30)).strftime("%d-%m-%Y"))
~~~

### Step 3: Unique test data

~~~python
import uuid
import random

random.seed(7)
print(random.randint(1000, 9999))
print(f"user_{uuid.uuid4().hex[:8]}@example.com")
~~~

### Step 4: Count and match

~~~python
import re
from collections import Counter

results = ["pass", "fail", "pass", "pass"]
print(Counter(results))
print(re.findall(r"\\d+", "Order 42, Item 7"))
~~~

### Step 5: A test matrix

~~~python
from itertools import product

for browser, os_name in product(["chrome", "firefox"], ["windows", "mac"]):
    print(browser, os_name)
~~~

### Step 6: Explore

Pick one module you have not used. Run dir on it and try two functions.

### Deliverable

You used dates, random data, counting, patterns and a test matrix from the standard library.`,
  challenge: `Create a file called stdlib_lab.py.

1. Print today's date, and the date 90 days from now, in dd-mm-yyyy form
2. Generate five unique test emails using uuid
3. Count how many times each word appears in a sentence with Counter
4. Extract all numbers from the text Total 450, tax 81, net 369 using re
5. Build every combination of three browsers and two screen sizes using itertools.product

Then answer:

- Why prefer the standard library to installing a package?
- Why does a seed make random data repeatable?
- Why is time.sleep a poor way to wait in a real test?

Finish with a list of five standard modules you expect to use in testing, with one reason each.`,
  proTips: [
    "Check the standard library before installing a package.",
    "Use uuid for unique values and a random seed for repeatable ones.",
    "Use itertools.product to build test matrices.",
    "Use Counter for counting instead of writing the loop yourself.",
    "Use help and dir to explore modules from the terminal.",
  ],
  commonMistakes: [
    {
      mistake: "Installing a package for something the standard library does",
      fix: "Search the docs first. Fewer dependencies mean fewer problems.",
    },
    {
      mistake: "Using time.sleep to wait for pages in tests",
      fix: "Wait for a condition instead. Fixed sleeps are slow and flaky.",
    },
    {
      mistake: "Expecting random data to be the same on every run",
      fix: "Set random.seed when you need repeatable values.",
    },
    {
      mistake: "Naming your file after a standard module, like random.py",
      fix: "Rename it, or Python imports your file instead.",
    },
    {
      mistake: "Forgetting that datetime.now is local time",
      fix: "Be clear about time zones when comparing times across systems.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Dates and time deltas",
      code: `from datetime import date, timedelta

today = date.today()
print(today.strftime("%d-%m-%Y"))
print(today + timedelta(days=7))`,
    },
    {
      language: "python",
      title: "Unique test email",
      code: `import uuid

email = f"user_{uuid.uuid4().hex[:8]}@example.com"
print(email)`,
    },
    {
      language: "python",
      title: "A test matrix with itertools",
      code: `from itertools import product

for browser, os_name in product(["chrome", "firefox"], ["windows", "mac"]):
    print(browser, os_name)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — The Python Standard Library",
      url: "https://docs.python.org/3/library/index.html",
    },
    {
      title: "Python Module of the Week",
      url: "https://pymotw.com/3/",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 35,
  tags: ["python", "standard-library", "datetime", "random", "re", "functions-modules"],
};

export default topic;