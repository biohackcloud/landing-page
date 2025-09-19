import { components } from "@/config/config.markdoc";
import { getMdData } from "@/utils/loadMdFile";
import Markdoc from "@markdoc/markdoc";
import React from "react";

export default async function Page() {
  const { content } = await getMdData(["services", "services.md"]);

  return (
    <section className=" markdown max-w-[600px] mx-auto my-10]">
      {Markdoc.renderers.react(content, React, { components })}
    </section>
  );
}
