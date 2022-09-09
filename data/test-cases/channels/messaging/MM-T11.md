---
# (Required) Ensure all values are filled up
name: "Open Graph link preview should display animated"
status: Active
priority: Normal
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: To Do
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: 
- Desktop

# (Optional)
component: null
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: Messaging
tags: []
labels: 
- messaging
- fix-versions-not-empty-2022cleanup

# Do not change
id: 8168020
key: MM-T11
folder_path: channels/messaging
created_on: "2020-12-10T17:51:24Z"
last_updated: "2022-09-09T20:50:00Z"
case_hashed: c853e21fecfaaafa98f416ad5c662c2a87f3b5705d965f43801ed7bf67cf9500670dd4c05fcb7785f25e636d19a1722e
steps_hashed: c98d0421df652d3955c222c7e85b808d898149f94b8b914fc79f8647d3cca4eeeafb099c345051b8e0bc0277b789d2a3
---

## MM-T11: Open Graph link preview should display animated

---

**Step 1**

Open Graph link preview should display animated\
–––––––––––––––––––––––––\\

1. Post the link below in a channel
   \
   \
   https\://giphy.com/gifs/afv-funny-fail-3o85xET02JdV8TQuwU

_Related ticket(s):_

[Link to an animation in opengraph is not working — MM-16817](https://mattermost.atlassian.net/browse/MM-16817)

_Important notes about this step:_

A reference to the old testing spreadsheet was made on the bug ticket.\
[](https://docs.google.com/spreadsheets/d/1gW7i8uF3jd5wuHd5mJ7UdBQsMFVZwHKMXE7WOtlDa0k/edit#gid=1473839219&range=C36) <https://docs.google.com/spreadsheets/d/1gW7i8uF3jd5wuHd5mJ7UdBQsMFVZwHKMXE7WOtlDa0k/edit#gid=1473839219&amp;range=C36>

**Test Data**

![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1607622760486-Screen+Shot+2020-12-10+at+9.51.47+AM.png)

**Expected**

A preview of the animation should appear in the post
