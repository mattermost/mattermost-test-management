---
# (Required) Ensure all values are filled up
name: "@here. @all. @channel. (containing a period) still highlight"
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
- N/A
manual_test_environments: 
- Automated - No manual tests needed

# (Optional)
component: null
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: Messaging
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# Do not change
id: 3736148
key: MM-T72
folder_path: channels/messaging
created_on: "2019-12-19T15:28:54Z"
last_updated: ""
case_hashed: 5552837117326492f2fa42ad4d0bf3d93f20f87b3fb39c2439461ac6b08e9558d3f15fe260bcaeb01b7aa50818b73b09
steps_hashed: d6f7ef25adcaab9d911a3230c2525eba9e2bdb6bcd61f551260ed37d09a2871d3332398b89800092b1a33b8020dc3df2
---

## MM-T72: @here. @all. @channel. (containing a period) still highlight

---

**Step 1**

@here. @all. @channel. (containing a period) still highlight\
–––––––––––––––––––––––––

1. Post `@here. @channel. @all.`

(Ensure each mention is followed by a period)

_Related ticket(s):_

[UI Automation: Write an automated test using `cypress` for "at-here.", "at-all." and "at-channel." (ending in a period) still highlight" — MM-14320](https://mattermost.atlassian.net/browse/MM-14320)

**Expected**

- The @-mentions are highlighted but the period is not
