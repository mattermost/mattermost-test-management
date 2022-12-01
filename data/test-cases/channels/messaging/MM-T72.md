---
# (Required) Ensure all values are filled up
name: "@here. @all. @channel. (containing a period) still highlight"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Messaging
component: null
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 3736148
key: MM-T72
created_on: "2019-12-19T15:28:54Z"
last_updated: ""
case_hashed: 2d3d0f1426a1b46f97ccb72c5d3233321b6777ac6fc84ac6c36a32a7839ffa58d97d5903d6184117651c2ab5d878fac4
steps_hashed: d6f7ef25adcaab9d911a3230c2525eba9e2bdb6bcd61f551260ed37d09a2871d3332398b89800092b1a33b8020dc3df2
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

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
