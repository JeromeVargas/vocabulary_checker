# Vocabulary Checker

<br/>

![GitHub top language](https://img.shields.io/github/languages/top/JeromeVargas/vocabulary_checker)
![GitHub commit activity](https://img.shields.io/github/commit-activity/t/JeromeVargas/vocabulary_checker)
![GitHub last commit](https://img.shields.io/github/last-commit/JeromeVargas/vocabulary_checker)

> ## What it does

This is an app that allows the user to do pronunciation shadowing on vocabulary organized by topic. The user can listen to one or more words and have context by looking at the associated image, then repeat the pronunciation. Word pronunciation is produced by the Chromium Speech Utterance API.

> ## Live demo:

### [English vocabulary checker](https://vocabulary-checker.onrender.com/)

### [French vocabulary checker](https://french-vocabulary-checker.netlify.app/)

### [Japanese vocabulary checker](https://japanese-vocabulary-checker.netlify.app/)

> ## Getting started

```bash
git clone https://github.com/JeromeVargas/vocabulary_checker.git
npm install
npm run dev
```

> ## User journey:

### **Home page**:

The home page displays a list of available topics. Topics are shown in a randomized order each session, up to five at a time. A search bar at the top allows the user to filter topics by name. Clicking a topic card navigates to the interface for that topic.

### **Interface**:

#### Text section:

Displays the word or phrase being studied. The text is initially hidden — clicking the question mark icon reveals it. This encourages the user to attempt pronunciation before confirming the spelling.

#### Image section:

Shows a graphic representation of the word or phrase, providing visual context to reinforce vocabulary retention.

#### Button section:

##### Actions area

A speaker button triggers the Chromium Speech Utterance API to read the word aloud. After the speech plays, the button label transitions from **_Listen_** to **_Next_**, advancing to the next word in the topic when clicked.

##### Reset / Exit area

Once the user has gone through all words in the topic, two options are presented:

- **Try Again** — resets the current topic so the user can practice it again.
- **New Exercise** — navigates back to the home page to pick a different topic.

### **Dark mode**:

A theme toggle icon in the top-right corner switches the app between light and dark mode. The preference is reflected immediately across the entire interface.

<br/>

> ## Tech stack

| Technology   | Version |
| ------------ | ------- |
| React        | 19      |
| TypeScript   | 6       |
| Vite         | 8       |
| Tailwind CSS | 4       |
| Playwright   | 1.60    |

> ## Configurations

### **Initial set up**

To get the project started and configure it for a language, follow these steps:

> 1. Create a JSON file — the meta-data object that acts as the data source:

Top-level keys represent topics and must be in kebab-case, e.g. `articles`, `verb-to-be`, `plurals-1`. Each topic object has four fields:

| Field              | Type       | Description                                                                  |
| ------------------ | ---------- | ---------------------------------------------------------------------------- |
| `translation`      | `string`   | Display name of the topic shown in the UI                                    |
| `emoji`            | `string`   | A single emoji used as the topic's visual identifier on its card             |
| `metadata`         | `array`    | Ordered list of word objects for this topic (see below)                      |
| `wordsToHighlight` | `number[]` | Zero-based positions of words within a phrase that receive highlight styling |

Each object in the `metadata` array has two fields:

| Field      | Type     | Description                                                              |
| ---------- | -------- | ------------------------------------------------------------------------ |
| `word`     | `string` | The full word or phrase the user will study and pronounce                |
| `fileName` | `string` | Filename (without extension) of the image inside this topic's sub-folder |

**`wordsToHighlight` explained:** Words within a phrase are indexed left to right starting at `0`. For example, in `"a fast car"`, index `0` = `"a"`, index `1` = `"fast"`, index `2` = `"car"`. Passing `[1]` highlights the word at position 1 (`"fast"`).

Example structure:

```json
{
  "articles": {
    "translation": "Articles",
    "emoji": "🧩",
    "metadata": [
      { "word": "a car", "fileName": "car" },
      { "word": "an apple", "fileName": "apple" }
    ],
    "wordsToHighlight": [0]
  }
}
```

> 2. Create an images folder:

Sub-folders must also be in kebab-case (e.g. `articles`, `verb-to-be`) and must match the top-level keys in the meta-data JSON exactly. Place the image files directly inside their topic sub-folder; the `fileName` field in each metadata object references them by name without the file extension.

> 3. Set the configuration constants file at `src/config/constants.ts`:

- **Speech section** — sets the target language locale (e.g. `"en-US"`) and utterance speed.
- **Strings section** — sets the copy for headings and call-to-action buttons (e.g. `Listen`, `Next`, `Try Again`, `New Exercise`).
- **Testing section** — sets values used by Playwright tests; these must be filled in manually based on the meta-data JSON (topic key and number of words in that topic).

### **npm scripts**

- **Vite**:

| Script    | Command                         | Description                                |
| --------- | ------------------------------- | ------------------------------------------ |
| `dev`     | `vite`                          | Starts the development server              |
| `build`   | `tsc && vite build`             | Type-checks and builds for production      |
| `preview` | `vite preview`                  | Previews the production build locally      |
| `setup`   | `npm run build && vite preview` | Builds then immediately serves the preview |

- **Playwright**:

| Script | Command               | Description                         |
| ------ | --------------------- | ----------------------------------- |
| `test` | `npx playwright test` | Runs the full Playwright test suite |

- **Utilities**:

| Script  | Command                                                                     | Description                             |
| ------- | --------------------------------------------------------------------------- | --------------------------------------- |
| `lint`  | `eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0` | Lints all TypeScript/TSX files          |
| `clean` | `rm -rf dist/ playwright-report/ test-results/`                             | Removes build artifacts and test output |

<br/>

> ## Instructions

### **File management** — organize imports in this order:

1. Library / lib
2. Components
3. Hooks
4. Services / utils
5. Types

<br/>

> ## Known issues

![Firefox](assets/images/icons/firefox.png)

- **_Speech does not work on Firefox_** because the app relies on the Chromium Speech Utterance API, which Firefox does not support.

### **Playwright**

- There is an inconsistently failing test in WebKit, so WebKit has been removed from the Playwright browser configuration.
- Tests must be run against the Vite preview build (`npm run setup`) to exercise the compiled output rather than the dev server.
