import { config } from "@/config/config.markdoc";
import fs from "fs/promises";
import path from "path";
import Markdoc from "@markdoc/markdoc";
import graymatter from "gray-matter";

export async function getMdData(pathArray: string[]) {
  const filePath = path.join(process.cwd(), "content", ...pathArray);

  const fileContents = await fs.readFile(filePath, "utf-8");

  const ast = Markdoc.parse(fileContents);

  const content = Markdoc.transform(ast, config);

  const { data } = graymatter(fileContents);

  const slug = pathArray[pathArray.length - 1].replace(/\.md$/, "");

  return { content, frontmatter: data, slug };
}
