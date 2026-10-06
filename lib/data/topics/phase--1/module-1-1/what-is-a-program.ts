import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "what-is-a-program",
    title: "What is a computer program?",
    summary:
      "The plain-English answer to what code actually is — no jargon, no fear.",
    whyItMatters:
      "You cannot write a test until you understand what a program is. This is the very first step, and it's simpler than you think.",
    notes: `Let's start with the simplest possible question. Forget coding, forget testing, forget Playwright. Just answer this:

**What is a computer program?**

A computer program is a **list of instructions** that tells a computer what to do, step by step, in order.

That's it. That's the whole definition.

### A real-life example

Think of making chai. You don't just say "make chai" to someone and expect perfect chai. You give step-by-step instructions:

1. Boil water
2. Add tea leaves
3. Add milk
4. Add sugar
5. Stir for two minutes
6. Strain into a cup

That's a **program**. Someone (or something) follows each step in order. If you skip a step or do them out of order, the chai is ruined.

A computer program works exactly the same way. The only difference is that instead of tea leaves and milk, it's dealing with numbers, text, and actions on a screen.

### Another example — the auto meter

When you sit in an auto, the meter starts at a base fare and adds money per kilometre. Behind that meter is a tiny program:

1. Start with base fare (say 30 rupees)
2. Wait for the auto to move
3. For every kilometre travelled, add 15 rupees
4. Display the total
5. Repeat steps 2 to 4 until the ride ends

Every time you take an auto, you're seeing a program run in real time. The auto driver didn't calculate that — the program did.

### What a program is NOT

- It's not magic. It's a list of steps. Every step does something small.
- It's not smart. It does exactly what you tell it. If you tell it to add 15 for every km but you meant 12, it will happily charge the wrong amount forever.
- It's not alive. It doesn't get tired, bored, or creative. It just follows orders.

### Programs are everywhere

Once you start noticing them, you'll see them everywhere:

- **WhatsApp** — a program that sends and receives messages
- **Your bank's ATM** — a program that checks your PIN, gives cash, updates balance
- **Google Maps** — a program that finds the fastest route
- **The traffic signal** — a program that cycles red, yellow, green on a timer
- **Swiggy** — a program that takes your order, finds a delivery partner, tracks the route

Every one of these is a very long list of very simple instructions.

### Why this matters for testing

When you become a Playwright engineer, you'll write tests. Each test is also a **program** — a list of instructions that a computer follows:

1. Open the browser
2. Go to this URL
3. Click the Login button
4. Type the username
5. Type the password
6. Click Submit
7. Check that the dashboard loaded

Every test is just steps. Every step is just an instruction. Once you see code this way, nothing feels scary anymore.

You're not learning to speak to computers. You're learning to write clear, ordered instructions for a very obedient assistant who takes everything literally.`,
    handsOn: `No code yet. Just observation.

### Step 1: Pick one app on your phone

Choose any app you use daily — WhatsApp, Swiggy, Google Maps, PhonePe, anything.

### Step 2: Write down a user flow

In a notebook or a text file, write down what happens when you use one specific feature.

Example — sending a WhatsApp message:

1. Open WhatsApp
2. Tap on a contact
3. Type a message
4. Tap send
5. Message appears in the chat
6. Contact receives it

### Step 3: Break each step down further

Now break step 4 (tap send) into smaller steps:

1. You tap the send icon
2. The app reads the text you typed
3. The app packages it with your ID and the contact's ID
4. The app sends it to WhatsApp's server
5. The server forwards it to the contact's phone
6. Your phone shows a tick mark

### Step 4: Notice the pattern

Every app works this way. Every feature is a chain of small steps. Somewhere behind all of them is a program — a list of instructions — doing exactly what you designed.

### Deliverable

You wrote down a user flow with at least 5 steps and broke one step into 3 or more sub-steps. You now think in instructions, which is exactly what a program is.`,
    challenge: `Now design a program on paper — no code.

Choose one:

**Option A — Railway ticket booking**

Write the step-by-step instructions a program would follow when someone books a train ticket on IRCTC. Start from "user opens the site" and end at "user gets an email confirmation".

Aim for at least 15 steps.

**Option B — Split a restaurant bill**

Three friends eat at a restaurant. The bill is 1,500 rupees. They want to split it equally and add a 5 percent tip.

Write the steps a program would follow to calculate and display each person's share.

Hint: it starts with "read the total amount from the user", and ends with "display the amount each person should pay".

### Bonus

Look at your steps and ask: where could things go wrong? What if the user enters "abc" instead of a number? What if the network fails halfway? A good program thinks about these. A great program handles them.`,
    proTips: [
      "Programs are just ordered steps. If you can write down a recipe, you can write a program.",
      "The computer never guesses what you meant. If it seems 'stupid', it's because the instruction was unclear.",
      "Most bugs happen because a step was in the wrong order, or a step was missed. Debugging is finding the missing or misordered step.",
      "When you get stuck, say the steps out loud. This simple habit solves 80 percent of coding problems.",
      "Every big app (WhatsApp, Instagram, UPI) is made of thousands of tiny programs that each do one small thing well.",
    ],
    commonMistakes: [
      {
        mistake: "Thinking a program is one big complicated thing",
        fix: "It's always a series of small, simple steps. If a program feels complicated, it just means the list is long — not that any single step is hard.",
      },
      {
        mistake: "Assuming the computer 'knows what you meant'",
        fix: "It never does. It does exactly what you wrote. If the output is wrong, the instruction was wrong.",
      },
      {
        mistake: "Skipping the planning step and jumping straight to writing code",
        fix: "Write the steps on paper first. Every professional does this. It saves hours.",
      },
      {
        mistake: "Confusing a program with the thing that runs it",
        fix: "The program is the recipe. The computer is the cook. Same recipe can run on any computer.",
      },
      {
        mistake: "Thinking programs have to be about maths or computers",
        fix: "A program can be about anything — chai, chess, cricket scores, wedding budgets. It's just ordered steps.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "A program in plain English (pseudo-code)",
        code: `START
  Ask the user for their name
  Store the name in memory
  Print "Hello, " followed by the name
END`,
      },
      {
        language: "text",
        title: "The same program in Python",
        code: `name = input("What is your name? ")
print("Hello, " + name)`,
      },
      {
        language: "text",
        title: "The same program in JavaScript",
        code: `const name = prompt("What is your name?");
console.log("Hello, " + name);`,
      },
    ],
    furtherReading: [
      {
        title: "Khan Academy — Intro to programming",
        url: "https://www.khanacademy.org/computing/computer-programming",
      },
      {
        title: "Code.org — What is a program?",
        url: "https://code.org/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 10,
    tags: ["phase--1", "foundations", "concepts"],
  };

export default topic;
