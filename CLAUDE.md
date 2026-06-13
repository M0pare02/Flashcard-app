# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the app

No build step. Open `index.html` directly in a browser, or use VS Code's Live Server extension for auto-reload on save. The Claude app's built-in preview is unreliable for this project (localStorage is blocked in the sandbox).

## Project structure

```
FlashcardApp/
├── index.html        ← HTML skeleton only (~65 lines)
├── css/
│   └── styles.css    ← all styles (~560 lines)
└── js/
    └── app.js        ← all JavaScript (~320 lines)
```

No build step, no bundler, no framework — plain HTML, CSS, and vanilla JS.

## Architecture

**Data model** — persisted to `localStorage` under the key `flashcardAppData`:
```json
{
  "subjects": [{ "id": "uuid", "name": "string", "cards": [{ "id": "uuid", "question": "string", "answer": "string" }] }],
  "currentSubjectId": "uuid"
}
```

**Two tabs** (tab-switched, each a `<section>`):
- `#add` — create/edit/delete cards for the active subject; includes card search
- `#study` — flip cards with 3D CSS transform; supports sequential nav and auto-shuffle

**On first load**, a "Naturalization test" subject with 100 civics questions is automatically seeded into localStorage if it doesn't already exist.

**Themes**: light (default) and dark (`body.dark`), toggled via the ⋮ overflow menu in the nav bar and persisted to `localStorage`.
