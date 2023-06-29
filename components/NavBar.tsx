"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentRoute = usePathname();
  return (
    <ul className=" flex sm:flex-row text-xl flex-col justify-between p-0 sm:text-lg gap-5 text-highlight">
      <li>
        <Link
          href={"/about"}
          className={`${
            currentRoute === "/about"
              ? " text-white bg-highlight px-2 py-0 rounded"
              : "px-2 py-0"
          }`}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href={"/docs"}
          className={`${
            currentRoute === "/docs"
              ? " text-white bg-highlight px-2 py-0 rounded"
              : "px-2 py-0"
          }`}
        >
          Docs
        </Link>
      </li>
      <li>
        <Link
          href={"/collaborate"}
          className={`${
            currentRoute === "/collaborate"
              ? " text-white bg-highlight px-2 py-0 rounded"
              : "px-2 py-0"
          }`}
        >
          Collaborate
        </Link>
      </li>
      <li>
        <Link
          href={"/use-case"}
          className={`${
            currentRoute === "/use-case"
              ? " text-white bg-highlight px-2 py-0 rounded"
              : "px-2 py-0"
          }`}
        >
          Submit use case
        </Link>
      </li>
    </ul>
  );
}
