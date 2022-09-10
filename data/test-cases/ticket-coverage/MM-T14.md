---
# (Required) Ensure all values are filled up
name: "Tooltip for Remove profile picture/remove team icon should not appear when opening the edit section, without hover"
status: Active
priority: Low
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: 
- Automated - No manual tests needed

# (Optional)
component: null
priority_p1_to_p4: null
location: Ticket coverage
tags: []
labels: 
- se-prod

# Do not change
id: 2756570
key: MM-T14
folder_path: ticket-coverage
created_on: "2019-08-27T12:51:14Z"
last_updated: ""
case_hashed: 7af9c2242de1e362214ebb1be7bebde3c7d66f3e854d2346d29256d09e80a51fbb4ef9546d3ff3962b29d9df7bd8dc09
steps_hashed: 6909160f43d4764aad26d59f0793e16882e5799a5745ad27b9f12737d60f27c38593e40019df64e90465ee1c7b38e7a1
---

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
