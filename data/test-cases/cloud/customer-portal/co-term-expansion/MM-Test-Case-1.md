---
# (Required) Ensure all values are filled up
name: "For Self-hosted | On Customer Portal payment page | Admins Adding additional Licenses | Email with purchase details and invoice should be generated"
status: Active
priority: Normal
folder: Co-term Expansion
authors: "@yasserfaraazkhan"
team_ownership: 
- Self-Serve

# (Optional)
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: Cloud
component: null
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

**Step 1**

Ref Story and Figma: [MM-47641](https://mattermost.atlassian.net/browse/MM-47641)

Continuation of Test Case MM-T5295 with email verification.
Pre-requisites:

- The workspace should be having an active License for X number of users
- The workspace can be at the initial, mid or end of its license term
- Only Admins should be able to add user to current plan (either Professional or Enterprise)
- If the current license is ending in 60, the expansion option is not shown

Steps:

1. After a successful purchase of additional licenses, an email with details of purchase is sent to the Admin.
2. Email subject should be 'Purchase Confirmation - Mattermost Customer Portal'
3. The email should contain Billing attributes below,
   - Billing address
   - Invoice No
   - Billed on
   - Due on
   - Terms
   - Start Date
   - Expiry Date
4. The email should contain Product details below,
   - Product (eg: Self-Hosted Professional)
   - Users
   - PRICE/USER (ANNUAL)
   - AMOUNT
   - Payment info
   - Subtotal
   - Tax
   - Total
   - Amount paid

**Expected**
