---
# (Required) Ensure all values are filled up
name: 'MM-17346 — Regression: Cursor appears as hand but clicking does nothing on link preview'
status: Draft
priority: Normal
folder: Ticket coverage
authors: ''
team_ownership:
  - QA Platform
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Ticket coverage
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: 2760799
key: MM-T30
created_on: '2019-08-28T10:23:48Z'
last_updated: '2022-12-01T21:17:46Z'
case_hashed: 7c26976998cfc80f8eaa616cbb94cb36d2f4a9dda25308141b154ab508344f7f9f4230abe929e7dd8d43ecf294be796f
steps_hashed: 22902175a1fd54a623cda96b126a25bcf3686b30fa02156ff69dbcf7fc1da29f4632904d9b61128a97f86e60c691673c
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T30: MM-17346 — Regression: Cursor appears as hand but clicking does nothing on link preview

---

**Step 1**

1. Navigate to ☰ menu → Account Settings → Display → Website Link Previews
2. Toggle it ON and Save
3. Post a link such as <https://docs.google.com/document/d/1TAmx70_7E6aVX4mq_2lmo63RaAWoPLubcaiNyB0a_iU/edit>\
   or\
   <https://www.bbc.com/sport/football/49109527>
4. Hover over the preview image

**Expected**

- The cursor should **not** change to a hand (as if it is a live link)
- Clicking it should not do anything

**Related bug**: [MM-17346](https://mattermost.atlassian.net/browse/MM-17346)
