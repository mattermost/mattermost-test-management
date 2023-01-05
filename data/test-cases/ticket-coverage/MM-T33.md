---
# (Required) Ensure all values are filled up
name: "Invalid channel information in CSV exports"
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
id: 2761313
key: MM-T33
created_on: "2019-08-28T12:11:41Z"
last_updated: "2022-12-01T21:17:49Z"
case_hashed: 279739d85a92e23c1e0c3224a04d06e6d7fdc974e75c4dd6469ac035feec11c5189526d82a015d5617d3f1761e66d72f
steps_hashed: 41d3ba0ccf6e964070bfddc5cb8661ec28ac1bc676a29317c0bb0ed9cc8e762170f8b29f9ab00db864dcfbe1c1b4a347
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T33: Invalid channel information in CSV exports

---

**Step 1**

1. Make a few posts in a DM or GM
2. Do the same in a different DM or GM

**Expected**

Able to post successfully

---

**Step 2**

1. Login as an Admin
2. Navigate to ☰ menu → System Console → Compliance → Compliance Export
3. Toggle "Enable Compliance Export" to True
4. Set the "Export Format" to CSV
5. Click the "Run Compliance Export Job Now" button
6. Download the most recent "csv\_export.zip" file from the data directory (default at **./data/compliance/export/**)
7. Open the ZIP file (inside will be 2 files: meta.json and posts.csv)

---

**Step 3**

1. Open posts.csv
2. Look for the entries regarding the posts you made

**Expected**

- The exported data join/leave information have the proper channel information — i.e., **Not** the same channel information for all the entries of different channels —

**Related bug**: [MM-17392](https://mattermost.atlassian.net/browse/MM-17392)
