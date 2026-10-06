import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "string-methods",
  title: "String Methods",
  summary:
    "Built-in tools to clean, search, split and reshape text: strip, lower, replace, split, join, startswith and more.",
  whyItMatters:
    "Text from web pages is messy. Extra spaces, mixed capitals and odd formats are everywhere. String methods clean it so your checks are reliable.",
  notes: `A string method is **a built-in action that belongs to text**. You call it with a dot after the string, like text.upper().

Think of a washing machine for text. You put in messy text, press a button, and clean text comes out. Each method is a different button.

### Strings do not change in place

Strings are immutable. A method never changes the original. It gives back a **new** string. You must store the result.

~~~python
name = "  priya  "
name.strip()
print(name)

name = name.strip()
print(name)
~~~

The first print still shows the spaces. The second shows clean text.

### Changing case

~~~python
text = "Hello World"
print(text.lower())
print(text.upper())
print(text.title())
print(text.capitalize())
~~~

lower is very useful before comparing, so Yes, YES and yes all match.

### Removing extra spaces

~~~python
raw = "   Welcome back   "
print(raw.strip())
print(raw.lstrip())
print(raw.rstrip())
~~~

strip removes spaces from both ends. lstrip does the left and rstrip does the right. You can also strip other characters.

~~~python
print("***done***".strip("*"))
~~~

### Searching

~~~python
message = "Order placed successfully"
print(message.startswith("Order"))
print(message.endswith("fully"))
print(message.find("placed"))
print(message.find("failed"))
print(message.count("l"))
print("placed" in message)
~~~

- find gives the position, or -1 if not found
- count tells how many times something appears
- in gives True or False

### Replacing

~~~python
price = "Rs. 1,499"
print(price.replace("Rs. ", ""))
print(price.replace(",", ""))
~~~

### Splitting and joining

split breaks text into a list of pieces. join does the opposite.

~~~python
line = "apple,banana,mango"
fruits = line.split(",")
print(fruits)

print(" - ".join(fruits))
~~~

With no argument, split breaks on any spaces.

~~~python
print("one  two   three".split())
~~~

### Checking what the text contains

~~~python
print("12345".isdigit())
print("abc".isalpha())
print("abc123".isalnum())
print("   ".isspace())
~~~

These return True or False. isdigit is handy before converting text to a number.

### Indexing and slicing

Each character has a position, starting at 0.

~~~python
word = "Python"
print(word[0])
print(word[-1])
print(word[0:3])
print(word[2:])
print(word[::-1])
~~~

The slice word[0:3] takes positions 0, 1 and 2. The end is not included. A step of -1 reverses the text. Going past the end with a single index gives an IndexError.

### Length

~~~python
print(len("Python"))
~~~

### Chaining methods

You can call one method after another.

~~~python
email = "  Priya@Example.COM  "
clean = email.strip().lower()
print(clean)
~~~

### Escape characters

A backslash followed by a letter makes a special character. n makes a new line and t makes a tab.

~~~python
print("Line one\\nLine two")
~~~

### Why this matters for testing

Text on a page may have hidden spaces or different capitals. Cleaning before comparing makes tests stable.

~~~python
actual = "  Welcome, Priya  "
expected = "welcome, priya"
print(actual.strip().lower() == expected)
~~~

### The takeaway

Strings never change in place, so store the result. Learn strip, lower, replace, split, join, find and startswith. They will clean most of the text you meet.`,
  handsOn: `Let's clean some messy text.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch strings.py
code strings.py
~~~

### Step 2: Clean and compare

~~~python
raw_email = "   Priya.Sharma@Example.COM  "
email = raw_email.strip().lower()
print(email)
print(email.endswith("@example.com"))
~~~

### Step 3: Replace and split

~~~python
price = "Rs. 1,499"
number_text = price.replace("Rs. ", "").replace(",", "")
print(number_text)

tags = "smoke,login,critical"
print(tags.split(","))
~~~

### Step 4: Slice

~~~python
order_id = "ORD-2026-0042"
print(order_id[:3])
print(order_id[-4:])
print(order_id.split("-"))
~~~

### Step 5: Prove strings do not change

Call upper on a variable without storing it. Print the variable. Then store the result and print again.

### Step 6: Check digits

Test isdigit on "2026" and "20x6".

### Deliverable

You cleaned an email, converted a price to plain digits, sliced an order ID and proved that strings stay unchanged.`,
  challenge: `Create a file called text_lab.py.

1. Take the text "   Welcome To The Test Lab   " and produce a clean lowercase version
2. From "Rs. 2,499.50", remove everything except the digits and the dot
3. Split "login,search,cart,pay" into a list, then join it back with a pipe symbol
4. From the order ID "ORD-2026-0042", extract the year and the last number
5. Check whether a message contains the word success, ignoring capitals

Then answer:

- Why does text.strip() on its own not change the variable?
- What does find return when text is not found?
- What does word[::-1] do?

Finish by writing one cleaning line a tester could use before comparing page text.`,
  proTips: [
    "Always store the result of a string method. The original never changes.",
    "Use strip and lower before comparing text.",
    "Use in for a simple contains check, and find when you need the position.",
    "Use isdigit before converting text to a number.",
    "Chain methods to keep cleaning code short and readable.",
  ],
  commonMistakes: [
    {
      mistake: "Calling text.strip() and expecting the variable to change",
      fix: "Strings are immutable. Write text = text.strip() to keep the result.",
    },
    {
      mistake: "Comparing text without caring about capitals",
      fix: "Use lower on both sides before comparing.",
    },
    {
      mistake: "Using find in an if and forgetting it returns -1 when missing",
      fix: "Use the in operator for a True or False answer instead.",
    },
    {
      mistake: "Reading past the end of text with an index like word[10]",
      fix: "Check len first, or use slicing, which never raises an error.",
    },
    {
      mistake: "Forgetting that the slice end is not included",
      fix: 'word[0:3] gives three characters, positions 0 to 2. Count carefully.',
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Clean and compare text",
      code: `actual = "  Welcome, Priya  "
expected = "welcome, priya"
print(actual.strip().lower() == expected)`,
    },
    {
      language: "python",
      title: "Convert a price to digits",
      code: `price = "Rs. 1,499"
number_text = price.replace("Rs. ", "").replace(",", "")
print(number_text)`,
    },
    {
      language: "python",
      title: "Split and join",
      code: `line = "apple,banana,mango"
fruits = line.split(",")
print(fruits)
print(" - ".join(fruits))`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — String methods",
      url: "https://docs.python.org/3/library/stdtypes.html#string-methods",
    },
    {
      title: "Python Docs — Text sequence type",
      url: "https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["python", "strings", "string-methods", "python-core"],
};

export default topic;