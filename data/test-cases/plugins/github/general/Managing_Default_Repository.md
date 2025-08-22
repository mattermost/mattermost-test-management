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
1. Connect your Mattermost account to your GitHub account.
2. Open any channel where the GitHub plugin is installed.
3. Type the command /github default-repo get.
4. Wait for the bot’s response in the channel.


**Expected**
The user should see a message from the bot saying that no default repository is currently set for this channel.


**Step 2**

1. In the same channel, type the command /github default-repo set owner/repo.
2. Observe the confirmation message that appears from the bot.
3. Type /github default-repo get again after setting.
4. Verify the response shown in the channel.


**Expected**
1. The user should see a confirmation message saying the default repo has been set to owner/repo for this channel.
2. When you run the get command, the same repository should appear as the default.

**Step 3**
1. Stay in the same channel after setting the default repo.
2. Type the command /github issue create.
3. Wait for the issue creation modal to appear.
4. Check the repository field inside the modal.


**Expected**

1. The issue creation modal should open with the repository owner/repo already pre-selected.
2. The user should not need to manually select the repo.

**Step 4**

1. In the same channel, type /github default-repo set new-owner/new-repo.
2. Check the confirmation message from the bot.
3. Run /github default-repo get again.
4. Run /github issue create once more to test.


**Expected**
1. You should see a message confirming that the default repo has been set to new-owner/new-repo.
2. The get command should now show the new repo as the default.
3. When opening the issue modal, the new repository should already be selected.


**Step 5**

1. In the channel, type /github default-repo unset.
2. Observe the confirmation message that appears from the bot.
3. Run /github default-repo get after unsetting.
4. Run /github issue create again.


**Expected**

1. The user  should see a message confirming that the default repository has been unset successfully.
2. The get command should now show that no default repository is set for this channel.
3. When opening the issue modal, no repository should be pre-selected and the user should pick one manually.


**Step 6**

1. In the same channel, type /github default-repo set invalid-repo name.
2. Wait for the bot response.
3. Run /github default-repo get after this attempt.

**Expected**

1. The bot should return an error message saying Error occurred while getting github repository details.
2. The get command should confirm that no default repository is set.

**Step 7**

1. Go to Channel A and run /github default-repo set owner/repo.
2. Confirm by running /github default-repo get in Channel A.
3. Switch to Channel B where no repo is set.
4. Run /github default-repo get in Channel B.


**Expected**
1. In Channel A, the default repo should be shown as owner/repo.
2. In Channel B, the response should say no default repository is set for this channel.

