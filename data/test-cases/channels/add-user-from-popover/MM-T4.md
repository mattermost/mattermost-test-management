---
key: MM-T4
title: Add User — Public OFF / Private ON
---

## MM-T4: Add User — Public OFF / Private ON

**Objective**

> <article><strong>Original test name from testing spreadsheet →</strong> If the user has only manage channel member permissions for private channels, then show the option in the profile pop-over and only show private channels in the channel dropdown.<br><br></article>

**Precondition**

> <article><br><br></article>

### Details

| Name     | Value                            |
| :------- | :------------------------------- |
| Priority | Low                              |
| Status   | Active                           |
| Folder   | Channels / Add user from popover |
| Labels   | cy-prod                          |
| Created  | 2019-08-26T23:03:54Z             |

### Steps

<hr/>

**Step 1**

> <article>Step I:<ol><li>Login as a System Admin</li><li>Click on the Product Switcher icon</li><li>Click on System Console</li><li>Navigate to User Management → Permissions → Edit Scheme</li></ol><br />Step II:<ol><li><strong>UnCheck</strong> "Manage Public Channels" and <strong>check</strong> "Manage Private Channels" in the All Members section at the top.</li></ol><br />Step III:<br /><ol><li>Login as a non-admin <strong>Member</strong> to the same server</li><li>Click the name of any user in a public or private channel</li></ol><br />Step IV:<br /><ol><li>Click Add to a channel</li><li>Type in the first few letters of the channel name</li></ol><br /><br /></article>

**Test Data**

> <article>Step I:<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566319668503-1566319668503.png" class="fr-fic fr-dii" style="width:129.0px" /><br /><br />Step II:<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611653822603-1611653822603.png" class="fr-fic fr-dii" /><br /><br />Step III:<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611653867342-1611653867342.png" class="fr-fic fr-dii" /><br /></article>

**Expected**

> <article>After Step I:<ul><li>System Scheme settings appear</li></ul><br />After Step II:<ul><li>"Manage Public Channels" are <strong>un</strong><strong>checked/disabled </strong>while "Manage Private Channels" boxes and all sub-settings under them are <strong>checked/enabled</strong>.</li></ul><br />After Step III:<ul><li>You should see the option to add a user to a channel in the profile pop-up</li></ul><br />After Step IV:<ul><li>Public channels will not appear in the autocomplete but Private channels (that you are a member of) will appear.</li></ul><br /></article>

<hr/>

### More Info

| Name                     | Value                                                                                                                                                                                                         |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?)                                                                                                                                                            |
| Update notes             | Steve Mudie — Wednesday, February 03, 2021 2:24 PM<br>• Removed from manual pool as Cypress appears to be working as expected<br>–––––––––––––––––––––––––<br>(Saturn) Combined test steps to easily automate |
| Rainforest               | N/A                                                                                                                                                                                                           |
| Team Ownership           | Channels                                                                                                                                                                                                      |
| Manual Test Environments | Automated - No manual tests needed                                                                                                                                                                            |
| Cypress                  | in Production                                                                                                                                                                                                 |
| Location                 | Add user to channel from popover                                                                                                                                                                              |
