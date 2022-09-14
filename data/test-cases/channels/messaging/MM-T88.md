---
# (Required) Ensure all values are filled up
name: "An elipsis indicates the channel header is too long - public or private channel  Quote icon displays at beginning of channel header"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional)
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: Messaging
component: null
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 3741719
key: MM-T88
created_on: "2019-12-20T16:32:59Z"
last_updated: "2022-09-09T17:58:20Z"
case_hashed: afe77a2024ef5d549b5954871e0a73094414fb61c232363d60da6c197edd3f51bbba6056ac2c87a7aa5f75f3342e5501
steps_hashed: 1e74fa216a08f2fcc9dc4d4849dff3ae711f7ef9a5265059ac2fab035796ae5382014416da80c0dab68b229566b38119
---

<!-- auto-generated based on "key" and "name" -->

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
