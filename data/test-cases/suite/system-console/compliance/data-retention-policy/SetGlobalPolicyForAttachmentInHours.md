---
# (Required) Ensure all values are filled up
name: "Set global policy for messages in hours"
status: Approved
priority: Normal
folder: Data Retention Policy
authors: "@DHaussermann"
team_ownership:
- Suite Users
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

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
- Webapp
- Desktop

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1**

1\. Login as System Admin\
2\. Enable /test commands\
3\. Open any channel\
4\. Create posts that are older than 1 hour ex: _/test posts images=3 time=1726147464000_ (based on you current time)\
5\. Make some post that are not backdated ex: _/test posts images=3_\
6\. Navigate to _Data Retention_ in the system console\
7\. Set a global policy to have all attachments deleted within 1 hour\
8\. Remove any global policy for deleting posts
9\. Click _Run Deletion Job Now_ to run data retention job\
10\. Ensure the job completes successfully\
11\. Return to the user side and refresh the webapp OR login again in a new browser session

**Expected**

11.1 In the channel from step _3._ the attachments on the backdated posts should be deleted\
11.2 In the channel from step _3._ the posts themselves should remain\
11.3 In the channel from step _3._ the posts that are not backdated should still have their attachments in place
