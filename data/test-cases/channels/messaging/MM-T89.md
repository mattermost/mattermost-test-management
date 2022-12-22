---
# (Required) Ensure all values are filled up
name: "An ellipsis indicates the channel header is too long - DM"
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
id: 3741720
key: MM-T89
created_on: "2019-12-20T16:32:59Z"
last_updated: ""
case_hashed: c9d67f723cd7b4de56020fa6de73a8fc796f58262117adc4e6b8c9c72a2f4fd34f1a36b9e0fdd2d6c482109cce20b83d
steps_hashed: bf790776b5bbeb7b994a278d65c09318f727812153714dc8dd5a4569ab61091e6d9de7c6960beacbf804c4149f8aaa1f
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

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
