import { readdir, readFile } from "fs/promises";
import path from "path";
import graymatter from "gray-matter";
import SponsorCard from "@/components/SponsorCard";

async function getSponsors() {
  const docsDir = path.join(process.cwd(), "content", "sponsors");
  const docs = await readdir(docsDir);

  const docsTableOfContents = await Promise.all(
    docs.map(async (doc) => {
      const docContent = await readFile(
        path.join(process.cwd(), "content", "sponsors", doc),
        "utf-8"
      );

      const { data } = graymatter(docContent);

      return {
        frontmatter: data,
      } as {
        frontmatter: {
          title: string;
          icon: string;
          url: string;
        };
      };
    })
  );

  return docsTableOfContents;
}

export default async function Page() {
  const sponsors = await getSponsors();

  return (
    <section className="markdown">
      <h2>
        We would like to thank our sponsors for providing compute and data
        resources!
      </h2>
      <div className=" flex md:flex-row flex-col gap-4 px-10 mx-auto my-0 justify-center md:flex-wrap ">
        {sponsors.map((sponsor, i) => (
          <SponsorCard key={i} {...sponsor.frontmatter} />
        ))}
      </div>
    </section>
  );
}

// TODO: Format thank you message
// TODO: Arrange icons and titles of sponsors in a grid
