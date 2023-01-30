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
    Note: The actual location of the menu that Work Templates will be located under may change
2. Click on 'Work Templates' in menu that drops down, observe work template modal appears
3. Select template from list on left side of modal
4. Mouse over the templates on the right
5. Click one of the templates
6. Observe that in the template, more information is revealed and the cursor changes to a hand to allow you to select it for use
    - The modal changes to reveal a preview of what is contained in that template
    - The Channels section at the top is already expanded and a screenshot example of what it will look like is on the right
    - Below the Channels section are ones for Boards, Playbooks and Integrations
    - There is a back arrow at the top left corner
    - There are 'Back' and 'Next' buttons in the bottom right corner
7. Click each of the other sections in turn 
8. Observe that:
    - Each section expands while closing the previously open section
    - Like the first section it displays a screenshot example on the right
9. Click either the back arrow or the 'Back' button to return to the template selection screen
10. Then click the 'Next' button to advance and observe:
    - An empty field is displayed to allow you to name the project
    - You're able to choose if the project will be public or private
    - There's a back arrow in the top left corner
    - There are 'Back' and 'Create' buttons in the bottom right corner 
11. Type in a name for the project
12. Click the 'Create' button

**Test Data**

![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/work_template_modal.png)

**Expected**

The items included in the template you selected are created (e.g., Channel, Board, Playbook, etc.)