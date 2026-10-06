import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "keyboard-shortcuts-worth-learning",
    title: "Keyboard shortcuts worth learning",
    summary:
      "The shortcuts that save you hours every week, and the order to learn them in.",
    whyItMatters:
      "Professionals use their keyboard. Beginners use their mouse. The difference in speed is enormous over a year.",
    notes: `Shortcuts are not optional if you want to be fast. They are how you go from writing code at twenty words per minute to a hundred.

But there are hundreds of shortcuts. You do not learn them all. You learn a small set that covers ninety percent of your daily work.

### The absolute essentials

Ctrl + C: copy. Ctrl + V: paste. Ctrl + X: cut. Ctrl + Z: undo (your best friend when you break something). Ctrl + Y: redo. Ctrl + S: save. Ctrl + A: select all. Ctrl + F: find in the current file. Ctrl + Shift + F: find across all files. Ctrl + P: quick open file in VS Code. Ctrl + forward slash: comment or uncomment a line.

### VS Code specific

Ctrl + backtick: toggle the built-in terminal.

Ctrl + Shift + P: command palette. Search any VS Code command by name.

Ctrl + B: toggle the sidebar.

Ctrl + D: select the next occurrence of the current word. Perfect for renaming variables.

Alt + Up or Alt + Down: move the current line up or down.

Shift + Alt + Down: duplicate the current line below.

Ctrl + Shift + K: delete the current line.

Ctrl + Enter: insert a new line below.

F2: rename a symbol everywhere it is used. Safe refactoring.

Ctrl + G: go to a specific line number.

Ctrl + Tab: switch between open files.

### Browser shortcuts

F12: open DevTools. Or Ctrl + Shift + I.

Ctrl + Shift + C: inspect element. Toggle the picker, then click any element to see its HTML.

Ctrl + T: new tab. Ctrl + W: close tab. Ctrl + Shift + T: reopen closed tab.

Ctrl + L: focus the address bar.

Ctrl + Shift + R: hard reload ignoring cache.

Ctrl + Shift + M: mobile emulation in DevTools.

### Terminal shortcuts

Ctrl + C: stop the running command. Use this when something is hung.

Ctrl + L: clear the screen.

Up arrow: cycle through your command history.

Tab: autocomplete file and folder names.

Ctrl + R: search through your command history.

### How to learn shortcuts

Do not try to memorize all of these at once.

Week 1: learn Ctrl + C, V, Z, S, and forward slash.

Week 2: add Ctrl + F, P, and Shift + F.

Week 3: add Ctrl + backtick, Ctrl + B, Ctrl + D.

Week 4: add the terminal shortcuts (up arrow, Tab, Ctrl + C).

By the end of a month, these will feel automatic.

### The rule

Every time you reach for the mouse to do something repetitive, ask: is there a shortcut for this?

Google it. Learn it. Use it five times to make it stick.

After a few weeks, you will wonder how you ever worked without them.

### Why this matters more than you think

A developer using shortcuts is roughly thirty percent faster than one who is not. Over a career, that is years of saved time.

But speed is not the real point. The real point is flow. When you are not switching between mouse and keyboard constantly, your mind stays focused on the problem. Shortcuts are not about typing faster. They are about thinking faster.

### The mindset

Every professional you admire uses shortcuts unconsciously. They are not geniuses who type faster than you. They have practiced small habits for years.

You can start today. Pick three shortcuts. Use them for a week. Then add three more.

Six months from now, you will not remember how you used to work.`,
    handsOn: `Practice the essential shortcuts in VS Code.

### Step 1: Create a practice file

Open VS Code in any folder. Create a new file called shortcuts.py.

### Step 2: Type this

name = "Ravi"
age = 25
print("Hello, " + name)
print("Age: " + str(age))

### Step 3: Practice Ctrl + forward slash

Click anywhere in the line with print("Hello, " + name). Press Ctrl + forward slash. The line becomes a comment. Press it again to uncomment.

### Step 4: Practice Ctrl + D

Double-click the word name to select it. Press Ctrl + D. Both occurrences of name are now selected. Type person. Both occurrences change at once. That is fast renaming.

### Step 5: Practice Alt + Up and Alt + Down

Click on the line with print("Age: " + str(age)). Press Alt + Up. The line moves up. Press Alt + Down to move it back.

### Step 6: Practice Ctrl + Shift + K

Click on any line. Press Ctrl + Shift + K. The line is deleted instantly.

### Step 7: Practice Ctrl + Shift + P

Press Ctrl + Shift + P. Type "format". Click "Format Document". Your code is auto-formatted.

### Deliverable

You practiced five essential VS Code shortcuts and felt how much faster they are than clicking menus.`,
    challenge: `Learn three shortcuts you did not know and use them for a week.

Pick three shortcuts from the notes that you have not used before. Good candidates: Ctrl + R in the terminal (search history), F2 for rename symbol, Ctrl + Shift + T in the browser (reopen closed tab), Ctrl + Shift + R (hard reload).

Use them daily for a week. After one week, reflect: which one saved you the most time, which one felt awkward but is now natural, which one did you forget to use and why.

### Bonus

Find the keyboard shortcut cheat sheet for your OS. VS Code: Help menu, Keyboard Shortcut Reference. Chrome: Settings, Keyboard shortcuts. Print it. Stick it near your monitor.

### Reflection

Shortcuts feel weird for three days. On day five, they feel natural. On day ten, you cannot imagine going back. Stick with them.`,
    proTips: [
      "Learn three shortcuts a week. Any more and you will forget them all.",
      "If you keep reaching for the mouse for the same action, that is a signal to learn the shortcut.",
      "F2 (rename symbol) is the safest way to rename a variable across a whole file. Never use find and replace for this.",
      "Ctrl + Shift + P is your universal search for VS Code features. When you forget a shortcut, search there.",
      "Enable format on save in VS Code. Every save auto-formats, and you never think about indentation again.",
    ],
    commonMistakes: [
      {
        mistake: "Trying to learn fifty shortcuts at once",
        fix: "Learn three per week. Build muscle memory slowly.",
      },
      {
        mistake: "Using the mouse for common actions because it is familiar",
        fix: "Force yourself to use the shortcut for three days. After that, it is faster than the mouse.",
      },
      {
        mistake: "Not knowing that Ctrl + forward slash comments code",
        fix: "It is the most used shortcut for coders. Learn it today.",
      },
      {
        mistake: "Ignoring terminal shortcuts",
        fix: "The up arrow, Tab, and Ctrl + R will save hours over a year.",
      },
      {
        mistake: "Never customizing shortcuts",
        fix: "If a shortcut is awkward on your keyboard layout, remap it in VS Code settings.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The core ten, memorize these first",
        code: `Ctrl + C            Copy
Ctrl + V            Paste
Ctrl + Z            Undo
Ctrl + S            Save
Ctrl + /            Comment line
Ctrl + F            Find
Ctrl + P            Quick open file
Ctrl + Shift + P    Command palette
Ctrl + backtick     Toggle terminal
Ctrl + B            Toggle sidebar`,
      },
      {
        language: "text",
        title: "Terminal essentials",
        code: `Up arrow      Previous command
Tab           Autocomplete file/folder name
Ctrl + C      Stop running command
Ctrl + L      Clear screen
Ctrl + R      Search command history`,
      },
      {
        language: "text",
        title: "Browser essentials",
        code: `F12              Open DevTools
Ctrl + Shift + C Inspect element
Ctrl + Shift + R Hard reload
Ctrl + Shift + M Mobile emulation
Ctrl + T         New tab
Ctrl + W         Close tab
Ctrl + Shift + T Reopen closed tab`,
      },
    ],
    furtherReading: [
      {
        title: "VS Code — Keyboard shortcuts (Windows)",
        url: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf",
      },
      {
        title: "VS Code — Keyboard shortcuts (macOS)",
        url: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf",
      },
      {
        title: "Chrome — Keyboard shortcuts",
        url: "https://support.google.com/chrome/answer/157179",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "soft-skills", "productivity"],
  };

export default topic;
