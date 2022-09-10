---
# (Required) Ensure all values are filled up
name: "MM-17346 — Regression: Cursor appears as hand but clicking does nothing on link preview"
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
id: 2760799
key: MM-T30
folder_path: ticket-coverage
created_on: "2019-08-28T10:23:48Z"
last_updated: "2022-09-09T20:39:13Z"
case_hashed: 1a62c2de7a3e09c2a4c8be807af1f791b287ef68ef5d684dc9e740e91d4567ef78682189c4b3472136bd9e424ba413d4
steps_hashed: 22902175a1fd54a623cda96b126a25bcf3686b30fa02156ff69dbcf7fc1da29f4632904d9b61128a97f86e60c691673c
---

## MM-T30: MM-17346 — Regression: Cursor appears as hand but clicking does nothing on link preview

---

**Step 1**

1. Navigate to ☰ menu → Account Settings → Display → Website Link Previews
2. Toggle it ON and Save
3. Post a link such as <https://docs.google.com/document/d/1TAmx70_7E6aVX4mq_2lmo63RaAWoPLubcaiNyB0a_iU/edit>
   \
   or\
   <https://www.bbc.com/sport/football/49109527>
4. Hover over the preview image

**Expected**

- The cursor should **not** change to a hand (as if it is a live link)
- Clicking it should not do anything

**Related bug**: [MM-17346](https://mattermost.atlassian.net/browse/MM-17346)
