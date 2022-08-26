---
key: MM-T3
title: Add User — Public ON / Private OFF
---

## MM-T3: Add User — Public ON / Private OFF

**Objective**

> <article><strong>Original test name from testing spreadsheet →&nbsp;</strong>If the user has manage channel member permissions for public OR private channels, show the option in the profile pop-over</article>

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

> <article>Step I:<ol><li>Login as a System Admin</li><li>Click on the Product Switcher menu</li><li>Click System Console</li><li>Navigate to User Management → Permissions → Edit Scheme</li></ol><br />Step II:<ol><li><strong>Check</strong> "Manage Public Channels" and <strong>uncheck</strong> "Manage Private Channels" in the All Members section at the top.</li></ol><br />Step III:<br /><ol><li>Login as a non-admin <strong>Member</strong> to the same server</li><li>Click the name of any user in a public or private channel</li></ol><br />Step IV:<br /><ol><li>Click Add to a channel</li><li>Type in the first few letters of the channel name</li></ol></article>

**Test Data**

> <article>Step I:<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566316335687-1566316335686.png" class="fr-fic fr-dii" style="width:138.0px" /><br /><br />Step II:<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611653231134-1611653231134.png" class="fr-fic fr-dii" /><br /><br />Step III:<br /><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611653328349-1611653328349.png" class="fr-fic fr-dii" /><br /><br /><br /></article>

**Expected**

> <article>After step I:<ul><li>System Scheme settings appear</li></ul><br />After step II:<ul><li>"Manage Public Channels" are <strong>checked/enabled </strong>while "Manage Private Channels" boxes and all sub-settings under them are <strong>un</strong><strong>checked/disabled</strong>.</li></ul><br />After step III:<ul><li>You should see the option to add a user to a channel in the profile pop-up</li></ul><br />After step IV:<ul><li>Private channels will not appear in the autocomplete (even if you are a member of the private channel).</li></ul><br /><br /></article>

<hr/>

### More Info

| Name                     | Value                                                                                                                                                                                                          |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?)                                                                                                                                                             |
| Update notes             | Steve Mudie — Wednesday, February 03, 2021 2:24 PM<br />• Removed from manual pool as Cypress appears to be working as expected<br />–––––––––––––––––––––––––<br />(Saturn) Combined steps to easily automate |
| Rainforest               | N/A                                                                                                                                                                                                            |
| Cypress Reports          | STABLE - TM4J-Key-Mapped-In-Cypress-Stable - TM4J key found Cypress master-prod run report (SDET/QA)                                                                                                           |
| Team Ownership           | Channels                                                                                                                                                                                                       |
| Manual Test Environments | Automated - No manual tests needed                                                                                                                                                                             |
| Cypress                  | in Production                                                                                                                                                                                                  |
| Location                 | Add user to channel from popover                                                                                                                                                                               |
