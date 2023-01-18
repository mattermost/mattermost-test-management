---
# (Required) Ensure all values are filled up
name: "channels/DMs/GMs move to submenus should have appropriate menu items"
status: Active
priority: Normal
folder: Channel menu
authors: "@M-ZubairAhmed"
team_ownership: 
- Channels

# (Optional)
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: null
component: null
tags: []
labels: []

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments:
- WebApp and Desktop

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1**

1. Create a custom category in the sidebar
1. Click on the channel menu option of any channel
1. Click on the "Move to..." menu item
1. Verify that "Favorite" category, followed by created custom category and "Channels" categories are displayed
1. Go to the clicked channel
1. Click on the channel header dropdown menu and click on "Move to..."
1. Verify that "Favorite" category, followed by created custom category and "Channels" categories are displayed

**Step 2**

1. Create a custom category in the sidebar
1. Click on a DM channel menu option
1. Click on the "Move to..." menu item
1. Verify that "Favorite" category, followed by created custom category and "Direct Messages" categories are displayed
1. Go to the clicked DM channel
1. Click on the channel header dropdown menu and click on "Move to..."
1. Verify that "Favorite" category, followed by created custom category and "Direct Messages" categories are displayed

**Step 3**
1. Create a custom category in the sidebar
1. Click on a GM channel menu option
1. Click on the "Move to..." menu item
1. Verify that "Favorite" category, followed by created custom category and "Direct Messages" categories are displayed
1. Go to the clicked GM channel
1. Click on the channel header dropdown menu and click on "Move to..."
1. Verify that "Favorite" category, followed by created custom category and "Direct Messages" categories are displayed

**Step 4**
1. Make sure there is atleast two channels are present in the "Channels" category
1. Select both channels
1. Click on either of channels menu option
1. Click on the "Move to..." menu item
1. Verify that "Favorite" category, followed by "Channels" categories are displayed and "Direct Messages" category is not displayed

**Step 5**
1. Make sure there is atleast two DMs are present in the "Direct Messages" category
1. Select both DMs
1. Click on either of DMs menu option
1. Click on the "Move to..." menu item
1. Verify that "Favorite" category, followed by "Direct Messages" categories are displayed and "Channels" category is not displayed

**Step 6**
1. Create a custom category in the sidebar
1. Make sure there is atleast a channel, DM and GM are present
1. Select all three channels
1. Click on either of channels menu option
1. Click on the "Move to..." menu item
1. Verify that "Favorite" category, followed by created custom category category is displayed
1. Verify that "Channels" and "Direct Messages" categories are not displayed

