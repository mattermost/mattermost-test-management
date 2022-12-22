---
# (Required) Ensure all values are filled up
name: "Unable to type in any other channel after leaving a draft post in preview mode in one channel then switching to another channel"
status: Draft
priority: Normal
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Ticket coverage
component: null
tags: []
labels: []

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: 2765097
key: MM-T37
created_on: "2019-08-28T17:41:42Z"
last_updated: "2022-12-01T21:17:51Z"
case_hashed: 8e128c8c610f33e77c88071e23bf9ae595c66793872534717da837ba9ca73684bb1e9e87040e35218fbdd6aa1e659c70
steps_hashed: 7596b5618055e1b9055f4a711df7aa1fd407590c8e78900b89265db5d7fc82c00e9a2699f892cbf9791abd9c867db5a2
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T37: Unable to type in any other channel after leaving a draft post in preview mode in one channel then switching to another channel

---

**Step 1**

1. Draft a post in any channel and click on "preview"
2. Switch to another channel

**Expected**

- Able to focus cursor in the text input box and post

**Related bug**: [MM-17360](https://mattermost.atlassian.net/browse/MM-17360)
