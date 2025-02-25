---
# (Required) Ensure all values are filled up
name: "User should be able to verify scheduled message feature is available on Licensed instances"
status: Active
priority: Normal
folder: Mobile Draft
authors: "@yasserfaraazkhan"
team_ownership:
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: N/A
playwright: N/A
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

Positive Scenarios

### Scenario 1: Verify Scheduled messages are not available for servers without a license.

**Step 2**

Negative Scenarios

### Scenario 2: Verify Scheduled messages are not available when connecting to an older server that doesn't have Scheduled Messages feature. Server versions less than v10.3
