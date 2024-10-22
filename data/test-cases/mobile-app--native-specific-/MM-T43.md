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
steps_hashed: 218a38d9d819fdcb85b919805cac9336690eacc6a6f146e43bde504f95535513c8387c9663a038ba6801361423417fc0
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
2. Tap Next\
   ![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566500141330-IMG_F26D67517BE4-1.jpeg)

**Expected**

- Connected to server\
  ![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566500302289-IMG_202ADF4ECC6A-1.jpeg)

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
2. Tap the send icon![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566500663382-img_542962.png)

**Expected**

Post accepted and added to messages just above text field\
![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566502837444-IMG_9AB043E85E61-1.jpeg)

---

**Step 5**

1. Tap the `...` ellipsis menu icon on the message you just posted
2. Tap Edit in the modal window that appears\
   ![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566502238854-IMG_9AB043E85E61-1.jpeg)

**Expected**

Edit Post window appears\
![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566502311395-IMG_FE43ED3BD3E2-1.jpeg)

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
- Greyed out "(edited)" text below message\
  ![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566502654744-IMG_172F6998EB68-1.jpeg)

---

**Step 8**

1. Click the comment arrow on a post

**Test Data**

![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566503715986-IMG_3F77DF1E9855-1.jpeg)

**Expected**

- Display changes to message details
- Able to type in text

---

**Step 9**

1. Tap Add Comment

**Test Data**

![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566503867659-IMG_DBE98BA172CD-1.jpeg)

**Expected**

- Comment added to message thread
- Text box present below last message
- Add comment button greyed out (until new text added)

---

**Step 10**

Tap < (back) button in top left corner

**Test Data**

![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566505212370-IMG_47BFFED04451-1.jpeg)

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

**iOS** ![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566505712344-IMG_51DCA569D815-1.jpeg)\
Android\
![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1567694206613-Screenshot_2019-09-05-10-30-56.png)

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

**Test Data**

![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566505921915-IMG_C4DA603FD69C-1.jpeg)

**Expected**

- Upload starts
- Progress bar shows activity

---

**Step 14**

1. Verify image uploaded completely\
   ![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566506128337-1566506128337.png)
2. Add text if desired
3. Tap send icon

**Expected**

- Image posted\
  ![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566506181604-IMG_4069B2DBE272-1.jpeg)

---

**Step 15**

1. Tap the … ellipsis menu icon on a message
2. Tap the Delete button in the modal window that appears\
   ![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566508156709-1566508156709.jpeg)

**Expected**

- Confirm Comment Delete window appears

![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566508186516-IMG_CF62DD2B4375-1.jpeg)

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

**Test Data**

![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566509126567-IMG_A57B5C5D3D37-1.jpeg)

**Expected**

Search screen with instructions opens

---

**Step 19**

Type in search term and tap search on keyboard

**Test Data**

![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566509440692-IMG_A0B456C2074C-1.jpeg)

**Expected**

- Search results returned
- Search terms highlighted in posts shown
- Most recent post appears at the top
- Jump buttons on each post to right of reply arrow

---

**Step 20**

Tap Jump button

**Test Data**

![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566509658149-IMG_734AF3402788-1.jpeg)

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

**Test Data**

![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566509987024-IMG_F966312CC934-1.jpeg)

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

**Test Data**

![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566510409706-IMG_2E70B6BEC340-1.jpeg)

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

**Test Data**

![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566510688707-IMG_B845F62B3652-1.jpeg)

**Expected**

- Brought to team
- Land in Town Square channel

---

**Step 27**

1. Tap down arrow next to channel name at top
2. Tap "Edit Channel Header" in menu that appears

**Test Data**

![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566510845929-IMG_BCF171906E27-1.jpeg)

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
2. Paste link in new post and tap send icon ![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566516716377-1566516716376.png)

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
2. Tap Leave Team\
   ![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566516931797-1566516931797.jpeg)

**Expected**

- Confirmation screen opens\
  ![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566517034461-IMG_655E0B2EB4AC-1.jpeg)

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
- Tap Create a New Team\
  ![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566517284839-IMG_7A84BBE4C810-1.jpeg)

**Expected**

- Create new team page appears\
  ![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566517481180-IMG_72644B3B7AC2-1.jpeg)

---

**Step 40**

1. Type in a team name
2. Tap Next

**Expected**

- Team URL page appears\
  ![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566517656799-IMG_7B448816C181-1.jpeg)

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

**Test Data**

![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566518442299-IMG_BAD68A3384E2-1.jpeg)

**Expected**

- "Pinned" icon appears on the pinned post
