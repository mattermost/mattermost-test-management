---
name: "At-mention user autocomplete is legible when it overlaps with channel header when drafting a long message containing a file attachment"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T70: At-mention user autocomplete is legible when it overlaps with channel header when drafting a long message containing a file attachment

---

**Step 1**

At-mention user autocomplete is legible when it overlaps with channel header when drafting a long message containing a file attachment\
–––––––––––––––––––––––––

- Go to a public channel and attach a file in a message draft
- Copy the string of 'h' letters to the right into the message box
- On a new line, type "@" to open the at-mention user autocomplete

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
