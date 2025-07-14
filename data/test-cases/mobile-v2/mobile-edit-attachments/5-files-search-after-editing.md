---
# (Required) Ensure all values are filled up
name: "User should verify the file appears in the search list after editing"
status: Active
priority: Normal
folder: Mobile Edit Attachments
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

Scenario 1: Verify Users can search the file after Editing a post to add it.

Steps:

1. Login to Mobile and go to a channel.
2. Edit a post.
3. Click on paper clip icon to add attachments.
4. Add a file to post.
5. Verify the file is added to the post in the channel.
6. Go to search page.
7. Search for the file name.
8. Verify the file name appears in the search list

Scenario 2: Verify Users cannot search the file after Editing a post to remove it.

Steps:

1. Login to Mobile and go to a channel.
2. Edit a post.
3. Click on Cross icon on the already attached files to remove them.
4. Verify the files is remove from the post in the channel.
5. Go to search page.
6. Search for the file name.
7. Verify the file name does not appear in the search list.
