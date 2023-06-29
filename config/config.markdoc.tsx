import { Config } from "@markdoc/markdoc";
import Callout from "@/components/MarkDocCallout";
import Heading from "@/components/MarkDocHeading";
import Code from "@/components/MarkDocCode";

const config: Config = {
  nodes: {
    paragraph: {
      render: "Paragraph",
    },
    heading: {
      render: "Heading",
      attributes: {
        level: { type: String },
      },
    },
  },
  tags: {
    callout: {
      render: "Callout",
      attributes: {
        title: {
          type: String,
          default: "default title",
        },
      },
    },
    code: {
      render: "Code",
      attributes: {
        language: {
          type: String,
          default: "javascript",
        },
      },
    },
  },
};

const components = {
  Paragraph: ({ children }: any) => {
    return <div className="text-base pb-2">{children}</div>;
  },
  Heading,
  Callout,
  Code,
};

export { config, components };