---
# (Required) Ensure all values are filled up
name: "Mobile classic apps: Smoke Tests"
status: Active
priority: Smoke test
folder: Mobile App (native-specific)
authors: ""
team_ownership:
- QA Platform
priority_p1_to_p4: P4 - Low-Impact (Edge or unsuitable to repeat?)

# (Optional)
location: Smoke Test
component: null
tags:
- Smoke test
labels:
- RN_Smoke_Tests
- smoke-test-folder
- fix-versions-not-empty-2022cleanup
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: null
playwright: null
rainforest:
- N/A
manual_test_environments:
- Mobile

# Do not change
id: 2814840
key: MM-T43
created_on: "2019-09-04T21:03:12Z"
last_updated: "2022-09-10T11:55:02Z"
case_hashed: 89face77f171af4c163e5f2330405087132790209ba3643b8453acd12fbeeb52128f04dcfce56f6e16fef822dc6d71b2
steps_hashed: aade578bea0d76ea4d9c57135d1f207f9136a0f31d483e48c937da0529e54d064c6132386cbcb11232bf5b226da49471
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T43: Mobile classic apps: Smoke Tests

**Objective**

These tests cover the very basics of the Mattermost Classic app.\
It is no longer being updated but is still in use.\
The last versions released listed below.

- iOS Version 3.10.3 - Apr 13, 2018
- Android 3.10.3 - May 16, 2018

---

**Step 1**

1. Enter a server URL and leave a space in what you type in (e.g., <https://community.mattermost.com>)
2. Tap 'Next'

_Related ticket(s):_

[iOS Classic app crashes if there is a space in server url — MM-8968](https://mattermost.atlassian.net/browse/MM-8968)

**Expected**

- App should not crash

---

**Step 2**

1. Enter a server URL\
   (e.g., <https://postgres.test.mattermost.com/>)
2. Tap Next

**Expected**

- Connected to server

---

**Step 3**

1. Type in email address
2. Type in password
3. Tap Sign In

**Expected**

Successfully logged in

---

**Step 4**

1. Type in the text field at the bottom of the app
2. Tap the send icon

**Expected**

Post accepted and added to messages just above text field\\

---

**Step 5**

1. Tap the `...` ellipsis menu icon on the message you just posted
2. Tap Edit in the modal window that appears\\

**Expected**

Edit Post window appears\\

---

**Step 6**

Tap Cancel

**Expected**

- Returned to channel
- No changes made

---

**Step 7**

- Tap the `...` ellipsis menu icon on the message you just posted again
- Tap Edit in the modal window that appears
- Edit the text
- Tap Save

**Expected**

- Returned to channel
- Changes accepted and displayed
- Greyed out "(edited)" text below message\\

---

**Step 8**

1. Click the comment arrow on a post

**Expected**

- Display changes to message details
- Able to type in text

---

**Step 9**

1. Tap Add Comment

**Expected**

- Comment added to message thread
- Text box present below last message
- Add comment button greyed out (until new text added)

---

**Step 10**

Tap < (back) button in top left corner

**Expected**

- Returned to channel
- Reply to thread shown most recent post at bottom of screen
- Grey **|** bar to the left of the post indicating it's part of a thread

---

**Step 11**

1. Tap 📎 attach icon

_Related ticket(s):_

(Won't Fix) [iOS Classic: Tapping paperclip icon does little or nothing — MM-20174](https://mattermost.atlassian.net/browse/MM-20174)

**Test Data**

**iOS**\
Android\\

**Expected**

-  iOS

  - Attachment menu pops up from bottom of screen

    - Take Photo or Video
    - Photo Library
    - Browse

- Android

  - Attachment menu appears in middle of screen

    - Camera
    - Camcorder
    - Voice Recorder
    - Documents

---

**Step 12**

-  iOS ➜ Tap Cancel
- Android ➜ Tap outside of the modal window

**Expected**

- Menu closes
- No changes made

---

**Step 13**

1. Tap 📎 attach icon again
2. Tap Photo Library (Tap Camera icon on Android)
3. Browse for photo
4. Attach a photo to upload it

**Expected**

- Upload starts
- Progress bar shows activity

---

**Step 14**

1. Verify image uploaded completely\\

2. Add text if desired

3. Tap send icon

**Expected**

- Image posted\\

---

**Step 15**

1. Tap the … ellipsis menu icon on a message
2. Tap the Delete button in the modal window that appears\\

**Expected**

- Confirm Comment Delete window appears

---

**Step 16**

Tap Cancel

**Expected**

- Returned to channel
- No changes made

---

**Step 17**

- Tap the … ellipsis menu icon on a message again
- Tap the Delete button in the modal window that appears
- Tap the Delete button

**Expected**

- Returned to channel
- Message deleted

**Note**: Other users can see an empty message where the post was saying that it has been deleted

---

**Step 18**

Tap magnifying glass in top right corner

**Expected**

Search screen with instructions opens

---

**Step 19**

Type in search term and tap search on keyboard

**Expected**

- Search results returned
- Search terms highlighted in posts shown
- Most recent post appears at the top
- Jump buttons on each post to right of reply arrow

---

**Step 20**

Tap Jump button

**Expected**

- Brought to post
- Post highlighted yellow
- Date of post appears briefly at top then vanishes off screen
- "Click Here to jump to recent messages ?" bar at bottom of screen

---

**Step 21**

Tap "Click Here to jump to recent messages?" bar

**Expected**

Returned to most recent post

---

**Step 22**

1. Tap magnifying glass in top right corner again
2. Type "Before:" in search field

**Expected**

Calendar appears

---

**Step 23**

1. Use arrows to navigate months
2. Select date by tapping on it

**Expected**

Date fills in in this format - "Before:2019-07-30"

---

**Step 24**

Tap Search

**Expected**

- List of posts that fall before the date appear
- Most recent post at the top
- Jump buttons for each individual search result

---

**Step 25**

1. Tap ☰ menu in top **left** corner
2. Tap a different channel

**Expected**

- Hamburger menu closes
- Brought to the channel you selected

---

**Step 26**

1. Tap ☰ menu in top **right** corner
2. Tap "Join another Team"

**Expected**

- Brought to team
- Land in Town Square channel

---

**Step 27**

1. Tap down arrow next to channel name at top
2. Tap "Edit Channel Header" in menu that appears

**Expected**

Edit Header screen appears

---

**Step 28**

1. Type text in field
2. Include a properly formatted link
   ```
   [Link example](https://mattermost.com)
   ```
3. Tap Save in lower right corner

**Expected**

Returned to channel

---

**Step 29**

- Tap down arrow next to channel name at top
- Tap "View Info" in menu that appears

**Expected**

Able to see header text and link you added/edited

---

**Step 30**

Tap the link you placed in the header

_Related ticket(s):_

- (Won't Fix) [Classic iOS app: Tapping links does nothing — MM-18314](https://mattermost.atlassian.net/browse/MM-18314)
- (Won't Fix) [iOS Classic: Tapping link in header loads webpage in app without any way to return to channel — MM-20208](https://mattermost.atlassian.net/browse/MM-20208)

**Expected**

Default browser for your device opens and navigates to the page

---

**Step 31**

1. Tap the … ellipsis menu icon on the right side of a post
2. Tap "Permalink" in the modal window that appears

**Expected**

- The Copy Permalink screen appears

  - X in top right corner
  - Copy Link Button
  - Close button

- Permalink text in text field

---

**Step 32**

Tap Close

**Expected**

- Returned to channel
- No changes made

---

**Step 33**

1. Tap the `...` ellipsis menu icon on the right side of a post again
2. Tap "Permalink" in the modal window that appears
3. Tap Copy Link button

**Expected**

- Link copied to clipboard
- 'Copy Permalink' window closes

---

**Step 34**

1. Navigate to different channel
2. Paste link in new post and tap send icon

_Related ticket(s):_

(Won't Fix) [iOS Classic: Permalink mechanism fails to copy link — MM-20229](https://mattermost.atlassian.net/browse/MM-20229)

**Expected**

Posted

---

**Step 35**

Tap link in new post

**Expected**

Brought to channel with post highlighted

---

**Step 36**

1. Tap ☰ menu icon in top **right**
2. Tap Leave Team\\

**Expected**

- Confirmation screen opens\\

---

**Step 37**

1. Tap No

**Expected**

- Returned to channel
- No changes made

---

**Step 38**

- Tap … ellipsis menu icon in top **right**
- Tap Leave Team
- Tap Yes

**Expected**

- Successfully leave team
- Brought to channel in top most team you're still a member of \~or\~ brought to list of teams you can join if you're no longer a member of any team

---

**Step 39**

- Tap ☰ menu in top **right**
- Tap Create a New Team\\

**Expected**

- Create new team page appears\\

---

**Step 40**

1. Type in a team name
2. Tap Next

**Expected**

- Team URL page appears\\

---

**Step 41**

1. Change default name or leave as is
2. Tap Finish

**Expected**

- Team created
- Brought to Town Square channel of new team

---

**Step 42**

1. Tap ☰ menu in top **left**
2. Tap Switch Channels button at bottom of menu
3. Start typing "Off"

**Expected**

- List narrows down as you type to show you matching names

---

**Step 43**

Tap channel name in list

**Expected**

Brought to channel

---

**Step 44**

1. Tap ☰ menu in top **left** again
2. Tap Team icon on far left

**Expected**

- Brought to Team tapped on

---

**Step 45**

1. Tap ☰ menu in top **left** again
2. Tap + next to Direct Messages in menu

**Expected**

- Direct Messages screen appears
- List of names to choose from in alphabetical order

---

**Step 46**

Start typing name in text field

**Expected**

- List narrows down as you type showing possible matches

---

**Step 47**

1. Tap on name in list

**Expected**

- Name added to text field

---

**Step 48**

1. Tap Go button

**Expected**

- Brought to new Direct message screen with person named in text field

---

**Step 49**

1. Tap ☰ menu in top **left** again
2. Tap + next to Direct Messages in menu
3. Add more than one name to text field
4. Tap Go button

**Expected**

- Brought to new Group Message screen with names placed in text field on previous screen

---

**Step 50**

1. Tap ☰ menu in top **left** again
2. Tap name of public channel
3. Tap … ellipsis menu icon next to post in list
4. Tap Pin to channel

**Expected**

- "Pinned" icon appears on the pinned post
