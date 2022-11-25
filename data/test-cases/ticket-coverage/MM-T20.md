---
# (Required) Ensure all values are filled up
name: "MM-16922 — Web: Opening a permalink from last few messages of a channel has a loading indicator at the bottom"
status: Draft
priority: Normal
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform
priority_p1_to_p4: null

# (Optional)
location: Ticket coverage
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
id: 2758403
key: MM-T20
created_on: "2019-08-27T20:02:16Z"
last_updated: ""
case_hashed: 92c57b91d1202fbcca83403908148fe52f7a626c55a2855e76e671eb686f61c6d27d5af390f9de95f6e2ae55964e2629
steps_hashed: 881a2d36c9d61a1f9af1d8501aadc0f7f0a0823931560109fb9461ad287cb1f5298ad5714d70efc4b3683eca130dafeb
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T20: MM-16922 — Web: Opening a permalink from last few messages of a channel has a loading indicator at the bottom

---

**Step 1**

1. Get permalink of a post from last 10 posts in a channel.
2. Paste it in browser and open the permalink

**Expected**

- No loader at the bottom as user is at latest bunch of posts

**Related bug**: [MM-16922](https://mattermost.atlassian.net/browse/MM-16922)
