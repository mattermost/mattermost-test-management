---
# (Required) Ensure all values are filled up
name: "An ellipsis indicates the channel header is too long - DM"
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
id: 3741720
key: MM-T89
folder_path: channels/messaging
created_on: "2019-12-20T16:32:59Z"
last_updated: ""
case_hashed: 73c5978921f29200b62b484fbc1ce2cd18839c0643d01318cf2f048d9ed6818bfe032029c68b274bfe5a52ea8dfd630f
steps_hashed: 34f2d4331c1970c1f2c4b1747f28d0bc1ca4171cf94e9a78310f849d7d97c26d21d6fe8bf216e488c78c97d2aa93bc81
---

## MM-T89: An ellipsis indicates the channel header is too long - DM

---

**Step 1**

An ellipsis indicates the channel header is too long - DM\
\--------------------\
1\. Open a DM with any other user\
2\. Click the channel name and select "Edit Channel Header"\
3\. Enter the following:\
\
\>quote\
newheader newheader newheader newheader newheader newheader newheader newheader newheader newheader newheader newheader newheader newheader\
\
(must include the >quote - does not reproduce without a quote in the header)\
4\. Press or click "Enter" to Save

**Expected**

After 4) you should see the quotation marks displaying in the channel header, and ellipses (...) indicating the header is too long to fit across the top of the screen.\
\
Clicking on the channel header should still display it in it's entirety.
