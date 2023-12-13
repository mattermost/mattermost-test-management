---
# (Required) Ensure all values are filled up
name: "LaTeX formatting currently not expected to render on MS Teams side"
status: Active
priority: Normal
folder: text-formatting
authors: "@lindalumitchell"
team_ownership: []
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: null

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

1. In a linked channel, post the following LaTeX-formatted text from Mattermost side:
   Three ticks immediately followed by `latex`, newline, "X_k = \sum_{n=0}^{2N-1} x_n \cos \left[\frac{\pi}{N} \left(n+\frac{1}{2}+\frac{N}{2}\right) \left(k+\frac{1}{2}\right) \right]" without the quotes, newline, three ticks

\```latex\
X_k = \sum_{n=0}^{2N-1} x_n \cos \left[\frac{\pi}{N} \left(n+\frac{1}{2}+\frac{N}{2}\right) \left(k+\frac{1}{2}\right) \right]

\```

2. View post in linked channel in MS Teams

**Expected**

Until further notice this is known and expected behavior:
- LaTeX does not render properly on MS Teams side; just appears as a text block
- LaTeX renders properly on Mattermost side, e.g.:

$X_k = \sum_{n=0}^{2N-1} x_n \cos \left[\frac{\pi}{N} \left(n+\frac{1}{2}+\frac{N}{2}\right) \left(k+\frac{1}{2}\right) \right]$

**Step 2**

1. In a linked channel, post the following LaTeX-formatted text from Mattermost side (dollar sign before and following the LaTeX portion):

   `Using dollar sign to format: $\cos \left[\frac{\pi}{N} \left(n+\frac{1}{2}+\frac{N}{2}\right) \left(k+\frac{1}{2}\right) \right]$`

2. View post in linked channel in MS Teams

**Expected**

Until further notice this is known and expected behavior:
- LaTeX does not render properly on MS Teams side; just appears as text
- LaTeX renders properly on Mattermost side, e.g.:

  Using dollar sign to format: $\cos \left[\frac{\pi}{N} \left(n+\frac{1}{2}+\frac{N}{2}\right) \left(k+\frac{1}{2}\right) \right]$
