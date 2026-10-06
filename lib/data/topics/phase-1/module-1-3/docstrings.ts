import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "docstrings",
  title: "Docstrings and Comments",
  summary:
    "Describe what a function does with a docstring, so people and tools can read it without studying the code.",
  whyItMatters:
    "Code is read far more often than it is written. A short docstring saves your teammates, and your future self, a lot of guessing.",
  notes: `A docstring is **a text description placed as the first line inside a function**. It is written in triple quotes.

Think of the label on a medicine bottle. You do not need to taste it to know what it is for. A docstring is that label for a function.

### A simple docstring

~~~python
def add(a, b):
    """Return the sum of a and b."""
    return a + b

print(add(2, 3))
~~~

The text sits right under the def line, indented like the body.

### Reading a docstring

Python stores it, so you can read it later.

~~~python
print(add.__doc__)
help(add)
~~~

Editors such as VS Code show the docstring when you hover over the function name.

### Longer docstrings

For bigger functions, describe the inputs and the output.

~~~python
def calculate_total(price, quantity, tax_rate=0):
    """Calculate the total cost of an order.

    Args:
        price: Cost of one item.
        quantity: Number of items.
        tax_rate: Tax percentage, for example 18.

    Returns:
        The total including tax.
    """
    subtotal = price * quantity
    return subtotal + subtotal * tax_rate / 100

print(calculate_total(100, 2, 18))
~~~

This layout is called the Google style. It is easy to read and widely used.

### What to write

- The first line is a short summary, ending with a full stop
- Use a command voice: Return the sum, not Returns the sum
- Mention what the function gives back
- Mention errors it can raise, if any

### Docstring versus comment

- A docstring describes **what** a function is for and how to use it
- A comment explains **why** a particular line exists

~~~python
def apply_discount(price):
    """Return the price after a 10 percent discount."""
    # Marketing asked for a flat 10 percent in the spring sale
    return price * 0.9

print(apply_discount(200))
~~~

### Comments

A comment starts with a hash sign. Python ignores it.

~~~python
# Wait for the page to settle before reading the price
retries = 3
~~~

Avoid comments that repeat the code. Compare:

- Bad: add 1 to count, written next to count += 1
- Good: skip the header row, written next to the same line when it is not obvious why

### Module and class docstrings

A file can start with a docstring that describes it. Classes get one too, which you will see in the OOP module.

~~~python
"""Helpers for building test data."""

def build_email(run_id):
    """Return a unique test email address."""
    return f"user_{run_id}@example.com"
~~~

### Type hints, briefly

You may see def add(a: int, b: int) -> int in other code. They are optional notes. We keep them minimal in this phase.

### Keep it true

An old docstring that lies is worse than none. When you change what a function does, update its docstring in the same edit.

### Why this matters for testing

Test helpers are shared across a team. A one-line docstring tells everyone what a helper does, what it needs and what it returns.

### The takeaway

Write a triple-quoted summary as the first line of every function. Use comments only for why, and keep both honest.`,
  handsOn: `Let's document some functions.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch docs.py
code docs.py
~~~

### Step 2: A one-line docstring

~~~python
def is_adult(age):
    """Return True if age is 18 or more."""
    return age >= 18

print(is_adult(20))
~~~

### Step 3: Read it back

Add these lines and run the file:

~~~python
print(is_adult.__doc__)
help(is_adult)
~~~

### Step 4: A longer docstring

~~~python
def final_price(price, discount_percent):
    """Return the price after a percentage discount.

    Args:
        price: Original price.
        discount_percent: Discount as a number, for example 10.

    Returns:
        The reduced price.
    """
    return price - price * discount_percent / 100

print(final_price(500, 10))
~~~

### Step 5: Hover in VS Code

Hover over final_price in the editor and see the docstring appear.

### Step 6: Fix a bad comment

Write a comment that only repeats the code. Then rewrite it so it says why.

### Deliverable

You wrote one short and one long docstring, read both back and improved a comment.`,
  challenge: `Create a file called documented.py.

1. Write three small functions: build_email, is_valid_password and apply_gst
2. Give each a docstring with a summary line
3. Give apply_gst a full docstring with Args and Returns
4. Print the docstring of each using __doc__
5. Add one comment that explains why, not what

Then answer:

- What is the difference between a docstring and a comment?
- Why use a command voice in the first line?
- Why is an outdated docstring harmful?

Finish with a docstring for a login helper you might write for a test suite.`,
  proTips: [
    "Write the docstring first. It forces you to know what the function does.",
    "Start with a command, such as Return the total.",
    "Use comments to explain why, not what.",
    "Update the docstring whenever the behaviour changes.",
    "Use help(function) to read any docstring in the terminal.",
  ],
  commonMistakes: [
    {
      mistake: "Putting the docstring after the first line of code",
      fix: "It must be the very first statement in the function.",
    },
    {
      mistake: "Using single quotes for a long docstring",
      fix: "Use triple double quotes. They allow several lines.",
    },
    {
      mistake: "Writing comments that repeat the code",
      fix: "Explain the reason behind the line, or remove the comment.",
    },
    {
      mistake: "Leaving the docstring unchanged after editing the function",
      fix: "Update both together so they always agree.",
    },
    {
      mistake: "Writing a very long docstring for a tiny function",
      fix: "One clear line is enough for simple functions.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "One-line docstring",
      code: `def add(a, b):
    """Return the sum of a and b."""
    return a + b

print(add.__doc__)`,
    },
    {
      language: "python",
      title: "Docstring with Args and Returns",
      code: `def final_price(price, discount_percent):
    """Return the price after a percentage discount.

    Args:
        price: Original price.
        discount_percent: Discount as a number, for example 10.

    Returns:
        The reduced price.
    """
    return price - price * discount_percent / 100

print(final_price(500, 10))`,
    },
    {
      language: "python",
      title: "Comment that explains why",
      code: `def apply_discount(price):
    """Return the price after a 10 percent discount."""
    # Marketing asked for a flat 10 percent in the spring sale
    return price * 0.9

print(apply_discount(200))`,
    },
  ],
  furtherReading: [
    {
      title: "PEP 257 — Docstring Conventions",
      url: "https://peps.python.org/pep-0257/",
    },
    {
      title: "Python Docs — Documentation strings",
      url: "https://docs.python.org/3/tutorial/controlflow.html#documentation-strings",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 20,
  tags: ["python", "docstrings", "comments", "functions-modules"],
};

export default topic;