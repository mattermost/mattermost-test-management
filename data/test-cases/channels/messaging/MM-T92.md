---
name: "Replying to an older bot post that has some attachment pretext before the message attachment"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T92: Replying to an older bot post that has some attachment pretext before the message attachment

**Precondition**

**Test on **[**community-release.mattermost.com**](https://community-release.mattermost.com/)

---

**Step 1**

Replying to an older bot post that has some attachment pretext before the message attachment\
–––––––––––––––––––––––––\
Test this on community-release.mattermost.com

1. Find a Jira Bot post in \~Bugs channel, that is at least one day old (and has had subsequent messages posted after it in the channel),
2. Click "reply" from \[...] menu to reply to a message
3. In right hand sidebar, make a reply post
4. Send and verify reply appears (non-RN apps will see comment with shaded background)
5. Close the RHS / go back to center channel view

**Test Data**

Test on community-release.mattermost.com

**Expected**

- You should see "Commented on \[bot] "message: Attachment pretext" on the line below your username on the post showing at the bottom of the center channel\
  e.g. "Commented on Jira's message: \[username] created Bug MM-XXXXX"

\
**_When you're done testing, please delete your test post_**
