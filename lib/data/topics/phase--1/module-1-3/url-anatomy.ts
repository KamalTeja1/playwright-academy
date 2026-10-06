import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "url-anatomy",
    title: "What is a URL? Breaking it down",
    summary:
      "Protocol, domain, path, query, fragment — the five parts of every URL.",
    whyItMatters:
      "Every Playwright test navigates to URLs. Every assertion might check a URL. If you can't read a URL, you're flying blind.",
    notes: `You type URLs every day. But have you ever looked at one closely?

Here's a typical URL:

https://shop.example.com/products/shoes?color=red&size=10#reviews

Read it out loud and it looks like gibberish. But every part has a purpose. Let's break it down.

### The five parts

**1. Protocol**

https

The protocol tells the browser **how** to talk to the server.

- http — unencrypted (old, insecure)
- https — encrypted with TLS (modern, secure)
- ftp — file transfer (rare for websites)
- file — a file on your own computer
- mailto — opens your email client

Every URL has a protocol. For websites, it's almost always https.

**2. Domain**

shop.example.com

The domain is the **address of the server**. It's what DNS resolves to an IP address.

The domain has parts too:

- .com is the top-level domain (TLD)
- example is the registered domain name
- shop is a subdomain

Common TLDs: .com, .org, .net, .in, .io, .dev

Subdomains often indicate different sections:

- www.example.com — main site
- api.example.com — API
- docs.example.com — documentation
- shop.example.com — store

**3. Path**

/products/shoes

The path points to a specific resource on the server. It's like a folder structure.

- / — homepage
- /products — all products
- /products/shoes — only shoes
- /products/shoes/running — running shoes specifically

Paths are case-sensitive. /About and /about might be different pages.

**4. Query parameters**

?color=red&size=10

After the ? come query parameters. These are extra instructions for the server, usually for filtering or sorting.

The format is key=value, joined by &:

- ?color=red — filter by red
- ?color=red&size=10 — filter by red AND size 10
- ?sort=price_asc — sort by price, ascending
- ?page=2 — go to page 2

The ? starts the query string. The & separates each parameter.

**5. Fragment**

#reviews

After the # is the fragment (also called hash or anchor). It points to a specific section of the page.

The browser scrolls to the element with that id after the page loads. The fragment is **not** sent to the server — it's handled entirely by the browser.

Example: a long article with a #reviews section at the bottom. Clicking a link with #reviews jumps directly there.

### Putting it together

https://shop.example.com/products/shoes?color=red&size=10#reviews

Reads as:

- Use HTTPS to talk to shop.example.com
- Request the resource at /products/shoes
- Filter by color=red and size=10
- After loading, scroll to the element with id "reviews"

### URLs in Playwright

Playwright uses URLs in several ways:

**Navigate to a URL:**

~~~python
page.goto("https://shop.example.com/products/shoes?color=red")
~~~

**Assert the current URL:**

~~~python
expect(page).to_have_url("https://shop.example.com/products/shoes")
~~~

**Wait for a URL change:**

~~~python
page.wait_for_url("**/checkout")
~~~

**Extract parts of a URL:**

~~~python
url = page.url
# url is a string like "https://shop.example.com/products"

# Parse it in Python:
from urllib.parse import urlparse
parts = urlparse(url)
print(parts.scheme)    # https
print(parts.netloc)    # shop.example.com
print(parts.path)      # /products
print(parts.query)     # color=red
print(parts.fragment)  # reviews
~~~

### Query parameters in tests

Query parameters are often what you assert on. Examples:

- After applying a filter, check the URL includes ?filter=active
- After searching, check the URL has ?q=playwright
- After pagination, check the URL has ?page=2

Playwright:

~~~python
expect(page).to_have_url(lambda url: "?q=playwright" in url)
~~~

Or with a regex:

~~~python
import re
expect(page).to_have_url(re.compile(r"\?q=playwright"))
~~~

This is a common pattern in tests for search and filter features.

### The one thing to remember

A URL is a compact instruction to the browser:

- **Protocol** — how to talk
- **Domain** — who to talk to
- **Path** — what to ask for
- **Query** — how to filter or modify the request
- **Fragment** — where on the page to scroll

Once you see URLs this way, they stop looking like gibberish. Every time you see one, you'll read it instantly.

### Advanced: URL encoding

Spaces and special characters in URLs get encoded. A space becomes %20, an ampersand becomes %26, and so on.

If you search Google for "hello world", the URL becomes:

https://www.google.com/search?q=hello%20world

The %20 is a space. This encoding is called percent-encoding or URL encoding. Python's urllib.parse has helpers for this:

~~~python
from urllib.parse import quote, unquote
quote("hello world")       # hello%20world
unquote("hello%20world")   # hello world
~~~

You'll encounter this when building URLs in tests with dynamic values.`,
    handsOn: `Let's dissect real URLs.

### Step 1: Take three URLs you know

Choose:

- A YouTube video URL
- A Google search URL
- A URL from any site you use

Write each one down on paper.

### Step 2: Break each URL into its 5 parts

For each URL, identify:

1. Protocol (http or https)
2. Domain
3. Path
4. Query parameters (if any)
5. Fragment (if any)

Example:

https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLxyz

- Protocol: https
- Domain: www.youtube.com
- Path: /watch
- Query: v=dQw4w9WgXcQ, list=PLxyz
- Fragment: (none)

### Step 3: Test the fragment

Open any long Wikipedia article. Add #See_also to the end:

https://en.wikipedia.org/wiki/Playwright#See_also

Press Enter. The browser should jump to the See also section.

Notice the fragment part is not sent to the server. Remove the fragment and reload — same page, but no jump.

### Step 4: Modify the query string

Search for something on Google. Look at the URL — it has ?q=yoursearch.

Change yoursearch to something else. Press Enter. New search results appear.

That's how the query string controls what the server sends.

### Deliverable

You dissected three URLs into their parts, tested the fragment anchor, and modified a query string to change the result. You can now read any URL.`,
    challenge: `Build a URL from scratch.

### Task 1: Manual construction

Imagine you want to find used cars on an imaginary classifieds site (classifieds.example.com) with these criteria:

- Category: cars
- Make: Toyota
- Min price: 500000 (in rupees)
- Max price: 1000000
- Sort: price ascending
- Only show listings with photos

Construct the URL by hand. Assume the site uses these query parameter names:

- category
- make
- min_price
- max_price
- sort
- has_photos

Answer:

https://classifieds.example.com/search?category=cars&make=Toyota&min_price=500000&max_price=1000000&sort=price_asc&has_photos=true

### Task 2: URL encoding

Now imagine the make was "Maruti Suzuki" — two words.

Write the URL with proper encoding.

Answer:

make=Maruti%20Suzuki

The space becomes %20.

### Task 3: Playwright test

Write a Playwright assertion that navigates to this URL and checks the final URL contains "make=Toyota".

~~~python
page.goto("https://classifieds.example.com/search?category=cars&make=Toyota")
expect(page).to_have_url(lambda url: "make=Toyota" in url)
~~~

### Reflection

Every URL tells a story. Once you can construct URLs with query parameters, you can:

- Pre-set filters before loading a page (faster tests)
- Assert that user actions produce the correct URLs
- Build shareable links for tests

This is a real skill used every day in Playwright work.`,
    proTips: [
      "Always use HTTPS. HTTP is insecure and often blocked or downgraded by modern browsers.",
      "The fragment (#) is not sent to the server. It's a browser-only instruction.",
      "Query parameter order usually doesn't matter, but some servers expect a specific order.",
      "Use page.wait_for_url() when you expect navigation after an action.",
      "When asserting URLs with dynamic parts, use regex or lambda functions, not exact strings.",
    ],
    commonMistakes: [
      {
        mistake: "Confusing the query string with the path",
        fix: "The path comes before the ?, the query comes after. Path identifies the resource; query modifies the request.",
      },
      {
        mistake: "Forgetting to URL-encode special characters",
        fix: "Spaces, &, =, and other special characters need encoding. Python's urllib.parse.quote handles this.",
      },
      {
        mistake: "Assuming fragments are sent to the server",
        fix: "Fragments are browser-only. The server never sees them. This matters when constructing test URLs.",
      },
      {
        mistake: "Using exact URL strings in assertions when parts are dynamic",
        fix: "Use regex or lambda to match patterns. Exact matches break when a query param changes.",
      },
      {
        mistake: "Hard-coding URLs across many tests",
        fix: "Store base URLs in a config or fixture. Change once, applies everywhere.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The five parts of a URL",
        code: `https://shop.example.com/products/shoes?color=red&size=10#reviews
│      │                │                │              │
│      │                │                │              └── Fragment
│      │                │                └── Query params
│      │                └── Path
│      └── Domain
└── Protocol`,
      },
      {
        language: "python",
        title: "Parse a URL in Python",
        code: `from urllib.parse import urlparse

url = "https://shop.example.com/products/shoes?color=red&size=10#reviews"
parsed = urlparse(url)

print(parsed.scheme)    # https
print(parsed.netloc)    # shop.example.com
print(parsed.path)      # /products/shoes
print(parsed.query)     # color=red&size=10
print(parsed.fragment)  # reviews`,
      },
      {
        language: "python",
        title: "URL assertions in Playwright",
        code: `from playwright.sync_api import expect
import re

# Exact match
expect(page).to_have_url("https://shop.example.com/products")

# Regex match
expect(page).to_have_url(re.compile(r"/products/\\w+"))

# Lambda match (check for a specific query param)
expect(page).to_have_url(lambda url: "color=red" in url)

# Wait for a URL to change
page.wait_for_url("**/checkout")`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — What is a URL?",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL",
      },
      {
        title: "MDN — URL anatomy",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#basics_of_urls",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["phase--1", "web", "urls", "http"],
  };

export default topic;
