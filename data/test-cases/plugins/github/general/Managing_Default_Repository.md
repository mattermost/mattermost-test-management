---
# (Required) Ensure all values are filled up
name: "Setting and managing default repository for a channel in Mattermost"
status: Active
priority: Normal
folder: General
authors: "@arush-vashishtha"
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ""

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



---

**Step 1**
1. Connect your Mattermost account to `GitHub` using `/github connect`.
2. Open any channel or DM/GM.
3. Type the command `/github default-repo get`.


**Expected**
The `GitHub` bot should display a message in the same channel or DM/GM saying that no default repository is currently set.

**Step 2**

1. Connect your Mattermost account to `GitHub` using `/github connect`.
2. Open any channel or DM/GM.
3. Type the command `/github default-repo set owner/repo`.
4. Observe the confirmation message that appears from the bot.
5. Type `/github default-repo get` again after setting the default repo.


**Expected**
The `GitHub` bot should confirm that the default repository is set to `owner/repo` and the `get` command should show `owner/repo` as the default.

**Step 3**
1. Connect your Mattermost account to `GitHub` using `/github connect`.
2. Open any channel or DM/GM.
3. Type `/github default-repo set owner/repo` and set the default repo.
4. Type the command `/github issue create`.
5. Wait for the `issue creation modal` to appear.
6. Navigate to the repository field inside the modal.


**Expected**

The `issue creation modal` should open with the repository owner/repo already pre-selected.

**Step 4**

1. Connect your Mattermost account to `GitHub` using `/github connect`.
2. Open any channel or DM/GM.
3. Type `/github default-repo set owner/repo` and set the default repo.
4. Type `/github default-repo set owner/repo` again and set the default repo again with `new-owner/new-repo`.
4. Run `/github default-repo get`.
5. Run `/github issue create`.


**Expected**
The `GitHub` bot should confirm that the default repository is set to `new-owner/new-repo`, the get command should show the same, and the issue creation modal should open with `new-owner/new-repo` preselected.


**Step 5**

1. Connect your Mattermost account to `GitHub` using `/github connect`.
2. Open any channel or DM/GM.
3. Type `/github default-repo unset`.
4. Observe the confirmation message that appears from the bot.
5. Run `/github default-repo get` after unsetting.
6. Run `/github issue create` and check the repository field in the modal.


**Expected**

The `GitHub` bot should confirm that the default repository has been `unset`, the `get` command should show that no default repository is `set`, and the issue creation modal should open without any repository preselected.


**Step 6**

1. Connect your Mattermost account to `GitHub` using `/github connect`.
2. Open any channel or DM/GM.
1. Type `/github default-repo set invalid-repo name`.
2. Wait for the bot response.
3. Run `/github default-repo get` after this attempt.

**Expected**

The `GitHub` bot should show an error message about failing to fetch repository details, and the `get` command should confirm that no default repository is `set`.

**Step 7**

1. Connect your Mattermost account to `GitHub` using `/github connect`.
2. Go to Channel A and run `/github default-repo` set `owner/repo`.
3. Confirm by running `/github default-repo` get in Channel A.
4. Switch to Channel B where no repo is set.
5. Run `/github default-repo` get in Channel B.


**Expected**
The `GitHub` bot should show `owner/repo` as the default repository in `Channel A`, while in `Channel B` it should show that no default repository is `set`.

**Step 7**

1. Connect your Mattermost account to `GitHub` using `/github connect`.
2. In Team A, open any channel or DM/GM and set the default repository using `/github default-repo set owner/repo`.
3. Run `/github default-repo get` in the same place to confirm.
4. Switch to Team B, open any channel or DM/GM, and run `/github default-repo get`.

**Expected**

The GitHub bot should show `owner/repo` as the default repository in Team A, while in Team B it should show that no default repository is `set`.