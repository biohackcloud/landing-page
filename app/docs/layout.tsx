import { PropsWithChildren } from "react";

import { getMdData } from "@/utils/loadMdFile";
import { readdir } from "fs/promises";
import Link from "next/link";
import path from "path";
import type { DocsTableOfContents } from "@/types/types";
import Contents from "@/components/DocsContents";

async function getDocsTableOfContents() {
  const docsDir = path.join(process.cwd(), "content", "docs");
  const docs = await readdir(docsDir);

  const docsTableOfContents = await Promise.all(
    docs.map(async (doc) => {
      const docContent = await getMdData(["docs", doc]);
      return {
        slug: docContent.slug,
        frontmatter: docContent.frontmatter,
      } as DocsTableOfContents;
    })
  );

  return docsTableOfContents;
}

export default async function Layout({ children }: PropsWithChildren) {
  const contents = await getDocsTableOfContents();

  return (
    <section className="flex justify-between gap-5">
      <Contents contents={contents} />

      <div className=" flex-1">{children}</div>
    </section>
  );
}
