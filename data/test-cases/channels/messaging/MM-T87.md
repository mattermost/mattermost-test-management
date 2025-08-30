---
# (Required) Ensure all values are filled up
name: 'Text in bullet points is the same size as text above and below it'
status: Active
priority: Low
folder: Messaging
authors: ''
team_ownership:
  - Channels
priority_p1_to_p4: P4 - Low-Impact (Edge or unsuitable to repeat?)

# (Optional)
location: Messaging
component: null
tags: []
labels:
  - TM4J-Key-Mapped-In-Cypress-Release
  - cy-prod
  - messaging
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
id: 3741718
key: MM-T87
created_on: '2019-12-20T16:32:58Z'
last_updated: ''
case_hashed: 71c0ca8f0f7fb8ae7d0367e2d7abb601bc1d4b3fd919976f5f9af854e88f99721c96ed190b94398f5e9cec89215a2c8a
steps_hashed: 13acf8b727ece6a6a915a0fced204fdf2316ca89865716e5771268fc38579eb91a9e23583bb8a48b63b096e2e05d6bee
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T87: Text in bullet points is the same size as text above and below it

---

**Step 1**

Text in bullet points is the same size as text above and below it\
–––––––––––––––––––––––––

1. In a test channel, post as described in Test Data field

**Test Data**

This is a normal sentence.\
\<newline>(just make a new line - don't type this in)\
1\. this is point 1\
\- this is a bullet under 1 with a space before the dash at the beginning\
\<newline>(just make a new line - don't type this in)\
this is more normal text

**Expected**

- All text in the post should be the same size. Text in the bullet point should not be larger than the text above or below it.
