---
# (Required) Ensure all values are filled up
name: "At-mention user autocomplete is legible when it overlaps with channel header when drafting a long message containing a file attachment"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels
priority_p1_to_p4: P4 - Low-Impact (Edge or unsuitable to repeat?)

# (Optional)
location: Messaging
component: null
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging
- fix-versions-not-empty-2022cleanup

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 3736146
key: MM-T70
created_on: "2019-12-19T15:28:54Z"
last_updated: ""
case_hashed: a2f371a58323e6bb71721a1235b20fdbd3f20117b8157eed2107f54aa4f939321b20e36f0ce857be71d4ae2cd389515a
steps_hashed: ac0660560e5a2ffda14b91fe6eafced430ca28e2d28b75e1189960ad9a39ccc20295820c455a2fd5976efee9a3466478
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T70: At-mention user autocomplete is legible when it overlaps with channel header when drafting a long message containing a file attachment

---

**Step 1**

At-mention user autocomplete is legible when it overlaps with channel header when drafting a long message containing a file attachment\
–––––––––––––––––––––––––

- Go to a public channel and attach a file in a message draft
- Copy the string of 'h' letters to the right into the message box
- On a new line, type "@" to open the at-mention user autocomplete

_Related ticket(s):_

- [At-mention user autocomplete overlaps with channel header when drafting a long message containing a file attachment — MM-14872](https://mattermost.atlassian.net/browse/MM-14872)
- (Invalid) [RC 5.14 testing: At-mention autocomplete overlaps with channel header — MM-17623](https://mattermost.atlassian.net/browse/MM-17623)
- (**Story**) [UI Automation: Write an automated test using Cypress for "At-mention user autocomplete does not overlap with channel header when drafting a long message containing a file attachment" — MM-18667](https://mattermost.atlassian.net/browse/MM-18667)

_Important notes about this step:_

Updated to clarify it can overlap but drop-down should be legible and header elements should not be visible behind

**Test Data**

h\
h\
h\
h\
h\
h\
h\
h\
h\
h\
h\
h

**Expected**

- If autocomplete overlaps with channel header, it is still legible (channel header elements are not visible behind the drop-down)

---

**Step 2**

Test in a different dimension like 1280 x 900

**Expected**

- If autocomplete overlaps with channel header, it is still legible (channel header elements are not visible behind the drop-down)
