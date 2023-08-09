---
# (Required) Ensure all values are filled up
name: "Consecutive message permalink - timestamp link on consecutive message opens permalink view (non-mobile)"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels
priority_p1_to_p4: P4 - Low-Impact (Edge or unsuitable to repeat?)

# (Optional)
location: Messaging
component: null
tags: []
labels: 
- messaging
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: Ticket Open
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Webapp

# Do not change
id: 3741717
key: MM-T86
created_on: "2019-12-20T16:32:58Z"
last_updated: ""
case_hashed: 46ea188812879f9d5ac7301f9e229979b8fc9f9681830c41b7bc5f5688f9b5201558225cdf3ae376add97d0f8986b063
steps_hashed: 669de96bd94a7aac634a9086827bb6b14cf13b08334d71e57c4688825ba692cd41f381f096451c512e2d8c0905e41b76
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T86: Consecutive message permalink - timestamp link on consecutive message opens permalink view (non-mobile)

---

**Step 1**

Consecutive message permalink - timestamp link on consecutive message opens permalink view (non-mobile)\
–––––––––––––––––––––––––

1. Post two consecutive messages in the center channel
2. Click on the timestamp to the left of the second message in the center channel (hover your mouse to the left to reveal it)
   \
   ![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1594390964662-1594390964661.png)

**Expected**

- Permalink view of that message opens (in the same tab)
  \
  (Timestamp is not a link on mobile apps)
