---
# (Required) Ensure all values are filled up
name: "Replying to an older bot post that has no post content and no attachment pretext"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional)
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: Messaging
component: null
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 3741724
key: MM-T93
created_on: "2019-12-20T16:32:59Z"
last_updated: "2022-09-10T11:32:41Z"
case_hashed: c3d44679dab31d55f3f5a1699a7ac23a2a4a9238f7c883ea6c66f640f891ea52b6f1a231b5cae39db359cdc143bb9e25
steps_hashed: 013d3d3ee0a3b85b8ae200f51be15fb6b9bbecee8a830a86b10884a9b0b279d6e7e568ae72fb04228de43af661599c6c
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T93: Replying to an older bot post that has no post content and no attachment pretext

**Precondition**

Test on <https://community-release.mattermost.com>

---

**Step 1**

Replying to an older bot post that has no post content and no attachment pretext\
\--------------------\
Test this one on community-release.mattermost.com\
\
1\. Go to "UI Automation" channel, scroll up to find a Mattermost Build post that is at least one day old, and has had subsequent messages posted after it in the channel (those are the posts with the big Jenkins pictures)\
2\. Click "reply" from `[...]` menu to reply to a message\
3\. In right hand sidebar, make a reply post (it's okay to make a test post in that channel)\
4\. Verify the reply appears (non-RN apps will see comment with shaded background)\
5\. Close the RHS / go back to center channel view\
6\. When you're done testing, please delete your test post

**Expected**

After 5) you should see "Commented on `[bot]'s message: [attachment_title]"`\
e.g. "Commented on Mattermost Build's message: UI Automation Build #1110 SUCCESS!"
