import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "type-conversion",
  title: "Type Conversion",
  summary:
    "Change a value from one type to another with int, float, str and bool, and handle the errors when it cannot be done.",
  whyItMatters:
    "Data from pages, files and APIs usually arrives as text. Before you calculate or compare, you must convert it.",
  notes: `Type conversion means **turning a value of one type into another**. It is also called casting. Python gives you functions with the same names as the types: int, float, str and bool.

Think of currency exchange. You hold dollars but the shop wants rupees. You convert first, and then you pay. Python needs the same step when text meets numbers.

### Why we need it

~~~python
print("5" + "5")
print(5 + 5)
~~~

The first gives 55, joined text. The second gives 10. When a value looks like a number but is text, maths will not work until you convert.

### Text to int

~~~python
quantity_text = "3"
quantity = int(quantity_text)
print(quantity + 1)
~~~

### Text to float

~~~python
price = float("49.99")
print(price * 2)
~~~

### Number to text

~~~python
age = 25
message = "Age: " + str(age)
print(message)
~~~

An f-string does this for you, so prefer that when you can.

### Float to int

~~~python
print(int(7.9))
print(int(-7.9))
print(round(7.9))
~~~

int cuts off the decimal part, so 7.9 becomes 7. It does not round. Use round for rounding.

### To bool

~~~python
print(bool(1))
print(bool(0))
print(bool("hello"))
print(bool(""))
print(bool(None))
~~~

This follows the truthy and falsy rules. One trap: bool("False") is True, because it is non-empty text.

### When conversion fails

~~~python
int("abc")
~~~

This raises ValueError: invalid literal for int(). Also int("3.5") fails, because text with a decimal point is not a whole number. Convert in two steps instead.

~~~python
print(int(float("3.5")))
~~~

### Handling failure safely

Check first, or catch the error.

~~~python
value = "42"
if value.isdigit():
    print(int(value))
else:
    print("Not a number")
~~~

isdigit does not accept negative signs or decimals. A more general way is try and except, which we cover in a later module.

~~~python
try:
    number = int("abc")
except ValueError:
    number = 0
print(number)
~~~

### Cleaning before converting

Text from a page often has extra symbols.

~~~python
raw_price = "Rs. 1,499.50"
clean = raw_price.replace("Rs. ", "").replace(",", "")
price = float(clean)
print(price)
~~~

### Converting between number types

~~~python
print(float(5))
print(5 + 2.5)
~~~

Python also converts automatically when it is safe. An int and a float together give a float.

### Converting to a list

You can turn text into a list of characters, which we explore later.

~~~python
print(list("abc"))
~~~

### Checking before and after

Use type to confirm the conversion worked.

~~~python
value = int("10")
print(type(value))
~~~

### Common patterns

- Text from input is always str, so convert it
- Text read from a file is str
- Numbers from JSON are already numbers, but values inside quotes are text

### Why this matters for testing

A page shows the price as text. Your expected value is a number. To compare, you must clean and convert one side.

~~~python
shown = "Rs. 450"
actual = int(shown.replace("Rs. ", ""))
expected = 450
print(actual == expected)
~~~

### The takeaway

Use int, float, str and bool to change types. Clean text before converting, expect ValueError on bad input, and always check the type when a comparison surprises you.`,
  handsOn: `Let's convert values and handle bad input.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch conversion.py
code conversion.py
~~~

### Step 2: Basic conversions

~~~python
print(int("12") + 8)
print(float("2.5") * 4)
print("Total: " + str(300))
print(int(9.99))
print(round(9.99))
~~~

### Step 3: Clean and convert a price

~~~python
shown = "Rs. 2,499"
price = int(shown.replace("Rs. ", "").replace(",", ""))
print(price, type(price))
~~~

### Step 4: Cause an error

Run int("abc") and read the ValueError. Then run int("3.5") and note the message.

### Step 5: Safe conversion

Write an if that uses isdigit before converting the text "45", then try it with "4x5".

### Step 6: The bool trap

Print bool("False") and write down why the answer is True.

### Deliverable

You converted four types, cleaned and converted a price, caused two errors and wrote a safe conversion.`,
  challenge: `Create a file called convert_lab.py.

1. Convert the strings "10", "2.5" and "0" to numbers and print their types
2. Convert the number 99 and the float 3.75 to text
3. Show what int does to 8.9, -8.9 and what round does to each
4. From the text "Rs. 12,345.60", get the number 12345.6
5. Write a safe conversion that returns 0 when the text is not a number

Then answer:

- Why does int("3.5") fail, and how do you fix it?
- Why is bool("False") equal to True?
- Why must a tester convert a price read from a page?

Finish with one line comparing the text "100" and the number 100 using double equals, and explain the result.`,
  proTips: [
    "Convert text to numbers before calculating or comparing.",
    "Clean symbols and commas first, then convert.",
    "Use round when you want rounding. int only cuts the decimal part.",
    "Expect ValueError on bad input, and handle it.",
    "Use type to confirm the conversion did what you expected.",
  ],
  commonMistakes: [
    {
      mistake: "Calling int on text with a decimal point, like '3.5'",
      fix: "Convert to float first, then to int: int(float('3.5')).",
    },
    {
      mistake: "Expecting int(7.9) to give 8",
      fix: "int cuts off the decimal part and gives 7. Use round for rounding.",
    },
    {
      mistake: "Converting text that still has symbols like Rs. or commas",
      fix: "Clean the text with replace first, then convert.",
    },
    {
      mistake: "Assuming bool('False') is False",
      fix: "Any non-empty text is True. Compare the text itself to decide.",
    },
    {
      mistake: "Comparing '100' with 100 and expecting a match",
      fix: "They are different types. Convert one side so both match.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Basic conversions",
      code: `print(int("12") + 8)
print(float("2.5") * 4)
print("Total: " + str(300))
print(int(9.99))
print(round(9.99))`,
    },
    {
      language: "python",
      title: "Clean a price, then convert",
      code: `raw_price = "Rs. 1,499.50"
clean = raw_price.replace("Rs. ", "").replace(",", "")
price = float(clean)
print(price)`,
    },
    {
      language: "python",
      title: "Safe conversion",
      code: `try:
    number = int("abc")
except ValueError:
    number = 0
print(number)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Built-in functions: int",
      url: "https://docs.python.org/3/library/functions.html#int",
    },
    {
      title: "Python Docs — Truth value testing",
      url: "https://docs.python.org/3/library/stdtypes.html#truth-value-testing",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "type-conversion", "casting", "python-core"],
};

export default topic;