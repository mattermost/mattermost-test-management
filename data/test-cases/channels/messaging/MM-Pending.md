---
# (Required) Ensure all values are filled up
name: "GIFs and animated emoji autoplay behavior"
status: Active
priority: Normal
folder: Messaging
authors: "@Victor-Nyagudi"
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Messaging
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: in Production
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

1. Go to Settings -> Display -> Turn off "Autoplay GIFs and Emojis".
2. Post a Tenor GIF link e.g. https://media.tenor.com/yCFHzEvKa9MAAAAi/hello.gif.
3. Post a GIPHY GIF link e.g. https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif.

**Expected**

A static GIF with a play button overlaid on it is shown after steps 2 and 3.

**Step 2**

1. Turn off "Autoplay GIFs and Emojis".
2. Upload a GIF attachment.

**Expected**

A static GIF with a play button overlaid on it is shown.

**Step 3**

1. Turn off "Autoplay GIFs and Emojis".
2. Post a GIF from GIPHY via the emoji picker.

**Expected**

Same expectation as "Step 2" section above.

**Step 4**

1. Turn off "Autoplay GIFs and Emojis".
2. Post a Tenor GIF link.
3. Post a GIPHY GIF link.
4. Turn on "Autoplay GIFs and Emojis".

**Expected**

A playing GIF is shown, and a hidden pause button is revealed when a user hovers over the GIF. On mobile devices, tapping the GIF once reveals the pause button, and it's hidden again after 4 seconds.

**Step 5**

1. Turn off "Autoplay GIFs and Emojis".
2. Upload a GIF attachment.
3. Turn on "Autoplay GIFs and Emojis".

**Expected**

Same as expectation in "Step 4" section above.

**Step 6**

1. Turn off "Autoplay GIFs and Emojis".
2. Post a GIF from GIPHY via the emoji picker.
3. Turn on "Autoplay GIFs and Emojis".

**Expected**

Same as expectation in "Step 4" section above.

**Step 7**

1. Turn on "Autoplay GIFs and Emojis" if it's not already on.
2. Post a Tenor GIF link.
3. Hover over the GIF and press the pause button (tap the GIF once then tap the revealed pause button on mobile devices).
4. Post a GIPHY link.
5. Repeat step 3 above.

**Expected**

A static GIF is shown after steps 3 and 5 in the "Step 7" section directly above.

**Step 8**

1. Turn on "Autoplay GIFs and Emojis" if it's not already on.
2. Uplaod a GIF attachment.
3. Hover over the GIF and press the pause button (tap the GIF once then tap the revealed pause button on mobile devices).

**Expected**

A static GIF is shown with a play button overlaid on it.

**Step 9**

1. Turn on "Autoplay GIFs and Emojis" if it's not already on.
2. Post a GIF from GIPHY via the emoji picker.
3. Hover over the GIF and press the pause button (tap the GIF once then tap the revealed pause button on mobile devices).

**Expected**

Same as the expectation in "Step 8" section above.

**Step 10**

1. Turn off "Autoplay GIFS and Emojis".
2. Post a Tenor GIF link.
3. Click the play button.
4. Post a GIPHY GIF link.
5. Click the play button.

**Expected**

A playing GIF is shown, and a hidden pause button is revealed when a user hovers over the GIF after step 3 and 5 above. On mobile devices, tapping the GIF once reveals the pause button, and it's hidden again after 4 seconds.

**Step 11**

1. Turn off "Autoplay GIFS and Emojis".
2. Uplaod a GIF attachment.
3. Click the play button.

**Expected**

A playing GIF is shown, and a hidden pause button is revealed when a user hovers over the GIF. On mobile devices, tapping the GIF once reveals the pause button, and it's hidden again after 4 seconds.

**Step 12**

1. Turn off "Autoplay GIFS and Emojis".
2. Post a GIF from GIPHY via the emoji picker.
3. Click the play button.

**Expected**

Same as the expectation in "Step 11" section above.

**Step 13**

1. Turn off "Autoplay GIFS and Emojis".
2. Post a GIF from GIPHY via the emoji picker.
3. Reload the page.
4. Click the static GIF anywhere outside the play button.

**Expected**

The GIF is opened in a modal (enlarged).

**Step 14**

1. Turn off "Autoplay GIFS and Emojis".
2. Post a GIF from GIPHY via the emoji picker.
3. Click the post message anywhere outside the static GIF to start a thread.

**Expected**

A thread is started with the static GIF as the original post.

**Step 15**

1. Turn on "Autoplay GIFs and Emojis" if it's not already on.
2. Post a GIF from GIPHY via the emoji picker.
3. Click the post message anywhere outside the playing GIF to start a thread

**Expected**

A thread is started with the playing GIF as the original post.
