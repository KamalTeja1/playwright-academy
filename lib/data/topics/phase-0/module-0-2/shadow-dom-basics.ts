import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "shadow-dom-basics",
  title: "Shadow DOM Basics",
  summary:
    "Some components hide their inner HTML in a private box. Learn what that box is and how Playwright reaches inside.",
  whyItMatters:
    "Many modern sites use web components with shadow DOM. If you do not know about it, your XPath will fail and you will not understand why.",
  notes: `Shadow DOM is a **private box inside an element**, where a component keeps its own HTML and styles.

Think of a tiffin box. From outside you see one steel container. Inside there are separate compartments for dal, sabzi and rice. The compartments are a part of the tiffin, but they are sealed away from the rest of your bag.

Shadow DOM works the same way. A component keeps its inner parts in its own sealed compartment. Styles from the outside page do not leak in. Styles from inside do not leak out.

### Why do developers use it?

Imagine a company builds a date picker. Many teams use it on many pages. Each page has its own CSS. Without protection, page CSS could break the date picker.

Shadow DOM gives the date picker a safe space. Its inner design stays the same everywhere.

You will meet this in:

- Custom elements with names like my-card or app-header
- Design systems built with web components
- Embedded widgets such as video players and chat boxes

### What it looks like in HTML

A normal page element can have a shadow root attached to it. Here is a small example:

~~~html
<my-card></my-card>

<script>
  const host = document.querySelector("my-card");
  const root = host.attachShadow({ mode: "open" });
  root.innerHTML = "<h2>Order summary</h2><button>Pay now</button>";
</script>
~~~

The element my-card is called the **host**. The hidden part is the **shadow root**. The h2 and button live inside the shadow root.

### How DevTools shows it

Open DevTools and go to the Elements panel. Under my-card you will see a line that says #shadow-root (open). Expand it and you will find the h2 and the button.

So you can see it. But the page treats it as a separate tree.

### Open and closed

A shadow root has a mode.

- **open**: outside code can look inside it
- **closed**: outside code cannot look inside it

Most components use open. Playwright can work with open shadow roots. Closed ones are hard for any tool, because the browser hides them on purpose.

If you hit a closed shadow root, ask the developers for a test ID on the host, or for an open mode in the test build.

### What Playwright does for you

Here is the good news. Playwright CSS locators and role locators **pierce open shadow DOM by default**. You do not need special code.

~~~python
page.get_by_role("button", name="Pay now").click()
page.locator("my-card").get_by_text("Order summary")
~~~

Playwright goes inside the shadow root and finds the button, just like a normal one.

### The XPath catch

XPath does **not** pierce shadow roots. This is one more reason Playwright prefers other locators.

~~~text
//button[normalize-space()="Pay now"]
~~~

On a page where that button sits inside a shadow root, this finds nothing. The same goal with get_by_role works fine.

So when your XPath returns zero matches but you can clearly see the element, check for a #shadow-root line in DevTools.

### A quick checklist

When an element seems invisible to your locator:

1. Inspect it in DevTools
2. Look at its parents for #shadow-root
3. If it is open, switch to a role, text or CSS locator
4. If it is closed, ask for a test ID on the host element
5. Check also for an iframe, which is a different thing and needs frame_locator

### Shadow DOM is not an iframe

Beginners often mix these up.

- An iframe is a whole separate page inside your page
- A shadow root is a private part of the same page

Playwright handles iframes with frame_locator. It handles open shadow roots automatically.

The goal is simple. Know that the hidden box exists, so you are never confused when something visible cannot be found.`,
  handsOn: `Let's build a shadow DOM component and find things inside it.

### Step 1: Create the page

In your html-practice folder, create shadow-dom.html.

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Shadow DOM Practice</title>
  </head>
  <body>
    <h1>Checkout</h1>
    <order-card></order-card>

    <script>
      const host = document.querySelector("order-card");
      const root = host.attachShadow({ mode: "open" });
      root.innerHTML =
        "<h2>Order summary</h2>" +
        "<p>2 x Masala dosa</p>" +
        "<button>Pay now</button>";
    </script>
  </body>
</html>
~~~

### Step 2: Look in DevTools

Open the file in Chrome. Open DevTools and go to the Elements panel.

Find order-card. Expand it. You should see #shadow-root (open) and your h2, p and button inside.

### Step 3: Compare two searches in the Console

Run this XPath:

~~~javascript
$x("//button")
~~~

It returns an empty list. The button is hidden from XPath.

Now run this:

~~~javascript
document.querySelector("order-card").shadowRoot.querySelector("button")
~~~

This returns the button. You went through the shadow root on purpose.

### Step 4: Write the Playwright version

Write these on paper or in a notes file:

~~~python
page.get_by_role("button", name="Pay now").click()
page.locator("order-card").get_by_text("Order summary")
~~~

### Deliverable

You saw a shadow root in DevTools. You proved that XPath misses it. You wrote Playwright locators that go inside it.`,
  challenge: `Build a page with two custom elements: a profile-card and a notification-box.

Each one needs an open shadow root with:

- A heading
- A short paragraph
- One button

Use realistic text. For example, a profile card for Kavya with a Follow button, and a notification box with a Dismiss button.

Then answer these in a notes file:

1. What does DevTools show under each custom element?
2. Does the XPath //button find anything? Why not?
3. Write a Playwright role locator for the Follow button
4. Write a Playwright locator for the Dismiss button, scoped to the notification-box
5. How would the page change if you used mode closed?

Try the closed mode too. Check what shadowRoot returns in the Console. Notice how the page protects its inner box.`,
  proTips: [
    "If you can see an element in the browser but XPath finds nothing, look for #shadow-root in DevTools first.",
    "Role, text and label locators go through open shadow roots without any extra code.",
    "Scope your locator to the host element, like page.locator('order-card'), to keep the test readable.",
    "Ask developers to add a data-testid on the host element of important components.",
    "Remember that iframes and shadow roots are different problems with different fixes.",
  ],
  commonMistakes: [
    {
      mistake: "Using XPath to find elements inside a shadow root",
      fix: "XPath does not pierce shadow DOM. Switch to get_by_role, get_by_text or a CSS locator.",
    },
    {
      mistake: "Confusing shadow DOM with an iframe",
      fix: "An iframe is a separate page and needs frame_locator. A shadow root is part of the same page and open ones work automatically.",
    },
    {
      mistake: "Assuming every shadow root is open",
      fix: "Check the mode in DevTools. A closed root hides its inside, so ask for a test ID on the host element.",
    },
    {
      mistake: "Copying a long selector from DevTools that crosses shadow boundaries",
      fix: "Browser-copied selectors often break. Write a short locator using the role or text you can see.",
    },
    {
      mistake: "Thinking page CSS can style elements inside the shadow root",
      fix: "Shadow DOM blocks outside styles on purpose. This also means your CSS locators should not depend on outer class names.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "A custom element with an open shadow root",
      code: `<order-card></order-card>

<script>
  const host = document.querySelector("order-card");
  const root = host.attachShadow({ mode: "open" });
  root.innerHTML = "<button>Pay now</button>";
</script>`,
    },
    {
      language: "python",
      title: "Playwright finds elements inside open shadow DOM",
      code: `page.get_by_role("button", name="Pay now").click()

card = page.locator("order-card")
card.get_by_text("Order summary").wait_for()`,
    },
    {
      language: "javascript",
      title: "Reaching into a shadow root from the DevTools Console",
      code: `const host = document.querySelector("order-card");
host.shadowRoot.querySelector("button");`,
    },
  ],
  furtherReading: [
    {
      title: "MDN — Using shadow DOM",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
    },
    {
      title: "Playwright — Other locators (shadow DOM)",
      url: "https://playwright.dev/python/docs/other-locators",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["shadow-dom", "web-components", "locators", "web-fundamentals"],
};

export default topic;