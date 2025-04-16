---
# (Required) Ensure all values are filled up
name: "Playbooks Navigation and UI on Mobile"
status: Active
priority: Normal
folder: Mobile Playbooks
authors: "@mobile-qa"
team_ownership:
- Mobile
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Mobile
component: Playbooks
tags: ["mobile", "playbooks", "ui"]
labels: ["mobile", "playbooks", "ui"]
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: N/A
playwright: N/A
rainforest: []
manual_test_environments: ["Mobile"]

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

# Mobile Playbooks - Navigation and UI

This test case verifies the navigation flow and UI elements of the Playbooks feature on mobile devices.

**Step 1**

1. Login to a Mattermost server on a mobile device
2. Tap on the hamburger menu to open the left sidebar
3. Verify the "Playbooks" option is visible and tap on it

**Expected**

- The Playbooks option is visible in the sidebar
- Tapping on it navigates to the Playbooks screen
- The Playbooks screen has proper header and navigation elements

**Step 2**

Test navigation between different sections of the Playbooks feature

1. Navigate between "Playbooks" and "Runs" tabs (if applicable)
2. Use the back button to return to previous screens
3. Navigate from playbook details back to the list

**Expected**

- Navigation between sections works smoothly
- Back navigation functions correctly
- UI state is preserved appropriately when navigating

**Step 3**

Verify UI responsiveness and appearance

1. Rotate the device between portrait and landscape orientations
2. Test on both smaller and larger screen sizes (if possible)

**Expected**

- UI adapts appropriately to different orientations
- Content is readable and accessible on different screen sizes
- No UI elements are cut off or inaccessible
