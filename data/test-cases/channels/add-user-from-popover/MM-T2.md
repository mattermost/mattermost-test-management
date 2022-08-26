---
key: MM-T2
title: Add user — Error if already in channel
---

## MM-T2: Add user — Error if already in channel

**Objective**

> <article><strong>Original test name from testing spreadsheet → </strong>If a user tries to add a person to a channel he is already in, there is an error as soon as he selects that channel from the list.</article>

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

> <article>Add user — Error if already in channel<br />–––––––––––––––––––––––––<br />Step 1:<ol><li>Login as a System Admin</li><li>Click the Product Switcher icon</li><li>Click System Console</li><li>Navigate to User Management → Permissions → Edit Scheme</li></ol><br />Step 2:<ol><li>Click "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top.</li></ol><br />Step 3:<br /><ol><li>Login as a Member to the same server</li><li>Click the name of any user in a public or private channel</li></ol><br />Step 4:<br /><ol><li>Click Add to a channel</li><li>Type in the first few letters of the channel name <strong>you are currently in</strong></li></ol><br />Step 5:<br /><ol><li>Select the channel with your mouse - or scroll with the arrow keys and hit the ↵ (enter key)</li><li>Click Add</li></ol><strong><br /></strong></article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1599469997351-1599469997351.png" style="width:300px" class="fr-fil fr-dib" /><br /></article>

**Expected**

> <article>On step 1, System Scheme settings appear.<br />On step 2, "Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are <strong>checked/enabled</strong>.<br />On step 3, you should see the option to add a user to a channel in the profile pop-up.<br />On step 4, the list filters to match what you've typed.<br />On step 5,<ul><li>Error displays "[name] is already a member of that channel"</li><li>The Add button is unactionable</li></ul></article>

<hr/>

### More Info

| Name                     | Value                                                                                                                                                                                                                                                       |
| :----------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?)                                                                                                                                                                                                          |
| Update notes             | Steve Mudie — Thursday, December 17, 2020 7:01 PM<br />• Cypress Automation working as expected 🎉<br />• Set Cypress status to ✅ in Production<br />• Removed from relevant Manual Environments<br />• Added link to Cypress code in Traceability tab above |
| Rainforest               | N/A                                                                                                                                                                                                                                                         |
| Cypress Reports          | STABLE - TM4J-Key-Mapped-In-Cypress-Stable - TM4J key found Cypress master-prod run report (SDET/QA)                                                                                                                                                        |
| Team Ownership           | Channels                                                                                                                                                                                                                                                    |
| Manual Test Environments | Automated - No manual tests needed                                                                                                                                                                                                                          |
| Cypress                  | in Production                                                                                                                                                                                                                                               |
| Tags                     | Cloud N/A                                                                                                                                                                                                                                                   |
| Location                 | Add user to channel from popover                                                                                                                                                                                                                            |
