---
# (Required) Ensure all values are filled up
name: "Loading indicator when posting images"
status: Active
priority: Low
folder: Files and Attachments
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: 
- Automated - No manual tests needed

# (Optional)
component: null
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: Files and Attachments
tags: []
labels: 
- Hackfest
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- files-and-attachments
- fix-versions-not-empty-2022cleanup

# Do not change
id: 2746624
key: MM-T12
folder_path: channels/files-and-attachments
created_on: "2019-08-27T00:36:47Z"
last_updated: ""
case_hashed: 0f409b06943f9aa24cc58e01f5726debe3e3c7fc256e1df13fe284908ecca5e1ee84d0fb8d1d19fe77345423707200a0
steps_hashed: ba127f4729de642b72ba3c1190980d6137c0951a3db227204db088bdadf04c6428e34ebcefc86aef22d1f657b3adf331
---

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
