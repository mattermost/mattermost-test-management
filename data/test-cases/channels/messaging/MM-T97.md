---
# (Required) Ensure all values are filled up
name: "Open edit modal immediately after making a post"
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
rainforest: []
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 3741728
key: MM-T97
created_on: "2019-12-20T16:33:00Z"
last_updated: ""
case_hashed: fe19394fe4a5cfbce904b5278c1d8e358afeaaf8ced279af766db0af1da629c251f4f6cce97323de999b32e9918f5c1d
steps_hashed: 557120eafb3f9f219410112564a6a42abc1e9b2686e44412057b10d14e111e34b5821f613319d35af4f723e50904c596
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T97: Open edit modal immediately after making a post

---

**Step 1**

Open edit modal immediately after making a post\
\--------------------\
1\. Post a message in a channel\
2\. Type a second post, with different text from the first one, into the input box\
3\. Hit 'enter' key and then immediately (as FAST as you can) hit 'arrow-up' to open the edit box\
4\. If pressed while the new post was still pending, observe the edit box opens for the first post\
5\. Press ESC to close edit modal\
6\. Press UP again

**Expected**

Step 4: If you pressed UP while the post was still pending, edit modal opens for previous post\
\
Step 6: Edit modal opens for the second post
