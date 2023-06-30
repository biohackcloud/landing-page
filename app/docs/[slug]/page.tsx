import { components } from "@/config/config.markdoc";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import { getMdData } from "@/utils/loadMdFile";
import { readdir } from "fs/promises";
import path from "path";

export async function generateStaticParams() {
  const docsDir = path.join(process.cwd(), "content", "docs");
  const docs = await readdir(docsDir);

  const slugs = await Promise.all(
    docs.map(async (doc) => {
      const docContent = await getMdData(["docs", doc]);
      return docContent.slug;
    })
  );

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { content } = await getMdData(["docs", `${params.slug}.md`]);

  return (
    <section className=" markdown mx-auto my-1">
      {Markdoc.renderers.react(content, React, { components })}
    </section>
  );
}
