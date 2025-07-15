---
# (Required) Ensure all values are filled up
name: "Prevent Loss of Unsaved Changes to Channel Access Rules"
status: Active
priority: Normal
folder: ABAC Channel Admin
authors: ""
team_ownership:
- Information Control
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: ABAC Channel Admin
component: null
tags: []
labels:
- channel-settings
- access-control
- save-changes-panel
- unsaved-changes
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

## MM-T: Prevent Loss of Unsaved Changes to Channel Access Rules

---

**Step 1**

Test unsaved changes tracking and prevention of tab switching

1. Login as Channel Admin and navigate to private channel
2. Open Channel Settings > Access Control tab
3. Make changes to access rules (add, edit, or delete rule)
4. Attempt to switch to another tab without saving
5. Verify unsaved changes warning appears
6. Test "Undo" functionality to reset changes
7. Make changes again and use proper save workflow
8. Verify tab switching is allowed after saving

**Expected**

- Unsaved changes are tracked and displayed in SaveChangesPanel
- Tab switching is prevented when unsaved changes exist
- Warning notification appears for unsaved changes
- Undo functionality resets to last saved state
- After saving, tab switching is allowed normally
- SaveChangesPanel integrates seamlessly with existing Channel Settings workflow