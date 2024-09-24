---
# (Required) Ensure all values are filled up
name: "Verify User can create a scheduled message in DM/GM/Channel"
status: Active
priority: Normal
folder: Schedule Messages
authors: "@yasserfaraazkhan"
team_ownership:
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: N/A
playwright: N/A
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

### Scenario 1: Able to schedule a message to a future Date in GM/Channel

Steps:

1. Log into User's account.
2. Type a message in the GM/Channel post text box.
3. Click on the Dropdown beside Send button.
4. Choose a pre-defined Date from the options.
5. Verify the message is scheduled and user can see one of the below mentioned message in the Channel
   - If the message is scheduled for today, show “Messages scheduled for today at 3:00 PM.”
   - If the message is scheduled for the next day, show “Messages scheduled for tomorrow at 3:00 PM.”
   - If the message is scheduled within a week, show “Message scheduled for Monday at 3:00 PM.”
   - If the message is scheduled >= 1 week, show “Message scheduled for Oct 16 at 3:00 PM.”
6. Verify User can see an option `See all scheduled messages`.
7. Click on `See all scheduled messages`.
8. Verify use is taken to Scheduled tab and can see the Scheduled messages.
9. The messages should have a tag `Scheduled` and the time mentioned and have one of the below message displayed
   - If the message is scheduled for today, show “Send today at 3:00 PM”.
   - If the message is scheduled for the next day, show “Send tomorrow at 3:00 PM”
   - If the message is scheduled within a week, show “Send Monday at 3:00 PM”
   - If the message is scheduled >= 1 week, show “Send Oct 16 at 3:00 PM”

### Scenario 2: Able to schedule Multiple message in GM/Channel

1. Follow above steps to create one more scheduled message.
2. Verify User can see number of messages scheduled in a channel. Example: the user should see `2 messages scheduled to be sent. See all scheduled messages`.

### Scenario 3: Able to schedule a message in a DM.

1. Log into User's account.
2. Open a Dirent message with User A.
3. Type a message in the text box.
4. Click on the Dropdown beside Send button. example: Tomorrow at 9:00 AM
   - If the User A is in different timezone. the option should show `Tomorrow at 9:00 AM. 10:00 AM User A's time`.
5. Choose a pre-defined Date from the options.
6. Verify the message is scheduled and user can see the message `Your draft has been scheduled for tomorrow at 9:00 AM <current user's time zone>`.
7. Click on `See all scheduled messages`.
8. Verify use is taken to Scheduled tab and can see the Scheduled message.

### Scenario 4: Able to schedule a message on a custom time in GM/Channel

1. Log into User's account.
2. Type a message in the GM/Channel post text box.
3. Click on the Dropdown beside Send button.
4. Click on `Choose a custom time`.
5. Verify a modal is opened and by default the date is set to `Tomorrow` and time is `09:00 AM`
   - If its a DM then the Modal should show time on which user will receive the message. Example: `<Day> at <time> for Username`.
6. Click on `See all scheduled messages`.
7. Verify use is taken to Scheduled tab and can see the Scheduled message.

### Scenario 5: Able to schedule a message within a Threaded message with no replies

1. Log into User's account.
2. Create a root post in a Channel.
3. Open the thread on the RHS.
4. Schedule a message.
5. Verify user can see a message saying `You have <#Number> scheduled message. <link> See all <link>`
6. Goto Threads page.
7. Open the thread where above message is scheduled.
8. Verify user can see on of the below message
   - If the message is scheduled for today, show “Messages scheduled for today at 3:00 PM.”
   - If the message is scheduled for the next day, show “Messages scheduled for tomorrow at 3:00 PM.”
   - If the message is scheduled within a week, show “Message scheduled for Monday at 3:00 PM.”
   - If the message is scheduled >= 1 week, show “Message scheduled for Oct 16 at 3:00 PM.”
9. Let the scheduled message be launched.
10. Verify the root post has scheduled message as a reply under it.
11. Verify the User is following the thread (based on the setting in System Console > Posts > Automatically Follow Threads)

### Scenario 6: Able to schedule a message with attachments

1. Log into User's account.
2. Create a threaded post with attachments like Image, Video, PDF in a Channel.
3. Click on the Dropdown beside Send button.
4. Choose a pre-defined Date from the options.
5. Goto Scheduled tab.
6. Verify the newly scheduled message is visible with attachments.

### Scenario 7: Able to view attachments in the scheduled

1. Log into User's account.
2. Create a threaded post with attachments like Image, Video, PDF in a Channel.
3. Click on the Dropdown beside Send button.
4. Choose a pre-defined Date from the options.
5. Goto Scheduled tab.
6. Verify the newly scheduled message is visible with attachments in the scheduled tab.
