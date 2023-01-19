---
# (Required) Ensure all values are filled up
name: "Create a work template"
status: Active
priority: Normal
folder: Work Templates
authors: "@stevemudie"
team_ownership: 
- Growth
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
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

1. Click on waffle menu in top left corner
    Note: The actual location of the menu Work Templates will be located under may change
2. Click on 'Work Templates' in menu that drops down
3. Select template from list on left side of modal
4. Mouse over the templates on the right
5. Click one of the templates
6. Click each of the other sections in turn
7. Clicking either the back arrow or the 'Back' button returns you to the template selection screen
8. Click the 'Next' button to advance
9. Type in a name for the project
10. Click the 'Create' button

**Test Data**

![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/work_template_modal.png)

**Expected**

After 2: Create a work template modal appears
During 4:
    • More information is revealed and the cursor changes to a hand to allow you to select it for use
    • If you click the 'Quick Use' button it will apply the template directly
After 5:
    • The modal changes to reveal a preview of what is contained in that template
    • The Channels section at the top is already expanded and a screenshot example of what it will look like is on the right
    • Below the Channels section are ones for each element to be created (if included in the template you've selected (e.g., Boards, Playbooks, Integrations)
    • There is a back arrow at the top left corner
    • There are 'Back' and 'Next' buttons in the bottom right corner
After 6:
    • The section expands while closing the previously open section
    • Like the first section it displays a screenshot example on the right
After 8:
    • An empty field is displayed to allow you to name the project if you'd like but it is optional
    • You're able to choose if the project will be public or private
    • There's a back arrow in the top left corner
    • There are 'Back' and 'Create' buttons in the bottom right corner 
After 10: The items included in the template you selected are created (e.g., Channel, Board, Playbook, etc.)
