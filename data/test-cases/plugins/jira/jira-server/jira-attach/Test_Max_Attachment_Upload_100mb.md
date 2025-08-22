---
# (Required) Ensure all values are filled up
name: "Files over 100MB can be attached"
status: Active
priority: Normal
folder: jira Attach
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
1. Upload a attachment of size less than 100 mb in a Mattermost channel.
2. Select the message action on the attachment you want to add.
3. Click `Attach to jira Issue`.
4. A attach message to `jira issue pop-up` opens; select the `jira issue ID`.
5. Click Attach.

**Expected**

1. File should be attached successfully.
2. User should get a message in the attachment thread stating `Attachment attached to <issue-id>.`

---

**Step 2**

1. Upload a attachment of size more than 100 mb in a Mattermost channel.
2. Select the message action on the attachment you want to add.
3. Click `Attach to jira Issue `.
4. A attach message to `jira issue pop-up` opens; select the `jira issue ID`.
5. Click Attach.

**Expected**

User should get an error in the saying "Failed to attach to `issue: <issue-id>, file: <filename>`. Please notify your system administrator. Maximum attachment size 100MB exceeded, `file size <actual-size>MB`."
---

**Step 3**

1. Upload a attachment of size less than 100 mb in a Mattermost channel.
2. Create a jira subscription by typing /`jira subscribe` and configure it for a project.
3. Select the message action on the attachment you want to add.
4. Click `Attach to jira Issue`.
5. A attach message to `jira issue pop -up` opens; select the `jira issue ID`.
6. Click Attach.


**Expected**

1. User should get a message in the attachment thread stating `Attachment attached to <issue-id>`.
2. User should also get a subscription notification in the channel saying `<username> attached [<filename>] to <issue-id>: <summary>`.

**Step 4**
1. Upload a attachment of size exactly 100 mb in a Mattermost channel.
2. Upload a file of exactly 100 MB in a Mattermost channel.
3. Click on the message action for the uploaded file.
4. Select `Attach to jira Issue`.
5. A attach message to `jira issue pop -up` opens; select the `jira issue ID`.
6. Click Attach.

**Expected**

1. File should be attached successfully.
2. User should get a message in the attachment thread stating `Attachment attached to <issue-id>.`
