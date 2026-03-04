---
title: review-paper
description: "6-agent pre-submission referee report skill for Claude Code"
longDescription: "A Claude Code skill that spawns 6 parallel review agents — each evaluating a different dimension of your paper — then consolidates their findings into a single ranked, actionable report. Supports 12 academic venues with venue-specific review criteria."
status: public
install: "claude install-skill https://github.com/J0nasW/claude-paper-review"
usage: "/review-paper"
repo: "https://github.com/J0nasW/claude-paper-review"
phases:
  - "Phase 1 — Six parallel specialist agents review your paper"
  - "Phase 2 — Consolidation agent merges all findings"
  - "Phase 3 — Final ranked report with severity scores"
venues:
  - NeurIPS
  - ICLR
  - ICML
  - AAAI
  - Nature
  - NSD
  - QSS
  - Scientometrics
  - Research Policy
  - JCDL
  - ISWC
  - general
inspiration:
  name: Claes Backman
  url: "https://github.com/claesbackman/AI-research-feedback"
order: 1
---

| Command | What it does |
|---|---|
| `/review-paper` | Start a full review of the paper in your current project |
| `/review-paper --venue NeurIPS` | Review targeting NeurIPS criteria |
| `/review-paper --venue Nature` | Review targeting Nature criteria |

### Review agents

| Agent | Focus area |
|---|---|
| Style & Clarity | Writing quality, structure, readability |
| Internal Consistency | Claims vs. evidence alignment |
| Scientific Rigor | Methodology, experimental design |
| Math & Notation | Equations, notation consistency |
| Artifacts & Reproducibility | Code, data, reproducibility |
| Contribution Framing | Novelty, positioning, impact |
