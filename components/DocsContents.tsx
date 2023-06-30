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

  const contentsByCategory = contents.reduce((acc, content) => {
    const category = content.frontmatter.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(content);
    return acc;
  }, {} as Record<string, DocsTableOfContents[]>);
  const categories = Object.keys(contentsByCategory);
  // sort inside categories according to order
  categories.forEach((category) => {
    const contents = contentsByCategory[category];
    contents.sort((a, b) => {
      if (a.frontmatter.order > b.frontmatter.order) {
        return 1;
      } else if (a.frontmatter.order < b.frontmatter.order) {
        return -1;
      } else {
        return 0;
      }
    });
  });

  categories.sort((a, b) => {
    if (a === "undefined") {
      return -1;
    } else if (b === "undefined") {
      return 1;
    } else {
      if (
        contentsByCategory[a][0].frontmatter.order >
        contentsByCategory[b][0].frontmatter.order
      ) {
        return 1;
      } else if (
        contentsByCategory[a][0].frontmatter.order <
        contentsByCategory[b][0].frontmatter.order
      ) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  return (
    <aside className=" flex flex-col w-56 max-w-sm text-highlight rounded">
      <ul>
        {categories.map((category, i) => {
          return (
            <li key={category}>
              {category !== "undefined" && (
                <h3 className="  font-bold px-2"> {category}</h3>
              )}

              <ul>
                {contentsByCategory[category].map((content, i) => {
                  return (
                    <Link href={`/docs/${content.slug}`} key={i}>
                      <li
                        style={{
                          paddingLeft: `${
                            (content.frontmatter.order.split(".").length - 1) *
                              1 +
                            0.5
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
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
