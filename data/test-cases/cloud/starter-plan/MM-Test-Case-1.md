---
# (Required) Ensure all values are filled up
name: "'OpenId connect (other)' option is not available for cloud starter"
status: Active
priority: Normal
folder: Starter Plan
authors: "furqanmlk"
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Cloud
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

1. Create or log into a Cloud Workspace on the Starter plan
2. Go to **System Console** > OpenID Connect
3. Select OpenID Connect (other) from the drop down list.

**Expected**

3. OpenID connect (other) should not be available in cloud starter.
