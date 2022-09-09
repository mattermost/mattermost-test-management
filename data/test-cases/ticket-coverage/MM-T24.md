---
# (Required) Ensure all values are filled up
name: "MM-16632 — Mobile Web App View: non-mobile view Search Options popover appears on top of mobile view page"
status: Draft
priority: Normal
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
manual_test_environments: []

# (Optional)
component: null
priority_p1_to_p4: null
location: Ticket coverage
tags: []
labels: []

# Do not change
id: 2759120
key: MM-T24
folder_path: ticket-coverage
created_on: "2019-08-27T22:52:09Z"
last_updated: ""
case_hashed: c99bb3fc7a02718e5d009957b3f86a30375987c22ba4b203ccb498c76316b182c7935050bf0d8506742687482b275925
steps_hashed: ad85ea47cbaab4189e86c10177bda6d587250632e2507a645a110176711b24cb36b7b35f22af827fd270aadd5aee2e46
---

## MM-T24: MM-16632 — Mobile Web App View: non-mobile view Search Options popover appears on top of mobile view page

---

**Step 1**

1. Open Mattermost in a mobile browser or snap desktop browser to mobile view
2. View a channel or DM/GM
3. Tap the Search icon in the header

**Expected**

- Should open the Search page

---

**Step 2**

- Tap in the search input and type anything
- Use the 'X' to clear the input
- Tap in the search input again

**Expected**

- The non-mobile web app Search Options popover **should not** appear on top of the web app mobile view page with the Search Options list

**Related bug**: [MM-16632](https://mattermost.atlassian.net/browse/MM-16632)
