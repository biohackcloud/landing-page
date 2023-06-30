import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

import { components, config } from "@/config/config.markdoc";
import Markdoc from "@markdoc/markdoc";
import React from "react";

async function getData() {
  const filePath = path.join(process.cwd(), "content", "about", "about.md");

  const fileContents = await fs.readFile(filePath, "utf-8");
  const frontMatter = matter(fileContents);

  const ast = Markdoc.parse(fileContents);
  const content = Markdoc.transform(ast, config);
  return { content };

  // const contentHtml = processedContent.toString();

  // return {
  //   contentHtml,
  // };
}
export default async function Page() {
  const { content } = await getData();

  return (
    // <section
    //   className=" markdown max-w-[600px] mx-auto my-10]"
    //   dangerouslySetInnerHTML={{ __html: data.contentHtml }}
    // ></section>
    <section className=" markdown max-w-[600px] mx-auto my-10]">
      {Markdoc.renderers.react(content, React, { components })}
    </section>
  );
}
