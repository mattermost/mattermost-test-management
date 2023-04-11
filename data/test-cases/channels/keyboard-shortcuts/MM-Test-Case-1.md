---
# (Required) Ensure all values are filled up
name: "Allow CTRL/CMD + V to insert link formatting when text is selected"
status: Active
priority: Low
folder: Keyboard Shortcuts
authors: "furqanmlk"
team_ownership: 
- Channels
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Keyboard Shortcuts
component: null
tags: []
labels: []

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []


# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1**

1. Login as **user-1**
2. Copy **https://www.github.com**
3. Type **Github** into message or reply input box
4. Select the text you typed, and paste or press CMD/CTRL+V
5. Press Enter

**Expected**

3. Format should be as a markdown hyperlink with the selected text
4. **Github** should be shown as a hyperlink
