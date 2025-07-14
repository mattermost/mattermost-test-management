---
# (Required) Ensure all values are filled up
name: "[E2E] should not show Playbook when there's no in progress runs"
status: Active
priority: Normal
folder: Mobile Playbook
authors: "@yasserfaraazkhan"
team_ownership:
- Core Features
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Messaging
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

Prerequisites:

- Start a few Playbook runs in a channel from Web/Desktop
- Mark the Playbook run as complete in Web.
- Have no active playbooks in the channel.

Steps:

1. On Mobile app, open the channel.
2. Verify the Playbook Run doesn not appears on the Channel header.
3. Click on `...` menu.
4. Verify the bottom page shows the Playbook options. But the count is Zero.
5. Click on Playbook option.
6. Verify the user is take to `Finished` list of playboks directly.
7. Expand the `Finished` playbook.
8. Verify the user cannot Check off the assigned task.

---

**Step 2**

Prerequisites:

- Ensure there are no Playbook runs (In-progress or Finished) in the channel.

Steps:

1. On Mobile app, open the channel.
2. Verify the Playbook Run icon button does not appear on the Channel header.
3. Click on `...` menu.
4. Verify the "Playbook runs" menu item is hidden.

---

**Step 3**

Prerequisites:

- Create a Playbook run in the channel from Web/Desktop.
- Ensure the user is not a participant in the run.

Steps:

1. On Mobile app, open the channel.
2. Verify the Playbook Run icon button does not appear on the Channel header.
3. Click on `...` menu.
4. Verify the "Playbook runs" menu item is hidden.
5. Verify the run is not counted in the number of in-progress runs for the user.
