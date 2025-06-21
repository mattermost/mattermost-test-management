---
# (Required) Ensure all values are filled up
name: "Basic Access Rule Creation"
status: Active
priority: Normal
folder: ABAC Channel Admin
authors: ""
team_ownership:
- Information Control
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: ABAC Channel Admin
component: null
tags: []
labels:
- channel-settings
- access-control
- rule-creation
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: TBD
key: TBD
created_on: TBD
last_updated: ""
case_hashed: TBD
steps_hashed: TBD
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T: Basic Access Rule Creation

---

**Step 1**

Create a basic access rule using the table editor

1. Login as Channel Admin and navigate to private channel
2. Open Channel Settings modal and click "Access Control" tab
3. Click "Add Rule" or similar button to create new rule
4. Select an attribute from the dropdown (e.g., "Department")
5. Select an operator (e.g., "equals")
6. Enter a value (e.g., "Engineering")
7. Click "Save" or "Add Rule" to save the rule
8. Verify rule appears in the rules table

**Expected**

- Rule creation interface loads correctly with dropdown menus
- All form fields are functional and populated with appropriate options
- Rule is successfully created and displayed in the table
- Save operation completes without errors