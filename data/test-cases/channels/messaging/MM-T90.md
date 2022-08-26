---
key: MM-T90
title: Reply to older message
---

## MM-T90: Reply to older message

### Details

| Name     | Value                                                |
| :------- | :--------------------------------------------------- |
| Priority | Low                                                  |
| Status   | Active                                               |
| Folder   | Channels / Messaging                                 |
| Labels   | TM4J-Key-Mapped-In-Cypress-Release,cy-prod,messaging |
| Created  | 2019-12-20T16:32:59Z                                 |

### Steps

<hr/>

**Step 1**

> <article>Reply to older message<br />--------------------<br />**Test this one on a server that has older data, such as postgres.test or mysql.test if necessary (as opposed to rctesting, e.g. where there may not be older messages)**<br /><br />1. Click &quot;reply&quot; from [...] menu to reply to a message that is at least one day old (and has had newer messages posted after it in the channel)<br />2. In right hand sidebar (RN apps: open reply thread), attach a file<br />3. Send and verify reply appears (non-RN apps will see comment with shaded background)<br />4. Close the RHS / go back to center channel view</article>

**Expected**

> <article>- Date timestamp for first and subsequent posts are correct. <br />- Comment appears at the bottom of the center channel with an intro line &quot;Commented on username's message:&quot;  and a line beside the comment</article>

<hr/>

### More Info

| Name                     | Value                                                                                                 |
| :----------------------- | :---------------------------------------------------------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?)                                                    |
| Update notes             | Steve Mudie — Thursday, December 17, 2020 8:07 PM<br>• Added link to Cypress code in Traceability tab |
| Rainforest               | N/A                                                                                                   |
| Cypress Reports          | RELEASE - TM4J-Key-Mapped-In-Cypress-Release - TM4J key found Cypress release run report (SDET/QA)    |
| Team Ownership           | Channels                                                                                              |
| Manual Test Environments | Automated - No manual tests needed                                                                    |
| Cypress                  | in Production                                                                                         |
| Location                 | Messaging                                                                                             |
