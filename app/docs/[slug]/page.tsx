import { components } from "@/config/config.markdoc";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import { getMdData } from "@/utils/loadMdFile";

export default async function Page({ params }: { params: { slug: string } }) {
  const { content } = await getMdData(["docs", `${params.slug}.md`]);

  return (
    <section className=" markdown mx-auto my-1">
      {Markdoc.renderers.react(content, React, { components })}
    </section>
  );
}
