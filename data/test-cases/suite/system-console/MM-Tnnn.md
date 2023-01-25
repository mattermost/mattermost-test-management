---
# (Required) Ensure all values are filled up
name: "Should match title and custom description in root html"
status: Active
priority: Normal
folder: System Console
authors: "saturninoabril"
team_ownership: 
- Channels
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: System Console
component: null
tags: []
labels: 
- system-console

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

1. Start a server with default config both for site name (`TeamSettings.SiteName`) and custom description text (`TeamSettings.CustomDescriptionText`). Then go to login page (`<site_url>/login`) page.
2. Login as admin and change site name and custom description at `<site_url>/admin_console/site_config/customization`, save and log out, then go to login page.

**Expected**

After step 1, verify the following,
- the header on top left is shown with Mattermost logo, and the login card renders "Log in".
- the `head` tag contains "Mattermost" as `title` and no `meta` for `og:description`.
After step 2, verify the following,
- the header on top left is shown with custom title and without Mattermost logo, and the login card renders custom description.
- Verify that the `head` tag contains custom title as `title` and `meta` for `og:description` is present with custom description as its `content`.
