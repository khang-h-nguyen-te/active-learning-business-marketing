# Active Learning Business — Claude Code Instructions

> This file will be completed in P3 after the business discovery interview.

## Quick reference
- Project root: Desktop/e8/test-plan/active-learning-business/
- Website: website/ (Next.js, Pages Router)
- Agents: .claude/agents/ and agents/
- Content topics: content/topics/ (one folder per post)
- Source material: content/source-material/
- Content calendar: content/content-calendar/
- Resources: resources/
- Standups: standup/

## Agents installed
| Agent | Definition | Primary trigger |
|-------|-----------|----------------|
| Project Manager | .claude/agents/project-manager.md | "help me write my standup" |
| Writer | .claude/agents/writer.md | "write a post about {topic}" |
| Designer | .claude/agents/designer.md | "generate an image for {post}" |
| Web Developer | .claude/agents/web-developer.md | "publish this post" |

## PM schedules (activate in P4)
Mon-Fri 7am: standup reminder → 9am: compile → 5pm: EOD reminder → Fri 4pm: RAG report
All times Bangkok (ICT, UTC+7)

## Current status
Bootstrap in progress — P2 complete. Website scaffolded, core team installed.
Next: attach p3-agents.md to begin business discovery and agent customisation.
