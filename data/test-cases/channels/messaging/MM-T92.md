---
# (Required) Ensure all values are filled up
name: "Replying to an older bot post that has some attachment pretext before the message attachment"
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
tags: 
- Never tested
labels: 
- No-Automated-Executions
- TM4J-Key-Missing-In-Cypress
- messaging
- cy-rep-missing-or-skipped

# (Optional) Test type and tools
cypress: Update
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Desktop

# Do not change
id: 3741723
key: MM-T92
created_on: "2019-12-20T16:32:59Z"
last_updated: "2022-09-10T11:32:40Z"
case_hashed: 8946f9f7e4c81f097637b71ff4447d5d5703cb4318d94d638ebc750dacf67e52ea61fd822d07e5a7dfb8141855ddedd2
steps_hashed: af69362debd9fed1d923799f7a99a4d7862cd80ae109ffbbe4f3ce1047ce211135120cd44ddd64bddbe4df6016969140
---

<!-- auto-generated based on "key" and "name" -->

## MM-T92: Replying to an older bot post that has some attachment pretext before the message attachment

**Precondition**

Test on community-release.mattermost.com

---

**Step 1**

Replying to an older bot post that has some attachment pretext before the message attachment\
–––––––––––––––––––––––––\
Test this on community-release.mattermost.com

1. Find a Jira Bot post in \~Bugs channel, that is at least one day old (and has had subsequent messages posted after it in the channel),
2. Click "reply" from `[...]` menu to reply to a message
3. In right hand sidebar, make a reply post
4. Send and verify reply appears (non-RN apps will see comment with shaded background)
5. Close the RHS / go back to center channel view

**Expected**

- You should see "Commented on `[bot] "message: Attachment pretext"` on the line below your username on the post showing at the bottom of the center channel
  \
  e.g. `"Commented on Jira's message: [username] created Bug MM-XXXXX"`

**_When you're done testing, please delete your test post_**
