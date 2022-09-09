---
# (Required) Ensure all values are filled up
name: "Replying to an older bot post that has no post content and no attachment pretext"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Automated - No manual tests needed

# (Optional)
component: null
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: Messaging
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# Do not change
id: 3741724
key: MM-T93
folder_path: channels/messaging
created_on: "2019-12-20T16:32:59Z"
last_updated: "2022-09-09T21:27:28Z"
case_hashed: 9a297adcd47d218d4510db0ad2de1b7f6710c90c1c67a9102a9616ddd2e70122116e37b374c5e9aedfe79691402b2a12
steps_hashed: b445e56d721c8a7b53fafb76137699e48d57da6dfc68a54f0d0ca17f671a317c5d61ba34ed47a7cfcad1e3115ecd2485
---

## MM-T93: Replying to an older bot post that has no post content and no attachment pretext

**Precondition**

\*\*Test on \*\*[**community-release.mattermost.com**](https://community-release.mattermost.com/)

---

**Step 1**

Replying to an older bot post that has no post content and no attachment pretext\
\--------------------\
\*\*Test this one on community-release.mattermost.com\*\*\
\
1\. Go to "UI Automation" channel, scroll up to find a Mattermost Build post that is at least one day old, and has had subsequent messages posted after it in the channel (those are the posts with the big Jenkins pictures)\
2\. Click "reply" from \[...] menu to reply to a message\
3\. In right hand sidebar, make a reply post (it's okay to make a test post in that channel)\
4\. Verify the reply appears (non-RN apps will see comment with shaded background)\
5\. Close the RHS / go back to center channel view\
6\. When you're done testing, please delete your test post

**Test Data**

Test on <https://community-release.mattermost.com>

**Expected**

After 5) you should see "Commented on \[bot]‚Äôs message: \[attachment\_title]"\
\
e.g. "Commented on Mattermost Build's message: UI Automation Build #1110 SUCCESS!"
