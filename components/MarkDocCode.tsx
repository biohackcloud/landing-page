import { Code } from "bright";

type CodeProps = {
  children: any;
  language: string;
};

export default function HighlightCode({ children, language }: CodeProps) {
  return (
    <Code lang={language} theme={"material-lighter"}>
      {children}
    </Code>
  );
}
