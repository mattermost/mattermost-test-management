---
# (Required) Ensure all values are filled up
name: "Tooltip for Remove profile picture/remove team icon should not appear when opening the edit section, without hover"
status: Active
priority: Low
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform

# (Optional)
priority_p1_to_p4: null
location: Ticket coverage
component: null
tags: []
labels: 
- se-prod

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
last_updated: ""
case_hashed: c93f23c2b6a4016050f7382beab089cf2597423974ee0a2234ce98452d208b57a4302355ecc4f51c0a2b5e0a88c83454
steps_hashed: 6909160f43d4764aad26d59f0793e16882e5799a5745ad27b9f12737d60f27c38593e40019df64e90465ee1c7b38e7a1
---

<!-- auto-generated based on "key" and "name" -->

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
