---
# (Required) Ensure all values are filled up
name: "An ellipsis indicates the channel header is too long - public or private channel  Quote icon displays at beginning of channel header"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
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
last_updated: "2023-01-05T20:36:04Z"
case_hashed: 9e8757e889151ff05aca6ee491b03806b387a92da8f74602700e6c0fa55a6e3a37e8b195900620fd26a2f9a3124de721
steps_hashed: 32aff66fba80f8c863504f91c5b357fdf676bed59199822b8450922673ca15993bd607bf3c0029ac21ad5d3afb51df2f
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T88: An ellipsis indicates the channel header is too long - public or private channel Quote icon displays at beginning of channel header

---

**Step 1**

An ellipsis indicates the channel header is too long - public or private channel\
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

After 3) you should see the quotation marks displaying in the channel header, and ellipses (...) indicating the header is too long to fit across the top of the screen.\
\
Clicking on the channel header should still display it in its entirety.
