import { components } from "@/config/config.markdoc";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import { getMdData } from "@/utils/loadMdFile";

export default async function Page() {
  const { content } = await getMdData(["about", "about.md"]);

  return (
    <section className=" markdown max-w-[600px] mx-auto my-10]">
      {Markdoc.renderers.react(content, React, { components })}
    </section>
  );
}
