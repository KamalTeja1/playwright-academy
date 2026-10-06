import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "data-types",
  title: "Basic Data Types",
  summary:
    "The five basic kinds of values in Python: whole numbers, decimals, text, True or False, and nothing at all.",
  whyItMatters:
    "Every value has a type, and the type decides what you can do with it. Many beginner bugs come from mixing types.",
  notes: `A data type tells Python **what kind of value** it is dealing with, and so what operations make sense. You can add two numbers, but adding a number to a name makes less sense.

Think of a shop. Items are counted in pieces, weighed in kilos or described by name. You do not weigh a name. Python types keep these things separate.

### int: whole numbers

Numbers without a decimal point.

~~~python
students = 30
temperature = -5
big = 1_000_000
print(students, temperature, big)
~~~

Python has no size limit for int. Underscores inside numbers are allowed to make them readable.

### float: decimal numbers

~~~python
price = 99.99
pi = 3.14159
print(price, pi)
~~~

Floats are stored in a way that is not always exact.

~~~python
print(0.1 + 0.2)
~~~

This prints 0.30000000000000004. That is normal for most programming languages. When you compare decimals, use round.

~~~python
print(round(0.1 + 0.2, 2))
~~~

### str: text

Text goes inside single or double quotes. Both work the same.

~~~python
city = "Bengaluru"
language = 'Python'
message = "It's a good day"
print(city, language, message)
~~~

Use double quotes when the text itself has a single quote, like in It's.

Strings can be joined with a plus and repeated with a star.

~~~python
print("Hello, " + "Priya")
print("ha" * 3)
~~~

Triple quotes allow text over several lines.

~~~python
note = """Line one
Line two"""
print(note)
~~~

### bool: True or False

Only two values, both with a capital first letter.

~~~python
is_logged_in = True
has_errors = False
print(is_logged_in, has_errors)
~~~

Comparisons give bool values.

~~~python
print(10 > 5)
print(10 == 5)
~~~

### None: nothing

None means no value. It is its own type, called NoneType. It is used when something is empty or not set yet.

~~~python
result = None
print(result)
print(result is None)
~~~

### Checking the type

~~~python
print(type(10))
print(type(10.5))
print(type("hi"))
print(type(True))
print(type(None))
~~~

To check in an if, use isinstance.

~~~python
value = 42
print(isinstance(value, int))
~~~

### A surprise: bool is a number too

True behaves like 1 and False like 0. So True + True gives 2. This is rarely useful, but good to know.

### Truthy and falsy

In an if, Python treats some values as false even if they are not False.

- 0, 0.0
- empty text ""
- empty collections, which we meet later
- None

Everything else counts as true.

~~~python
name = ""
if name:
    print("Has a name")
else:
    print("Name is empty")
~~~

This prints Name is empty.

### Text that looks like a number

~~~python
print("5" + "5")
print(5 + 5)
~~~

The first prints 55, because it joins text. The second prints 10. They are different types. The type-conversion topic shows how to change between them.

### Immutable values

Numbers, text, True or False and None cannot be changed in place. When you modify text, you actually make a new text. This is called being immutable. It matters later when we compare them with lists.

### Why this matters for testing

When you read a price from a web page, it comes as text such as Rs. 499. Before you compare it to a number, you must convert it. Knowing the type of every value is a daily habit for testers.

### The takeaway

Know the five basic types: int, float, str, bool and None. Use type to check when unsure, and never assume text that looks like a number is a number.`,
  handsOn: `Let's explore each type in code.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch data_types.py
code data_types.py
~~~

### Step 2: Create one value of each type

~~~python
count = 12
price = 49.75
product = "Masala tea"
in_stock = True
discount = None

for value in [count, price, product, in_stock, discount]:
    print(value, type(value))
~~~

Run with python3 data_types.py.

### Step 3: Try the float surprise

~~~python
print(0.1 + 0.2)
print(round(0.1 + 0.2, 2))
~~~

### Step 4: Compare text and numbers

~~~python
print("10" + "20")
print(10 + 20)
~~~

Write down why the answers differ.

### Step 5: Truthy and falsy

Test each of these in an if and note the result: 0, 1, "", "hello", None.

### Step 6: Use isinstance

Write a line that checks whether price is a float.

### Deliverable

You have a file showing all five types, the float surprise, the text versus number difference and a truthy and falsy table.`,
  challenge: `Create a file called types_lab.py.

1. Make ten values: two int, two float, three str, two bool and one None
2. Print each value with its type
3. Show two examples where a result is surprising, such as the float sum and text joining
4. Test five values in an if to find which are falsy
5. Write a small snippet that uses isinstance to check whether a value is text

Then answer:

- What is the difference between None and an empty string?
- Why is the string "100" different from the number 100?
- Why might a tester need to convert a price read from a page?

Finish with a table of the five types and one example of each.`,
  proTips: [
    "Use type to check a value when something behaves strangely.",
    "Remember that 0, empty text and None are all falsy.",
    "Use round when you compare decimal numbers.",
    "Use double quotes for text that contains a single quote.",
    "Text that looks like a number is still text until you convert it.",
  ],
  commonMistakes: [
    {
      mistake: "Writing true or false in lowercase",
      fix: "Use True and False with a capital first letter.",
    },
    {
      mistake: "Expecting 0.1 + 0.2 to equal exactly 0.3",
      fix: "Decimals are stored approximately. Use round when comparing.",
    },
    {
      mistake: "Adding text and a number, like 'Age: ' + 25",
      fix: "Convert the number to text first, or use an f-string, which we cover soon.",
    },
    {
      mistake: "Confusing None with 0 or an empty string",
      fix: "None means no value at all. Zero and empty text are real values.",
    },
    {
      mistake: "Treating '5' as a number",
      fix: "Quotes make it text. Convert it with int before doing maths.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "One value of each type",
      code: `count = 12
price = 49.75
product = "Masala tea"
in_stock = True
discount = None

for value in [count, price, product, in_stock, discount]:
    print(value, type(value))`,
    },
    {
      language: "python",
      title: "Float surprise and the fix",
      code: `print(0.1 + 0.2)
print(round(0.1 + 0.2, 2))`,
    },
    {
      language: "python",
      title: "Truthy and falsy",
      code: `for item in [0, 1, "", "hello", None]:
    if item:
        print(repr(item), "is truthy")
    else:
        print(repr(item), "is falsy")`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Built-in types",
      url: "https://docs.python.org/3/library/stdtypes.html",
    },
    {
      title: "Python Docs — Floating point arithmetic",
      url: "https://docs.python.org/3/tutorial/floatingpoint.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["python", "data-types", "int", "float", "str", "bool", "none", "python-core"],
};

export default topic;