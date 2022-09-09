---
# (Required) Ensure all values are filled up
name: "Consecutive message permalink - timestamp link on consecutive message opens permalink view (non-mobile)"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: Ticket Open
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Webapp

# (Optional)
component: null
priority_p1_to_p4: P4 - Low-Impact (Edge or unsuitable to repeat?)
location: Messaging
tags: []
labels: 
- messaging

# Do not change
id: 3741717
key: MM-T86
folder_path: channels/messaging
created_on: "2019-12-20T16:32:58Z"
last_updated: ""
case_hashed: 46dc7650b6a73269de8562c1414aa9bf10445bfdf7c7932721e56cb147063a0d91b77b9796a8181e2be40f021a07e798
steps_hashed: 587d67a405024477af0eada56c202e994d5a254787028ad71bebe41d9968bd9121fbc3ebf3352e110697ab9441306c60
---

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
