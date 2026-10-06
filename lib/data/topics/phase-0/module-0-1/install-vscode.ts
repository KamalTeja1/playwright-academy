import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "install-vscode",
    title: "Install VS Code",
    summary:
      "Install Visual Studio Code — the code editor we'll use to write all our tests.",
    whyItMatters:
      "You could write code in Notepad, but that's like eating soup with a fork. VS Code makes writing, reading, and debugging code ten times easier.",
    notes: `**VS Code** (short for Visual Studio Code) is a code editor made by Microsoft. It's free, it's fast, and it's the editor most professional developers use.

### Why VS Code?

Because:

- It's **free** and works on Windows, Mac, and Linux.
- It has **extensions** that make Python and Playwright easier to write.
- It has a **built-in terminal** so you don't have to switch between windows.
- It has **Git support** built right in.

### Installing it

Go to code.visualstudio.com and click the big **Download** button. The website will detect your operating system automatically.

- **Windows:** Run the .exe file. Accept the defaults.
- **Mac:** Open the .dmg file. Drag VS Code to your Applications folder.
- **Linux:** Download the .deb or .rpm file and install it with your package manager.

### First-time setup

When you open VS Code for the first time, it will ask you a few questions. Just accept the defaults — you can change them later.

The most useful thing to know about VS Code:

**Press Ctrl + backtick** (Ctrl + the key below Esc) to open the built-in terminal at the bottom. You'll use this constantly.

**Press Ctrl + P** to quickly open any file by name. This is a lifesaver on big projects.

**Press Ctrl + Shift + P** to open the command palette. Anything you can do in VS Code is searchable here.

### Do you need extensions?

Not yet — but we'll install four in the next lesson:

- Python
- Pylance
- Playwright Test
- GitLens

We'll do that step by step. Don't install anything yet.`,
    handsOn: `Let's install VS Code.

1. Open your browser and go to code.visualstudio.com
2. Click the big **Download** button (it auto-detects your OS)
3. Run the installer
   - Windows: Run the .exe, accept defaults, click Finish
   - Mac: Open the .dmg, drag to Applications
   - Linux: Install the .deb or .rpm
4. Open VS Code from your Applications or Start menu
5. You should see a Welcome tab with options like "New File" and "Open Folder"

### Test the built-in terminal

1. In VS Code, press **Ctrl + backtick** (Ctrl + the key below Esc)
2. A terminal panel should appear at the bottom
3. Type: python --version
4. If you see a version number, both VS Code and Python are working together

### Deliverable

You can open VS Code, open the built-in terminal, and run "python --version" successfully inside it.`,
    challenge: `Learn three VS Code shortcuts that will save you hours.

Press each shortcut and see what it does:

1. **Ctrl + P** — Quick file open. Type any filename and it appears.
2. **Ctrl + Shift + P** — Command palette. Try typing "toggle terminal".
3. **Ctrl + B** — Toggle the sidebar on and off.

Bonus: In VS Code, go to Help → Keyboard Shortcut Reference and print the cheat sheet if you can. Pin it near your desk.`,
    proTips: [
      "Set your VS Code theme to something easy on the eyes. The default is fine, but 'Dracula' or 'One Dark Pro' are popular among developers.",
      "Enable Auto Save from the File menu. It saves your file every time you switch windows.",
      "Learn Ctrl + / — it comments or uncomments the selected line. You'll use it constantly.",
      "Learn Alt + Up/Down — it moves the current line up or down. Great for reordering code.",
      "If VS Code feels slow, disable extensions you don't use. Fewer extensions = faster editor.",
    ],
    commonMistakes: [
      {
        mistake: "Installing VS Code from a fake website",
        fix: "Only download from code.visualstudio.com. Everything else is a scam or a copy.",
      },
      {
        mistake: "Ignoring the built-in terminal and opening a separate one",
        fix: "The built-in terminal is already inside your project folder. Use it — press Ctrl + backtick.",
      },
      {
        mistake: "Not saving files before running them",
        fix: "VS Code shows a dot next to unsaved files. Always save with Ctrl + S before running.",
      },
      {
        mistake: "Using a VS Code from a random tutorial video without checking the version",
        fix: "Your VS Code might look different from an older tutorial. The core features are the same — don't worry.",
      },
      {
        mistake: "Thinking 'VS Code' and 'Visual Studio' are the same thing",
        fix: "They are completely different. 'Visual Studio' is a heavy IDE for C# and .NET. 'VS Code' is the lightweight editor we're using.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "VS Code shortcuts you'll use every day",
        code: "Ctrl + backtick   Open/close terminal\nCtrl + P          Quick open file\nCtrl + Shift + P  Command palette\nCtrl + S          Save file\nCtrl + /          Toggle comment\nCtrl + B          Toggle sidebar\nCtrl + F          Find in file\nCtrl + Shift + F  Find in all files\nAlt + Up/Down     Move line up/down",
      },
    ],
    furtherReading: [
      {
        title: "Official VS Code site",
        url: "https://code.visualstudio.com/",
      },
      {
        title: "VS Code Tips and Tricks (official docs)",
        url: "https://code.visualstudio.com/docs/getstarted/tips-and-tricks",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["setup", "editor", "vscode"],
  };

export default topic;
