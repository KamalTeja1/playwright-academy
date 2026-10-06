import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "css-specificity-advanced",
  title: "CSS Specificity (Advanced)",
  summary:
    "When two CSS rules fight, specificity decides the winner. Learn how it is scored and why it matters for selectors and tests.",
  whyItMatters:
    "Specificity explains why a style does not apply and why some selectors are heavy. It also shows why short selectors are easier to live with.",
  notes: `Specificity is **the scoring system CSS uses to pick a winner** when more than one rule targets the same element.

Think of a cricket match with a third umpire. Many appeals come in. The umpire does not pick the loudest one. He follows a fixed rulebook. CSS does the same. It scores each selector, and the higher score wins.

### Why should a tester care?

You will not write much CSS. But you will read selectors every day. Specificity teaches you which selectors are heavy and fragile. It also explains odd page behaviour, like a button that refuses to change colour.

### The score has three parts

Count three things in a selector and write them as three numbers, like 1-2-3.

- **IDs**: the first number. Each #id adds one
- **Classes, attributes and pseudo-classes**: the second number. Each .class, [attr] or :hover adds one
- **Tags and pseudo-elements**: the third number. Each tag like div or p adds one

~~~text
p                        0-0-1
.card                    0-1-0
p.card                   0-1-1
#login                   1-0-0
#login .field input      1-1-1
a[href]:hover            0-2-1
~~~

### How to compare

Compare from left to right. The first number matters most.

- 1-0-0 beats 0-9-9. One ID outweighs any number of classes
- 0-2-0 beats 0-1-5. Two classes beat one class and five tags

Think of it like comparing train ticket numbers digit by digit, starting from the left. The left digit decides first.

### Ties

If two rules have the same score, the one written **later** in the stylesheet wins.

~~~text
.btn { color: blue; }
.btn { color: red; }
~~~

Both are 0-1-0. The second wins, so the button is red.

### Inline styles and important

- An inline style attribute beats every selector
- A rule marked !important beats normal rules, even inline styles

Overusing !important makes CSS very hard to manage. Developers use it as a last resort.

### The star and combinators

- The star selector adds nothing
- Combinators like space, > and + add nothing by themselves
- Only the parts they connect are counted

~~~text
ul > li a       0-0-3
.menu > a       0-1-1
~~~

### Special cases

- :not(.x) counts as what is inside the brackets, so :not(.x) is 0-1-0
- :is() and :where() differ. :is() takes the highest score inside it. :where() always counts as zero
- Inherited values lose against any direct rule, even a weak one

### A worked example

~~~text
<button id="save" class="btn primary">Save</button>

button               0-0-1
.btn                 0-1-0
.btn.primary         0-2-0
button.primary       0-1-1
#save                1-0-0
~~~

If all five set the colour, #save wins. Remove it and .btn.primary wins.

### Why this links to locators

Playwright uses CSS selectors to find elements, but it does not score them. Specificity does not decide which element is found. A selector just matches or does not match.

Still, the idea is useful:

- Heavy selectors, like form#login.login-form div.field input.input, are specific. They are also tightly tied to structure
- Light selectors, like [data-testid="email-input"], are easy to read and change
- When you read page CSS to understand a visual bug, specificity tells you which rule wins

### Debugging a style that will not apply

1. Inspect the element
2. Look at the Styles pane. Crossed-out rules lost the fight
3. Find the winning rule above it
4. Compare their scores
5. Report it to the developers with both selectors

### Using the DevTools help

Hover over a selector in the Styles pane. Chrome shows its specificity score in a small tooltip. You do not need to count by hand every time.

### The takeaway

Keep selectors short and meaningful. Use specificity as a way to read other people's CSS, not as a trick to write your own. When tests need a stable handle, a data-testid beats any clever selector.`,
  handsOn: `Let's see specificity win and lose.

### Step 1: Create the page

In your html-practice folder, create specificity.html:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Specificity Practice</title>
    <style>
      button { color: gray; }
      .btn { color: blue; }
      .btn.primary { color: green; }
      #save { color: red; }
    </style>
  </head>
  <body>
    <button id="save" class="btn primary">Save</button>
    <button class="btn primary">Publish</button>
    <button class="btn">Cancel</button>
    <button>Help</button>
  </body>
</html>
~~~

### Step 2: Predict first

Before opening the page, write the expected colour of each button. Then open it and compare.

### Step 3: Inspect

Right-click the Save button and choose Inspect. In the Styles pane, find the crossed-out rules. Note which rule won.

### Step 4: Read the scores

Hover over each selector in the Styles pane and read the specificity tooltip.

### Step 5: Experiment

Delete the #save rule in the Styles pane. See which colour takes over. Then add a rule with !important in the Styles pane and watch it win.

### Step 6: Link to locators

Write two selectors for the Save button in your notes. One heavy, one light:

~~~text
button#save.btn.primary
[data-testid="save-button"]
~~~

Say which one you would prefer in a Playwright test and why.

### Deliverable

You predicted colours, read specificity tooltips, saw rules lose and win, and compared a heavy selector with a light one.`,
  challenge: `Calculate the specificity for each selector. Write it as three numbers.

1. nav a
2. .menu .item
3. #header .logo img
4. a[href]:hover
5. ul > li.active > a
6. :not(.disabled)

Then, for each pair, say which rule wins and why:

- #box vs .box.box.box
- p.note vs .note
- Two identical selectors, where one appears later in the file

Finally, create a small page where a button stays the wrong colour because of a stronger rule. Use DevTools to find the winning rule. Write two lines explaining how you found it, and how you would report it to a developer.`,
  proTips: [
    "Count in three parts: IDs, then classes and attributes, then tags. Compare left to right.",
    "One ID beats any number of classes.",
    "Equal scores go to the rule written later.",
    "Crossed-out rules in the Styles pane lost the fight. Look above them for the winner.",
    "Keep your own selectors short. Specificity is for reading, not for cleverness.",
  ],
  commonMistakes: [
    {
      mistake: "Thinking ten classes beat one ID",
      fix: "Specificity is not a single total. Compare each part from the left. One ID wins over any number of classes.",
    },
    {
      mistake: "Believing the louder or longer selector always wins",
      fix: "Count the score properly. A short ID selector can beat a long chain of tags and classes.",
    },
    {
      mistake: "Fixing a style problem with !important",
      fix: "Find the winning rule first. Use a cleaner selector or remove the clash instead.",
    },
    {
      mistake: "Thinking Playwright picks elements by specificity",
      fix: "Playwright selectors only match or do not match. Specificity applies to CSS styling, not to locating.",
    },
    {
      mistake: "Counting combinators or the star as points",
      fix: "Combinators and the star add nothing. Count only IDs, classes, attributes, pseudo-classes and tags.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Specificity scores",
      code: `p                        0-0-1
.card                    0-1-0
p.card                   0-1-1
#login                   1-0-0
#login .field input      1-1-1
a[href]:hover            0-2-1`,
    },
    {
      language: "text",
      title: "Which colour wins?",
      code: `button        { color: gray; }
.btn          { color: blue; }
.btn.primary  { color: green; }
#save         { color: red; }

<button id="save" class="btn primary">Save</button>
Result: red`,
    },
    {
      language: "python",
      title: "A light locator beats a heavy one",
      code: `# Heavy and fragile
page.locator('form#login.login-form div.field input.input[type="email"]')

# Light and clear
page.get_by_label("Email")
page.get_by_test_id("email-input")`,
    },
  ],
  furtherReading: [
    {
      title: "MDN — Specificity",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
    },
    {
      title: "Chrome DevTools — View and edit CSS",
      url: "https://developer.chrome.com/docs/devtools/css",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["css", "specificity", "selectors", "devtools", "web-fundamentals"],
};

export default topic;