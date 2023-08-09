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
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- Mobile V2 Android
- in Production
- Mobile V2 iOS
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 3736148
key: MM-T72
created_on: "2019-12-19T15:28:54Z"
last_updated: ""
case_hashed: 3b2baf338e6d3df7adf803bd03574bf05a3553a635aaf193a524a1431b92232c7ea2b8d236547170d6c5a07c25149a09
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
