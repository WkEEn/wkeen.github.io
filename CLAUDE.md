# CLAUDE.md

This file defines how Claude Code should work in this repository.

## Project Overview

This is a Jekyll-based personal academic website derived from the Academic Pages template.

Key project areas:

- `_config.yml`: site-wide configuration, navigation defaults, author metadata, theme settings.
- `_pages/`: main website pages.
- `_publications/`: publication entries.
- `_posts/`: blog posts.
- `_portfolio/`: portfolio/project entries.
- `_data/`: structured data used by templates.
- `_layouts/`, `_includes/`, `_sass/`, `assets/`: theme, layout, style, and frontend assets.
- `files/`, `images/`: static files and images.


## Collaboration Rules

Follow these rules for every user request.

1. Before modifying any code or content file, first analyze the request and explicitly list the exact file or files that need to be changed.
2. Wait for the user's confirmation before starting the concrete coding or editing work.
3. Only analyze and modify files that are necessary for the current request.
4. Do not make opportunistic refactors, formatting changes, dependency updates, cleanup, or unrelated improvements.
5. Do not change generated or compiled assets unless the current request requires it, or unless the repository's workflow requires regenerating them after an approved source change.
6. Preserve the existing project structure, naming conventions, Markdown front matter style, Liquid templates, and Jekyll conventions.
7. If a request is ambiguous, ask a focused clarification question instead of guessing and editing.
8. If tests, builds, or local previews are relevant, state which command should be run before running it.

## Review Expectations

For every change, keep the review scope narrow:

- Confirm that the modified files match the user's approved file list.
- Check that no unrelated files were changed.
- Verify Markdown front matter, Liquid syntax, links, paths, and asset references when relevant.
- Prefer small, reversible changes over broad rewrites.

## Content Guidelines

- Keep personal website content accurate and concise.
- Preserve existing language style unless the user asks for rewriting.
- Do not invent publications, roles, dates, links, awards, or affiliations.
- When updating publications, projects, CV content, or profile information, use only user-provided information or clearly cited source material.

