---
# (Required) Ensure all values are filled up
name: "Todo list in the channel or DM/GM using the `/github todo` command"
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
tested_by_contributor: null

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

1. Connect your MM account to GitHub account.
2. Create a notification for any desired event e.g. discussion, issue, pulls, etc on GitHub.
3. Navigate to MM and run the `/github todo` command in any desired channel or DM/GM on MM.

**Expected**

The generated message should show the list for unread messages, review requests, open PRs and user's assignments with the formats, `owner or organisation/repo <event> : <description>` or `owner or organisation/repo : <description>` in the desired channel or DM/GM on MM.

**Step 2**

1. After step 1, close the created event on the connected account on GitHub.
2. Run the `/github todo` command again in any desired channel or DM/GM on MM.

**Expected**

The generated message should not show the closed events in the desired channel or DM/GM on MM.

**Step 3**

1. Merge any desired open PR on the connected account on GitHub.
2. Run the `/github todo` command in any desired channel or DM/GM on MM.

**Expected**

The desired PR should not be visible in the generated message in the desired channel or DM/GM on MM.

**Step 4**

1. Read any desired unread message on the connected account on GitHub.
2. Run the `/github todo` command in any desired channel or DM/GM on MM.

**Expected**

The desired message should not be visible in the generated message in the desired channel or DM/GM on MM.

**Step 5**

1. Approve any desired pending requested review on the connected account on GitHub.
2. Run the `/github todo` command in any desired channel or DM/GM on MM.

**Expected**

The desired pending request should not be visible in the generated in the desired channel or DM/GM on MM.

**Step 6**

1. After step 1, Click on the desired `owner` or `organisation` hyperlink part of the generated list on MM.

**Expected**

The user should be redirected to the desired owner account or organisation on GitHub respectively.

**Step 7**

1. After step 1, Click on the desired <description> hyperlink part of the generated list on MM.

**Expected**

The user should be redirected to the desired event on GitHub.