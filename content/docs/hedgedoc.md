---
title: HedgeDoc
author: admin
date: 2025-09-20
order: "3"
category: Services
---

# HedgeDoc

[HedgeDoc](https://docs.hedgedoc.org/) is a collaborative Markdown editor that allows multiple
users to edit documents in real-time.

## Authentication

Access HedgeDoc by authenticating with your Life Science ID (LS ID) credentials. For details
on how to get and use LS ID, please refer to our [LS Login documentation](ls_login).

## Markdown Flavor

HedgeDoc uses **HedgeDoc-Flavored Markdown (HFM)**, which extends standard Markdown with additional
features. You can find the full reference for HFM
[here](https://docs.hedgedoc.org/references/hfm/).

{% callout type="info" title="Information" %}
By default, HedgeDoc interprets single line breaks in your Markdown literally, rendering them as
`<br>` tags in the output HTML. If you prefer the standard Markdown behavior (where a single
newline in source is ignored unless preceded by two spaces), you can disable this by setting the
`breaks` frontmatter option to `false`.
{% /callout %}

## Frontmatter Metadata

HedgeDoc supports various metadata options defined in the document's frontmatter (the YAML block at
the very top of your Markdown file). These options can control aspects like document visibility,
permissions, and behavior.

Example:

```markdown
---
breaks: false
---

This is a paragraph.
This is still the same paragraph in standard Markdown.
```

You can find a complete list and explanation of available frontmatter metadata
[here](https://docs.hedgedoc.org/references/yaml-metadata/).
