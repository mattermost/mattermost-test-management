---
name: "Invalid channel information in CSV exports"
status: Draft
priority: Normal
team_ownership: "QA Platform"
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

\
**Related bug**: [MM-17392](https://mattermost.atlassian.net/browse/MM-17392)
