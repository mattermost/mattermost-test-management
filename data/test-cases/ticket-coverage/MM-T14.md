---
# (Required) Ensure all values are filled up
name: "Tooltip for Remove profile picture/remove team icon should not appear when opening the edit section, without hover"
status: Active
priority: Low
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Ticket coverage
component: null
tags: []
labels: 
- se-prod
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 2756570
key: MM-T14
created_on: "2019-08-27T12:51:14Z"
last_updated: "2022-12-01T21:17:41Z"
case_hashed: 824536b693d5a62432c58ac246f47fbbb5be9e4e0e9ba928782bd8f8da7e74163fda16ac1515ca1e03242eef9f4864a2
steps_hashed: 6909160f43d4764aad26d59f0793e16882e5799a5745ad27b9f12737d60f27c38593e40019df64e90465ee1c7b38e7a1
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T14: Tooltip for Remove profile picture/remove team icon should not appear when opening the edit section, without hover

---

**Step 1**

1. Navigate to ☰ menu → Account Settings → Profile Picture
2. If there is no picture selected, add one and hit Save. Then re-open the section.

_Related ticket(s):_

[Tooltip for Remove profile picture/remove team icon appears when opening the edit section — MM-17581](https://mattermost.atlassian.net/browse/MM-17581)

**Test Data**

![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566920989921-2019-08-27_11-47-33.png)

**Expected**

- The tooltip for the button to remove the picture should not be displayed
