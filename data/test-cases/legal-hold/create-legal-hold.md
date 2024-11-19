---
# (Required) Ensure all values are filled up
name: " create a legal hold."
status: Approved
priority: Normal
folder: data/test-cases/legal-hold
authors: "@Seyifunmi"
team_ownership: []
priority_p1_to_p4: P2 - Core functions (Do core functions work?)

# (Optional)
location: Plugins
component: null
tags: []
labels: []
tested_by_contributor: "@seyifunmi|11-08-2024"

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: true;
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

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T3982: Admin can create a legal hold

**Objective**
Verify that admin can create a legal hold successfully

---

**Step 1**

1\. On the legal hold plugin page\
2\. Click Create new button\

**Expected**

The create legal hold modal pops up

---

**Step 2**

3\. Enter name\
4\. Select user\
5\. Enter a Start date\

**Expected**

Create legal hold button becomes enabled

**Step 3**

6\. Click create legal hold button\

**Expected**

Legal hold created successfully
