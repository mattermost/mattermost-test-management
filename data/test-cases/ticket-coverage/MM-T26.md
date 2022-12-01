---
# (Required) Ensure all values are filled up
name: "When on preview mode, it does not allow to submit a post from the main post input"
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
id: 2759570
key: MM-T26
created_on: "2019-08-28T01:56:36Z"
last_updated: "2022-12-01T21:17:44Z"
case_hashed: 0f5e5f177d9843e195094ae17739b9a4da000bbf31dd0cfbcaa1df63b03322ca25b1853b7fa88e496bf268e99ad6bbe2
steps_hashed: 5747bc143916e1ecef8c6d22a88f2a9a2e8b9a8ac4e5d2abf3b6983539c8feb23547fb411895df2b085befe74b2a5950
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T26: When on preview mode, it does not allow to submit a post from the main post input

---

**Step 1**

Enter some text in the Center panel and click on the Preview button

**Expected**

Able to send/post new comment in center channel using Enter button

---

**Step 2**

Enter some text on the RHS and click Preview

**Expected**

- Able to send/post by using Enter or by clicking ‘Add Comment’ button

**Related bug**: [MM-17361](https://mattermost.atlassian.net/browse/MM-17361)
