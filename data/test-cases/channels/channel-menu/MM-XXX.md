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

"Move to" sub menu options for custom categories and channel header menu

1. Create a custom category in the sidebar
1. Click on the channel menu option of any channel
1. Click on the "Move to..." menu item
1. Verify that "Favorites" category, followed by created custom category and "Channels" categories are displayed
1. Go to the previously selected channel
1. Click on the channel header dropdown menu and click on "Move to..."
1. Verify that "Favorites" category, followed by created custom category and "Channels" categories are displayed

**Expected**

For custom category menus and channel header menu, "Move to " sub menu options are  "Favorites" category, followed by created custom category, "Channels" category and option to create and move to "New Category". 

---
**Step 2**

"Move to" sub menu options for sidebar DMs and DM channel header menu

1. Create a custom category in the sidebar
1. Click on any DM channel menu option
1. Click on the "Move to..." menu item
1. Verify that "Favorites" category, followed by created custom category and "Direct Messages" categories are displayed
1. Go to the previously selected DM channel
1. Click on the channel header dropdown menu and click on "Move to..."
1. Verify that "Favorites" category, followed by created custom category and "Direct Messages" categories are displayed

**Expected**

For DM sidebar item menu and DM channel header menu, "Move to " sub menu options are  "Favorites" category, followed by created custom category, "Direct Messages" category and option to create and move to "New Category". 

---
**Step 3**

"Move to" sub menu options for sidebar GMs and GM channel header menu

1. Create a custom category in the sidebar
1. Click on any GM channel menu option
1. Click on the "Move to..." menu item
1. Verify that "Favorites" category, followed by created custom category and "Direct Messages" categories are displayed
1. Go to the previously selected GM channel
1. Click on the channel header dropdown menu and click on "Move to..."
1. Verify that "Favorites" category, followed by created custom category and "Direct Messages" categories are displayed

**Expected**

For GM sidebar item menu and GM channel header menu, "Move to " sub menu options are  "Favorites" category, followed by created custom category, "Direct Messages" category and option to create and move to "New Category". 

---
**Step 4**

"Move to" sub menu options for multi-select channel group

1. Make sure there are at least two channels present in the "Channels" category
1. Select both channels
1. Click on either of the channel's menu options
1. Click on the "Move to..." menu item
1. Verify that "Favorites" category, followed by "Channels" categories are displayed and "Direct Messages" category is not displayed

**Expected**

For multi-select group of channels, "Move to " sub menu options are  "Favorites" category, followed by "Channels" category and option to create and move to "New Category". "Direct Messages" should not be available.

---
**Step 5**

"Move to" sub menu options for multi-select DM group

1. Make sure there are at least two DMs present in the "Direct Messages" category
1. Select both DMs
1. Click on either of the DM's menu options
1. Click on the "Move to..." menu item
1. Verify that "Favorites" category, followed by "Direct Messages" categories are displayed and "Channels" category is not displayed

**Expected**

For multi-select DM group, "Move to " sub menu options are  "Favorites" category, followed by "Direct Messages" category and option to create and move to "New Category". "Channels" category is not available.

---
**Step 6**

"Move to" sub menu options for various multi-select group consisting of DMs, GMs and channels 

1. Create a custom category in the sidebar
1. Make sure there are at least a channel, DM and GM present
1. Select all three channels
1. Click on either of the channels menu options
1. Click on the "Move to..." menu item
1. Verify that "Favorites" category, followed by created custom category category is displayed
1. Verify that "Channels" and "Direct Messages" categories are not displayed

**Expected**

For multi-select group consisting of DMs, GMs and channels,  "Move to " sub menu options are  "Favorites" category, followed by created custom category and  option to create and move to "New Category". "Channels" and "Direct Messages" categories are not available.

---
