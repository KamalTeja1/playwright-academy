import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "defining-functions",
  title: "Defining Functions",
  summary:
    "Name a block of code with def so you can run it again and again by calling its name.",
  whyItMatters:
    "Every real test suite is built from small functions: log in, open a page, check a total. Functions stop you from copying and pasting code.",
  notes: `A function is **a named block of code that you can run whenever you want**. You write it once with def, then call it by name.

Think of a recipe card. You write the steps once. Every time you want the dish, you follow the card instead of inventing the steps again.

### The basic shape

~~~python
def greet():
    print("Hello!")

greet()
greet()
~~~

- def starts the definition
- greet is the name
- Round brackets follow the name
- A colon ends the line
- The body is indented by 4 spaces

Defining a function does not run it. Calling it, with brackets, does. Writing greet without brackets does nothing visible.

### Parameters

A parameter is a name for a value the function receives.

~~~python
def greet(name):
    print(f"Hello, {name}!")

greet("Priya")
greet("Arjun")
~~~

The name inside the definition is the parameter. The value you pass when calling is the argument.

### Returning a value

print only shows something. return hands a value back so the caller can use it.

~~~python
def add(a, b):
    return a + b

total = add(3, 4)
print(total)
~~~

When Python reaches return, the function ends right there.

### A function without return

It gives back None.

~~~python
def say_hi():
    print("hi")

result = say_hi()
print(result)
~~~

This prints hi and then None.

### Naming functions

- Use snake_case, like calculate_total
- Start with a verb, like get_user or check_price
- Make the name say what it does

### Keep functions small

A good function does **one thing**. If you need the word and to describe it, split it in two.

~~~python
def is_even(number):
    return number % 2 == 0

print(is_even(4))
print(is_even(7))
~~~

### Functions calling functions

~~~python
def square(n):
    return n * n

def sum_of_squares(a, b):
    return square(a) + square(b)

print(sum_of_squares(3, 4))
~~~

### Define before you call

Python reads top to bottom. A function must be defined before the line that calls it runs.

~~~python
hello()

def hello():
    print("hi")
~~~

This gives NameError: name 'hello' is not defined, because the call comes first.

### Returning several values

~~~python
def min_max(values):
    return min(values), max(values)

low, high = min_max([4, 9, 2])
print(low, high)
~~~

### The pass placeholder

Use pass for a body you will write later.

~~~python
def todo_later():
    pass
~~~

### Why this matters for testing

Each test step becomes a function. A test then reads like a story.

~~~python
def build_email(run_id):
    return f"user_{run_id}@example.com"

print(build_email(17))
~~~

### The takeaway

Use def to name a block, parameters to feed it, and return to get a value back. Keep each function small, with a clear verb name.`,
  handsOn: `Let's write and call functions.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch functions.py
code functions.py
~~~

### Step 2: A function with no input

~~~python
def welcome():
    print("Welcome to the test lab")

welcome()
welcome()
~~~

### Step 3: Parameters and return

~~~python
def calculate_total(price, quantity):
    return price * quantity

print(calculate_total(250, 3))
~~~

### Step 4: Return versus print

~~~python
def show_double(n):
    print(n * 2)

def get_double(n):
    return n * 2

a = show_double(5)
b = get_double(5)
print(a, b)
~~~

Write down why a is None and b is 10.

### Step 5: A true or false function

Write is_adult(age) that returns True when age is 18 or more.

### Step 6: Call before define

Move a call above its definition and read the NameError.

### Deliverable

You defined four functions, used parameters and return, and saw the difference between print and return.`,
  challenge: `Create a file called function_lab.py.

1. Write square(n) that returns n times n
2. Write is_even(n) that returns True or False
3. Write full_name(first, last) that returns the two joined with a space
4. Write average(numbers) that returns the average of a list
5. Write a function that calls two of your other functions

Then answer:

- What is the difference between a parameter and an argument?
- Why does a function without return give None?
- Why must a function be defined before it is called?

Finish with one test step from a login flow that you would turn into a function.`,
  proTips: [
    "Name functions with a verb, in snake_case.",
    "Keep each function to one job.",
    "Use return to give a value back. Use print only to show something.",
    "Define a function before the line that calls it.",
    "Use pass as a placeholder while you plan.",
  ],
  commonMistakes: [
    {
      mistake: "Writing the function name without brackets and expecting it to run",
      fix: "Call it with brackets, like greet().",
    },
    {
      mistake: "Using print inside a function when you need the value",
      fix: "Use return so the caller can store and reuse the value.",
    },
    {
      mistake: "Putting code after return and expecting it to run",
      fix: "A function ends at return. Move that code above it.",
    },
    {
      mistake: "Calling a function before it is defined",
      fix: "Define it earlier in the file than the line that calls it.",
    },
    {
      mistake: "Forgetting the colon after the definition line",
      fix: "Every def line ends with a colon.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Parameters and return",
      code: `def add(a, b):
    return a + b

total = add(3, 4)
print(total)`,
    },
    {
      language: "python",
      title: "A true or false function",
      code: `def is_even(number):
    return number % 2 == 0

print(is_even(4))
print(is_even(7))`,
    },
    {
      language: "python",
      title: "Return several values",
      code: `def min_max(values):
    return min(values), max(values)

low, high = min_max([4, 9, 2])
print(low, high)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Defining functions",
      url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
    },
    {
      title: "Python Docs — Function definitions",
      url: "https://docs.python.org/3/reference/compound_stmts.html#function-definitions",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["python", "functions", "def", "return", "functions-modules"],
};

export default topic;