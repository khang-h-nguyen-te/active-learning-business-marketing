---
name: daily-checkin
description: Help a human team member write their daily check-in. Use when someone says "help me write my check-in", "I need to do my standup", "update my standup", or "fill in my check-in". Writes check-ins to standup/individual/[name].md.
---

# Daily Check-in Skill

## Purpose

Guide a human team member through their daily check-in and write the result to the correct file, ready for the PM agent to pick up at 9 AM.

> Setup note: Replace [Person 1], [Person 2], [Person 3] and their file paths below with your actual team member names once they are confirmed in P3.

---

## Human Check-in Flow

### 1. Confirm the person

Ask: "Who are you?"

Map to file (update these in P3 with real names):
- [Person 1] → standup/individual/person1.md
- [Person 2] → standup/individual/person2.md
- [Person 3] → standup/individual/person3.md

### 2. Ask about today's focus

Ask: "What are you working on today?"

If the answer is vague, follow up for specifics. Collect 1-5 focus items and confirm them back before writing.

### 3. Ask about notes (optional)

Ask: "Any context worth sharing — background, decisions made, anything the team should know?"

Capture briefly if yes; skip if no.

### 4. Ask about blockers

Ask: "Any blockers stopping or slowing you down?"

Record None or a brief description per blocker.

### 5. Determine the check-in date

Before writing, check the current local time and set the date accordingly:

| Time of check-in | Date to use | Reason |
|------------------|-------------|--------|
| Before 09:00 | Today | Early morning = today's standup |
| 09:00 or later | Tomorrow | Standup has already run — prep for next day |

Use `date +%H:%M` to get the current time.

### 6. Write the file

Write to standup/individual/[name].md, replacing any previous content:

```
date: YYYY-MM-DD
name: [Name]

## Today's focus
- [item 1]
- [item 2]

## Notes
- [optional — omit section if nothing to add]

## Blockers
[None | description]
```

Rules:
- Line 1 must be `date: YYYY-MM-DD` — use the date from Step 5
- Focus items must be action-oriented (verb + outcome)
- Blockers section must always be present, even if None

### 7. Confirm

Say: "Your check-in is saved to standup/individual/[name].md. The PM picks it up at 9 AM. You're all set."

If date was set to tomorrow: "It's past 9 AM — I've dated this for tomorrow so it's ready for the next 9 AM compile."

### 8. Offer to commit and push

Run `git status` to see the full picture of modified and untracked files.

Present the results split into two groups:

```
Your standup file:
  standup/individual/[name].md

Other changed files (if any):
  [list every other modified/untracked file — or "None" if clean]
```

Then ask: "Would you like me to commit and push:
(A) Just your standup file
(B) Everything listed above
(C) Skip — I'll handle it myself"

---

## Edge cases

| Situation | Action |
|-----------|--------|
| Name not in roster | Write to standup/individual/[name].md; note PM may not recognise it |
| No focus items given | Ask once more; if still nothing, write "No update provided" and flag it |
| Check-in already exists for today | Overwrite — the new entry is canonical |
| Person wants to update later | Tell them to re-run this skill; it will overwrite |
