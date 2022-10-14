---
# (Required) Ensure all values are filled up
name: "Edit post that has attachment, paste text in middle"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional)
priority_p1_to_p4: P4 - Low-Impact (Edge or unsuitable to repeat?)
location: Messaging
component: null
tags: []
labels: 
- No-Automated-Executions
- messaging
- cy-rep-missing-or-skipped

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- Evaluating
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 3741730
key: MM-T99
created_on: "2019-12-20T16:33:00Z"
last_updated: ""
case_hashed: 2b0980e198b1b5dfee7495c29239c981eff7e212ce06a0fb3cf0f4787899f17d20da18f498d2ac37914f7dd7b4c193f4
steps_hashed: ca80014f59a12bbb2ac9b5ae595d31f9a2210dcdf154bf9c9709b83f5db9df0537b148896c0dc8d3d7440abdf14a643e
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T99: Edit post that has attachment, paste text in middle

---

**Step 1**

Edit post that has attachment, paste text in middle\
–––––––––––––––––––––––––

1. Post a message with text, plus a file attached
2. Click \[...] > Edit on the post and select Edit
3. Paste some additional text in the **middle** of the message
4. Save

**Expected**

1. Pasted text should be pasted where the cursor is
2. File attachment shouldn't disappear after saving the post
