# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the marketing website for ts-repair, an oracle-guided TypeScript repair engine that turns compiler diagnostics into verified repair plans for agents. It deploys to https://ts-repair.ai via GitHub Pages.

## Commands

Use `mise` to run commands (mise manages bun):

```bash
# Install dependencies
mise exec -- bun install

# Development server
mise exec -- bun run dev

# Build for production
mise exec -- bun run build

# Preview production build
mise exec -- bun run preview
```

## Architecture

- **Framework**: Astro 5 with Tailwind CSS
- **Deployment**: GitHub Actions → GitHub Pages (see `.github/workflows/deploy.yml`)
- **Domain**: ts-repair.ai (CNAME in `public/CNAME`)

### Key Directories

- `src/pages/index.astro` - Single-page marketing site
- `src/layouts/Layout.astro` - Base HTML layout with meta tags and fonts
- `src/styles/global.css` - Tailwind config with custom `.code-block`, `.btn-primary`, `.btn-secondary` components and syntax highlighting classes

### Styling Conventions

- Brand color palette uses `repair-*` (green scale defined in `tailwind.config.mjs`)
- Code examples use pre-highlighted HTML with `.json-key`, `.json-string`, `.json-number` classes
- Dark theme: gray-950 background, gray-100 text

### Development Workflow

**IMPORTANT: Always build before committing.** The CI will fail if the build is broken.

```bash
mise exec -- bun install
mise exec -- bun run build
```

Only commit after the build succeeds. This matches the GitHub Actions CI pipeline.

## Content Guidelines

The website is a single-page marketing site explaining what ts-repair does:

- **What it is**: Oracle-guided TypeScript repair engine
- **Key insight**: Speculatively applies fixes, re-runs type checker, only surfaces verified fixes
- **For agents**: Provides verified repair plans instead of raw diagnostics
- **Dispositions**: AutoFixable, AutoFixableHighRisk, NeedsJudgment, NoCandidate

Keep messaging focused on the value proposition: fewer agent iterations, verified fixes, deterministic output.

## Related Repositories

This repo is part of the ts-repair GitHub organization:
- `ts-repair/ts-repair` - The repair engine
