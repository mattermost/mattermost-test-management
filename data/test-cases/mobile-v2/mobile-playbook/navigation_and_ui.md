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
tags: ["mobile", "playbooks", "ui", "accessibility"]
labels: ["mobile", "playbooks", "ui", "manual-only"]
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

## Precondition
- User has a Mattermost account with access to playbooks
- Mobile app is installed and configured
- Test on both iOS and Android devices if possible

**Step 1**

1. Login to a Mattermost server on a mobile device
2. Tap on the hamburger menu to open the left sidebar
3. Verify the "Playbooks" option is visible and tap on it

**Expected**

- The Playbooks option is visible in the sidebar
- Tapping on it navigates to the Playbooks screen
- The Playbooks screen has proper header and navigation elements
- The transition animation is smooth

**Step 2**

Test navigation between different sections of the Playbooks feature

1. Navigate between "Playbooks" and "Runs" tabs (if applicable)
2. Use the back button to return to previous screens
3. Navigate from playbook details back to the list
4. Test the app's behavior when receiving notifications while in Playbooks screens

**Expected**

- Navigation between sections works smoothly
- Back navigation functions correctly
- UI state is preserved appropriately when navigating
- Notifications are handled properly without disrupting the Playbooks experience

**Step 3**

Verify UI responsiveness and appearance

1. Rotate the device between portrait and landscape orientations
2. Test on both smaller and larger screen sizes (if possible)
3. Test with different text size settings (accessibility settings)
4. Test with dark mode and light mode

**Expected**

- UI adapts appropriately to different orientations
- Content is readable and accessible on different screen sizes
- No UI elements are cut off or inaccessible
- UI respects system text size settings for accessibility
- Dark mode and light mode display correctly with appropriate contrast

**Step 4**

Test accessibility features

1. Enable screen reader (VoiceOver on iOS, TalkBack on Android)
2. Navigate through the Playbooks screens using the screen reader
3. Test color contrast for users with visual impairments

**Expected**

- All UI elements are properly labeled for screen readers
- Navigation is possible using only the screen reader
- Color contrast meets accessibility standards
- Interactive elements have appropriate touch targets
