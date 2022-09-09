---
# (Required) Ensure all values are filled up
name: "An elipsis indicates the channel header is too long - public or private channel  Quote icon displays at beginning of channel header"
status: Active
priority: Low
folder: Messaging
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
location: Messaging
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# Do not change
id: 3741719
key: MM-T88
folder_path: channels/messaging
created_on: "2019-12-20T16:32:59Z"
last_updated: "2022-09-09T17:58:20Z"
case_hashed: 29825e9f807bf09b705534ce12dc8b0eb6a2e67c6dc427e46453e37c445d4cf768554e2db6650112580da097314a4bc1
steps_hashed: 93ba1b8a987377480469f06ea28c19a096a3bf0d077351b8c604c991e047770eaafced2ca2c207ac3d5a8301f16fbf1a
---

## MM-T88: An elipsis indicates the channel header is too long - public or private channel Quote icon displays at beginning of channel header

---

**Step 1**

An elipsis indicates the channel header is too long - public or private channel\
\
Quote icon displays at beginning of channel header\
\--------------------\
1\. In a public or private channel, click on the channel name and select "Edit Channel Header"\
\
2\. Enter the text in Test Data -->\
(Note: Must include the >quote - does not reproduce without a quote in the header)\
\
3\. Hit "Enter" to Save

**Test Data**

\>quote\
newheader newheader newheader newheader newheader newheader newheader newheader newheader newheader

**Expected**

After 3) you should see the quotation marks displaying in the channel header, and elipses (...) indicating the header is too long to fit across the top of the screen.\
\
Clicking on the channel header should still display it in its entirety.
