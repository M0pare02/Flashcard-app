# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the app

No build step. Open `Index.html` directly in a browser, or use VS Code's Live Server extension for auto-reload on save. The Claude app's built-in preview is unreliable for this project (localStorage is blocked in the sandbox).

## Architecture

Everything lives in a single file: `Index.html`. It contains inline CSS, HTML, and a `<script>` block — no external dependencies, no bundler, no framework.

**Data model** — persisted to `localStorage` under the key `flashcardAppData`:
```json
{
  "subjects": [{ "id": "uuid", "name": "string", "cards": [{ "id": "uuid", "question": "string", "answer": "string" }] }],
  "currentSubjectId": "uuid"
}
```

**Three modes** (tab-switched, each a `<section>`):
- `#add` — create/edit/delete cards for the active subject
- `#study` — flip cards with 3D CSS transform; supports sequential nav and auto-shuffle
- `#test` — type-in answers graded via exact match or Levenshtein distance (≤30% of answer length = "almost")

**On first load**, a "Naturalization test" subject with 100 civics questions is automatically seeded into localStorage if it doesn't already exist.

**Themes**: light (default), dark (`body.dark`), and a decorative `body.naturalization-theme` applied when the Naturalization subject is active.
