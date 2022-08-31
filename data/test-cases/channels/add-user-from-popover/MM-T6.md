---
key: MM-T6
title: Add User — Channel admins (Public only)
---

## MM-T6: Add User — Channel admins (Public only)

**Objective**

> <article><strong>Original test name from testing spreadsheet → </strong>If manage channel member permissions is disabled for all members but manage public channels is enabled for Channel Admins, <span style="background-color: rgb(255,255,0);">the Channel Admin will have permission to add members to <strong>public channels</strong> on the current team</span></article>

**Precondition**

> <article><br><br></article>

### Details

| Name     | Value                            |
| :------- | :------------------------------- |
| Priority | Low                              |
| Status   | Active                           |
| Folder   | Channels / Add user from popover |
| Labels   | cy-prod                          |
| Created  | 2019-08-26T23:03:55Z             |

### Steps

<hr/>

**Step 1**

> <article>Step I:<ol><li>Login as a System Admin</li><li>Click on the Product Switcher icon</li><li>Click System Console</li><li>Navigate to User Management → Permissions → Edit Scheme</li></ol><br />Step II:<ol><li><strong>Uncheck</strong> "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top</li></ol><br />Step III:<ol><li><strong>Check</strong> "Manage Public Channels" and <strong>Uncheck</strong> "Manage Private Channels" in the Channel Admins section part way down the page</li></ol><br />Step IV:<ol><li>Log in as a <a href="https://docs.mattermost.com/help/getting-started/managing-members.html#channel-admin"><strong>Channel Admin</strong></a></li><li>Click the name of any user in a public or private channel</li></ol><br />Step V:<br /><ol><li>Click Add to a channel</li><li>Type in the first few letters of the channel name</li></ol><br />Step VI:<br /><ol><li>Select the channel with your mouse - or scroll with the arrow keys and hit the ↵ (enter key)</li><li>Click Add</li></ol><br /><br /></article>

**Test Data**

> <article>Step I:<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566326710871-1566326710871.png" class="fr-fic fr-dii" style="width:133.0px" /><br /><br /><br />Step II:<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611652593330-1611652593330.png" class="fr-fic fr-dii" /><br /><br />Step III:<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611652682464-1611652682464.png" class="fr-fic fr-dii" /><br /><br />Step IV:<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611652766162-1611652766162.png" class="fr-fic fr-dii" /><br /></article>

**Expected**

> <article>After step I<ul><li>System Scheme settings appear</li></ul><br />After step II<ul><li>"Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are <strong>unchecked/disabled</strong></li></ul><br />After step III:<ul><li>"Manage Public Channels" are <strong>checked/enabled</strong> and "Manage Private Channels" boxes and all sub-settings under them are <strong>unchecked/disabled</strong></li></ul><br />After step IV:<ul><li>You <strong>should</strong> see the option to add a user to a channel in the profile pop-up</li></ul><br />After step V:<br /><ul><li>The list should filter to show only <strong>Public</strong> channels on the <strong>current team </strong>to match what you have typed</li></ul><br />After step VI:<br /><ul><li>The user is added to the channel</li><li>You are returned to your previous state</li><li>There is no direct feedback to you directly that the user has been added</li><li>A system message is posted in that channel saying they have been added to the channel by you</li></ul><br /></article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Related ticket(s) | (Cannot reproduce) <a href="https://mattermost.atlassian.net/browse/MM-25914">Channel admin able to see Private channels when adding member via popover (even though permission is disabled) — MM-25914</a> |

<hr/>

### More Info

| Name                     | Value                                                                                                                                                                                                         |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?)                                                                                                                                                            |
| Update notes             | Steve Mudie — Wednesday, February 03, 2021 2:21 PM<br>• Removed from manual pool as Cypress appears to be working as expected<br>–––––––––––––––––––––––––<br>(Saturn) Combined test steps to easily automate |
| Rainforest               | N/A                                                                                                                                                                                                           |
| Team Ownership           | Channels                                                                                                                                                                                                      |
| Manual Test Environments | Automated - No manual tests needed                                                                                                                                                                            |
| Cypress                  | in Production                                                                                                                                                                                                 |
| Location                 | Add user to channel from popover                                                                                                                                                                              |
