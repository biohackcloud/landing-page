import { RenderableTreeNode } from "@markdoc/markdoc";

export type DocsTableOfContents = {
  slug: string;
  frontmatter: { title: string; author: string; date: string; order: string };
};

export type Contents = (DocsTableOfContents & {
  content: RenderableTreeNode;
})[];
