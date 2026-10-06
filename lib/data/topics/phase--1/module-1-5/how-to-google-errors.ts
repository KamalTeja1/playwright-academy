import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "how-to-google-errors",
    title: "How to Google an error properly",
    summary:
      "Search is a skill. Learn to find the exact answer in seconds, not hours.",
    whyItMatters:
      "Every working developer Googles constantly. The difference between a fast developer and a slow one is often just how they search.",
    notes: `Every developer Googles. The best developers Google better than everyone else.

Search is not a sign of weakness. It is a professional skill. But it is a skill most people never learn to do well.

### The wrong way to search

Wrong: python error help

This returns hundreds of millions of results. None of them are your problem.

Wrong: my code does not work

This describes nothing. Google cannot help.

Wrong: playwright

Way too broad. You will get the homepage, not the answer to your question.

### The right way — three principles

**Principle 1: Include the exact error message**

Copy the last line of your error and paste it into Google, wrapped in quotes. Quotes tell Google to search for this exact phrase. Now you get results about your exact error.

**Principle 2: Include the technology**

Add the language and library. For example, add python and playwright to the search. Now Google knows the context.

**Principle 3: Describe what you were doing**

Add context in plain words. For example: python playwright timeout waiting for selector click.

This tells search engines the context: you tried to click something and it timed out.

### The formula

Here is the exact formula that works for almost every error:

"EXACT ERROR MESSAGE" TECHNOLOGY WHAT YOU WERE DOING

For example:

"SyntaxError: unexpected EOF while parsing" python input

"TimeoutError: waiting for selector" playwright python click

"ModuleNotFoundError: No module named pytest" python

### Shortcut: use Stack Overflow

Most errors you will hit already have answers on Stack Overflow.

If your Google search shows a Stack Overflow result, click it first. It is usually the correct answer, voted up by thousands of developers.

Read the accepted answer (marked with a green checkmark). Then read the top two or three other answers. Sometimes the accepted answer is outdated and a newer answer works better for your version.

### When Stack Overflow does not help

**Trick 1: Search the error without quotes.** Removing the quotes gives you more results, including ones with slightly different wording.

**Trick 2: Add the year.** For example: python playwright timeout 2024. Recent results are usually more relevant for fast-moving libraries.

**Trick 3: Search GitHub issues.** Go to github.com and search for the error inside the library's issues. This finds real bugs and discussions from the library maintainers.

**Trick 4: Search the docs directly.** Most libraries have a search feature in their docs. Playwright does. If you know the general topic, search the docs first. It is often faster than Google.

### The mindset

Beginners think: I should know this without looking it up.

Experts think: the answer is thirty seconds away. Let me find it.

Nobody remembers every API. Nobody remembers every error. What matters is how fast you can find the answer and apply it.

### A real example

Say you get this error:

TimeoutError: Timeout 30000ms exceeded waiting for locator text equals Submit

Wrong search: python error

Right search: playwright python "Timeout 30000ms exceeded waiting for locator"

You will get Playwright docs, Stack Overflow threads, and GitHub issues. Within sixty seconds you will know:

- Playwright waited thirty seconds for a Submit button that never appeared
- The button was probably not on the page, or was inside an iframe, or had a different label
- Your fix is to inspect the actual page and use the correct locator

### What good searchers actually do

They copy the error message verbatim. They never retype it. This avoids typos.

They wrap the exact message in quotes. This filters out noise.

They add the technology. This narrows the results.

They read three to five results, not just the first. The best answer is often the second or third.

They click through to the source (the docs or the GitHub issue), not the blog post summary.

They bookmark useful pages. Their browser has a folder called reference full of these.

### When to stop searching and ask for help

Searching is fast, but sometimes you spend two hours on a problem that a colleague could solve in two minutes.

Rule of thumb: search for twenty minutes. If still stuck, ask. The next topic covers exactly how to ask well.`,
    handsOn: `Let us practice searching for real errors.

### Step 1: Generate a real error

Run this Python code: print("Hello" + 5)

You will see: TypeError: can only concatenate str (not int) to str

### Step 2: Search the wrong way first

Open Google. Search: python error

Notice: the results are generic, none of them address your specific error, and you would have to click ten links to find anything useful.

### Step 3: Search the right way

Now search: python "can only concatenate str (not int) to str"

Notice: the first result is usually Stack Overflow with the exact answer. The second and third results are also relevant. You can read the fix in under sixty seconds.

### Step 4: Apply the fix

From the search results, you learned: convert the number to a string first.

Fix the code: print("Hello" + str(5))

Run it. It works.

### Deliverable

You triggered a real error, searched for it the wrong way, searched for it the right way, and applied the fix in under two minutes.`,
    challenge: `Build your search muscle with three real errors.

### Error 1

Run code that uses an undefined variable. Expected search: python "NameError: name undefined_variable is not defined"

### Error 2

Run code that imports a module that is not installed. Expected search: python "ModuleNotFoundError: No module named notinstalledmodule"

### Error 3

Run code that accesses a list index out of range. Expected search: python "IndexError: list index out of range"

For each error:

- Copy the exact error message
- Search with the formula
- Read the top three results
- Apply the fix
- Note down how long it took

### Reflection

Write down how long each search took. If you can find and fix an error in under two minutes, you are on the right track. If a search took longer than five minutes, what went wrong?

### Bonus

Create a text file called searched-errors.md. Every time you search for an error from now on, add an entry with the error, the search you used, the fix, and the link. In six months, this file will save you hours.`,
    proTips: [
      "Always wrap the exact error message in quotes. This is the single biggest improvement you can make.",
      "Use site:github.com to search GitHub issues directly. Add the library name for precision.",
      "Stack Overflow answers with a green checkmark are usually best, but read the next two answers too. Sometimes they are newer.",
      "If a Stack Overflow answer is old, check the date. A 2015 answer for a 2024 library may be outdated.",
      "Bookmark pages you find useful. Build a personal reference folder.",
    ],
    commonMistakes: [
      {
        mistake: "Retyping the error message instead of copying it",
        fix: "Copy and paste. Always. Retyping introduces typos that hide the answer.",
      },
      {
        mistake: "Searching without quotes around the error",
        fix: "Without quotes, Google searches word by word, ignoring your exact phrasing. Quotes preserve it.",
      },
      {
        mistake: "Reading only the first result",
        fix: "Read three to five results. The best answer is often not the first.",
      },
      {
        mistake: "Assuming a Stack Overflow answer is correct because it has many upvotes",
        fix: "Check the date and the version. Older answers may not apply to your case.",
      },
      {
        mistake: "Searching for two hours without asking for help",
        fix: "Twenty minutes is the limit. If still stuck, ask.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The search formula in action",
        code: `Wrong:  python error
Right:  "TypeError: can only concatenate str (not int) to str" python

Wrong:  playwright not working
Right:  playwright python "Timeout 30000ms exceeded waiting for locator"

Wrong:  how to fix my code
Right:  python "ModuleNotFoundError: No module named pytest" install`,
      },
      {
        language: "text",
        title: "Bonus search operators",
        code: `"exact phrase"          Search the exact phrase
site:github.com         Search only GitHub
site:stackoverflow.com  Search only Stack Overflow
-filetype:pdf           Exclude PDFs
2024                    Prefer recent results`,
      },
    ],
    furtherReading: [
      {
        title: "Stack Overflow — How to ask a good question",
        url: "https://stackoverflow.com/help/how-to-ask",
      },
      {
        title: "Google — Advanced search operators",
        url: "https://support.google.com/websearch/answer/2466433",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "soft-skills", "search"],
  };

export default topic;
