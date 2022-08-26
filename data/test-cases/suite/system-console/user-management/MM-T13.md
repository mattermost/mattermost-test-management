---
key: MM-T13
title: Option should be hidden to update own email via System Console
---

## MM-T13: Option should be hidden to update own email via System Console

### Details

| Name     | Value                                    |
| :------- | :--------------------------------------- |
| Priority | Normal                                   |
| Status   | Active                                   |
| Folder   | Suite / System Console / User Management |
| Labels   | se-prod,system-console                   |
| Created  | 2019-08-27T00:41:48Z                     |

### Steps

<hr/>

**Step 1**

> <article>Option should be hidden to update own email via System Console<br>–––––––––––––––––––––––––<ol><li>Log in as an Admin</li><li>Navigate to System Console → User Management → Users</li><li>Locate currently logged in account using search</li><li>Click "System Admin" to right of name to reveal menu</li></ol></article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566866937276-2019-08-26_20-48-35.png" style="width: 300px;" class="fr-fil fr-dib"></article>

**Expected**

> <article><ul><li>The option to change your email address should <strong>not</strong> be present</li></ul></article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Fix Versions | v5.14 (August 2019) |
| Related ticket(s) | <a href="https://mattermost.atlassian.net/browse/MM-16727">Unclear error message when attempting to update own email via System Console — MM-16727</a> |

<hr/>

### More Info

| Name              | Value                                              |
| :---------------- | :------------------------------------------------- |
| Fix Versions      | v5.14 (August 2019)                                |
| Priority P1 to P4 | P3 - Deep Functions (Do extensive scenarios work?) |
| Team Ownership    | Channels                                           |
| Cypress           | To Do                                              |
| Selenium          | in Production                                      |
| Location          | System Console                                     |
