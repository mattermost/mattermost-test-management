---
key: MM-T43
title: Mobile classic apps: Smoke Tests
---

## MM-T43: Mobile classic apps: Smoke Tests

**Objective**

> <article>These tests cover the very basics of the Mattermost Classic app.<br>It is no longer being updated but is still in use.<br>The last versions released listed below.<ul><li> iOS Version 3.10.3 — Apr 13, 2018</li><li><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566499085070-android-vector-icon-7.png" style="width: 16.0px;" class="fr-fil fr-dii">Android 3.10.3 — May 16, 2018</li></ul></article>

### Details

| Name     | Value                                                               |
| :------- | :------------------------------------------------------------------ |
| Priority | Smoke test                                                          |
| Status   | Active                                                              |
| Folder   | Mobile App (native-specific)                                        |
| Labels   | RN_Smoke_Tests,smoke-test-folder,fix-versions-not-empty-2022cleanup |
| Created  | 2019-09-04T21:03:12Z                                                |

### Steps

<hr/>

**Step 1**

> <article><ol><li>Enter a server URL and leave a space in what you type in (e.g., https://community .mattermost.com)</li><li>Tap 'Next'</li></ol></article>

**Expected**

> <article><ul><li>App should not crash</li></ul></article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Fix Versions | v4.8 (March 2018) |
| Related ticket(s) | <a href="https://mattermost.atlassian.net/browse/MM-8968">iOS Classic app crashes if there is a space in server url — MM-8968</a> |

<hr/>

**Step 2**

> <article><ol><li>Enter a server URL<br />(e.g., https://postgres.test.mattermost.com/)</li><li>Tap Next<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566500141330-IMG_F26D67517BE4-1.jpeg" style="width:201.0px" class="fr-fil fr-dib" /></li></ol></article>

**Expected**

> <article><ul><li>Connected to server<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566500302289-IMG_202ADF4ECC6A-1.jpeg" style="width:239.0px" class="fr-fil fr-dib" /></li></ul></article>

<hr/>

**Step 3**

> <article><ol><li>Type in email address</li><li>Type in password</li><li>Tap Sign In</li></ol></article>

**Expected**

> <article>Successfully logged in</article>

<hr/>

**Step 4**

> <article><ol><li>Type in the text field at the bottom of the app</li><li>Tap the send icon<img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566500663382-img_542962.png" style="width:17.0px" class="fr-dii" /><br /></li></ol></article>

**Expected**

> <article>Post accepted and added to messages just above text field<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566502837444-IMG_9AB043E85E61-1.jpeg" style="width:300.0px" class="fr-fil fr-dib" /></article>

<hr/>

**Step 5**

> <article><ol><li>Tap the … ellipsis menu icon on the message you just posted</li><li>Tap Edit in the modal window that appears<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566502238854-IMG_9AB043E85E61-1.jpeg" style="width:186.0px" class="fr-fil fr-dib" /></li></ol><br /></article>

**Expected**

> <article>Edit Post window appears<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566502311395-IMG_FE43ED3BD3E2-1.jpeg" style="width:196.0px" class="fr-fil fr-dib" /></article>

<hr/>

**Step 6**

> <article>Tap Cancel</article>

**Expected**

> <article><ul><li>Returned to channel</li><li>No changes made</li></ul></article>

<hr/>

**Step 7**

> <article><ul><li>Tap the … ellipsis menu icon on the message you just posted again</li><li>Tap Edit in the modal window that appears</li><li>Edit the text</li><li>Tap Save</li></ul></article>

**Expected**

> <article><ul><li>Returned to channel</li><li>Changes accepted and displayed</li><li>Greyed out "(edited)" text below message<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566502654744-IMG_172F6998EB68-1.jpeg" style="width:300.0px" class="fr-fil fr-dib" /></li></ul></article>

<hr/>

**Step 8**

> <article><ol><li>Click the comment arrow on a post</li></ol></article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566503715986-IMG_3F77DF1E9855-1.jpeg" class="fr-fic fr-dii" style="width:176.0px" /><br /></article>

**Expected**

> <article><ul><li>Display changes to message details</li><li>Able to type in text</li></ul></article>

<hr/>

**Step 9**

> <article><ol><li>Tap Add Comment</li></ol></article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566503867659-IMG_DBE98BA172CD-1.jpeg" style="width:185.0px" class="fr-fil fr-dib" /></article>

**Expected**

> <article><ul><li>Comment added to message thread</li><li>Text box present below last message</li><li>Add comment button greyed out (until new text added)</li></ul></article>

<hr/>

**Step 10**

> <article>Tap &lt; (back) button in top left corner</article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566505212370-IMG_47BFFED04451-1.jpeg" style="width:300.0px" class="fr-fil fr-dib" /></article>

**Expected**

> <article><ul><li>Returned to channel</li><li>Reply to thread shown most recent post at bottom of screen</li><li>Grey <strong>|</strong> bar to the left of the post indicating it's part of a thread</li></ul></article>

<hr/>

**Step 11**

> <article><ol><li>Tap 📎 attach icon</li></ol></article>

**Test Data**

> <article><strong>iOS</strong><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566505712344-IMG_51DCA569D815-1.jpeg" style="width:300.0px" class="fr-fil fr-dib" /><br />Android<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1567694206613-Screenshot_2019-09-05-10-30-56.png" style="width:300px" class="fr-fil fr-dib" /></article>

**Expected**

> <article><ul><li> iOS<ul><li>Attachment menu pops up from bottom of screen<ul><li>Take Photo or Video</li><li>Photo Library</li><li>Browse</li></ul></li></ul></li><li>Android<ul><li>Attachment menu appears in middle of screen<ul><li>Camera</li><li>Camcorder</li><li>Voice Recorder</li><li>Documents</li></ul></li></ul></li></ul></article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Fix Versions | Won't Fix |
| Related ticket(s) | (<span style="color:rgb(184, 49, 47)">Won't Fix</span>) <a href="https://mattermost.atlassian.net/browse/MM-20174">iOS Classic: Tapping paperclip icon does little or nothing — MM-20174</a> |

<hr/>

**Step 12**

> <article><ul><li> iOS ➜ Tap Cancel</li><li>Android ➜ Tap outside of the modal window</li></ul></article>

**Expected**

> <article><ul><li>Menu closes</li><li>No changes made</li></ul></article>

<hr/>

**Step 13**

> <article><ol><li>Tap 📎 attach icon again</li><li>Tap Photo Library (Tap Camera icon on Android)</li><li>Browse for photo</li><li>Attach a photo to upload it</li></ol></article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566505921915-IMG_C4DA603FD69C-1.jpeg" style="width:196.0px" class="fr-fil fr-dib" /></article>

**Expected**

> <article><ul><li>Upload starts</li><li>Progress bar shows activity</li></ul></article>

<hr/>

**Step 14**

> <article><ol><li>Verify image uploaded completely<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566506128337-1566506128337.png" class="fr-fic fr-dii" style="width:212.0px" /></li><li>Add text if desired</li><li>Tap send icon </li></ol></article>

**Expected**

> <article><ul><li>Image posted<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566506181604-IMG_4069B2DBE272-1.jpeg" style="width:194.0px" class="fr-fil fr-dib" /></li></ul></article>

<hr/>

**Step 15**

> <article><ol><li>Tap the … ellipsis menu icon on a message</li><li>Tap the Delete button in the modal window that appears<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566508156709-1566508156709.jpeg" class="fr-fic fr-dii" style="width:174.0px" /></li></ol></article>

**Expected**

> <article><ul><li>Confirm Comment Delete window appears</li></ul><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566508186516-IMG_CF62DD2B4375-1.jpeg" style="width:196.0px" class="fr-fil fr-dib" /></article>

<hr/>

**Step 16**

> <article>Tap Cancel</article>

**Expected**

> <article><ul><li>Returned to channel</li><li>No changes made</li></ul></article>

<hr/>

**Step 17**

> <article><ul><li>Tap the … ellipsis menu icon on a message again</li><li>Tap the Delete button in the modal window that appears</li><li>Tap the Delete button</li></ul></article>

**Expected**

> <article><ul><li>Returned to channel</li><li>Message deleted</li></ul><strong>Note</strong>: Other users can see an empty message where the post was sayng that it has been deleted</article>

<hr/>

**Step 18**

> <article>Tap magnifying glass in top right corner</article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566509126567-IMG_A57B5C5D3D37-1.jpeg" style="width:196.0px" class="fr-fil fr-dib" /></article>

**Expected**

> <article>Search screen with instructions opens</article>

<hr/>

**Step 19**

> <article>Type in search term and tap search on keyboard</article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566509440692-IMG_A0B456C2074C-1.jpeg" style="width:195.0px" class="fr-fil fr-dib" /></article>

**Expected**

> <article><ul><li>Search results returned</li><li>Search terms highlighted in posts shown</li><li>Most recent post appears at the top</li><li>Jump buttons on each post to right of reply arrow</li></ul></article>

<hr/>

**Step 20**

> <article>Tap Jump button</article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566509658149-IMG_734AF3402788-1.jpeg" style="width:196.0px" class="fr-fil fr-dib" /></article>

**Expected**

> <article><ul><li>Brought to post</li><li>Post highlighted yellow</li><li>Date of post appears briefly at top then vanishes off screen</li><li>"Click Here to jump to recent messages ?" bar at bottom of screen</li></ul></article>

<hr/>

**Step 21**

> <article>Tap "Click Here to jump to recent messages ?" bar</article>

**Expected**

> <article>Returned to most recent post</article>

<hr/>

**Step 22**

> <article><ol><li>Tap magnifying glass in top right corner again</li><li>Type "Before:" in search field</li></ol></article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566509987024-IMG_F966312CC934-1.jpeg" style="width:300.0px" class="fr-fil fr-dib" /></article>

**Expected**

> <article>Calendar appears</article>

<hr/>

**Step 23**

> <article><ol><li>Use arrows to navigate months</li><li>Select date by tapping on it </li></ol></article>

**Expected**

> <article>Date fills in in this format - "Before:2019-07-30"</article>

<hr/>

**Step 24**

> <article>Tap Search</article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566510409706-IMG_2E70B6BEC340-1.jpeg" style="width:196.0px" class="fr-fil fr-dib" /></article>

**Expected**

> <article><ul><li>List of posts that fall before the date appear</li><li>Most recent post at the top</li><li>Jump buttons for each individual search result</li></ul></article>

<hr/>

**Step 25**

> <article><ol><li>Tap ☰ menu in top <strong>left</strong> corner</li><li>Tap a different channel</li></ol></article>

**Expected**

> <article><ul><li>Hamburger menu closes</li><li>Brought to the channel you selected</li></ul></article>

<hr/>

**Step 26**

> <article><ol><li>Tap ☰ menu in top <strong>right</strong> corner</li><li>Tap "Join another Team"</li></ol></article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566510688707-IMG_B845F62B3652-1.jpeg" style="width:196.0px" class="fr-fil fr-dib" /></article>

**Expected**

> <article><ul><li>Brought to team</li><li>Land in Town Square channel</li></ul></article>

<hr/>

**Step 27**

> <article><ol><li>Tap down arrow next to channel name at top</li><li>Tap "Edit Channel Header" in menu that appears</li></ol></article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566510845929-IMG_BCF171906E27-1.jpeg" style="width:300.0px" class="fr-fil fr-dib" /></article>

**Expected**

> <article>Edit Header screen appears</article>

<hr/>

**Step 28**

> <article><ol><li>Type text in field</li><li>Include a properly formatted link<br />[Link example](https://mattermost.com)</li><li>Tap Save in lower right corner</li></ol></article>

**Expected**

> <article>Returned to channel</article>

<hr/>

**Step 29**

> <article><ul><li>Tap down arrow next to channel name at top</li><li>Tap "View Info" in menu that appears</li></ul></article>

**Expected**

> <article>Able to see header text and link you added/edited</article>

<hr/>

**Step 30**

> <article>Tap the link you placed in the header</article>

**Expected**

> <article>Default browser for your device opens and navigates to the page</article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Fix Versions | Won't Fix |
| Related ticket(s) | <ul><li>(<span style="color:rgb(184, 49, 47)">Won't Fix</span>) <a href="https://mattermost.atlassian.net/browse/MM-18314">Classic iOS app: Tapping links does nothing — MM-18314</a></li><li>(<span style="color:rgb(184, 49, 47)">Won't Fix</span>) <a href="https://mattermost.atlassian.net/browse/MM-20208">iOS Classic: Tapping link in header loads webpage in app without any way to return to channel — MM-20208</a></li></ul> |

<hr/>

**Step 31**

> <article><ol><li>Tap the … ellipsis menu icon on the right side of a post</li><li>Tap "Permalink" in the modal window that appears</li></ol></article>

**Expected**

> <article><ul><li>The Copy Permalink screen appears<ul><li>X in top right corner</li><li>Copy Link Button</li><li>Close button</li></ul></li><li>Permalink text in text field</li></ul></article>

<hr/>

**Step 32**

> <article>Tap Close</article>

**Expected**

> <article><ul><li>Returned to channel</li><li>No changes made</li></ul></article>

<hr/>

**Step 33**

> <article><ol><li>Tap the … ellipsis menu icon on the right side of a post again</li><li>Tap "Permalink" in the modal window that appears</li><li>Tap Copy Link button</li></ol></article>

**Expected**

> <article><ul><li>Link copied to clipboard</li><li>'Copy Permalink' window closes</li></ul></article>

<hr/>

**Step 34**

> <article><ol><li>Navigate to different channel</li><li>Paste link in new post and tap send icon <img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566516716377-1566516716376.png" class="fr-fic fr-dii" /></li></ol></article>

**Expected**

> <article>Posted</article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Fix Versions | Won't Fix |
| Related ticket(s) | (<span style="color:rgb(184, 49, 47)">Won't Fix</span>) <a href="https://mattermost.atlassian.net/browse/MM-20229">iOS Classic: Permalink mechanism fails to copy link — MM-20229</a> |

<hr/>

**Step 35**

> <article>Tap link in new post</article>

**Expected**

> <article>Brought to channel with post highlighted</article>

<hr/>

**Step 36**

> <article><ol><li>Tap ☰ menu icon in top <strong>right</strong></li><li>Tap Leave Team<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566516931797-1566516931797.jpeg" class="fr-fic fr-dii" style="width:280.0px" /></li></ol></article>

**Expected**

> <article><ul><li>Confirmation screen opens<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566517034461-IMG_655E0B2EB4AC-1.jpeg" style="width:256.0px" class="fr-fil fr-dib" /></li></ul></article>

<hr/>

**Step 37**

> <article><ol><li>Tap No</li></ol></article>

**Expected**

> <article><ul><li>Returned to channel</li><li>No changes made</li></ul></article>

<hr/>

**Step 38**

> <article><ul><li>Tap … ellipsis menu icon in top <strong>right</strong></li><li>Tap Leave Team</li><li>Tap Yes</li></ul></article>

**Expected**

> <article><ul><li>Successfully leave team</li><li>Brought to channel in top most team you're still a member of ~or~ brought to list of teams you can join if you're no longer a member of any team</li></ul></article>

<hr/>

**Step 39**

> <article><ul><li>Tap ☰ menu in top <strong>right</strong></li><li>Tap Create a New Team<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566517284839-IMG_7A84BBE4C810-1.jpeg" style="width:227.0px" class="fr-fil fr-dib" /></li></ul></article>

**Expected**

> <article><ul><li>Create new team page appears<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566517481180-IMG_72644B3B7AC2-1.jpeg" style="width:216.0px" class="fr-fil fr-dib" /></li></ul></article>

<hr/>

**Step 40**

> <article><ol><li>Type in a team name</li><li>Tap Next</li></ol></article>

**Expected**

> <article><ul><li>Team URL page appears<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566517656799-IMG_7B448816C181-1.jpeg" style="width:300.0px" class="fr-fil fr-dib" /></li></ul></article>

<hr/>

**Step 41**

> <article><ol><li>Change default name or leave as is</li><li>Tap Finish</li></ol></article>

**Expected**

> <article><ul><li>Team created</li><li>Brought to Town Square channel of new team</li></ul></article>

<hr/>

**Step 42**

> <article><ol><li>Tap ☰ menu  in top <strong>left</strong></li><li>Tap Switch Channels button at bottom of menu</li><li>Start typing "Off"</li></ol></article>

**Expected**

> <article><ul><li>List narrows down as you type to show you matching names</li></ul></article>

<hr/>

**Step 43**

> <article>Tap channel name in list</article>

**Expected**

> <article>Brought to channel</article>

<hr/>

**Step 44**

> <article><ol><li>Tap ☰ menu in top <strong>left </strong>again</li><li>Tap Team icon on far left</li></ol></article>

**Expected**

> <article><ul><li>Brought to Team tapped on</li></ul></article>

<hr/>

**Step 45**

> <article><ol><li>Tap ☰ menu in top <strong>left </strong>again</li><li>Tap + next to Direct Messages in menu</li></ol></article>

**Expected**

> <article><ul><li>Direct Messages screen appears</li><li>List of names to choose from in alphabetical order</li></ul></article>

<hr/>

**Step 46**

> <article>Start typing name in text field</article>

**Expected**

> <article><ul><li>List narrows down as you type showing possible matches</li></ul></article>

<hr/>

**Step 47**

> <article><ol><li>Tap on name in list</li></ol></article>

**Expected**

> <article><ul><li>Name added to text field</li></ul></article>

<hr/>

**Step 48**

> <article><ol><li>Tap Go button</li></ol></article>

**Expected**

> <article><ul><li>Brought to new Direct message screen with person named in text field</li></ul></article>

<hr/>

**Step 49**

> <article><ol><li>Tap ☰ menu  in top <strong>left </strong>again</li><li>Tap + next to Direct Messages in menu</li><li>Add more than one name to text field</li><li>Tap Go button</li></ol></article>

**Expected**

> <article><ul><li>Brought to new Group Message screen with names placed in text field on previous screen</li></ul></article>

<hr/>

**Step 50**

> <article><ol><li>Tap ☰ menu in top <strong>left</strong> again</li><li>Tap name of public channel</li><li>Tap … ellipsis menu icon next to post in list</li><li>Tap Pin to channel</li></ol></article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566518442299-IMG_BAD68A3384E2-1.jpeg" style="width:300.0px" class="fr-fil fr-dib" /></article>

**Expected**

> <article><ul><li>"Pinned" icon appears on the pinned post</li></ul></article>

<hr/>

### More Info

| Name                     | Value                                                                                          |
| :----------------------- | :--------------------------------------------------------------------------------------------- |
| Priority P1 to P4        | P4 - Low-Impact (Edge or unsuitable to repeat?)                                                |
| Update notes             | Lindy Isherwood, October 21, 2020 09:49AM<ul><li>Marked this test N/A for Rainforest</li></ul> |
| Rainforest               | N/A                                                                                            |
| Team Ownership           | QA Platform                                                                                    |
| Manual Test Environments | Mobile                                                                                         |
| Detox                    | N/A                                                                                            |
| Cypress                  | N/A                                                                                            |
| Tags                     | Smoke test                                                                                     |
| Location                 | Smoke Test                                                                                     |
