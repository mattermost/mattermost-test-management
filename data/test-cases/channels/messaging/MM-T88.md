---
name: "An elipsis indicates the channel header is too long - public or private channel(newline)(newline)Quote icon displays at beginning of channel header"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T88: An elipsis indicates the channel header is too long - public or private channel(newline)(newline)Quote icon displays at beginning of channel header

---

**Step 1**

An elipsis indicates the channel header is too long - public or private channel\
\
Quote icon displays at beginning of channel header\
\--------------------\
1\. In a public or private channel, click on the channel name and select "Edit Channel Header"\
\
2\. Enter the text in Test Data -->\
(Note: Must include the >quote - does not reproduce without a quote in the header)\
\
3\. Hit "Enter" to Save

**Test Data**

\>quote\
newheader newheader newheader newheader newheader newheader newheader newheader newheader newheader

**Expected**

After 3) you should see the quotation marks displaying in the channel header, and elipses (...) indicating the header is too long to fit across the top of the screen.\
\
Clicking on the channel header should still display it in its entirety.
