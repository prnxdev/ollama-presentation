# Ollama Presentation — Claude Instructions

## Slidev Skill

This project uses the [slidevjs/slidev](https://sli.dev) skill installed at `.agents/skills/slidev/`.

**ALWAYS consult the skill when working with slides:**

- Read `.agents/skills/slidev/SKILL.md` for the full feature reference
- Check `.agents/skills/slidev/references/` for detailed docs on specific features
- Key references: `core-syntax.md`, `core-headmatter.md`, `core-frontmatter.md`, `core-layouts.md`, `core-animations.md`

## Project Overview

- **File**: `slides.md` — the main Slidev presentation
- **Topic**: Ollama — running AI models locally
- **Audience**: Mixed technical and non-technical

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3030
npm run build    # Build static site
npm run export   # Export to PDF (requires playwright-chromium)
```

## Design Decisions

- Theme: `seriph` (dark)
- Color scheme: `dark`
- Fonts: Space Grotesk (sans), JetBrains Mono (mono) from Google Fonts
- Transitions: `slide-left`
