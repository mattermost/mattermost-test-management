---
# (Required) Ensure all values are filled up
name: "Add user — Error if already in channel"
status: Active
priority: Low
folder: Add user from popover
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Automated - No manual tests needed

# (Optional)
component: null
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: Add user to channel from popover
tags: 
- Cloud N/A
labels: 
- cy-prod

# Do not change
id: 2746251
key: MM-T2
folder_path: channels/add-user-from-popover
created_on: "2019-08-26T23:03:54Z"
last_updated: "2022-09-10T10:54:35Z"
case_hashed: 9725df319b65b3e1248a5898779c9a518b0f8b09fca0b42faef76fc627fb792a26adf1a618c89cb12cac0bdb6795fbc1
steps_hashed: d07b606c189287eef3820d35d85a0dc76123f1e8fd2ed749040fc2a5f420fc225b26bab9bc162654c4c9a29e77b29a3f
---

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

**Test Data**

![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1599469997351-1599469997351.png)

**Expected**

On step 1, System Scheme settings appear.\
On step 2, "Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are **checked/enabled**.\
On step 3, you should see the option to add a user to a channel in the profile pop-up.\
On step 4, the list filters to match what you've typed.\
On step 5,

- Error displays `[name] is already a member of that channel`
- The Add button is unactionable
