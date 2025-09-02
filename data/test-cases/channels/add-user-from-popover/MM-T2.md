---
# (Required) Ensure all values are filled up
name: 'Add user — Error if already in channel'
status: Active
priority: Low
folder: Add user from popover
authors: ''
team_ownership:
  - Channels
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Add user to channel from popover
component: null
tags:
  - Cloud N/A
labels:
  - cy-prod
tested_by_contributor: ''

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
id: 2746251
key: MM-T2
created_on: '2019-08-26T23:03:54Z'
last_updated: '2022-09-10T10:54:35Z'
case_hashed: d178ef4fcff484e849e2ae0d90e4e8e24421e1afc4a56d332ede19c3c2e7663835c175b9462145e75e39008cd38f8644
steps_hashed: 1e088f1a70771c260b9393f4092b5244bd2bdc715f8f12f7814514a15bd8196f7bd56e41a2a44efe31eab284dc997285
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T2: Add user — Error if already in channel

**Objective**

If a user tries to add a person to a channel he is already in, there is an error as soon as he selects that channel from the list.

---

**Step 1**

Add user — Error if already in channel\
–––––––––––––––––––––––––\
Step 1:

1. Login as a System Admin
2. Click the Product Switcher icon
3. Click System Console
4. Navigate to User Management → Permissions → Edit Scheme

Step 2:

1. Click "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top.

Step 3:

1. Login as a Member to the same server
2. Click the name of any user in a public or private channel

Step 4:

1. Click Add to a channel
2. Type in the first few letters of the channel name **you are currently in**

Step 5:

1. Select the channel with your mouse - or scroll with the arrow keys and hit the ↵ (enter key)
2. Click Add

**Expected**

On step 1, System Scheme settings appear.\
On step 2, "Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are **checked/enabled**.\
On step 3, you should see the option to add a user to a channel in the profile pop-up.\
On step 4, the list filters to match what you've typed.\
On step 5,

- Error displays `[name] is already a member of that channel`
- The Add button is unactionable
