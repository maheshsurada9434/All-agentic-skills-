<h1 align="center">All Agentic Skills</h1>
<p align="center"><b>Every good AI agent skill in one place: searchable, licence-checked, installable with one line.</b><br>
Works with Claude Code, Claude apps and any agent that reads <code>SKILL.md</code> folders.</p>

<p align="center">
  <a href="https://maheshsurada9434.github.io/All-agentic-skills-/"><b>🔎 Browse the catalog</b></a> ·
  <a href="#-install-a-skill"><b>⚡ Install</b></a> ·
  <a href="skills/mahesh-surada"><b>✍️ Original skills</b></a>
</p>

## What this is

- **One catalog** of skills from the best public collections (Anthropic's official skills, Superpowers, UI/UX Pro Max, wshobson/agents and more), plus original skills by Mahesh Surada.
- **Synced every week** by a GitHub Action, so it stays current without anyone editing it by hand.
- **Licence-aware:**
  - skills under MIT, Apache-2.0, BSD or ISC are copied into [`skills/`](skills) with their licence and a `SOURCE.md` crediting the authors
  - everything else is listed with a link to the original repo
- **One-line installer** that puts any skill where your agent will find it.

## ⚡ Install a skill

```bash
# one or more skills (name or collection/name)
curl -fsSL https://raw.githubusercontent.com/maheshsurada9434/All-agentic-skills-/main/install.sh | bash -s -- frontend-design systematic-debugging

# search
curl -fsSL https://raw.githubusercontent.com/maheshsurada9434/All-agentic-skills-/main/install.sh | bash -s -- --list testing

# a whole collection, into this project only
curl -fsSL https://raw.githubusercontent.com/maheshsurada9434/All-agentic-skills-/main/install.sh | bash -s -- --source superpowers --project
```

By default skills go to `~/.claude/skills`. Use `--project` for `./.claude/skills`, or `--dir <folder>` for other agents. Restart the agent session afterwards.

**Without a terminal:** open a skill in the [catalog](https://maheshsurada9434.github.io/All-agentic-skills-/), download its folder, and add it to your agent. In the Claude apps, use Settings → Capabilities → Skills.

## 📚 Catalog

<!-- CATALOG:START -->
**273 skills** from 10 collections, 240 of them copied here and ready to install. Last synced 2026-10-20.

| Collection | Skills | In this repo | Licence |
|---|---:|---:|---|
| [Mahesh Surada (original)](https://github.com/maheshsurada9434/All-agentic-skills-) | 4 | 4 | MIT |
| [Anthropic (official)](https://github.com/anthropics/skills) | 19 | 14 | per skill |
| [Superpowers by Jesse Vincent](https://github.com/obra/superpowers) | 15 | 15 | MIT |
| [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 7 | 7 | MIT |
| [wshobson/agents plugin skills](https://github.com/wshobson/agents) | 185 | 185 | MIT |
| [Claude Office Skills](https://github.com/tfriedel/claude-office-skills) | 4 | 0 | per skill |
| [Karpathy coding guidelines](https://github.com/forrestchang/andrej-karpathy-skills) | 1 | 0 | per skill |
| [Composio awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 27 | 4 | per skill |
| [REA: Reverse Engineer Anything](https://github.com/morluto/rea) | 5 | 5 | MIT |
| [Ponytail by Dietrich Gebert](https://github.com/DietrichGebert/ponytail) | 6 | 6 | MIT |

<details><summary><b>Business & Writing</b> (10)</summary>

| Skill | What it does | Source |
|---|---|---|
| [`competitive-landscape`](skills/wshobson/competitive-landscape) | Analyze competition, identify differentiation opportunities, and develop winning market positioning strategies using Porter's Five Forces, B… | wshobson |
| [`content-research-writer`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/content-research-writer) | Assists in writing high-quality content by conducting research, adding citations, improving hooks, iterating on outlines, and providing real… | composio ↗ |
| [`defi-protocol-templates`](skills/wshobson/defi-protocol-templates) | Implement DeFi protocols with production-ready templates for staking, AMMs, governance, and flash loans. Use when building decentralized fin… | wshobson |
| [`doc-coauthoring`](https://github.com/anthropics/skills/tree/dbd4588f9e10/skills/doc-coauthoring) | Guide users through a structured workflow for co-authoring documentation. Use when user wants to write documentation, proposals, technical s… | anthropic ↗ |
| [`employment-contract-templates`](skills/wshobson/employment-contract-templates) | Create employment contracts, offer letters, and HR policy documents following legal best practices. Use when drafting employment agreements,… | wshobson |
| [`lead-research-assistant`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/lead-research-assistant) | Identifies high-quality leads for your product or service by analyzing your business, searching for target companies, and providing actionab… | composio ↗ |
| [`lora-qlora-recipes`](skills/wshobson/lora-qlora-recipes) | Configure LoRA and QLoRA supervised fine-tuning with current best-practice hyperparameters. Use when writing or reviewing a LoRA/QLoRA train… | wshobson |
| [`startup-metrics-framework`](skills/wshobson/startup-metrics-framework) | Track, calculate, and optimize key performance metrics for SaaS, marketplace, consumer, and B2B startups from seed through Series A, includi… | wshobson |
| [`twitter-algorithm-optimizer`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/twitter-algorithm-optimizer) | Analyze and optimize tweets for maximum reach using Twitter's open-source algorithm insights. Rewrite and edit user tweets to improve engage… | composio ↗ |
| [`writing-plans`](skills/superpowers/writing-plans) | Use when you have a spec or requirements for a multi-step task, before touching code | superpowers |

</details>

<details><summary><b>Coding workflow</b> (46)</summary>

| Skill | What it does | Source |
|---|---|---|
| [`angular-migration`](skills/wshobson/angular-migration) | Migrate from AngularJS to Angular using hybrid mode, incremental component rewriting, and dependency injection updates. Use when upgrading A… | wshobson |
| [`before-you-build`](skills/wshobson/before-you-build) | Pre-build product and feature risk review for founders, product managers, and AI-assisted builders. Use this skill when the user is about to… | wshobson |
| [`block-no-verify-hook`](skills/wshobson/block-no-verify-hook) | Configure a PreToolUse hook to prevent AI agents from skipping git pre-commit hooks with --no-verify and other bypass flags. Use when settin… | wshobson |
| [`brainstorming`](skills/superpowers/brainstorming) | You MUST use this before any creative work - creating features, building components, adding functionality, modifying behavior, or planning a… | superpowers |
| [`changelog-automation`](skills/wshobson/changelog-automation) | Automate changelog generation from commits, PRs, and releases following Keep a Changelog format. Use when setting up release workflows, gene… | wshobson |
| [`changelog-generator`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/changelog-generator) | Automatically creates user-facing changelogs from git commits by analyzing commit history, categorizing changes, and transforming technical … | composio ↗ |
| [`claude-api`](skills/anthropic/claude-api) | Reference for the Claude API / Anthropic SDK — model ids, pricing, params, streaming, tool use, MCP, agents, caching, token counting, model … | anthropic |
| [`code-review-excellence`](skills/wshobson/code-review-excellence) | Master effective code review practices to provide constructive feedback, catch bugs early, and foster knowledge sharing while maintaining te… | wshobson |
| [`connectivity-triage`](skills/wshobson/connectivity-triage) | Use this skill when debugging active macOS connectivity failures, when an API or MCP service times out or disconnects, when DNS resolution i… | wshobson |
| [`debugging-strategies`](skills/wshobson/debugging-strategies) | Master systematic debugging techniques, profiling tools, and root cause analysis to efficiently track down bugs across any codebase or techn… | wshobson |
| [`developer-growth-analysis`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/developer-growth-analysis) | Analyzes your recent Claude Code chat history to identify coding patterns, development gaps, and areas for improvement, curates relevant lea… | composio ↗ |
| [`discernment-nudge`](skills/anthropic/discernment-nudge) | After you give a substantive answer or draft that the user may act on — advice or recommendations, drafted artifacts such as goals, plans, p… | anthropic |
| [`distributed-tracing`](skills/wshobson/distributed-tracing) | Implement distributed tracing with Jaeger and Tempo to track requests across microservices and identify performance bottlenecks. Use when de… | wshobson |
| [`domain-name-brainstormer`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/domain-name-brainstormer) | Generates creative domain name ideas for your project and checks availability across multiple TLDs (.com, .io, .dev, .ai, etc.). Saves hours… | composio ↗ |
| [`executing-plans`](skills/superpowers/executing-plans) | Use when executing an implementation plan in the current session as the implementer yourself — your human partner chose inline execution, or… | superpowers |
| [`git-advanced-workflows`](skills/wshobson/git-advanced-workflows) | Master advanced Git workflows including rebasing, cherry-picking, bisect, worktrees, and reflog to maintain clean history and recover from a… | wshobson |
| [`go-concurrency-patterns`](skills/wshobson/go-concurrency-patterns) | Master Go concurrency with goroutines, channels, sync primitives, and context. Use when building concurrent Go applications, implementing wo… | wshobson |
| [`grounded-vault`](skills/wshobson/grounded-vault) | Use when maintaining a durable Markdown knowledge store that agents compile from sources, when every number or quote in a wiki page must tra… | wshobson |
| [`karpathy-guidelines`](https://github.com/forrestchang/andrej-karpathy-skills/tree/2c606141936f/skills/karpathy-guidelines) | Behavioral guidelines to reduce common LLM coding mistakes. Use when writing, reviewing, or refactoring code to avoid overcomplication, make… | karpathy ↗ |
| [`langsmith-fetch`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/langsmith-fetch) | Debug LangChain and LangGraph agents by fetching execution traces from LangSmith Studio. Use when debugging agent behavior, investigating er… | composio ↗ |
| [`market-sizing-analysis`](skills/wshobson/market-sizing-analysis) | Calculate TAM/SAM/SOM for market opportunities using top-down, bottom-up, and value theory methodologies. Use this skill when sizing markets… | wshobson |
| [`modern-javascript-patterns`](skills/wshobson/modern-javascript-patterns) | Master ES6+ features including async/await, destructuring, spread operators, arrow functions, promises, modules, iterators, generators, and … | wshobson |
| [`multi-reviewer-patterns`](skills/wshobson/multi-reviewer-patterns) | Coordinate parallel code reviews across multiple quality dimensions with finding deduplication, severity calibration, and consolidated repor… | wshobson |
| [`parallel-debugging`](skills/wshobson/parallel-debugging) | Debug complex issues using competing hypotheses with parallel investigation, evidence collection, and root cause arbitration. Use this skill… | wshobson |
| [`ponytail`](skills/ponytail/ponytail) | Lazy senior dev mode: the smallest change that fully solves the task, and a reply a busy human understands in one read. Use on any coding ta… | ponytail |
| [`ponytail-review`](skills/ponytail/ponytail-review) | Quality review of a change: is the logic right, is it safe, does it hold under real load, is risky code tested, is it fast enough, and is ev… | ponytail |
| [`preference-optimization`](skills/wshobson/preference-optimization) | Align a fine-tuned model with preference data using DPO, ORPO, KTO, or SimPO. Use when preference pairs or thumbs-up/down feedback exist, wh… | wshobson |
| [`protocol-reverse-engineering`](skills/wshobson/protocol-reverse-engineering) | Master network protocol reverse engineering including packet analysis, protocol dissection, and custom protocol documentation. Use when anal… | wshobson |
| [`python-anti-patterns`](skills/wshobson/python-anti-patterns) | Use this skill when reviewing Python code for common anti-patterns to avoid. Use as a checklist when reviewing code, before finalizing imple… | wshobson |
| [`python-observability`](skills/wshobson/python-observability) | Python observability patterns including structured logging, metrics, and distributed tracing. Use when adding logging, implementing metrics … | wshobson |
| [`python-performance-optimization`](skills/wshobson/python-performance-optimization) | Profile and optimize Python code using cProfile, memory profilers, and performance best practices. Use when debugging slow Python code, opti… | wshobson |
| [`rea-changelog-update`](skills/rea/rea-changelog-update) | Prepare or rewrite REA release changelogs and GitHub release notes from pinned Git history, with verified contributor thanks and Release Ple… | rea |
| [`receiving-code-review`](skills/superpowers/receiving-code-review) | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable -… | superpowers |
| [`requesting-code-review`](skills/superpowers/requesting-code-review) | Use when completing tasks, implementing major features, or before merging to verify work meets requirements | superpowers |
| [`review-agent-setup`](skills/wshobson/review-agent-setup) | Configure human-in-the-loop gating for AI agent review actions in Claude Code. Use when setting up a project where an agent may post PR revi… | wshobson |
| [`rust-async-patterns`](skills/wshobson/rust-async-patterns) | Master Rust async programming with Tokio, async traits, error handling, and concurrent patterns. Use when building async Rust applications, … | wshobson |
| [`saga-orchestration`](skills/wshobson/saga-orchestration) | Implement saga patterns for distributed transactions and cross-aggregate workflows. Use this skill when implementing distributed transaction… | wshobson |
| [`service-mesh-observability`](skills/wshobson/service-mesh-observability) | Implement comprehensive observability for service meshes including distributed tracing, metrics, and visualization. Use when setting up mesh… | wshobson |
| [`spark-memory-thermal-ops`](skills/wshobson/spark-memory-thermal-ops) | Manage unified memory and thermals during long-running ML jobs on NVIDIA DGX Spark. Use when planning memory headroom for a training run on … | wshobson |
| [`spark-optimization`](skills/wshobson/spark-optimization) | Optimize Apache Spark jobs with partitioning, caching, shuffle optimization, and memory tuning. Use when improving Spark performance, debugg… | wshobson |
| [`sql-optimization-patterns`](skills/wshobson/sql-optimization-patterns) | Master SQL query optimization, indexing strategies, and EXPLAIN analysis to dramatically improve database performance and eliminate slow que… | wshobson |
| [`startup-financial-modeling`](skills/wshobson/startup-financial-modeling) | Build comprehensive 3-5 year financial models with revenue projections, cost structures, cash flow analysis, and scenario planning for early… | wshobson |
| [`subagent-driven-development`](skills/superpowers/subagent-driven-development) | Use when executing implementation plans with independent tasks in the current session | superpowers |
| [`team-communication-protocols`](skills/wshobson/team-communication-protocols) | Structured messaging protocols for agent team communication including message type selection, plan approval, shutdown procedures, and anti-p… | wshobson |
| [`track-management`](skills/wshobson/track-management) | Use this skill when creating, managing, or working with Conductor tracks - the logical work units for features, bugs, and refactors. Applies… | wshobson |
| [`using-git-worktrees`](skills/superpowers/using-git-worktrees) | Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated wo… | superpowers |

</details>

<details><summary><b>Data & AI</b> (17)</summary>

| Skill | What it does | Source |
|---|---|---|
| [`ai-debt-detector`](skills/wshobson/ai-debt-detector) | Use after generating code, after accepting AI suggestions, or when reviewing AI-written modules. Also use when code works but feels brittle,… | wshobson |
| [`avoid-ai-writing`](skills/wshobson/avoid-ai-writing) | Audit and rewrite prose so it stops reading as machine-generated. Use this skill when asked to remove AI-isms, clean up AI writing, edit a d… | wshobson |
| [`checkpoint-promotion`](skills/wshobson/checkpoint-promotion) | Gate fine-tuned checkpoints with drift budgets, paired comparison, and forgetting checks before promotion. Use after a training run produces… | wshobson |
| [`data-storytelling`](skills/wshobson/data-storytelling) | Transform data into compelling narratives using visualization, context, and persuasive structure. Use when presenting analytics to stakehold… | wshobson |
| [`dataset-curation`](skills/wshobson/dataset-curation) | Prepare, format, and validate datasets for supervised fine-tuning and preference training. Use when converting raw data into training format… | wshobson |
| [`embedding-strategies`](skills/wshobson/embedding-strategies) | Select and optimize embedding models for semantic search and RAG applications. Use when choosing embedding models, implementing chunking str… | wshobson |
| [`eval-harness-first`](skills/wshobson/eval-harness-first) | Build the evaluation harness that gates every fine-tuning run — golden sets, per-failure-mode graders, judge calibration, and base-model bas… | wshobson |
| [`finetuning-method-selection`](skills/wshobson/finetuning-method-selection) | Decide whether to fine-tune at all, and route to the right method (SFT, DPO/ORPO/KTO, GRPO/RLVR, continued pretraining) and base model. Use … | wshobson |
| [`hybrid-search-implementation`](skills/wshobson/hybrid-search-implementation) | Combine vector and keyword search for improved retrieval. Use when implementing RAG systems, building search engines, or when neither approa… | wshobson |
| [`mcp-builder`](skills/anthropic/mcp-builder) | Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-design… | anthropic |
| [`mcp-builder`](skills/composio/mcp-builder) | Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-design… | composio |
| [`nextjs-app-router-patterns`](skills/wshobson/nextjs-app-router-patterns) | Master Next.js 14+ App Router with Server Components, streaming, parallel routes, and advanced data fetching. Use when building Next.js appl… | wshobson |
| [`similarity-search-patterns`](skills/wshobson/similarity-search-patterns) | Implement efficient similarity search with vector databases. Use when building semantic search, implementing nearest neighbor queries, or op… | wshobson |
| [`spark-environment-setup`](skills/wshobson/spark-environment-setup) | Set up a working ML training/inference environment on NVIDIA DGX Spark (GB10, aarch64, CUDA 13). Use when installing PyTorch/Unsloth/TRL/vLL… | wshobson |
| [`spark-training-gotchas`](skills/wshobson/spark-training-gotchas) | Preflight and diagnose the ten known failure modes for ML training on NVIDIA DGX Spark. Use when a training run on DGX Spark fails to start,… | wshobson |
| [`trace-to-training-data`](skills/wshobson/trace-to-training-data) | Convert evaluation traces and production logs into SFT examples and preference pairs. Use when graded traces or failure examples exist and n… | wshobson |
| [`unity-ecs-patterns`](skills/wshobson/unity-ecs-patterns) | Master Unity ECS (Entity Component System) with DOTS, Jobs, and Burst for high-performance game development. Use when building data-oriented… | wshobson |

</details>

<details><summary><b>Design & UI</b> (42)</summary>

| Skill | What it does | Source |
|---|---|---|
| [`algorithmic-art`](skills/anthropic/algorithmic-art) | Creating algorithmic art using p5.js with seeded randomness and interactive parameter exploration. Use this when users request creating art … | anthropic |
| [`api-design-principles`](skills/wshobson/api-design-principles) | Master REST and GraphQL API design principles to build intuitive, scalable, and maintainable APIs that delight developers. Use when designin… | wshobson |
| [`architecture-patterns`](skills/wshobson/architecture-patterns) | Implement proven backend architecture patterns including Clean Architecture, Hexagonal Architecture, and Domain-Driven Design. Use this skil… | wshobson |
| [`artifacts-builder`](skills/composio/artifacts-builder) | Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS,… | composio |
| [`banner-design`](skills/ui-ux-pro-max/banner-design) | Design banners for social media, ads, website heroes, creative assets, and print. Multiple art direction options with optional generated or … | ui-ux-pro-max |
| [`brand`](skills/ui-ux-pro-max/brand) | Brand voice, visual identity, messaging frameworks, asset management, brand consistency. Activate for branded content, tone of voice, market… | ui-ux-pro-max |
| [`brand-guidelines`](skills/anthropic/brand-guidelines) | Applies Anthropic's official brand colors and typography to any sort of artifact that may benefit from having Anthropic's look-and-feel. Use… | anthropic |
| [`brand-landingpage`](skills/wshobson/brand-landingpage) | Brand-first landing page designer — runs a brand-identity interview (colors, typography, shape language), then generates and iterates on a p… | wshobson |
| [`deployment-pipeline-design`](skills/wshobson/deployment-pipeline-design) | Design multi-stage CI/CD pipelines with approval gates, security checks, and deployment orchestration. Use this skill when designing zero-do… | wshobson |
| [`design-system-patterns`](skills/wshobson/design-system-patterns) | Build scalable design systems with design tokens, theming infrastructure, and component architecture patterns. Use when creating design toke… | wshobson |
| [`event-store-design`](skills/wshobson/event-store-design) | Design and implement event stores for event-sourced systems. Use when building event sourcing infrastructure, choosing event store technolog… | wshobson |
| [`frontend-design`](skills/anthropic/frontend-design) | Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typog… | anthropic |
| [`gdpr-data-handling`](skills/wshobson/gdpr-data-handling) | Implement GDPR-compliant data handling with consent management, data subject rights, and privacy by design. Use when building systems that p… | wshobson |
| [`helm-chart-scaffolding`](skills/wshobson/helm-chart-scaffolding) | Design, organize, and manage Helm charts for templating and packaging Kubernetes applications with reusable configurations. Use when creatin… | wshobson |
| [`interaction-design`](skills/wshobson/interaction-design) | Design and implement microinteractions, motion design, transitions, and user feedback patterns. Use when adding polish to UI interactions, i… | wshobson |
| [`kpi-dashboard-design`](skills/wshobson/kpi-dashboard-design) | Design effective KPI dashboards with metrics selection, visualization best practices, and real-time monitoring patterns. Use this skill when… | wshobson |
| [`langchain-architecture`](skills/wshobson/langchain-architecture) | Design LLM applications using LangChain 1.x and LangGraph for agents, memory, and tool integration. Use when building LangChain applications… | wshobson |
| [`microservices-patterns`](skills/wshobson/microservices-patterns) | Design microservices architectures with service boundaries, event-driven communication, and resilience patterns. Use when building distribut… | wshobson |
| [`multi-cloud-architecture`](skills/wshobson/multi-cloud-architecture) | Design multi-cloud architectures using a decision framework to select and integrate services across AWS, Azure, GCP, and OCI. Use when build… | wshobson |
| [`nodejs-backend-patterns`](skills/wshobson/nodejs-backend-patterns) | Build production-ready Node.js backend services with Express/Fastify, implementing middleware patterns, error handling, authentication, data… | wshobson |
| [`openapi-spec-generation`](skills/wshobson/openapi-spec-generation) | Generate and maintain OpenAPI 3.1 specifications from code, design-first specs, and validation patterns. Use when creating API documentation… | wshobson |
| [`postgresql-table-design`](skills/wshobson/postgresql-table-design) | Use this skill when designing or reviewing a PostgreSQL-specific schema. Covers best-practices, data types, indexing, constraints, performan… | wshobson |
| [`prompt-engineering-patterns`](skills/wshobson/prompt-engineering-patterns) | This skill should be used when the user asks to "optimize a prompt", "improve prompt performance", "design a prompt template", "write better… | wshobson |
| [`python-design-patterns`](skills/wshobson/python-design-patterns) | Python design patterns including KISS, Separation of Concerns, Single Responsibility, and composition over inheritance. Use this skill when … | wshobson |
| [`python-project-structure`](skills/wshobson/python-project-structure) | Python project organization, module architecture, and public API design. Use when setting up new projects, organizing modules, defining publ… | wshobson |
| [`rea-analysis-optimization`](skills/rea/rea-analysis-optimization) | Optimize REA providers and shared analysis workflows for agent context, latency, CPU, and memory while preserving correctness and Evidence. … | rea |
| [`rea-tool-design`](skills/rea/rea-tool-design) | Design or change REA investigation tools, CLI/MCP contracts, provider capabilities, and Evidence semantics. | rea |
| [`recsys-pipeline-architect`](skills/wshobson/recsys-pipeline-architect) | Design composable recommendation, ranking, and feed pipelines using the six-stage Source→Hydrator→Filter→Scorer→Selector→SideEffect framewor… | wshobson |
| [`slack-gif-creator`](skills/anthropic/slack-gif-creator) | Knowledge and utilities for creating animated GIFs optimized for Slack. Provides constraints, validation tools, and animation concepts. Use … | anthropic |
| [`slack-gif-creator`](skills/composio/slack-gif-creator) | Toolkit for creating animated GIFs optimized for Slack, with validators for size constraints and composable animation primitives. This skill… | composio |
| [`tailwind-design-system`](skills/wshobson/tailwind-design-system) | Build scalable design systems with Tailwind CSS v4, design tokens, component libraries, and responsive patterns. Use when creating component… | wshobson |
| [`task-coordination-strategies`](skills/wshobson/task-coordination-strategies) | Decompose complex tasks, design dependency graphs, and coordinate multi-agent work with proper task descriptions and workload balancing. Use… | wshobson |
| [`team-composition-analysis`](skills/wshobson/team-composition-analysis) | Design optimal team structures, hiring plans, compensation strategies, and equity allocation for early-stage startups from pre-seed through … | wshobson |
| [`team-composition-patterns`](skills/wshobson/team-composition-patterns) | Design optimal agent team compositions with sizing heuristics, preset configurations, and agent type selection. Use this skill when deciding… | wshobson |
| [`ui-styling`](skills/ui-ux-pro-max/ui-styling) | Create beautiful, accessible user interfaces with shadcn/ui components (built on Radix UI + Tailwind), Tailwind CSS utility-first styling, a… | ui-ux-pro-max |
| [`vision-sft`](skills/wshobson/vision-sft) | Fine-tune vision-language models (VLMs) with supervised learning on image+text data. Use when adapting a VLM to a visual domain or task, con… | wshobson |
| [`visual-design-foundations`](skills/wshobson/visual-design-foundations) | Apply typography, color theory, spacing systems, and iconography principles to create cohesive visual designs. Use when establishing design … | wshobson |
| [`visual-edit-precision`](skills/wshobson/visual-edit-precision) | Use when making UI/frontend changes guided by visual context, when the user selects elements visually, draws annotations, or provides screen… | wshobson |
| [`wcag-audit-patterns`](skills/wshobson/wcag-audit-patterns) | Conduct WCAG 2.2 accessibility audits with automated testing, manual verification, and remediation guidance. Use when auditing websites for … | wshobson |
| [`web-artifacts-builder`](skills/anthropic/web-artifacts-builder) | Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS,… | anthropic |
| [`web-component-design`](skills/wshobson/web-component-design) | Master React, Vue, and Svelte component patterns including CSS-in-JS, composition strategies, and reusable component architecture. Use when … | wshobson |
| [`workflow-orchestration-patterns`](skills/wshobson/workflow-orchestration-patterns) | Design durable workflows with Temporal for distributed systems. Covers workflow vs activity separation, saga patterns, state management, and… | wshobson |

</details>

<details><summary><b>DevOps & Cloud</b> (24)</summary>

| Skill | What it does | Source |
|---|---|---|
| [`domain-renewal-lookup`](skills/mahesh-surada/domain-renewal-lookup) | Find a website's domain renewal (expiry) date and time, registrar, age and lifecycle stage using RDAP, the official replacement for WHOIS, a… | mahesh-surada |
| [`github-pages-actions-deploy`](skills/mahesh-surada/github-pages-actions-deploy) | Publish a static site or single-page app to GitHub Pages with a GitHub Actions workflow, including a build step, scheduled data refreshes an… | mahesh-surada |
| [`backtesting-frameworks`](skills/wshobson/backtesting-frameworks) | Build robust backtesting systems for trading strategies with proper handling of look-ahead bias, survivorship bias, and transaction costs. U… | wshobson |
| [`bash-defensive-patterns`](skills/wshobson/bash-defensive-patterns) | Master defensive Bash programming techniques for production-grade scripts. Use when writing robust shell scripts, CI/CD pipelines, or system… | wshobson |
| [`cost-optimization`](skills/wshobson/cost-optimization) | Optimize cloud costs across AWS, Azure, GCP, and OCI through resource rightsizing, tagging strategies, reserved instances, and spending anal… | wshobson |
| [`database-migration`](skills/wshobson/database-migration) | Execute database migrations across ORMs and platforms with zero-downtime strategies, data transformation, and rollback procedures. Use when … | wshobson |
| [`gitops-workflow`](skills/wshobson/gitops-workflow) | Implement GitOps workflows with ArgoCD and Flux for automated, declarative Kubernetes deployments with continuous reconciliation. Use when i… | wshobson |
| [`grafana-dashboards`](skills/wshobson/grafana-dashboards) | Create and manage production Grafana dashboards for real-time visualization of system and application metrics. Use when building monitoring … | wshobson |
| [`hermes-tweet`](skills/wshobson/hermes-tweet) | Install and operate Hermes Tweet, a Hermes Agent plugin for X/Twitter research, timeline reading, tweet analysis, and approval-gated private… | wshobson |
| [`hybrid-cloud-networking`](skills/wshobson/hybrid-cloud-networking) | Configure secure, high-performance connectivity between on-premises infrastructure and cloud platforms using VPN and dedicated connections. … | wshobson |
| [`incident-runbook-templates`](skills/wshobson/incident-runbook-templates) | Create structured incident response runbooks with step-by-step procedures, escalation paths, and recovery actions. Use this skill when build… | wshobson |
| [`internal-comms`](skills/anthropic/internal-comms) | A set of resources to help me write all kinds of internal communications, using the formats that my company likes to use. Claude should use … | anthropic |
| [`istio-traffic-management`](skills/wshobson/istio-traffic-management) | Configure Istio traffic management including routing, load balancing, circuit breakers, and canary deployments. Use when implementing servic… | wshobson |
| [`ml-pipeline-workflow`](skills/wshobson/ml-pipeline-workflow) | Build end-to-end MLOps pipelines from data preparation through model training, validation, and production deployment. Use when creating ML p… | wshobson |
| [`on-call-handoff-patterns`](skills/wshobson/on-call-handoff-patterns) | Master on-call shift handoffs with context transfer, escalation procedures, and documentation. Use this skill when transitioning on-call res… | wshobson |
| [`postmortem-writing`](skills/wshobson/postmortem-writing) | Write effective blameless postmortems with root cause analysis, timelines, and action items. Use when conducting incident reviews, writing p… | wshobson |
| [`prometheus-configuration`](skills/wshobson/prometheus-configuration) | Set up Prometheus for comprehensive metric collection, storage, and monitoring of infrastructure and applications. Use when implementing met… | wshobson |
| [`risk-metrics-calculation`](skills/wshobson/risk-metrics-calculation) | Calculate portfolio risk metrics including VaR, CVaR, Sharpe, Sortino, and drawdown analysis. Use when measuring portfolio risk, implementin… | wshobson |
| [`shellcheck-configuration`](skills/wshobson/shellcheck-configuration) | Master ShellCheck static analysis configuration and usage for shell script quality. Use when setting up linting infrastructure, fixing code … | wshobson |
| [`signed-audit-trails-recipe`](skills/wshobson/signed-audit-trails-recipe) | Step-by-step cookbook for setting up cryptographically signed audit trails on Claude Code tool calls. Use when explaining, evaluating, or de… | wshobson |
| [`slo-implementation`](skills/wshobson/slo-implementation) | Define and implement Service Level Indicators (SLIs) and Service Level Objectives (SLOs) with error budgets and alerting. Use when establish… | wshobson |
| [`terraform-module-library`](skills/wshobson/terraform-module-library) | Build reusable Terraform modules for AWS, Azure, GCP, and OCI infrastructure following infrastructure-as-code best practices. Use when creat… | wshobson |
| [`vector-index-tuning`](skills/wshobson/vector-index-tuning) | Optimize vector index performance for latency, recall, and memory. Use when tuning HNSW parameters, selecting quantization strategies, or sc… | wshobson |
| [`writing-skills`](skills/superpowers/writing-skills) | Use when creating new skills, editing existing skills, or verifying skills work before deployment | superpowers |

</details>

<details><summary><b>Documents & Office</b> (25)</summary>

| Skill | What it does | Source |
|---|---|---|
| [`canvas-design`](skills/anthropic/canvas-design) | Create beautiful visual art in .png and .pdf documents using design philosophy. You should use this skill when the user asks to create a pos… | anthropic |
| [`design`](skills/ui-ux-pro-max/design) | Comprehensive design skill: brand identity, design tokens, UI styling, logo generation (55 styles, Gemini, Atlas Cloud, or MuAPI AI), corpor… | ui-ux-pro-max |
| [`design-system`](skills/ui-ux-pro-max/design-system) | Token architecture, component specifications, and slide generation. Three-layer tokens (primitive→semantic→component), CSS variables, spacin… | ui-ux-pro-max |
| [`docx`](https://github.com/anthropics/skills/tree/dbd4588f9e10/skills/docx) | Use this skill whenever the user wants to create, read, edit, or manipulate Word documents (.docx files) or Word templates (.dotx files). Tr… | anthropic ↗ |
| [`docx`](https://github.com/tfriedel/claude-office-skills/tree/d4241e43b60e/public/docx) | Comprehensive document creation, editing, and analysis with support for tracked changes, comments, formatting preservation, and text extract… | office-skills ↗ |
| [`docx`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/document-skills/docx) | Comprehensive document creation, editing, and analysis with support for tracked changes, comments, formatting preservation, and text extract… | composio ↗ |
| [`file-conversion`](skills/wshobson/file-conversion) | Use when the user needs a local file converted between common image, audio, video, document, or data formats. Select installed tools, preser… | wshobson |
| [`hads`](skills/wshobson/hads) | Use when writing technical documentation that needs to be readable by both humans and AI models, converting existing docs to HADS format, va… | wshobson |
| [`pdf`](https://github.com/anthropics/skills/tree/dbd4588f9e10/skills/pdf) | Use this skill whenever the user wants to do anything with PDF files. This includes reading or extracting text/tables from PDFs, combining o… | anthropic ↗ |
| [`pdf`](https://github.com/tfriedel/claude-office-skills/tree/d4241e43b60e/public/pdf) | Comprehensive PDF manipulation toolkit for extracting text and tables, creating new PDFs, merging/splitting documents, and handling forms. W… | office-skills ↗ |
| [`pdf`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/document-skills/pdf) | Comprehensive PDF manipulation toolkit for extracting text and tables, creating new PDFs, merging/splitting documents, and handling forms. W… | composio ↗ |
| [`pptx`](https://github.com/anthropics/skills/tree/dbd4588f9e10/skills/pptx) | Use this skill any time a .pptx or .potx file is involved in any way — as input, output, or both. This includes: creating slide decks, pitch… | anthropic ↗ |
| [`pptx`](https://github.com/tfriedel/claude-office-skills/tree/d4241e43b60e/public/pptx) | Presentation creation, editing, and analysis. When Claude needs to work with presentations (.pptx files) for: (1) Creating new presentations… | office-skills ↗ |
| [`pptx`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/document-skills/pptx) | Presentation creation, editing, and analysis. When Claude needs to work with presentations (.pptx files) for: (1) Creating new presentations… | composio ↗ |
| [`pptx-deck-context`](skills/wshobson/pptx-deck-context) | Use when preparing the narrative, sources, and design context for a new editable PPTX deck. | wshobson |
| [`pptx-quality-gates`](skills/wshobson/pptx-quality-gates) | Use when validating or repairing an editable PPTX deck for geometry, accessibility, native editability, source lineage, and OOXML package in… | wshobson |
| [`pptx-reference-deck-analysis`](skills/wshobson/pptx-reference-deck-analysis) | Use when analyzing a reference PPTX for read-only structure, theme, typography, layout rhythm, diagnostics, derived template catalogs, or sa… | wshobson |
| [`pptx-slide-specification`](skills/wshobson/pptx-slide-specification) | Use when authoring or repairing a coordinate-explicit JSON specification for an editable PPTX deck. | wshobson |
| [`pptx-visual-assets`](skills/wshobson/pptx-visual-assets) | Use when selecting and placing approved supporting icons, images, SVGs, diagrams, or infographics in an editable PPTX deck. | wshobson |
| [`rag-implementation`](skills/wshobson/rag-implementation) | Build Retrieval-Augmented Generation (RAG) systems for LLM applications with vector databases and semantic search. Use when implementing kno… | wshobson |
| [`slides`](skills/ui-ux-pro-max/slides) | Create strategic HTML presentations with Chart.js, design tokens, responsive layouts, copywriting formulas, and contextual slide strategies. | ui-ux-pro-max |
| [`theme-factory`](skills/anthropic/theme-factory) | Toolkit for styling artifacts with a theme. These artifacts can be slides, docs, reportings, HTML landing pages, etc. There are 10 pre-set t… | anthropic |
| [`xlsx`](https://github.com/anthropics/skills/tree/dbd4588f9e10/skills/xlsx) | Use this skill any time a spreadsheet file is the primary input or output. This means any task where the user wants to: open, read, edit, or… | anthropic ↗ |
| [`xlsx`](https://github.com/tfriedel/claude-office-skills/tree/d4241e43b60e/public/xlsx) | Comprehensive spreadsheet creation, editing, and analysis with support for formulas, formatting, data analysis, and visualization. When Clau… | office-skills ↗ |
| [`xlsx`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/document-skills/xlsx) | Comprehensive spreadsheet creation, editing, and analysis with support for formulas, formatting, data analysis, and visualization. When Clau… | composio ↗ |

</details>

<details><summary><b>Integrations & MCP</b> (10)</summary>

| Skill | What it does | Source |
|---|---|---|
| [`academy-guide`](skills/anthropic/academy-guide) | Stop and check this skill before finishing any reply to a question about how to use Claude or a Claude product — it recommends matching cour… | anthropic |
| [`billing-automation`](skills/wshobson/billing-automation) | Build automated billing systems for recurring payments, invoicing, subscription lifecycle, and dunning management. Use when implementing sub… | wshobson |
| [`connect`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/connect) | Connect Claude to any app. Send emails, create issues, post messages, update databases - take real actions across Gmail, Slack, GitHub, Noti… | composio ↗ |
| [`connect-apps`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/connect-apps) | Connect Claude to external apps like Gmail, Slack, GitHub. Use this skill when the user wants to send emails, create issues, post messages, … | composio ↗ |
| [`nft-standards`](skills/wshobson/nft-standards) | Implement NFT standards (ERC-721, ERC-1155) with proper metadata handling, minting strategies, and marketplace integration. Use when creatin… | wshobson |
| [`parallel-feature-development`](skills/wshobson/parallel-feature-development) | Coordinate parallel feature development with file ownership strategies, conflict avoidance rules, and integration patterns for multi-agent i… | wshobson |
| [`paypal-integration`](skills/wshobson/paypal-integration) | Integrate PayPal payment processing with support for express checkout, subscriptions, and refund management. Use when implementing PayPal pa… | wshobson |
| [`skill-share`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/skill-share) | A skill that creates new Claude skills and automatically shares them on Slack using Rube for seamless team collaboration and skill discovery… | composio ↗ |
| [`social-publishing`](skills/wshobson/social-publishing) | Schedule and publish social media posts across 13 platforms (X, LinkedIn, Instagram, Facebook Pages, TikTok, Discord, Telegram, YouTube, Red… | wshobson |
| [`stripe-integration`](skills/wshobson/stripe-integration) | Implement Stripe payment processing for robust, PCI-compliant payment flows including checkout, subscriptions, and webhooks. Use when integr… | wshobson |

</details>

<details><summary><b>Languages & Frameworks</b> (16)</summary>

| Skill | What it does | Source |
|---|---|---|
| [`async-python-patterns`](skills/wshobson/async-python-patterns) | Master Python asyncio, concurrent programming, and async/await patterns for high-performance applications. Use when building async APIs, con… | wshobson |
| [`fastapi-templates`](skills/wshobson/fastapi-templates) | Create production-ready FastAPI projects with async patterns, dependency injection, and comprehensive error handling. Use when building new … | wshobson |
| [`memory-safety-patterns`](skills/wshobson/memory-safety-patterns) | Implement memory-safe programming with RAII, ownership, smart pointers, and resource management across Rust, C++, and C. Use when writing sa… | wshobson |
| [`python-background-jobs`](skills/wshobson/python-background-jobs) | Python background job patterns including task queues, workers, and event-driven architecture. Use when implementing async task processing, j… | wshobson |
| [`python-code-style`](skills/wshobson/python-code-style) | Python code style, linting, formatting, naming conventions, and documentation standards. Use when writing new code, reviewing style, configu… | wshobson |
| [`python-error-handling`](skills/wshobson/python-error-handling) | Python error handling patterns including input validation, exception hierarchies, and partial failure handling. Use when implementing valida… | wshobson |
| [`python-packaging`](skills/wshobson/python-packaging) | Create distributable Python packages with proper project structure, setup.py/pyproject.toml, and publishing to PyPI. Use when packaging Pyth… | wshobson |
| [`python-resilience`](skills/wshobson/python-resilience) | Python resilience patterns including automatic retries, exponential backoff, timeouts, and fault-tolerant decorators. Use when adding retry … | wshobson |
| [`python-resource-management`](skills/wshobson/python-resource-management) | Python resource management with context managers, cleanup patterns, and streaming. Use when managing connections, file handles, implementing… | wshobson |
| [`python-type-safety`](skills/wshobson/python-type-safety) | Python type safety with type hints, generics, protocols, and strict type checking. Use when adding type annotations, implementing generic cl… | wshobson |
| [`react-modernization`](skills/wshobson/react-modernization) | Upgrade React applications to latest versions, migrate from class components to hooks, and adopt concurrent features. Use when modernizing R… | wshobson |
| [`react-state-management`](skills/wshobson/react-state-management) | Master modern React state management with Redux Toolkit, Zustand, Jotai, and React Query. Use when setting up global state, managing server … | wshobson |
| [`reverse-engineer-anything`](skills/rea/reverse-engineer-anything) | Reverse engineer native, managed, Electron/JavaScript, packaged, firmware, and browser targets with REA. Use shipped-artifact or requested r… | rea |
| [`social-evidence-research`](skills/wshobson/social-evidence-research) | Research public discussion on social platforms and keep every report claim tied to the source material that supports it. Use when researchin… | wshobson |
| [`typescript-advanced-types`](skills/wshobson/typescript-advanced-types) | Master TypeScript's advanced type system including generics, conditional types, mapped types, template literals, and utility types for build… | wshobson |
| [`uv-package-manager`](skills/wshobson/uv-package-manager) | Master the uv package manager for fast Python dependency management, virtual environments, and modern Python project workflows. Use when set… | wshobson |

</details>

<details><summary><b>Mobile & Web apps</b> (10)</summary>

| Skill | What it does | Source |
|---|---|---|
| [`android-app-from-web-ci`](skills/mahesh-surada/android-app-from-web-ci) | Wrap a web app (HTML/JS or PWA) as a real Android app with Capacitor and build the APK and Play Store AAB entirely on GitHub Actions, no And… | mahesh-surada |
| [`pwa-from-any-website`](skills/mahesh-surada/pwa-from-any-website) | Turn any static website or single HTML app into an installable, offline-capable Progressive Web App (manifest, service worker, icons, iOS Ad… | mahesh-surada |
| [`accessibility-compliance`](skills/wshobson/accessibility-compliance) | Implement WCAG 2.2 compliant interfaces with mobile accessibility, inclusive design patterns, and assistive technology support. Use when aud… | wshobson |
| [`mobile-android-design`](skills/wshobson/mobile-android-design) | Master Material Design 3 and Jetpack Compose patterns for building native Android apps. Use when designing Android interfaces, implementing … | wshobson |
| [`mobile-ios-design`](skills/wshobson/mobile-ios-design) | Master iOS Human Interface Guidelines and SwiftUI patterns for building native iOS apps. Use when designing iOS interfaces, implementing Swi… | wshobson |
| [`react-native-architecture`](skills/wshobson/react-native-architecture) | Build production React Native apps with Expo, navigation, native modules, offline sync, and cross-platform patterns. Use when developing mob… | wshobson |
| [`react-native-design`](skills/wshobson/react-native-design) | Master React Native styling, navigation, and Reanimated animations for cross-platform mobile development. Use when building React Native app… | wshobson |
| [`responsive-design`](skills/wshobson/responsive-design) | Implement modern responsive layouts using container queries, fluid typography, CSS Grid, and mobile-first breakpoint strategies. Use when bu… | wshobson |
| [`ui-ux-pro-max`](skills/ui-ux-pro-max/ui-ux-pro-max) | UI/UX design intelligence for web, mobile, and desktop. This skill should be used when designing, building, reviewing, or fixing interfaces,… | ui-ux-pro-max |
| [`webapp-testing`](skills/anthropic/webapp-testing) | Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI be… | anthropic |

</details>

<details><summary><b>Other</b> (35)</summary>

| Skill | What it does | Source |
|---|---|---|
| [`architecture-decision-records`](skills/wshobson/architecture-decision-records) | Write and maintain Architecture Decision Records (ADRs) following best practices for technical decision documentation. Use when documenting … | wshobson |
| [`bazel-build-optimization`](skills/wshobson/bazel-build-optimization) | Optimize Bazel builds for large-scale monorepos. Use when configuring Bazel, implementing remote execution, or optimizing build performance … | wshobson |
| [`binary-analysis-patterns`](skills/wshobson/binary-analysis-patterns) | Master binary analysis patterns including disassembly, decompilation, control flow analysis, and code pattern recognition. Use when analyzin… | wshobson |
| [`competitive-ads-extractor`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/competitive-ads-extractor) | Extracts and analyzes competitors' ads from ad libraries (Facebook, LinkedIn, etc.) to understand what messaging, problems, and creative app… | composio ↗ |
| [`context-driven-development`](skills/wshobson/context-driven-development) | Creates and maintains project context artifacts (product.md, tech-stack.md, workflow.md, tracks.md) in a `conductor/` directory. Scaffolds n… | wshobson |
| [`cqrs-implementation`](skills/wshobson/cqrs-implementation) | Implement Command Query Responsibility Segregation for scalable architectures. Use when separating read and write models, optimizing query p… | wshobson |
| [`diagnosing-superpowers`](skills/superpowers/diagnosing-superpowers) | Use when a superpowers session went wrong and your human partner wants to know why — repeated work, ignored plans, stumbles, poor results, a… | superpowers |
| [`dispatching-parallel-agents`](skills/superpowers/dispatching-parallel-agents) | Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies | superpowers |
| [`error-handling-patterns`](skills/wshobson/error-handling-patterns) | Master error handling patterns across languages including exceptions, Result types, error propagation, and graceful degradation to build res… | wshobson |
| [`evaluation-methodology`](skills/wshobson/evaluation-methodology) | PluginEval quality methodology, covering dimensions, rubrics, and scoring formulas. Use this skill when understanding how plugin quality is … | wshobson |
| [`file-organizer`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/file-organizer) | Intelligently organizes your files and folders across your computer by understanding context, finding duplicates, suggesting better structur… | composio ↗ |
| [`godot-gdscript-patterns`](skills/wshobson/godot-gdscript-patterns) | Master Godot 4 GDScript patterns including signals, scenes, state machines, and optimization. Use when building Godot games, implementing ga… | wshobson |
| [`grpo-rlvr-training`](skills/wshobson/grpo-rlvr-training) | Train reasoning and verifiable-task behavior with GRPO and reinforcement learning from verifiable rewards (RLVR). Use when task success is a… | wshobson |
| [`image-enhancer`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/image-enhancer) | Improves the quality of images, especially screenshots, by enhancing resolution, sharpness, and clarity. Perfect for preparing images for pr… | composio ↗ |
| [`invoice-organizer`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/invoice-organizer) | Automatically organizes invoices and receipts for tax preparation by reading messy files, extracting key information, renaming them consiste… | composio ↗ |
| [`meeting-insights-analyzer`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/meeting-insights-analyzer) | Analyzes meeting transcripts and recordings to uncover behavioral patterns, communication insights, and actionable feedback. Identifies when… | composio ↗ |
| [`memory-forensics`](skills/wshobson/memory-forensics) | Master memory forensics techniques including memory acquisition, process analysis, and artifact extraction using Volatility and related tool… | wshobson |
| [`monorepo-management`](skills/wshobson/monorepo-management) | Master monorepo management with Turborepo, Nx, and pnpm workspaces to build efficient, scalable multi-package repositories with optimized bu… | wshobson |
| [`mtls-configuration`](skills/wshobson/mtls-configuration) | Configure mutual TLS (mTLS) for zero-trust service-to-service communication. Use when implementing zero-trust networking, certificate manage… | wshobson |
| [`nx-workspace-patterns`](skills/wshobson/nx-workspace-patterns) | Configure and optimize Nx monorepo workspaces. Use when setting up Nx, configuring project boundaries, optimizing build caching, or implemen… | wshobson |
| [`ponytail-debt`](skills/ponytail/ponytail-debt) | List every `shortcut:` comment (and older `ponytail:` ones) as a debt ledger. One-shot report, changes nothing. Use for "ponytail debt", "wh… | ponytail |
| [`ponytail-gain`](skills/ponytail/ponytail-gain) | Show ponytail's measured savings (code, cost, speed) from the benchmark. One-shot display. Use for /ponytail-gain, "what does ponytail save"… | ponytail |
| [`ponytail-help`](skills/ponytail/ponytail-help) | Quick reference for ponytail levels, skills and commands. One-shot display. Use for /ponytail-help, "ponytail help", "how do I use ponytail"… | ponytail |
| [`projection-patterns`](skills/wshobson/projection-patterns) | Build read models and projections from event streams. Use when implementing CQRS read sides, building materialized views, or optimizing quer… | wshobson |
| [`raffle-winner-picker`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/raffle-winner-picker) | Picks random winners from lists, spreadsheets, or Google Sheets for giveaways, raffles, and contests. Ensures fair, unbiased selection with … | composio ↗ |
| [`scan`](skills/wshobson/scan) | Scans the codebase to generate project-doc.md and AGENTS.md. Use when bootstrapping a new agent-driven repo, refreshing project documentatio… | wshobson |
| [`session-guard`](skills/wshobson/session-guard) | Use when working on complex multi-step tasks, when a session is getting long (40+ tool calls), when the agent starts ignoring rules it follo… | wshobson |
| [`skill-creator`](skills/composio/skill-creator) | Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that exte… | composio |
| [`superself`](skills/wshobson/superself) | Use when a project keeps its state in Superself (a `<!-- superself:begin` block in AGENTS.md or CLAUDE.md, or `self setup` resolves the dire… | wshobson |
| [`tailored-resume-generator`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/tailored-resume-generator) | Analyzes job descriptions and generates tailored resumes that highlight relevant experience, skills, and achievements to maximize interview … | composio ↗ |
| [`template-skill`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/template-skill) | Replace with description of the skill and when Claude should use it. | composio ↗ |
| [`turborepo-caching`](skills/wshobson/turborepo-caching) | Configure Turborepo for efficient monorepo builds with local and remote caching. Use when setting up Turborepo, optimizing build pipelines, … | wshobson |
| [`using-superpowers`](skills/superpowers/using-superpowers) | Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarif… | superpowers |
| [`verification-before-completion`](skills/superpowers/verification-before-completion) | Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and … | superpowers |
| [`youtube-downloader`](https://github.com/ComposioHQ/awesome-claude-skills/tree/be2a406907db/video-downloader) | Download YouTube videos with customizable quality and format options. Use this skill when the user asks to download, save, or grab YouTube v… | composio ↗ |

</details>

<details><summary><b>Security</b> (16)</summary>

| Skill | What it does | Source |
|---|---|---|
| [`anti-reversing-techniques`](skills/wshobson/anti-reversing-techniques) | Understand anti-reversing, obfuscation, and protection techniques encountered during software analysis. Use this skill when analyzing malwar… | wshobson |
| [`attack-tree-construction`](skills/wshobson/attack-tree-construction) | Build comprehensive attack trees to visualize threat paths. Use when mapping attack scenarios, identifying defense gaps, or communicating se… | wshobson |
| [`auth-implementation-patterns`](skills/wshobson/auth-implementation-patterns) | Master authentication and authorization patterns including JWT, OAuth2, session management, and RBAC to build secure, scalable access contro… | wshobson |
| [`k8s-manifest-generator`](skills/wshobson/k8s-manifest-generator) | Create production-ready Kubernetes manifests for Deployments, Services, ConfigMaps, and Secrets following best practices and security standa… | wshobson |
| [`k8s-security-policies`](skills/wshobson/k8s-security-policies) | Implement Kubernetes security policies including NetworkPolicy, PodSecurityPolicy, and RBAC for production-grade security. Use when securing… | wshobson |
| [`linkerd-patterns`](skills/wshobson/linkerd-patterns) | Implement Linkerd service mesh patterns for lightweight, security-focused service mesh deployments. Use when setting up Linkerd, configuring… | wshobson |
| [`pci-compliance`](skills/wshobson/pci-compliance) | Implement PCI DSS compliance requirements for secure handling of payment card data and payment systems. Use when securing payment processing… | wshobson |
| [`ponytail-audit`](skills/ponytail/ponytail-audit) | Quality audit of a whole repo: bugs, security holes, what breaks under real load, risky code without tests, slow paths, and what to delete, … | ponytail |
| [`protect-mcp-setup`](skills/wshobson/protect-mcp-setup) | Configure Cedar policy enforcement and Ed25519 signed receipts for Claude Code tool calls. Use when setting up projects that need cryptograp… | wshobson |
| [`python-configuration`](skills/wshobson/python-configuration) | Python configuration management via environment variables and typed settings. Use when externalizing config, setting up pydantic-settings, m… | wshobson |
| [`sast-configuration`](skills/wshobson/sast-configuration) | Configure Static Application Security Testing (SAST) tools for automated vulnerability detection in application code. Use when setting up se… | wshobson |
| [`secrets-management`](skills/wshobson/secrets-management) | Implement secure secrets management for CI/CD pipelines using Vault, AWS Secrets Manager, or native platform solutions. Use when handling se… | wshobson |
| [`security-requirement-extraction`](skills/wshobson/security-requirement-extraction) | Derive security requirements from threat models and business context. Use when translating threats into actionable requirements, creating se… | wshobson |
| [`solidity-security`](skills/wshobson/solidity-security) | Master smart contract security best practices to prevent common vulnerabilities and implement secure Solidity patterns. Use when writing sma… | wshobson |
| [`stride-analysis-patterns`](skills/wshobson/stride-analysis-patterns) | Apply STRIDE methodology to systematically identify threats. Use when analyzing system security, conducting threat modeling sessions, or cre… | wshobson |
| [`threat-mitigation-mapping`](skills/wshobson/threat-mitigation-mapping) | Map identified threats to appropriate security controls and mitigations. Use when prioritizing security investments, creating remediation pl… | wshobson |

</details>

<details><summary><b>Testing & QA</b> (22)</summary>

| Skill | What it does | Source |
|---|---|---|
| [`airflow-dag-patterns`](skills/wshobson/airflow-dag-patterns) | Build production Apache Airflow DAGs with best practices for operators, sensors, testing, and deployment. Use when creating data pipelines, … | wshobson |
| [`bats-testing-patterns`](skills/wshobson/bats-testing-patterns) | Master Bash Automated Testing System (Bats) for comprehensive shell script testing. Use when writing tests for shell scripts, CI/CD pipeline… | wshobson |
| [`data-quality-frameworks`](skills/wshobson/data-quality-frameworks) | Implement data quality validation with Great Expectations, dbt tests, and data contracts. Use when building data quality pipelines, implemen… | wshobson |
| [`dbt-transformation-patterns`](skills/wshobson/dbt-transformation-patterns) | Master dbt (data build tool) for analytics engineering with model organization, testing, documentation, and incremental strategies. Use when… | wshobson |
| [`dependency-upgrade`](skills/wshobson/dependency-upgrade) | Manage major dependency version upgrades with compatibility analysis, staged rollout, and comprehensive testing. Use when upgrading framewor… | wshobson |
| [`dotnet-backend-patterns`](skills/wshobson/dotnet-backend-patterns) | Master C#/.NET backend development patterns for building robust APIs, MCP servers, and enterprise applications. Covers async/await, dependen… | wshobson |
| [`e2e-testing-patterns`](skills/wshobson/e2e-testing-patterns) | Master end-to-end testing with Playwright and Cypress to build reliable test suites that catch bugs, improve confidence, and enable fast dep… | wshobson |
| [`finishing-a-development-branch`](skills/superpowers/finishing-a-development-branch) | Use when implementation is complete, all tests pass, and you need to decide how to integrate the work | superpowers |
| [`github-actions-templates`](skills/wshobson/github-actions-templates) | Create production-ready GitHub Actions workflows for automated testing, building, and deploying applications. Use when setting up CI/CD with… | wshobson |
| [`gitlab-ci-patterns`](skills/wshobson/gitlab-ci-patterns) | Build GitLab CI/CD pipelines with multi-stage workflows, caching, and distributed runners for scalable automation. Use when implementing Git… | wshobson |
| [`javascript-testing-patterns`](skills/wshobson/javascript-testing-patterns) | Implement comprehensive testing strategies using Jest, Vitest, and Testing Library for unit tests, integration tests, and end-to-end testing… | wshobson |
| [`llm-evaluation`](skills/wshobson/llm-evaluation) | Implement comprehensive evaluation strategies for LLM applications using automated metrics, human feedback, and benchmarking. Use when testi… | wshobson |
| [`python-testing-patterns`](skills/wshobson/python-testing-patterns) | Implement comprehensive testing strategies with pytest, fixtures, mocking, and test-driven development. Use when writing Python tests, setti… | wshobson |
| [`quantized-export`](skills/wshobson/quantized-export) | Export a promoted fine-tuned model in the right deployment format — merged safetensors, LoRA-only, GGUF with imatrix, or FP8. Use after a ch… | wshobson |
| [`rea-ci-tests-audit`](skills/rea/rea-ci-tests-audit) | Audit REA CI and test suites for correctness, fixture drift, false passes, and measured performance; use for suite or workflow investigation… | rea |
| [`screen-reader-testing`](skills/wshobson/screen-reader-testing) | Test web applications with screen readers including VoiceOver, NVDA, and JAWS. Use when validating screen reader compatibility, debugging ac… | wshobson |
| [`skill-creator`](skills/anthropic/skill-creator) | Create new skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, ed… | anthropic |
| [`systematic-debugging`](skills/superpowers/systematic-debugging) | Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes | superpowers |
| [`temporal-python-testing`](skills/wshobson/temporal-python-testing) | Test Temporal workflows with pytest, time-skipping, and mocking strategies. Covers unit testing, integration testing, replay testing, and lo… | wshobson |
| [`test-driven-development`](skills/superpowers/test-driven-development) | Use when implementing any feature or bugfix, before writing implementation code | superpowers |
| [`web3-testing`](skills/wshobson/web3-testing) | Test smart contracts comprehensively using Hardhat and Foundry with unit tests, integration tests, and mainnet forking. Use when testing Sol… | wshobson |
| [`workflow-patterns`](skills/wshobson/workflow-patterns) | Use this skill when implementing tasks according to Conductor's TDD workflow, handling phase checkpoints, managing git commits for tasks, or… | wshobson |

</details>

<!-- CATALOG:END -->

## ➕ Suggest a collection

Open an issue or a pull request that adds a line to [`sources.json`](sources.json):

```json
{ "id": "short-id", "name": "Display name", "repo": "owner/repo", "exclude": ["folders/to/skip/"] }
```

The next sync picks it up. Original skills go in [`skills/mahesh-surada/`](skills/mahesh-surada) as `<name>/SKILL.md`.

## How the sync works

[`scripts/sync.mjs`](scripts/sync.mjs) runs weekly (and on demand) in [GitHub Actions](.github/workflows/sync.yml):

1. Shallow-clones each repo in `sources.json`.
2. Finds every `SKILL.md` and reads its `name` and `description`.
3. Checks the nearest licence file, first in the skill's folder, then in the repo.
4. Copies open-licensed skills into `skills/<collection>/` and links the rest.
5. Writes [`catalog/skills.json`](catalog/skills.json), refreshes this README and publishes the website.

## Credits

All copied skills belong to their original authors. Each one keeps its licence and a `SOURCE.md` link back to the original. Collection, sync, installer and original skills are by **Mahesh Surada** ([MIT](LICENSE)).
