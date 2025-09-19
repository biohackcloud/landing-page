# BiohackCloud2023 website

## Content management

The site uses markdown (MarkDoc superset) syntax for almost every part.

### Front page

Files in `/content/front/` are read and their text content getting shown in the front page columns.

### About page

`/content/about/about.md` is the about page content.

### Docs page

`/content/docs/` contains the documentation pages. The pages are categorized by the front matter `category` field. The order inside the categories is determined by sorting by the `order` field. Categories appear in the order of their first document's `order` field.

#### Supported MarkDoc features

- `{% callout title="som title" type="info | warning | success" %} Some callout text {% /callout %}`
