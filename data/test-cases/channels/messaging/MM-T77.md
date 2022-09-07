---
name: "Consecutive message does not repeat profile info (center and reply thread)"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T77: Consecutive message does not repeat profile info (center and reply thread)

---

**Step 1**

Consecutive message does not repeat profile info (center and reply thread)\
\--------------------\
1\. Post \`One\`\
2\. Post \`Two\`\
3\. Post \`Three\`\
4\. Click reply arrow to also observe in RHS (mobile apps: observe first in center, then open reply screen to view there)

**Test Data**

N/A in compact view

**Expected**

On desktop app, RN apps, and browser in full-width view:\
Name and profile pic display on \`One\` post only, not on \`Two\` or \`Three\`\
\
Browser in mobile view: Profile pic appears on \`One\` post. User's name (but not profile pic) appears on all three posts in center panel. When clicking "reply" on each post, profile pic is shown in RHS view.\
\
When new post is added, the information should not flicker
