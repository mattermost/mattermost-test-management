---
name: "MM-17043 — Downgrade errors from the OpenGraph API"
status: Draft
priority: Normal
team_ownership: "QA Platform"
---

## MM-T21: MM-17043 — Downgrade errors from the OpenGraph API

---

**Step 1**

**On the RN mobile app**:

1. Make a post containing an invalid or internal URL such as \`http\://notarealurlatall.com/index.html\`

\
**On the desktop**:

1. Log in as an admin
2. Navigate to System Console → Reporting → Server Logs

**Expected**

- No errors should be seen in the logs

\
**Related bug**: [MM-17043](https://mattermost.atlassian.net/browse/MM-17043)
