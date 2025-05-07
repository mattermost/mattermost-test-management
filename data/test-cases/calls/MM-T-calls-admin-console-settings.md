---
# (Required) Ensure all values are filled up
name: "Calls Plugin Admin Console Settings"
status: Active
priority: Normal
folder: Calls
authors: "DHaussermann"
team_ownership:
- Calls
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Admin Console
component: null
tags: []
labels: []
tested_by_contributor: ""

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

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T-calls-admin-console-settings: Calls Plugin Admin Console Settings

---

### Test Case 1: Verify Config Sections

**Step 1**

1. Log in as a System Admin
2. Navigate to the plugin settings page by going to:
   - System Console > Plugins > Calls

**Expected**

1. The page header should display "Calls"
2. Verify that all sections render as expected
3. The "calls-transcriptions-section" should be visible
4. The "calls-live-captions-section" should be visible

---

### Test Case 2: Verify Config Settings

**Step 1**

1. Log in as a System Admin
2. Navigate to the plugin settings page by going to:
   - System Console > Plugins > Calls

**Expected**

1. The plugin settings page should load successfully

**Step 2**

1. Locate the "Enable Plugin" radio button option
2. Click on the "false" option to disable the plugin
3. Wait for any animations to complete

**Expected**

1. The "Enable Plugin" setting should be set to "false"
2. The UI should update to reflect the disabled state

**Step 3**

1. Click on the "true" option to enable the plugin
2. Wait for any animations to complete

**Expected**

1. The "Enable Plugin" setting should be set to "true"
2. The UI should update to reflect the enabled state

**Step 4**

1. Locate the "Max Call Participants" number input field
2. Verify the field is present and functional

**Expected**

1. The "Max Call Participants" field should be visible and interactive

**Step 5**

1. Locate the "RTC Service URL" input field
2. Clear any existing text in the field
3. Verify the field is present and functional

**Expected**

1. The "RTC Service URL" field should be visible and interactive
2. The field should allow text to be cleared

**Step 6**

1. Locate the "ICE Servers Config" textarea input
2. Verify the field is present and functional

**Expected**

1. The "ICE Servers Config" textarea should be visible and interactive

**Step 7**

1. Locate the "Recording Quality" dropdown
2. Verify the dropdown is present and functional
3. Select an option from the dropdown

**Expected**

1. The "Recording Quality" dropdown should be visible and interactive
2. The dropdown should allow selection of different quality options

**Step 8**

1. Locate the "Allow Screen Sharing" setting
2. Verify that the setting defaults to "true"

**Expected**

1. The "Allow Screen Sharing" setting should be visible
2. The default value should be set to "true"

**Step 9**

1. Locate the "TURN Static Auth Secret" setting
2. Verify the field is present and functional

**Expected**

1. The "TURN Static Auth Secret" field should be visible and interactive
