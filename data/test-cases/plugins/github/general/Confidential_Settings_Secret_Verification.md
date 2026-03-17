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

1. Setup `GitHub` integration with Mattermost.
2. Navigate to `System Console` and open `GitHub plugin configuration`.
3. Locate the fields `GitHubOAuthClientSecret`, `WebhookSecret` and `EncryptionKey`.

**Expected**

All the confidential fields should be displayed in a masked format as `*********` instead of plain text.

**Step 2**

1. Navigate to `GitHub` plugin configuration in the `System Console`.
2. Replace the existing masked confidential value with a new valid value.
3. Save the configuration.
4. Reload the screen.

**Expected**

The new confidential value should be successfully saved, and the field should again appear masked as `*********` after reloading the screen.

**Step 3**

1. Save valid confidential values in `GitHub plugin configuration`.
2. Restart the `GitHub` plugin by disabling and enabling it from the `Plugin Management` section.
3. Navigate back to the `GitHub plugin configuration`.

**Expected**

The confidential values should still remain functional, and the fields should be displayed in masked format as `*********`.

**Step 4**

1. Navigate to `GitHub` plugin configuration in the `System Console`.
2. Try to select and copy the masked value from any confidential field.

**Expected**

The masked value `*********` should not be copied as the actual confidential value.

**Step 5**

1. Navigate to `Plugin Management` in the `System Console`.
2. Remove the existing `GitHub` plugin from the list.
3. Re-upload the `GitHub` plugin.
4. After successful upload, enable the `GitHub` plugin.
5. Navigate to `GitHub` plugin configuration in the `System Console`.

**Expected**

All confidential fields should remain masked as `*********` and continue to function correctly after the plugin is removed and re-uploaded, ensuring that sensitive data stays securely stored.
