---
# (Required) Ensure all values are filled up
name: 'Loading indicator when posting images'
status: Active
priority: Low
folder: Files and Attachments
authors: ''
team_ownership:
  - Channels
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Files and Attachments
component: null
tags: []
labels:
  - Hackfest
  - TM4J-Key-Mapped-In-Cypress-Release
  - cy-prod
  - files-and-attachments
  - fix-versions-not-empty-2022cleanup
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments:
  - Automated - No manual tests needed

  # Do not change
id: 2746624
key: MM-T12
created_on: '2019-08-27T00:36:47Z'
last_updated: ''
case_hashed: ce187c7eaa9591aed06ec0270751b8d298b4bed0a30d9a30c1dc25a00caa01099b7f76b63fcce6b5a881cbd3ffafd538
steps_hashed: 3c148f1657492486b12e4e43821cb0d5da112bd12d709ac003cfffa2273b4b01b6aa82c5b173ab18cd1a3318289d4508
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T12: Loading indicator when posting images

---

**Step 1**

Loading indicator when posting images\
–––––––––––––––––––––––––

1. Post an image
2. Send another message

_Related ticket(s):_

[Image attachments display loading indicator when receiving a new message — MM-16908](https://mattermost.atlassian.net/browse/MM-16908)

**Test Data**

You can find test files here: [https://drive.google.com/drive/folders/178D\_Tdc8rrZPEEmhtCKT4LlLEW6-v75Y](https://drive.google.com/drive/folders/178D_Tdc8rrZPEEmhtCKT4LlLEW6-v75Y?usp=sharing)

**Expected**

- The image stays visible and **does not** show a loading indicator each time a new post is made.
