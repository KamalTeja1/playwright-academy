import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "variables-typing",
  title: "Variables and Dynamic Typing",
  summary:
    "A variable is a name that points to a value. Python decides the type for you, and you can change it any time.",
  whyItMatters:
    "Every script stores things: a URL, a username, a count. Variables are how you hold and reuse that information.",
  notes: `A variable is **a name that points to a value**. You give a value a label so you can use it again later.

Think of the steel containers in a kitchen, each with a sticky label: Sugar, Tea, Salt. The label is the variable name. What is inside is the value. You can open the container named Tea any time without remembering where the tea is.

### Creating a variable

You use the equals sign. It does not mean equal in the maths sense. It means **put this value under this name**.

~~~python
name = "Priya"
age = 25
price = 99.5
is_member = True
~~~

There is no keyword like var or int. Python makes the variable the moment you assign it.

### Using a variable

~~~python
name = "Priya"
print(name)
print("Hello", name)
~~~

### Changing a variable

You can point the same name at a new value.

~~~python
count = 1
count = 2
count = count + 1
print(count)
~~~

The last line reads: take the current count, add 1, and store the result back in count. It prints 3.

### Dynamic typing

Python is **dynamically typed**. This means the type belongs to the value, not to the name. The same name can hold a number now and text later.

~~~python
item = 10
print(type(item))

item = "ten"
print(type(item))
~~~

The function type tells you what kind of value you have. It prints int first and then str.

This is flexible, but it also means mistakes show up only when the code runs. Be careful about what each name holds.

### Naming rules

Rules that Python enforces:

- Use letters, digits and underscores
- Do not start with a digit
- No spaces
- Do not use reserved words such as if, for, class or True

Convention that everyone follows:

- Use **snake_case**: small letters with underscores, like user_name
- Choose meaningful names: total_price is better than tp
- Constants, which are values that should not change, are written in CAPITAL_LETTERS

~~~python
BASE_URL = "https://example.com"
max_retries = 3
~~~

Python does not stop you from changing a constant. It is only a promise between you and other programmers.

### Multiple assignment

~~~python
x, y, z = 1, 2, 3
a = b = 0
print(x, y, z, a, b)
~~~

### Swapping two values

Python makes this easy.

~~~python
first = "left"
second = "right"
first, second = second, first
print(first, second)
~~~

This prints right left.

### Names point to values

When you write b = a, both names point to the same value. For simple values like numbers and text, which cannot be changed in place, this causes no trouble. We will meet the surprising cases with lists later.

### Deleting a variable

~~~python
temp = 5
del temp
~~~

After del, using temp gives a NameError. This is rarely needed.

### Common error: using a name before creating it

~~~python
print(total)
~~~

This gives NameError: name 'total' is not defined. Python cannot use a name you have not created yet. Also check your spelling, because Total and total are different names.

### Type hints, briefly

You may see code like age: int = 25. These are optional hints for humans and tools. Python ignores them when running. We keep them minimal in this phase.

### Why this matters for testing

In your tests you will store the page address, test users, expected messages and counts in variables. Good names make a test read like a sentence.

~~~python
expected_title = "Dashboard"
login_url = "https://example.com/login"
~~~

### The takeaway

A variable is a labelled container. Name it clearly with snake_case, remember that Python decides the type from the value, and check your spelling when you see a NameError.`,
  handsOn: `Let's practise creating and changing variables.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch variables.py
code variables.py
~~~

### Step 2: Create variables

Paste and save:

~~~python
student_name = "Arjun"
marks = 78
fee = 1500.50
is_active = True

print(student_name)
print(marks)
print(fee)
print(is_active)
~~~

### Step 3: Check the types

Add these lines:

~~~python
print(type(student_name))
print(type(marks))
print(type(fee))
print(type(is_active))
~~~

Run with python3 variables.py. Note each type.

### Step 4: Change a variable

Add:

~~~python
marks = marks + 10
print("New marks:", marks)
marks = "absent"
print(type(marks))
~~~

Observe that the type changed along with the value.

### Step 5: Swap

Create two variables, left and right, and swap them in one line.

### Step 6: Trigger an error

Print a name you never created. Read the NameError. Then fix it.

### Deliverable

You have a variables.py with four types of values, a changed variable, a swap and one NameError you caused and fixed.`,
  challenge: `Create a file called profile.py.

1. Store these in well-named variables: your name, age, city, height in metres, and whether you are a student
2. Print each one with a label, such as Name: Priya
3. Print the type of each variable
4. Create a constant TAX_RATE with the value 18 and print it
5. Swap two variables using multiple assignment

Then:

- Write three valid names and three invalid names, with a reason for each invalid one
- Explain what dynamic typing means in two lines
- Show one example where changing a variable's type could cause a bug later

Finish with a note on why meaningful names matter more than short names.`,
  proTips: [
    "Use snake_case for variable names, and make them meaningful.",
    "Write constants in CAPITAL_LETTERS so readers know not to change them.",
    "Use type to check what a variable holds when you are unsure.",
    "Do not reuse one name for different purposes in the same script.",
    "When you see a NameError, check the spelling and capital letters first.",
  ],
  commonMistakes: [
    {
      mistake: "Using a variable before creating it",
      fix: "Assign a value first. Check the spelling, because Python is case sensitive.",
    },
    {
      mistake: "Starting a name with a digit like 1st_name",
      fix: "Names cannot begin with a digit. Use first_name instead.",
    },
    {
      mistake: "Using reserved words as names, like class or if",
      fix: "Choose another name, such as class_name or is_valid.",
    },
    {
      mistake: "Using very short names like x1 and tp everywhere",
      fix: "Use meaningful names such as total_price so your code reads clearly.",
    },
    {
      mistake: "Thinking the equals sign means maths equality",
      fix: 'In Python it means assign. To compare, you use two equals signs, which we cover in the operators topic.',
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Creating and changing variables",
      code: `name = "Priya"
age = 25
age = age + 1
print(name, age)`,
    },
    {
      language: "python",
      title: "Dynamic typing",
      code: `item = 10
print(type(item))

item = "ten"
print(type(item))`,
    },
    {
      language: "python",
      title: "Swap two values",
      code: `first = "left"
second = "right"
first, second = second, first
print(first, second)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Naming and binding",
      url: "https://docs.python.org/3/reference/executionmodel.html#naming-and-binding",
    },
    {
      title: "PEP 8 — Naming conventions",
      url: "https://peps.python.org/pep-0008/#naming-conventions",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "variables", "dynamic-typing", "python-core"],
};

export default topic;