import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "operators",
  title: "Operators",
  summary:
    "The symbols that calculate, compare and combine values: arithmetic, comparison, logical, assignment and membership.",
  whyItMatters:
    "Every check in a test is an operator at work. Is the total equal to the expected value? Is the message in the page text? Operators answer these.",
  notes: `Operators are **symbols that do something with values**. The values they work on are called operands. In 5 + 3, the plus is the operator and 5 and 3 are operands.

Think of a calculator. It has buttons for add, subtract and compare. Python has the same buttons, and a few more.

### Arithmetic operators

~~~python
print(10 + 3)
print(10 - 3)
print(10 * 3)
print(10 / 3)
print(10 // 3)
print(10 % 3)
print(2 ** 5)
~~~

- Plus, minus and star do what you expect
- A single slash gives a decimal result: 3.3333333333333335
- Double slash gives **floor division**, the whole part only: 3
- Percent gives the **remainder**: 1
- Double star is a power: 2 to the power 5 is 32

Remainder is handy to check even or odd.

~~~python
number = 7
print(number % 2 == 0)
~~~

This prints False, so 7 is odd.

### Comparison operators

They give True or False.

~~~python
print(5 == 5)
print(5 != 3)
print(5 > 3)
print(5 < 3)
print(5 >= 5)
print(5 <= 4)
~~~

Remember: a single equals assigns, and a double equals compares. Mixing them is a classic mistake.

You can chain comparisons in a way that reads like maths.

~~~python
age = 25
print(18 <= age < 60)
~~~

### Logical operators

Combine true and false values using words, not symbols.

~~~python
age = 25
has_id = True

print(age >= 18 and has_id)
print(age < 18 or has_id)
print(not has_id)
~~~

- and is true only if both sides are true
- or is true if at least one side is true
- not flips the value

### Assignment operators

Shortcuts for updating a variable.

~~~python
count = 10
count += 5
count -= 2
count *= 3
count //= 2
print(count)
~~~

count += 5 means count = count + 5. The same pattern works for the others.

### Membership operators

in checks whether something is inside text or a collection.

~~~python
message = "Order placed successfully"
print("placed" in message)
print("failed" not in message)
~~~

This is very useful in tests to check that some text appears in a message.

### Identity operators

is checks whether two names point to the **exact same object**. It is not the same as double equals.

~~~python
a = [1, 2]
b = [1, 2]
print(a == b)
print(a is b)
~~~

The first prints True, since the contents match. The second prints False, since they are two separate lists. Use is mainly to check against None.

~~~python
result = None
print(result is None)
~~~

### String operators

Plus joins text and star repeats it.

~~~python
print("Test" + "ing")
print("-" * 10)
~~~

### Operator precedence

Python follows an order, like in school maths. Multiplication goes before addition.

~~~python
print(2 + 3 * 4)
print((2 + 3) * 4)
~~~

The first prints 14. The second prints 20. When in doubt, use brackets. It makes your intention clear to the reader.

Rough order, from first to last:

1. Brackets
2. Power
3. Multiply, divide, floor divide, remainder
4. Add, subtract
5. Comparisons
6. not, then and, then or

### Short-circuit behaviour

With and, if the left side is false, Python does not check the right side. With or, if the left is true, it stops. This is useful but can hide errors in the right side.

### Mixing types

~~~python
print(5 + 2.5)
~~~

An int and a float together give a float: 7.5. But 5 + "2" gives a TypeError. Convert first.

### Why this matters for testing

An assertion in a test is a comparison. Checking that a price is correct, that a message contains a word, that a count is greater than zero: all of these use the operators above.

~~~python
expected_total = 450
actual_total = 450
print(actual_total == expected_total)
~~~

### The takeaway

Know the arithmetic, comparison, logical, membership and identity operators. Use double equals to compare, in to search, and brackets when the order is not obvious.`,
  handsOn: `Let's try every group of operators.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch operators.py
code operators.py
~~~

### Step 2: Arithmetic

~~~python
price = 250
quantity = 3

print("Total:", price * quantity)
print("Half:", price / 2)
print("Whole part:", price // 7)
print("Remainder:", price % 7)
print("Square:", quantity ** 2)
~~~

### Step 3: Comparison and logic

~~~python
age = 22
has_ticket = True

print(age >= 18)
print(age >= 18 and has_ticket)
print(not has_ticket)
~~~

### Step 4: Membership

~~~python
message = "Payment successful for order 1001"
print("successful" in message)
print("failed" in message)
~~~

### Step 5: Even or odd

Write code that checks whether the number 14 is even, using the remainder.

### Step 6: Precedence

Predict the result of 10 - 2 * 3 and then run it. Add brackets to get 24.

### Deliverable

You ran all operator groups, predicted a precedence result and wrote an even or odd check.`,
  challenge: `Create a file called bill.py.

1. Store item price 120, quantity 4 and GST rate 18
2. Calculate subtotal, GST amount and grand total
3. Print each with a label
4. Check whether the grand total is more than 500 and print the result
5. Check whether a discount code text, such as SAVE10, contains the word SAVE

Then answer:

- What is the difference between / and //?
- What is the difference between == and is?
- What does 7 % 3 give, and where could that be useful?
- Predict and then check: 2 + 3 * 4 ** 2

Finish by writing three comparisons that a tester might use to verify a shopping cart.`,
  proTips: [
    "Use double equals to compare and a single equals to assign.",
    "Use brackets when the order of operations is not obvious.",
    "Use in to check whether text contains a word.",
    "Use is only to compare with None. Use double equals for values.",
    "Try the remainder operator for even, odd and cycle checks.",
  ],
  commonMistakes: [
    {
      mistake: "Using a single equals inside an if check",
      fix: "Use double equals to compare. A single equals assigns, and Python reports a syntax error.",
    },
    {
      mistake: "Using is to compare numbers or text",
      fix: "Use double equals for values. Keep is for None checks.",
    },
    {
      mistake: "Expecting 7 / 2 to give 3",
      fix: "A single slash gives 3.5. Use double slash for the whole part.",
    },
    {
      mistake: "Forgetting precedence in a long expression",
      fix: "Add brackets so the order is clear to you and to the reader.",
    },
    {
      mistake: "Adding a number to text with a plus sign",
      fix: "Convert the number with str first, or use an f-string.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Arithmetic operators",
      code: `print(10 + 3)
print(10 / 3)
print(10 // 3)
print(10 % 3)
print(2 ** 5)`,
    },
    {
      language: "python",
      title: "Comparison and logic",
      code: `age = 25
has_id = True

print(18 <= age < 60)
print(age >= 18 and has_id)
print(not has_id)`,
    },
    {
      language: "python",
      title: "Membership in a message",
      code: `message = "Order placed successfully"
print("placed" in message)
print("failed" not in message)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Expressions and operators",
      url: "https://docs.python.org/3/reference/expressions.html",
    },
    {
      title: "Python Docs — Operator precedence",
      url: "https://docs.python.org/3/reference/expressions.html#operator-precedence",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["python", "operators", "comparison", "logic", "python-core"],
};

export default topic;