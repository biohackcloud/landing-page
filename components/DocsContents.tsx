"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DocsTableOfContents } from "@/types/types";

export default function Contents({
  contents,
}: {
  contents: DocsTableOfContents[];
}) {
  const path = usePathname();

  const slug = path.split("/").at(-1);

  const sortedContents = contents.sort((a, b) => {
    if (a.frontmatter.order > b.frontmatter.order) {
      return 1;
    } else if (a.frontmatter.order < b.frontmatter.order) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <aside className=" flex flex-col w-fit max-w-sm text-highlight">
      <ul>
        {sortedContents.map((content, i) => {
          return (
            <Link href={`/docs/${content.slug}`} key={i}>
              <li
                style={{
                  paddingLeft: `${
                    (content.frontmatter.order.split(".").length - 1) * 1 + 0.5
                  }rem`,
                }}
                className={` px-2 max-w-md break-all rounded ${
                  slug === content.slug
                    ? "hover:bg-highlight-lighter bg-highlight text-white"
                    : " hover:bg-lightgray "
                }`}
              >
                {content.frontmatter.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
}
