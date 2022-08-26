---
key: MM-T29
title: MM-17338 — Setting Require Email Verification to true will break the admin console
---

## MM-T29: MM-17338 — Setting Require Email Verification to true will break the admin console

### Details

| Name     | Value                |
| :------- | :------------------- |
| Priority | Normal               |
| Status   | Draft                |
| Folder   | Ticket coverage      |
| Created  | 2019-08-28T09:49:50Z |

### Steps

<hr/>

**Step 1**

> <article><ol><li>Login as an Admin</li><li>Navigate to ☰ menu → System Console → Authentication → Email</li><li>Toggle 'Require Email Verification' to <strong>False</strong> and Save</li><li>Navigate to System Console → Site Configuration → Notifications</li><li>Toggle 'Enable Email Notifications' to <strong>False</strong> and Save</li><li>Toggle 'Enable Email Notifications' to <strong>True</strong> and Save</li><li>Navigate back System Console → Authentication → Email</li><li>Toggle 'Require Email Verification' to <strong>True</strong> and Save</li></ol></article>

**Expected**

> <article><ul><li>Saved changes are accepted without error or anomaly</li></ul><br><strong>Related bug</strong>: <a href="https://mattermost.atlassian.net/browse/MM-17338" rel="noopener noreferrer" target="_blank">MM-17338</a></article>

<hr/>

### More Info

| Name           | Value           |
| :------------- | :-------------- |
| Team Ownership | QA Platform     |
| Location       | Ticket coverage |
