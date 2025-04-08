---
# (Required) Ensure all values are filled up
name: "Open Graph link preview should display animated"
status: Active
priority: Normal
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
- messaging
- fix-versions-not-empty-2022cleanup
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: To Do
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments:
- Desktop

# Do not change
id: 8168020
key: MM-T11
created_on: "2020-12-10T17:51:24Z"
last_updated: "2022-09-09T20:50:00Z"
case_hashed: 65adb60dde2bfa3b32d35217c200aa4ef3b28d8991f260c33bdba75e5d4d5296fe771826d457f8b252d3bba60a7c5ff9
steps_hashed: 642b03f2737a8881b55258f1af3d14b8b700596ff859fd187d34c3af17e7df9fd5223a5cfde8503063cc2d6174c4b695
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T11: Open Graph link preview should display animated

---

**Step 1**

Open Graph link preview should display animated\
–––––––––––––––––––––––––

1. Post the link below in a channel\
   <https://giphy.com/gifs/afv-funny-fail-3o85xET02JdV8TQuwU>

_Related ticket(s):_

[Link to an animation in opengraph is not working — MM-16817](https://mattermost.atlassian.net/browse/MM-16817)

_Important notes about this step:_

A reference to the old testing spreadsheet was made on the bug ticket.\
<https://docs.google.com/spreadsheets/d/1gW7i8uF3jd5wuHd5mJ7UdBQsMFVZwHKMXE7WOtlDa0k/edit#gid=1473839219&amp;range=C36>

**Expected**

A preview of the animation should appear in the post
