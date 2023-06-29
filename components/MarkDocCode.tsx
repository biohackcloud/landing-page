"use client";
import hljs from "highlight.js";
import { useEffect, useRef } from "react";
type Code = {
  children: any;
  language: string;
};

export default function Code({ children, language }: Code) {
  const preRef = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log(preRef.current);
    hljs.highlightElement(preRef.current as HTMLElement);
    const link = document.createElement("link");
    document.head.append(link);

    link.setAttribute("rel", "stylesheet");
    link.setAttribute(
      "href",
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-light.min.css"
    );
    link.setAttribute("data-togostanza-highlight-css", "");
  }, []);
  return <pre ref={preRef}>{children}</pre>;
}
