import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "f-strings",
  title: "f-strings",
  summary:
    "The modern way to put values inside text. Write f before the quotes and place variables in curly brackets.",
  whyItMatters:
    "Test messages, log lines and URLs all mix text with values. f-strings make that clean and readable.",
  notes: `An f-string is **text with holes in it, where Python fills in values**. You put the letter f just before the opening quote, and write variables inside curly brackets.

Think of a printed invitation with blanks: Dear ____, you are invited on ____. You fill each blank by hand. An f-string fills the blanks for you.

### The basic form

~~~python
name = "Priya"
age = 25
print(f"My name is {name} and I am {age} years old")
~~~

This prints My name is Priya and I am 25 years old. The number was turned into text automatically. No str needed.

### The old, clumsy way

~~~python
print("My name is " + name + " and I am " + str(age) + " years old")
~~~

This works but is long and easy to get wrong. f-strings are shorter and clearer.

### Expressions inside the brackets

You can put calculations, not only names.

~~~python
price = 250
quantity = 3
print(f"Total: {price * quantity}")
print(f"Name in capitals: {name.upper()}")
~~~

### Formatting numbers

After a colon, you can control the look.

~~~python
amount = 1234.5678
print(f"{amount:.2f}")
print(f"{amount:,.2f}")
print(f"{7:03d}")
print(f"{0.256:.1%}")
~~~

- .2f means 2 digits after the decimal point
- a comma adds thousand separators
- 03d fills with zeros up to 3 digits, giving 007
- .1% shows a fraction as a percentage

### Alignment

~~~python
print(f"{'Item':<10}{'Price':>8}")
print(f"{'Tea':<10}{49:>8}")
print(f"{'Coffee':<10}{79:>8}")
~~~

Less-than means left align and greater-than means right align. The number sets the width. Notice the single quotes inside the double-quoted f-string. Mixing the two kinds of quote avoids errors.

### The debug shortcut

An equals sign inside the brackets prints both the name and the value.

~~~python
total = 450
print(f"{total=}")
~~~

This prints total=450. It is great for quick debugging.

### Curly brackets as plain text

To show a real curly bracket, double it.

~~~python
print(f"Use {{braces}} like this")
~~~

### Multi-line f-strings

~~~python
user = "Arjun"
role = "tester"
report = f"""User: {user}
Role: {role}"""
print(report)
~~~

### Building a URL

~~~python
base_url = "https://shop.example.com"
product_id = 42
url = f"{base_url}/products/{product_id}"
print(url)
~~~

### Other ways you may see

- The format method: "Hello {}".format(name)
- The percent style: "Hello %s" % name

These are older. You will meet them in old code, but prefer f-strings in your own.

### Common errors

Forgetting the f means the brackets print as they are.

~~~python
name = "Priya"
print("Hello {name}")
~~~

This prints Hello {name}. Also, using a name that does not exist inside the brackets gives a NameError.

### Why this matters for testing

You will write clear failure messages, build URLs from settings and make unique test data.

~~~python
run_id = 17
email = f"user_{run_id}@example.com"
print(email)
~~~

### The takeaway

Put f before the quote, place values in curly brackets and add a colon for formatting. It is the clearest way to mix text and values.`,
  handsOn: `Let's build text with f-strings.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch fstrings.py
code fstrings.py
~~~

### Step 2: Basic use

~~~python
product = "Masala tea"
price = 49.5
quantity = 3

print(f"{product} costs {price} each")
print(f"Total for {quantity}: {price * quantity}")
~~~

### Step 3: Format money

~~~python
total = 1234567.891
print(f"Rs. {total:,.2f}")
~~~

### Step 4: A small table

~~~python
print(f"{'Item':<12}{'Qty':>5}{'Price':>8}")
print(f"{'Tea':<12}{2:>5}{49:>8}")
print(f"{'Coffee':<12}{1:>5}{79:>8}")
~~~

### Step 5: Debug shortcut

Create two variables and print them using the equals form.

### Step 6: Build a URL

Make base_url and order_id variables, then build one URL with them.

### Deliverable

You used f-strings for text, money, a table, a debug line and a URL.`,
  challenge: `Create a file called receipt.py.

1. Store a customer name, three item names, their prices and quantities
2. Print a header line with the customer name
3. Print a table with aligned columns for item, quantity and price
4. Calculate the subtotal, 18 percent GST and the grand total
5. Print the totals with two decimal places and thousand separators

Then:

- Build an email address using a number from a variable
- Show the same sentence written with plus signs and with an f-string
- Print a variable using the equals debug form

Finish with two lines on why f-strings are better than joining with plus.`,
  proTips: [
    "Use f-strings instead of plus signs when mixing text and numbers.",
    "Use .2f for money so you always get two decimals.",
    "Use the equals form for quick debugging prints.",
    "Use different quote types inside and outside to avoid errors.",
    "Do not forget the f. Without it, the brackets print as plain text.",
  ],
  commonMistakes: [
    {
      mistake: "Forgetting the f before the quote",
      fix: "Add f in front of the opening quote, or the brackets print unchanged.",
    },
    {
      mistake: "Using the same quote type inside and outside",
      fix: "Use single quotes inside a double-quoted f-string, or the other way round.",
    },
    {
      mistake: "Writing str(number) inside an f-string",
      fix: "It is not needed. f-strings convert values to text for you.",
    },
    {
      mistake: "Showing money with many decimal digits",
      fix: "Use the colon format, such as .2f, to control the digits.",
    },
    {
      mistake: "Trying to print a literal curly bracket",
      fix: "Double it, so two opening brackets show one.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Basic f-string",
      code: `name = "Priya"
age = 25
print(f"My name is {name} and I am {age} years old")`,
    },
    {
      language: "python",
      title: "Formatting numbers",
      code: `amount = 1234.5678
print(f"{amount:.2f}")
print(f"{amount:,.2f}")
print(f"{7:03d}")`,
    },
    {
      language: "python",
      title: "Build a URL",
      code: `base_url = "https://shop.example.com"
product_id = 42
url = f"{base_url}/products/{product_id}"
print(url)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Formatted string literals",
      url: "https://docs.python.org/3/reference/lexical_analysis.html#f-strings",
    },
    {
      title: "Python Docs — Format specification mini-language",
      url: "https://docs.python.org/3/library/string.html#formatspec",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "f-strings", "formatting", "strings", "python-core"],
};

export default topic;