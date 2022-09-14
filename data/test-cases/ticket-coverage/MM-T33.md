---
# (Required) Ensure all values are filled up
name: "Invalid channel information in CSV exports"
status: Draft
priority: Normal
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform

# (Optional)
priority_p1_to_p4: null
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
last_updated: ""
case_hashed: 3ecf4a5436428f3e952ce22f7af9c6228d7f2878760a94dd685763040898d2957881d0ccb563cf104bb694279da25d6f
steps_hashed: 5cf24ce1b1f1a0e1f918997ae1e73866adccc0ee500cea7277438b01d9b0179978a4f226391c4f7fba60ffd890d84396
---

<!-- auto-generated based on "key" and "name" -->

## MM-T33: Invalid channel information in CSV exports

---

**Step 1**

1. Make a few posts in a DM or GM
2. Do the same in a different DM or GM

**Expected**

Able to post succesfully

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
