---
# (Required) Ensure all values are filled up
name: "Replying to an older bot post that has some attachment pretext before the message attachment"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: Update
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Desktop

# (Optional)
component: null
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: Messaging
tags: 
- Never tested
labels: 
- No-Automated-Executions
- TM4J-Key-Missing-In-Cypress
- messaging
- cy-rep-missing-or-skipped

# Do not change
id: 3741723
key: MM-T92
folder_path: channels/messaging
created_on: "2019-12-20T16:32:59Z"
last_updated: "2022-09-09T21:27:27Z"
case_hashed: a0c3679d6e3ba2c7cb4ccabf91bdc7411dad7b5003b15762704e66fcb1bacd5256ef7ffa31a73004829c4d2db69c5d22
steps_hashed: 660fd289e5599da67d2b6b5982fd82430463037f97479bc71ad1d65b5af7552533147d0198401c9e267b357fdd5fee4f
---

## MM-T92: Replying to an older bot post that has some attachment pretext before the message attachment

**Precondition**

\*\*Test on \*\*[**community-release.mattermost.com**](https://community-release.mattermost.com/)

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

- You should see "Commented on \[bot] "message: Attachment pretext" on the line below your username on the post showing at the bottom of the center channel
  \
  e.g. "Commented on Jira's message: \[username] created Bug MM-XXXXX"

**_When you're done testing, please delete your test post_**
