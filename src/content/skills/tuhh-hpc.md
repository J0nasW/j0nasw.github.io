---
title: tuhh-hpc
description: "Remote HPC cluster management skill for Claude Code"
longDescription: "A private Claude Code skill for managing workloads on the TU Hamburg HPC cluster directly from your terminal. Handles file sync, SLURM job submission, monitoring, and result downloads — all without leaving your editor."
status: private
usage: "/hpc"
phases:
  - "Sync local project files to the cluster"
  - "Submit and manage SLURM batch jobs"
  - "Monitor job status and resource usage"
  - "Download results and logs"
order: 2
---

| Command | What it does |
|---|---|
| `/hpc sync` | Sync project files to the cluster |
| `/hpc submit` | Submit a SLURM job |
| `/hpc status` | Check running job status |
| `/hpc download` | Download results to local machine |
