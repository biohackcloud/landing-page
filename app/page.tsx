import Image from "next/image";
import imgMain from "../public/img/img_main.png";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

async function getFrontData() {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "content", "front")
  );

  const results = [];

  for (const filename of filenames) {
    const filePath = path.join(
      process.cwd(),

      "content",
      "front",
      filename
    );
    const fileContents = await fs.readFile(filePath, "utf-8");
    const frontMatter = matter(fileContents);

    results.push({
      title: frontMatter.data.title,
      content: frontMatter.content,
      icon: frontMatter.data.icon,
    });
  }

  return results;
}

export default async function Home() {
  const data = await getFrontData();

  return (
    <main>
      <div
        id="kv"
        className=" flex md:flex-row flex-col-reverse justify-center items-center my-0 mx-[2em]"
      >
        <h1 className=" text-[2em] md:text-h1 my-auto md:mr-[1em] font-bold">
          Computing that <br /> powers{" "}
          <span className=" text-highlight">collaboration</span>
        </h1>
        <Image
          src={imgMain}
          alt="main_image"
          className=" md:max-w-[20em] max-w-[15em]"
        />
      </div>
      <ul className=" flex my-[1em] mx-auto max-w-[800px] flex-col md:flex-row">
        {data.map((item, index) => {
          return (
            <li
              key={index}
              className=" py-0 px-[1.5em] md:border-r-gray md:border-r-[1px] md:last:border-r-0 "
            >
              <Image
                src={`/img/${item.icon}`}
                alt={item.title}
                width={100}
                height={100}
                className=" mx-auto my-0"
              />
              <div>
                <div className="title">
                  <h4 className=" text-h4 break-words font-bold text-center">
                    {item.title}
                  </h4>
                </div>
                <p className=" text-main font-light">{item.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
