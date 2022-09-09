---
# (Required) Ensure all values are filled up
name: "Invalid channel information in CSV exports"
status: Draft
priority: Normal
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# (Optional)
component: null
priority_p1_to_p4: null
location: Ticket coverage
tags: []
labels: []

# Do not change
id: 2761313
key: MM-T33
folder_path: ticket-coverage
created_on: "2019-08-28T12:11:41Z"
last_updated: ""
case_hashed: 6378a13542edb7777f3f19868afc8f6f132cb68564de384f7b1259256df3648488d63150e45ea47767d8e364df4b75bd
steps_hashed: 9ccf7613f83a7d8bd550f1811352621cf02918d6c6ab35d47cc4fc2f3864fe1912f92f894f1acc037e89bafaa72a90e9
---

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
