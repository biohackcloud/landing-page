import Image from "next/image";
import imgMain from "../public/img/img_main.png";
import imgPoint1 from "../public/img/point_1.png";
import imgPoint2 from "../public/img/point_2.png";
import imgPoint3 from "../public/img/point_3.png";

export default function Home() {
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
        <li className=" py-0 px-[1.5em] md:border-r-gray md:border-r-[1px] md:last:border-r-0 ">
          <Image
            src={imgPoint1}
            alt="Standardized_Cloud"
            width={100}
            className=" mx-auto my-0"
          />
          <div>
            <div className="title">
              <h4 className=" text-h4 break-words font-bold text-center">
                Standardized Cloud
              </h4>
            </div>
            <p>
              Standardized Cloud refers to a standardized cloud environment
              designed for researchers and developers in the field of
              bioinformatics. This environment resolves compatibility issues
              arising from different hardware and software versions, eliminating
              the need for researchers to set up their own computing resources.
              By providing a common infrastructure, Standardized Cloud enhances
              the efficiency and reproducibility of bioinformatics projects.
            </p>
          </div>
        </li>
        <li className=" py-0 px-[1.5em] md:border-r-gray md:border-r-[1px] md:last:border-r-0">
          <Image
            src={imgPoint2}
            alt="For_Bioinformatics"
            width={100}
            className=" mx-auto"
          />
          <div>
            <div className="title">
              <h4 className=" text-h4 break-words font-bold text-center">
                For Bioinformatics
              </h4>
            </div>
            <p>
              For Bioinformatics refers to platforms and tools specifically
              tailored to research and analysis in the field of bioinformatics.
              In this project, resources and functionalities necessary for
              processing, analyzing, and visualizing bioinformatics-related data
              are provided. For Bioinformatics facilitates advanced analysis for
              biologists and data scientists, enabling them to answer various
              biological questions such as genome assembly and interpretation of
              gene expression data.
            </p>
          </div>
        </li>
        <li className=" py-0 px-[1.5em] md:border-r-gray md:border-r-[1px] md:last:border-r-0">
          <Image
            src={imgPoint3}
            alt="For_Hackathon"
            width={100}
            className=" mx-auto"
          />
          <div>
            <div className="title">
              <h4 className=" text-h4 break-words font-bold text-center">
                {" "}
                For Hackathon
              </h4>
            </div>
            <p>
              For Hackathon refers to an environment and tools designed
              specifically for hackathon events. In BioHackCloud, researchers
              and developers participating in bioinformatics hackathons are
              provided with resources that enable them to efficiently advance
              their projects. This includes datasets available during the
              hackathon, collaboration tools, computing resources, and testing
              environments. For Hackathon fosters innovation and collaboration,
              serving as a platform to generate new discoveries and achievements
              in the field of bioinformatics.
            </p>
          </div>
        </li>
      </ul>
    </main>
  );
}
