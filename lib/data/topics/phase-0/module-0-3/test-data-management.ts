import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "test-data-management",
  title: "Test Data Management",
  summary:
    "Where test data comes from, how to keep it clean and why hardcoded data is a trap.",
  whyItMatters:
    "Most automation time is lost to data problems, not code problems. Good data habits make tests stable and quick to write.",
  notes: `Test data is **the information your tests use**: users, products, orders, coupons, dates. If the data is wrong, a perfect test still fails.

Think of cooking for a wedding. The best recipe fails if the vegetables are missing, stale or in the wrong quantity. Testing is the same. The test is the recipe. The data is the ingredients.

### Why data causes trouble

- A test needs a user, but someone deleted it
- Two tests use the same account and disturb each other
- A coupon expired last week
- The product that the test expects has been renamed
- A test used a real customer's data by mistake

Many flaky tests come from data, not code.

### The hardcoded data trap

Hardcoded means typing a fixed value right into the test.

~~~python
page.get_by_label("Email").fill("priya@example.com")
page.get_by_label("Password").fill("Secret@123")
~~~

This works until:

- Priya's account is deleted
- The password is changed
- The test runs twice and the second run fails because the email already exists
- Two testers run the same test on a shared server

Hardcoded data is fine for tiny practice scripts. In real projects, it becomes a trap.

### Where test data can come from

**1. Created by the test itself**

The test makes what it needs, uses it and removes it. This is the most reliable way.

**2. Fixtures**

A fixture is a setup helper that prepares data before a test and cleans up after.

**3. Factories**

A factory is a small function that builds new data on demand, such as a user with a unique email.

**4. Seeded database**

The team loads a known set of data into the test database before the run. Every run starts from the same state.

**5. Static files**

JSON or CSV files hold lists of inputs, such as 50 pincodes to test.

**6. Environment variables**

Settings that change by environment, such as the base URL or a test account password. Secrets should never be written in code.

**7. Mocked data**

The test replaces a real API response with a fake one. Useful for rare cases, like a server error.

### A factory example

~~~python
import uuid

def make_user():
    unique = uuid.uuid4().hex[:8]
    return {
        "name": "Test User",
        "email": "user_" + unique + "@example.com",
        "password": "Secret@123",
    }
~~~

Every call gives a new email. The tests never clash.

### A fixture example

~~~python
import pytest

@pytest.fixture
def new_user(page):
    user = make_user()
    page.request.post("https://shop.example.com/api/users", data=user)
    yield user
    page.request.delete("https://shop.example.com/api/users/" + user["email"])
~~~

The fixture creates a user through the API, gives it to the test and deletes it afterwards. Using an API is much faster than clicking through the sign-up page.

### Secrets and environment variables

Never put real passwords or tokens in your code or in Git.

~~~python
import os

base_url = os.environ["BASE_URL"]
password = os.environ["TEST_PASSWORD"]
~~~

Each environment, such as staging and local, can set its own values.

### Data from files

~~~python
import json

with open("data/pincodes.json") as f:
    pincodes = json.load(f)
~~~

Then run the same test with each value using pytest parametrize.

### Data principles

- **Independent**: each test owns its data
- **Unique**: avoid clashes with a random suffix
- **Clean**: delete what you create, or reset the environment
- **Realistic**: use data that looks like real life
- **Safe**: never use real customer data. Use fake or masked data

### Privacy matters

Copying production data into a test system can break privacy rules and expose people's details. Use fake data or properly masked data.

### Dates and time

Be careful with dates. A test that expects "today" can fail at midnight. A coupon valid until next Friday will fail next Saturday. Build dates from the current time inside the test.

### The takeaway

Treat test data as part of your design. Let tests create their own data, keep secrets out of code and avoid fixed values that can break. Your suite will be calmer and much easier to maintain.`,
  handsOn: `Let's replace hardcoded data with a factory and a fixture.

### Step 1: Start with the problem

Write a test that signs up with a fixed email. Run it twice. Imagine the second run failing because the email exists.

~~~python
def test_signup_hardcoded(page):
    page.goto("https://shop.example.com/signup")
    page.get_by_label("Email").fill("priya@example.com")
    page.get_by_role("button", name="Sign up").click()
~~~

### Step 2: Write a factory

Create a function that gives a unique user each time:

~~~python
import uuid

def make_user():
    unique = uuid.uuid4().hex[:8]
    return {"email": "user_" + unique + "@example.com", "password": "Secret@123"}
~~~

### Step 3: Use it in the test

~~~python
def test_signup_unique(page):
    user = make_user()
    page.goto("https://shop.example.com/signup")
    page.get_by_label("Email").fill(user["email"])
    page.get_by_label("Password").fill(user["password"])
    page.get_by_role("button", name="Sign up").click()
~~~

### Step 4: Move secrets out

Replace one hardcoded password with an environment variable:

~~~bash
export TEST_PASSWORD="Secret@123"
~~~

Then read it in Python with os.environ.

### Step 5: Add a data file

Create pincodes.json with five valid and five invalid pincodes. Write a plan on how you would test each one.

### Deliverable

You compared a hardcoded test with a factory-based test, moved one secret to an environment variable and prepared a data file with ten pincodes.`,
  challenge: `You test a food delivery app. List the data each test needs and decide where it should come from.

1. Login test: needs a user
2. Order test: needs a user, a restaurant and a menu item
3. Coupon test: needs a valid coupon and an expired coupon
4. Search test: needs fifty different search words
5. Payment failure test: needs the payment service to return an error

For each one, choose from: created by the test, fixture, factory, seeded database, static file, environment variable or mock. Explain in one line.

Then:

- Write a factory for a unique order
- Explain how you would clean up after the order test
- List two rules for handling secrets
- Explain why copying production data into a test system is risky

Finish with a short paragraph on why hardcoded data is a trap.`,
  proTips: [
    "Let each test create its own data, and clean it up afterwards.",
    "Use a random suffix to keep emails and names unique.",
    "Create data through the API when you can. It is much faster than the UI.",
    "Keep passwords and tokens in environment variables, never in code.",
    "Build dates from the current time inside the test. Never type a fixed date.",
  ],
  commonMistakes: [
    {
      mistake: "Sharing one test account across many tests",
      fix: "Give each test its own user, or reset the data between tests.",
    },
    {
      mistake: "Hardcoding emails and passwords in test code",
      fix: "Use factories for unique data and environment variables for secrets.",
    },
    {
      mistake: "Using real customer data in tests",
      fix: "Use fake or properly masked data to protect privacy.",
    },
    {
      mistake: "Leaving test data behind",
      fix: "Delete what you create in a fixture, or reset the environment before each run.",
    },
    {
      mistake: "Typing a fixed date like 'next Friday' in a test",
      fix: "Calculate dates from the current time so the test works on any day.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "A factory for unique users",
      code: `import uuid

def make_user():
    unique = uuid.uuid4().hex[:8]
    return {
        "name": "Test User",
        "email": "user_" + unique + "@example.com",
        "password": "Secret@123",
    }`,
    },
    {
      language: "python",
      title: "A fixture that creates and removes a user",
      code: `import pytest

@pytest.fixture
def new_user(page):
    user = make_user()
    page.request.post("https://shop.example.com/api/users", data=user)
    yield user
    page.request.delete("https://shop.example.com/api/users/" + user["email"])`,
    },
    {
      language: "python",
      title: "Read settings from environment variables",
      code: `import os

base_url = os.environ["BASE_URL"]
password = os.environ["TEST_PASSWORD"]`,
    },
  ],
  furtherReading: [
    {
      title: "Pytest — Fixtures",
      url: "https://docs.pytest.org/en/stable/how-to/fixtures.html",
    },
    {
      title: "Playwright — Isolation",
      url: "https://playwright.dev/python/docs/browser-contexts",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["test-data", "fixtures", "factories", "environment-variables", "automation-concepts"],
};

export default topic;