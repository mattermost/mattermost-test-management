---
name: "Replying to an older bot post that has no post content and no attachment pretext"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T93: Replying to an older bot post that has no post content and no attachment pretext

**Precondition**

**Test on **[**community-release.mattermost.com**](https://community-release.mattermost.com/)

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
