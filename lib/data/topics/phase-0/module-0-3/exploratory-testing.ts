import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "exploratory-testing",
  title: "Exploratory Testing",
  summary:
    "Unscripted, curious testing where you learn, design and run tests at the same time. The place where humans beat scripts.",
  whyItMatters:
    "Scripts only find the bugs you thought of. Exploring finds the surprises. Great testers do both.",
  notes: `Exploratory testing means **learning the app while testing it, with no fixed script**. You look, think, try something, see what happens and decide your next move.

Think of visiting a new city without a tour plan. You walk down a lane, notice a tiny shop, step inside and discover something wonderful. A guided bus tour shows you the famous spots. Wandering shows you the real city. Scripts are the bus tour. Exploring is the wandering.

### What it is not

It is not random clicking. It is not lazy testing. It is **structured curiosity**. A good explorer has a goal, keeps notes and uses skill.

### Why scripts are not enough

An automated test checks exactly what you told it. It will never say, "This looks odd." It will never notice that a message is rude, that two buttons overlap on a small screen, or that an unexpected path crashes the app.

Humans can notice and wonder. That is why exploring finds different bugs from scripted tests.

### Session-based exploring

To keep exploring useful, many teams use short timed sessions.

- **Charter**: a one-line mission. For example, Explore the checkout with unusual payment inputs
- **Time box**: 60 to 90 minutes
- **Notes**: write what you tried, what you saw and what you doubt
- **Debrief**: share findings with the team

~~~text
Charter: Explore the address form with unusual input
Time: 60 minutes
Notes:
  - Pincode with letters: accepted! Possible bug
  - Very long name: text overflows the box
  - Emoji in address line: saved correctly
Questions: Should a pincode allow spaces?
~~~

### Ideas for what to try

- **Empty, tiny and huge input**: nothing, one character, ten thousand characters
- **Odd characters**: quotes, symbols, emoji, different languages
- **Wrong order**: click Back during payment, open two tabs, refresh in the middle
- **Boundaries**: minimum and maximum quantity, today's date, a leap day
- **Interruptions**: lose the network, lock the phone, switch apps
- **Different users**: new user, old user, admin, a user with no data
- **Different devices**: small phone, tablet, big monitor, slow connection

### Think like different people

- A hurried user who clicks everything twice
- A careful user who reads every word
- A curious child pressing every button
- Someone trying to misuse the app

### A helpful memory trick

Ask these questions as you go:

1. What does the app promise?
2. What could go wrong?
3. What did I not try yet?
4. What would surprise the developer?

### How it works with automation

They support each other.

- Explore a new feature first and learn how it behaves
- Report the bugs you find
- Automate the stable, repeated checks that you discover
- Use the time saved to explore the next area

Whenever exploring finds a bug, consider turning it into a Playwright test so it never returns.

~~~python
from playwright.sync_api import expect

def test_pincode_rejects_letters(page):
    page.goto("https://shop.example.com/address")
    page.get_by_label("Pincode").fill("56A001")
    page.get_by_role("button", name="Save").click()
    expect(page.get_by_text("Enter a valid pincode")).to_be_visible()
~~~

### Playwright as an explorer's helper

Playwright can help you explore. The codegen tool records your clicks into code. The Inspector lets you pause and look around. You can also use traces and screenshots as evidence for what you found.

### Recording your findings

Write down:

- What you did, in short steps
- What you expected and what happened
- Screenshots or short videos
- Your doubts, even if they are not bugs

### When to explore

- When a new feature arrives
- When the area is risky or complex
- When you have time between scripted runs
- When many bugs appeared in one place before

### The takeaway

Exploring is the human gift in testing. Use scripts for what you know and exploring for what you do not. Keep a charter, a timer and notes, and you will find the bugs that nobody planned for.`,
  handsOn: `Let's run a 30-minute exploratory session.

### Step 1: Choose a target

Pick a form on any practice site, such as a sign-up or contact form.

### Step 2: Write a charter

Write one line: Explore the sign-up form with unusual input and unexpected actions.

### Step 3: Set a timer

Set 30 minutes. Keep a notes file open.

### Step 4: Explore

Try things like these and write every result:

- Leave every field empty
- Use a single character in each field
- Paste a very long text
- Use emoji and symbols
- Press Back, then Forward
- Submit twice quickly
- Resize the window to phone size

### Step 5: Debrief

When the timer ends, list your findings in three groups: bugs, doubts and ideas for new tests.

### Step 6: Automate one finding

Pick one stable finding and write a Playwright test for it on paper.

### Deliverable

You have a charter, thirty minutes of notes, a list of findings in three groups and one Playwright sketch.`,
  challenge: `Run two exploratory sessions of 45 minutes each on an app you know well, such as a food delivery or a ticket booking site.

For each session:

1. Write a charter
2. Keep timed notes
3. List at least five findings: bugs, doubts or ideas
4. Rate each finding with a severity and a priority
5. Choose two findings that deserve automated tests and write their Playwright test names

Then answer:

- What did exploring find that a script would have missed?
- What did you not have time to explore?
- Which charter will you write for next time?

Finish with a short paragraph on why exploratory testing and automation need each other.`,
  proTips: [
    "Write a charter before you start. It keeps your exploring focused.",
    "Use short, timed sessions of 60 to 90 minutes.",
    "Keep notes while you test. You will forget details later.",
    "Try empty, huge, odd and out-of-order inputs.",
    "Turn useful findings into Playwright tests so bugs do not return.",
  ],
  commonMistakes: [
    {
      mistake: "Treating exploring as random clicking",
      fix: "Use a charter, a time box and notes. Structured curiosity finds more bugs.",
    },
    {
      mistake: "Not writing down what you tried",
      fix: "Keep running notes so others can learn from your session and you can repeat it.",
    },
    {
      mistake: "Believing automation makes exploring unnecessary",
      fix: "Scripts check known things. Exploring finds what nobody thought of.",
    },
    {
      mistake: "Only testing happy paths when exploring",
      fix: "Try wrong, empty, huge and unexpected input and actions.",
    },
    {
      mistake: "Never automating what exploring discovers",
      fix: "Turn stable, important findings into automated tests.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "A session charter and notes",
      code: `Charter: Explore the address form with unusual input
Time: 60 minutes
Notes:
  - Pincode with letters: accepted. Possible bug
  - Very long name: text overflows the box
  - Emoji in address line: saved correctly
Questions: Should a pincode allow spaces?`,
    },
    {
      language: "python",
      title: "A finding turned into a test",
      code: `from playwright.sync_api import expect

def test_pincode_rejects_letters(page):
    page.goto("https://shop.example.com/address")
    page.get_by_label("Pincode").fill("56A001")
    page.get_by_role("button", name="Save").click()
    expect(page.get_by_text("Enter a valid pincode")).to_be_visible()`,
    },
    {
      language: "bash",
      title: "Use codegen to explore and record",
      code: `playwright codegen https://example.com`,
    },
  ],
  furtherReading: [
    {
      title: "Playwright — Codegen",
      url: "https://playwright.dev/python/docs/codegen-intro",
    },
    {
      title: "Ministry of Testing — Exploratory testing",
      url: "https://www.ministryoftesting.com/",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["exploratory-testing", "manual-testing", "charter", "automation-concepts"],
};

export default topic;