---
# (Required) Ensure all values are filled up
name: "Validate attaching different file types with size at and around the 100 MB limit to a Jira issue"
status: Active
priority: Normal
folder: Jira Attach
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
1. Upload an attachment of size less than 100 MB in a Mattermost channel.
2. Open the message actions menu for the uploaded attachment
3. Click `Attach to jira Issue`.
4. In the attach message to `jira issue pop-up` select the `jira issue ID`.
5. Click Attach.

**Expected**

File should be attached successfully, and the user should see a message in the attachment thread stating `Attachment attached to <issue-id>.`

---

**Step 2**

1. Upload an attachment of size more than 100 MB in a Mattermost channel.
2. Select the message action on the attachment you want to add.
3. Click `Attach to jira Issue `.
4. In the attach message to `jira issue pop-up` select the `jira issue ID`.
5. Click Attach.

**Expected**

The user should see an error message stating "Failed to attach to `issue: <issue-id>, file: <filename>`. Please notify your system administrator. Maximum attachment size 100MB exceeded, `file size <actual-size>mb`."
---

**Step 3**

1. Upload an attachment of size less than 100 MB in a Mattermost channel.
2. Create a Jira subscription by typing /`jira subscribe` and configure it for a project.
3. Select the message action on the attachment you want to add.
4. Click `Attach to jira Issue`.
5. In the attach message to `jira issue pop -up` select the `jira issue ID`.
6. Click Attach.


**Expected**

1. User should see a message in the attachment thread stating `Attachment attached to <issue-id>`and the channel should also display a subscription notification saying `<username> attached [<filename>] to <issue-id>: <summary>`.

**Step 4**

1. Upload a attachment of size exactly 100 MB in a Mattermost channel.
2. Click on the message action for the uploaded file.
3. Select `Attach to jira Issue`.
4. In the attach message to `jira issue pop -up` select the `jira issue ID`.
5. Click Attach.

**Expected**

The file should be attached successfully, and the user should see a message in the attachment thread stating `Attachment attached to <issue-id>.`

**Step 5**

1. Upload attachments of different file types (for example: png, jpg, pdf, docx) with a size not more than 100 MB in a Mattermost channel.
2. Click on the message action for the uploaded file.
3. Select `Attach to jira Issue`.
4. In the attach message to `jira issue pop -up` select the `jira issue ID`.
5. Click Attach.
6. Repeat the process for each file type.

**Expected**

The file of each supported type should be attached successfully, and the user should see a message in the attachment thread stating `Attachment attached to <issue-id>` for every file.