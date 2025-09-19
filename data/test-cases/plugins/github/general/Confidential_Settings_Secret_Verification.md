---
# (Required) Ensure all values are filled up
name: 'Verification of confidential settings being masked in plugin configuration'
status: Active
priority: Normal
folder: General
authors: '@arush-vashishtha'
team_ownership: []
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: 
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1**


**Expected**

The confidential fields should be displayed in a masked format as ********* instead of plain text.

**Step 2**

Navigate to GitHub plugin configuration in the System Console.

Replace the existing masked confidential value with a new valid value.

Save the configuration.

Reload the screen.

**Expected**

The new confidential value should be successfully saved, and the field should again appear masked as ********* after reloading the screen.

**Step 3**

Save valid confidential values in GitHub plugin configuration.

Restart the GitHub plugin by disabling and enabling it from the Plugin Management section.

Navigate back to the GitHub plugin configuration.

**Expected**

The confidential values should still remain functional, and the fields should be displayed in masked format as *********.

**Step 4**

Navigate to GitHub plugin configuration in the System Console.

Try to select and copy the masked value from any confidential field.

**Expected**

The masked value ********* should not be copied as the actual confidential value.
