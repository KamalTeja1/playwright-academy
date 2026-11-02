import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "installing-requests",
  title: "Installing Requests",
  summary:
    "Install the Requests package in a Python environment and make a first HTTP request.",
  whyItMatters:
    "Requests makes API checks easier to read. Using a virtual environment keeps the dependency separate from other projects.",
  notes: `Requests is a popular Python package for making HTTP requests. It is not part of Python's standard library, so install it in your project environment.

### Create and activate a virtual environment

~~~bash
cd /workspaces/playwright-academy/python-practice
python3 -m venv .venv
source .venv/bin/activate
~~~

On Windows PowerShell, activate it with:

~~~bash
.venv\\Scripts\\Activate.ps1
~~~

### Install Requests

~~~bash
python -m pip install requests
~~~

Use python -m pip so the package is installed for the Python interpreter you are using.

Check the installation:

~~~bash
python -c "import requests; print(requests.__version__)"
~~~

### Make a first request

~~~python
import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)
print(response.status_code)
print(response.json()["title"])
~~~

This public test API returns fictional sample data. The timeout limits how long the client waits.

### Keep the dependency with the project

For a small practice project, record the package in a requirements file:

~~~text
requests
~~~

Save that as requirements.txt. Another environment can install the listed package with:

~~~bash
python -m pip install -r requirements.txt
~~~

### The takeaway

Install Requests in the active project environment. Use a known test API and set a timeout on network calls.`,
  handsOn: `Install Requests and run a small read-only example.

### Step 1: Open your practice folder

~~~bash
cd /workspaces/playwright-academy/python-practice
python3 -m venv .venv
source .venv/bin/activate
python -m pip install requests
~~~

### Step 2: Create a script

~~~bash
touch requests_first.py
~~~

### Step 3: Paste into requests_first.py

~~~python
import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)

print("Status:", response.status_code)
print("Title:", response.json()["title"])
~~~

### Step 4: Run it

~~~bash
python requests_first.py
~~~

Expect a successful status and a sample post title.

### Deliverable

Keep the script. Explain why the package belongs in the virtual environment and what the timeout does.`,
  challenge: `Create api_setup_lab.py.

1. Import Requests and print its version
2. Send a GET request to the sample posts endpoint
3. Set a timeout of 10 seconds
4. Print the response status and the title from the JSON body
5. Save requests in requirements.txt

Then explain why installing a package globally can make projects harder to reproduce. Use only the fictional sample API in this exercise.`,
  proTips: [
    "Activate the project virtual environment before installing packages.",
    "Use python -m pip to match pip with the active Python interpreter.",
    "Record project dependencies in requirements.txt.",
    "Set a timeout on network requests.",
  ],
  commonMistakes: [
    {
      mistake: "Installing Requests into a different Python environment",
      fix: "Activate the project environment and use python -m pip.",
    },
    {
      mistake: "Assuming Requests is included with Python",
      fix: "Install the requests package before importing it.",
    },
    {
      mistake: "Making a network request without a timeout",
      fix: "Pass a finite timeout so the program does not wait indefinitely.",
    },
    {
      mistake: "Using real account data in a learning exercise",
      fix: "Use fictional sample data and a public test API.",
    },
  ],
  codeExamples: [
    {
      language: "bash",
      title: "Install Requests in the active environment",
      code: `python -m pip install requests
python -c "import requests; print(requests.__version__)"`,
    },
    {
      language: "python",
      title: "Make a first sample request",
      code: `import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)
print(response.status_code)
print(response.json()["title"])`,
    },
  ],
  furtherReading: [
    {
      title: "Requests — Installation",
      url: "https://requests.readthedocs.io/en/latest/user/install/",
    },
    {
      title: "Python Docs — venv",
      url: "https://docs.python.org/3/library/venv.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "api", "requests", "virtual-environment"],
};

export default topic;
