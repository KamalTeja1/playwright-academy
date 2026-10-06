import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "how-to-ask-for-help",
    title: "How to ask for help the right way",
    summary:
      "Ask a good question and get a fast answer. Ask a bad one and wait forever.",
    whyItMatters:
      "Every developer needs help sometimes. The ones who ask well get answers in minutes. The ones who ask badly get ignored.",
    notes: `Asking for help is a skill. And like any skill, there is a right way and a wrong way.

The difference between a question that gets a great answer in two minutes and one that gets ignored for two days is not the person asking. It is the way they ask.

### The wrong way to ask

Help, my code does not work.

I have an error, please fix.

Playwright is broken.

Can someone tell me what is wrong?

These questions do not say what you were doing, do not show the error, do not show the code, do not show what you tried. They cannot be answered without twenty back-and-forth messages.

People ignore these questions. Not because they are mean. Because they cannot help until you give them information.

### The five-part formula for a good question

Every great question has these five parts.

**1. What you are trying to do.** For example: trying to click a Login button in Playwright.

**2. What you expected to happen.** For example: after the click, the dashboard loads.

**3. What actually happened.** For example: a timeout error after thirty seconds.

**4. What you tried.** For example: I tried get_by_role, get_by_text, and a CSS selector. All timed out. I checked the page and the button exists. I searched for the error and tried adding wait_for_load_state.

**5. The exact error and code.** Paste the exact error message and the minimal code that reproduces it.

### Putting it together

A great question looks like this.

Subject: Playwright click times out even though button exists

Hi all, I am trying to click a Login button in Playwright (Python 3.11, Playwright 1.40). Expected: after click, the dashboard loads. Actual: timeout after thirty seconds. Error: TimeoutError waiting for locator button with id login. Code: page dot goto login page, then locator of button, then click. Things I tried: get_by_role, get_by_text, adding wait for network idle, checking the DevTools Elements panel. The button is there. I searched for the error and tried the top three Stack Overflow suggestions. Nothing worked. Any ideas? Thanks.

This question will get an answer in minutes. Sometimes seconds.

### Why this works

- It respects the reader's time. No back and forth.
- It shows you have tried things.
- It provides the exact error and code.
- It is specific, not vague.

### The rubber duck method — try this first

Before asking, explain the problem out loud to an imaginary person, or a rubber duck on your desk. This is called rubber duck debugging.

Describe what the code should do, what it actually does, and where you are stuck. Half the time, you will solve the problem yourself during the explanation. Your brain notices gaps in logic when you articulate them.

Many developers have a literal rubber duck on their desk for this reason.

### Where to ask

Stack Overflow for technical questions with clear answers. Follow their How to ask guide or your question gets closed.

Reddit communities like r/learnpython, r/playwright, r/QualityAssurance. Casual and helpful.

Discord servers for Playwright and Pytest. Fast and interactive.

GitHub Issues if you think you found a bug in a library. Read their issue template first.

Your team's Slack or Teams if you are at work. Best for internal questions.

### When NOT to ask

If the answer is in the documentation, read the documentation. Nobody likes being asked questions they already answered in writing.

If you can find it with two minutes of Googling, do that first.

If you have not tried anything yet, try something first. Show effort.

The rule: search for twenty minutes, try three things, then ask.

### How to receive help well

When someone answers: thank them, say whether it worked, give them the new error and code if it did not, and post your solution when you find it yourself.

The last point matters. The next person with the same problem will find your question. If you solved it after asking, update the question with the solution. This is called closing the loop and it makes you a valued community member.

### The mindset

Asking for help is not weakness. It is efficiency.

The smartest people in the industry ask questions constantly. They just ask them well.

You will spend your whole career asking and answering questions. Learn to do both well, and you will be the person everyone wants on their team.`,
    handsOn: `Write a great question even without asking it.

### Step 1: Trigger a real problem

Create a small script that fails. If you do not have Playwright installed yet, use plain Python:

numbers = [1, 2, 3]
print(numbers[10])

You will get an IndexError.

### Step 2: Write a question using the five-part formula

Open a text file called my-question.md. Write:

- What I was trying to do
- What I expected to happen
- What actually happened
- What I tried
- The exact error and code

Do not post it anywhere yet. Just write it.

### Step 3: Read your own question

Imagine you are a stranger reading this question. Could you answer it in two minutes? If yes, it is a good question. If you still need to ask what were you doing or what is the exact error, the question needs work.

### Step 4: Now solve it yourself

Go back to the code. Read your own question. Try to fix it.

Most of the time, writing a clear question exposes the answer. This is the rubber duck effect.

### Deliverable

You wrote a well-structured question and probably solved the problem yourself in the process. That is exactly what experienced developers do every day.`,
    challenge: `Practice asking on a real forum.

Find a real problem. It could be a Python error you cannot fix, a Playwright issue, or a configuration problem.

Then:

1. Search for it first
2. Try three different solutions
3. If still stuck, write a full question using the five-part formula
4. Post it on r/learnpython, r/playwright, or Stack Overflow
5. Wait for answers
6. Respond to whoever helps
7. Post the solution when you figure it out

Track the experience: how long did it take to get an answer, was your question well-received, did you end up solving it yourself.

### Reflection

The first time you post on Stack Overflow, you might get downvoted. This is normal. Read their How to ask guide again, edit your question, and try once more. It is a rite of passage.

### Bonus

Answer someone else's question. Even if you only know the basics, you might know the answer to their specific problem. This is how the community works.`,
    proTips: [
      "Try the rubber duck method first. Explain the problem out loud. You will often solve it before asking.",
      "Include the exact error message, not a paraphrase. Copy and paste it.",
      "Show the minimal code that reproduces the problem. Do not paste five hundred lines.",
      "Say what you already tried. This proves you made an effort and saves the responder time.",
      "If you get a helpful answer, thank the person and post what worked. Close the loop.",
    ],
    commonMistakes: [
      {
        mistake: "Asking without trying anything first",
        fix: "Search for twenty minutes, try three things, then ask. Show effort.",
      },
      {
        mistake: "Not including the exact error message",
        fix: "Copy the error verbatim. Paraphrasing hides the answer.",
      },
      {
        mistake: "Pasting the entire codebase",
        fix: "Provide a minimal reproducible example. Just enough code to trigger the problem.",
      },
      {
        mistake: "Posting on Stack Overflow without reading their How to ask guide",
        fix: "Read it. Stack Overflow is strict. Bad questions get closed fast.",
      },
      {
        mistake: "Not responding when someone helps you",
        fix: "Thank them. Tell them if it worked. Post the solution if you found it yourself.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The five-part question formula",
        code: `1. What I was trying to do
2. What I expected to happen
3. What actually happened
4. What I tried
5. The exact error and minimal code`,
      },
      {
        language: "text",
        title: "Bad question vs good question",
        code: `BAD:
Help, my code does not work. Any ideas?

GOOD:
Playwright button click times out after 30 seconds.
Expected: dashboard loads.
Actual: TimeoutError.
Error: TimeoutError: Timeout 30000ms exceeded waiting for locator.
Tried: get_by_role, get_by_text, wait_for_load_state.
Code: [pasted]
Any ideas?`,
      },
    ],
    furtherReading: [
      {
        title: "Stack Overflow — How to ask a good question",
        url: "https://stackoverflow.com/help/how-to-ask",
      },
      {
        title: "Rubber Duck Debugging",
        url: "https://rubberduckdebugging.com/",
      },
      {
        title: "Writing the perfect question",
        url: "https://codeblog.jonskeet.uk/2010/08/29/writing-the-perfect-question/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "soft-skills", "communication"],
  };

export default topic;
