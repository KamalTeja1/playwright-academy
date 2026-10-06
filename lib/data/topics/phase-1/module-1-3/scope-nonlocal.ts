import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "scope-nonlocal",
  title: "Scope, global and nonlocal",
  summary:
    "Where a name can be seen: local, enclosing and global scope, and how global and nonlocal change the rules.",
  whyItMatters:
    "Scope bugs create confusing NameError and UnboundLocalError messages. Understanding scope also explains closures and decorators later.",
  notes: `Scope means **where in your code a name can be used**.

Think of rooms in a house. A note stuck on your bedroom door is for you. A notice on the front door is for everyone. A function has its own room, and the file is the whole house.

### Local scope

A name created inside a function lives only there.

~~~python
def make():
    message = "inside"
    print(message)

make()
print(message)
~~~

The last line gives NameError, because message exists only inside make.

### Global scope

A name created at the top of the file is global. Functions can read it.

~~~python
site = "example.com"

def show():
    print(site)

show()
~~~

### The LEGB rule

Python looks for a name in this order:

1. Local, inside the current function
2. Enclosing, in any outer function
3. Global, at the top of the file
4. Built-in, such as len and print

It uses the first match it finds.

### Shadowing

Assigning inside a function makes a new local name, even if a global has the same name.

~~~python
count = 10

def change():
    count = 99
    print("inside", count)

change()
print("outside", count)
~~~

The global stays 10.

### The UnboundLocalError trap

~~~python
total = 0

def add_one():
    total = total + 1

add_one()
~~~

This gives UnboundLocalError. Because the function assigns to total, Python treats it as local, and reading it before it has a value fails.

### The global keyword

global lets a function change a top-level name.

~~~python
total = 0

def add_one():
    global total
    total = total + 1

add_one()
add_one()
print(total)
~~~

It works, but heavy use of global makes code hard to follow and test. Prefer to pass values in and return results out.

~~~python
def add_one(total):
    return total + 1

total = 0
total = add_one(total)
print(total)
~~~

### Changing a global list needs no global

Calling a method on a list does not rebind the name, so no keyword is needed.

~~~python
items = []

def add(item):
    items.append(item)

add("a")
print(items)
~~~

You only need global when you assign to the name itself.

### Nested functions and nonlocal

A function inside a function can read outer names. To change one, use nonlocal.

~~~python
def counter():
    count = 0

    def step():
        nonlocal count
        count += 1
        return count

    return step

next_number = counter()
print(next_number())
print(next_number())
~~~

The inner function remembers count between calls. This is called a closure. The prints show 1 and then 2.

### Loop variables leak

Names made in a for loop stay after the loop, unlike in some languages.

~~~python
for i in range(3):
    pass
print(i)
~~~

This prints 2.

### Comprehension variables do not leak

~~~python
squares = [n * n for n in range(3)]
print(squares)
~~~

The name n is not available outside the comprehension.

### Why this matters for testing

Shared state between tests, such as a global counter or a logged-in flag, is a major cause of flaky tests. Passing values explicitly keeps each test independent.

### The takeaway

Names are found in the order local, enclosing, global, built-in. Avoid global. Use nonlocal only for closures, and prefer passing values in and returning them out.`,
  handsOn: `Let's see scope in action.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch scope.py
code scope.py
~~~

### Step 2: Local versus global

~~~python
level = "global"

def show():
    level = "local"
    print(level)

show()
print(level)
~~~

### Step 3: Cause the error

~~~python
hits = 0

def record():
    hits = hits + 1

record()
~~~

Read the UnboundLocalError. Fix it first with global, then with a parameter and return.

### Step 4: A closure with nonlocal

~~~python
def make_counter():
    count = 0

    def step():
        nonlocal count
        count += 1
        return count

    return step

counter = make_counter()
print(counter(), counter(), counter())
~~~

### Step 5: Two counters

Create two counters from make_counter and show that each keeps its own count.

### Deliverable

You saw shadowing, caused and fixed UnboundLocalError and built a closure with nonlocal.`,
  challenge: `Create a file called scope_lab.py.

1. Show a local name that cannot be read outside its function
2. Show shadowing of a global name
3. Reproduce UnboundLocalError and fix it three ways: global, parameter and return, and a list
4. Build make_counter with nonlocal and create two independent counters
5. Show that a loop variable survives the loop, but a comprehension variable does not

Then answer:

- What does LEGB stand for?
- Why is global usually a bad idea?
- When does a function need the global keyword, and when not?

Finish with a short note on how shared global state can make tests flaky.`,
  proTips: [
    "Pass values in and return results out instead of using global.",
    "Remember LEGB: local, enclosing, global, built-in.",
    "Do not name variables after built-ins like list, str or max.",
    "Use nonlocal only inside nested functions.",
    "You only need global when you assign to the name itself.",
  ],
  commonMistakes: [
    {
      mistake: "Reading a global then assigning to it in the same function",
      fix: "Python treats it as local. Use global, or better, pass it in and return it.",
    },
    {
      mistake: "Expecting a name made inside a function to exist outside",
      fix: "Return the value from the function.",
    },
    {
      mistake: "Using global for many shared variables",
      fix: "Pass arguments and return values so the data flow is visible.",
    },
    {
      mistake: "Naming a variable list or str",
      fix: "That hides the built-in. Pick another name, such as items.",
    },
    {
      mistake: "Using nonlocal at the top level",
      fix: "nonlocal only works inside a nested function.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Shadowing",
      code: `count = 10

def change():
    count = 99
    print("inside", count)

change()
print("outside", count)`,
    },
    {
      language: "python",
      title: "Avoid global with parameter and return",
      code: `def add_one(total):
    return total + 1

total = 0
total = add_one(total)
print(total)`,
    },
    {
      language: "python",
      title: "Closure with nonlocal",
      code: `def counter():
    count = 0

    def step():
        nonlocal count
        count += 1
        return count

    return step

next_number = counter()
print(next_number())
print(next_number())`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Python scopes and namespaces",
      url: "https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces",
    },
    {
      title: "Python Docs — The nonlocal statement",
      url: "https://docs.python.org/3/reference/simple_stmts.html#the-nonlocal-statement",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "scope", "global", "nonlocal", "closures", "functions-modules"],
};

export default topic;