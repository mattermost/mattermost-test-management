---
# (Required) Ensure all values are filled up
name: "Consecutive message does not repeat profile info (center and reply thread)"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- Mobile
manual_test_environments: 
- Automated - No manual tests needed

# (Optional)
component: null
priority_p1_to_p4: P4 - Low-Impact (Edge or unsuitable to repeat?)
location: Messaging
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# Do not change
id: 3736153
key: MM-T77
folder_path: channels/messaging
created_on: "2019-12-19T15:28:55Z"
last_updated: ""
case_hashed: 772adc24a3ab04a2b2145d860f8f3d9b1f89e9b7da3d7ee52511c44b8aebffb9ffbe40984dbec643a4ba2e720641bf2c
steps_hashed: d2c27c9e2f63dbb9c79a3aa241e37986f4aed3653b04a9f3d253713a0d0e05bf96c3dd8c0641a5b3f15c71140bb243a9
---

## MM-T77: Consecutive message does not repeat profile info (center and reply thread)

---

**Step 1**

Consecutive message does not repeat profile info (center and reply thread)\
\--------------------\
1\. Post `One`\
2\. Post `Two`\
3\. Post `Three`\
4\. Click reply arrow to also observe in RHS (mobile apps: observe first in center, then open reply screen to view there)

_Important notes about this step:_

Compact view RHS consecutive posts being considered in UI redesign:

- <https://mattermost.atlassian.net/browse/MM-12946>
- <https://mattermost.atlassian.net/browse/MM-12915>
- <https://mattermost.atlassian.net/browse/MM-17293>

**Test Data**

N/A in compact view

**Expected**

On desktop app, RN apps, and browser in full-width view:\
Name and profile pic display on `One` post only, not on `Two` or `Three`\
\
Browser in mobile view: Profile pic appears on `One` post. User's name (but not profile pic) appears on all three posts in center panel. When clicking "reply" on each post, profile pic is shown in RHS view.\
\
When new post is added, the information should not flicker
