---
name: "MM-17515 — Mobile browser view: A long email address is not fully visible in Profile Settings"
status: Draft
priority: Normal
team_ownership: "QA Platform"
---

## MM-T31: MM-17515 — Mobile browser view: A long email address is not fully visible in Profile Settings

---

**Step 1**

1. Register a new account using a long email address such as "my.name+somethingreallylong\@mattermost.com" (or similar)
2. Toggle Google Chrome Device Emulation\
   **Windows**:\
   CTRL+Shift+I\
   then\
   CTRL+Shift+M\
   **Mac**:\
   ⌘⌥I (Command+Option+I)\
   then\
   ⌘⇧M (Command+Shift+M)
3. Select "iPad" and "100%" zoom
4. Navigate to User menu > Profile > Profile Settings 

**Expected**

- The email address is fully visible
- There is no period at the end of "Click to upload an image"

\
**Related bug**: [MM-17515](https://mattermost.atlassian.net/browse/MM-17515)
