---
# (Required) Ensure all values are filled up
name: "For Selfhosted | On Customer Portal payment page | Admins should be able to purchase additional seats for existing license"
status: Active
priority: Normal
folder: Co Term Expansion
authors: "@yasserfaraazkhan"
team_ownership: []

# (Optional)
component: null
priority_p1_to_p4: P1 - Smoke Tests (App testable?)
location: Cloud
tags: []
labels: []

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

## Change Test Title

---

**Step 1**
Ref Story and Figma: [MM-47641](https://mattermost.atlassian.net/browse/MM-47641)

Pre-requisites:

- The workspace should be having an active License for X number of users
- The workspace can be at the initial, mid or end of its license term
- Only Admins should be able to add user to current plan (either Professional or Enterprice)
- if the current license is ending in 60 or 30 days, the expansion option is not shown

Test Steps:

1. Login to portal. (or create a new account).
2. Move to Lienses page. Verify current License details like Start (date), Expiry (date), Users count, Total (cost).
3. If Active users are less than the Number for which license was purchased, Verify only "Download license" button is shown.
4. If Active users are more than the Number for which license was purchased, Verify "Purchase additional seats" & "Download license" buttons are shown.
   Verify a CTA is displayed with color background to indicate the margin by with the user count has exceeded.
   - Content of CTA with orange border "You have exceeded your license seat count. Purchase additional seats" (if it exceeds by 5 % )
   - Content of CTA with Red border "You have exceeded your license seat count by X users. Purchase additional seats" (if it exceeds more than 10 % )
5. Verify "cancel Auto-renew" option is displayed.
6. Click on "Purchase additional seats" (assuming there is a license where users are exceeding).
7. New payment page with heading "Update your seat count" should open
8. Verify on RHS, License details like Name, "Additional seats" (count of users that exceeded) input field, Cost per user (count x months remaning in plan) "total cost", "complete purchase" button
   - Verify the Cost calculation is pro-rated.
9. Click on "Complete purchase" button
10. Verify "updating workspace information" page is shown
11. On successful purchase, Verify "Added X users more to your license" message is shown, with option buttons to "View Billing"
12. Verify purchase details on "purchase history" page 

**Expected**

Verify the purchase for aditional users was successfull and purchase history page shows details of purchase.
Details should include Date (date of purchase), Description (License name and annual/pro-rata subscription), Users, Price, Total, Status (purchase status) 