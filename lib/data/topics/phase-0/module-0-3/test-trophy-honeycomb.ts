import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "test-trophy-honeycomb",
  title: "Test Trophy and Test Honeycomb",
  summary:
    "Two other ways to think about test mix. The trophy leans on integration tests. The honeycomb focuses on how parts talk to each other.",
  whyItMatters:
    "The pyramid is not the only model. Teams use different shapes for different kinds of apps, and you will hear these names at work.",
  notes: `The pyramid is popular, but it is not the only shape. Two others you will hear are the **test trophy** and the **test honeycomb**.

Think of different ways to pack a lunch box. One person packs lots of small snacks. Another packs a big main dish. A third packs a balanced thali. All are valid. It depends on who is eating.

### Why other models exist

The pyramid came from a time when apps were large single programs. Today many apps are built from small services, APIs and front-end libraries. In such apps, the most valuable bugs often hide **between** parts, not inside one function. So people suggested new shapes.

### The test trophy

The trophy was made popular in the front-end world. From bottom to top it has these layers:

1. **Static checks**: type checking and linting catch typos and wrong types as you write code
2. **Unit tests**: a smaller layer for tricky logic
3. **Integration tests**: the biggest layer
4. **End-to-end tests**: a thin layer on top

The idea is simple. Integration tests give the **best value for effort**. They test several pieces working together, but still run quickly. Too many tiny unit tests can test code details that users never care about.

~~~text
        E2E          few
     Integration     MOST
       Unit          some
      Static         always on
~~~

Think of checking a thali. Tasting each ingredient alone tells you little. Tasting the whole plate tells you if it works.

### The test honeycomb

The honeycomb is often used for systems made of many small services, called microservices.

Here the biggest layer is **integration tests**, meaning tests of how services talk to each other. Unit tests (called implementation detail tests) and full end-to-end tests (called integrated tests) are both small.

The idea: in a service-based app, most failures happen at the **contracts** between services. So test those most.

~~~text
 Implementation detail   few
 Integration             MOST
 Integrated (E2E)        few
~~~

You may also hear people say a good suite should cover accessibility and performance too. These are extra concerns that sit across layers, not separate layers.

### How to compare the three

- **Pyramid**: many unit tests, few E2E. Good for logic-heavy code
- **Trophy**: many integration tests. Good for UI and front-end apps
- **Honeycomb**: many service-to-service tests. Good for microservices

### Which should you use?

There is no single winner. Ask these questions:

- Where do bugs usually appear in this app?
- Which tests are fast enough to run on every code change?
- Which tests give the team real confidence?

A calculation engine for loan interest will lean on unit tests. A React shopping site will lean on integration tests of components working together. A system of twenty services will lean on contract and integration tests.

### What this means for Playwright

In all three models, Playwright stays at the top as a **small, focused set** of user journeys. What changes is how much you rely on it.

In an integration-heavy model, you may use Playwright for API tests, since it can call endpoints without a browser.

~~~python
response = page.request.post(
    "https://shop.example.com/api/orders",
    data={"item": "Masala dosa", "qty": 2},
)
assert response.status == 201
~~~

### Do not worship shapes

Models are tools for thinking. Do not argue about which shape is correct. Look at your own app, find where it breaks, and put tests there.

### The takeaway

Know the names so you can follow team talks. Then choose the mix that gives your team the most confidence for the least pain.`,
  handsOn: `Let's compare the three shapes on one app.

### Step 1: Pick an app type

Choose one: a calculator app, a React shopping site or a system with many small services such as a food delivery platform.

### Step 2: Guess where bugs live

Write three places you think bugs would appear. For example, wrong calculations, parts of the screen not talking to each other, or one service sending wrong data to another.

### Step 3: Draw three shapes

Draw the pyramid, trophy and honeycomb side by side on paper.

### Step 4: Mark the biggest layer

For your app, mark which layer you would make biggest in each shape. Write one line on why.

### Step 5: Choose

Pick the shape you would use for your app. Write two reasons.

### Step 6: Write one Playwright API idea

Write an API-based Playwright check for the app. It should call an endpoint and check the status.

### Deliverable

You have three drawings, a chosen shape for your app with reasons and one Playwright API idea.`,
  challenge: `Imagine three projects:

A. A tax calculator with lots of rules and no screens beyond a form
B. A React-based online store with many reusable components
C. A ride booking platform with 25 small services

For each project:

1. Say which model fits best: pyramid, trophy or honeycomb
2. Name the biggest layer and explain why
3. Name one risk if the team picks the wrong shape
4. Say what role Playwright would play

Then write four lines on why static checks, like linting, make a good base layer in the trophy.

Finish with one sentence on why arguing about shapes is less useful than finding where your app breaks.`,
  proTips: [
    "Learn the names so you can follow team conversations.",
    "Ask where bugs usually appear. Put more tests there.",
    "Static checks are cheap and run on every save. Turn them on early.",
    "In service-based apps, focus on the contracts between services.",
    "Whatever the model, keep Playwright tests for the key user journeys.",
  ],
  commonMistakes: [
    {
      mistake: "Treating one model as the only correct one",
      fix: "Each shape suits a different app. Pick the one that matches where your bugs appear.",
    },
    {
      mistake: "Dropping unit tests completely because of the trophy",
      fix: "The trophy still has unit tests for tricky logic. It just gives integration tests more weight.",
    },
    {
      mistake: "Confusing the honeycomb with the pyramid",
      fix: "The honeycomb is about service-to-service testing. Its biggest layer is integration, not unit.",
    },
    {
      mistake: "Spending time debating shapes instead of testing",
      fix: "Use shapes as a thinking aid, then write tests where the risk is highest.",
    },
    {
      mistake: "Using many browser tests as a replacement for integration tests",
      fix: "Use API-level checks for integration. Keep browser tests for user journeys.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Trophy layers",
      code: `E2E          few, important journeys
Integration  the biggest layer
Unit         some, for tricky logic
Static       always on (types, lint)`,
    },
    {
      language: "text",
      title: "Comparing the three models",
      code: `Pyramid   -> many unit tests       -> logic-heavy code
Trophy    -> many integration      -> UI and front-end apps
Honeycomb -> many service tests    -> microservices`,
    },
    {
      language: "python",
      title: "An API-level integration check with Playwright",
      code: `response = page.request.post(
    "https://shop.example.com/api/orders",
    data={"item": "Masala dosa", "qty": 2},
)
assert response.status == 201
assert response.json()["qty"] == 2`,
    },
  ],
  furtherReading: [
    {
      title: "Kent C. Dodds — The Testing Trophy",
      url: "https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications",
    },
    {
      title: "Spotify Engineering — Testing of Microservices",
      url: "https://engineering.atspotify.com/2018/01/testing-of-microservices/",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["test-trophy", "test-honeycomb", "testing-models", "automation-concepts"],
};

export default topic;