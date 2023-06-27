import Link from "next/link";

export default function Navbar() {
  return (
    <ul className=" flex justify-between p-0 text-lg gap-5 text-highlight">
      <li>
        <Link href={"/collaborate"}>Collaborate</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact us</Link>
      </li>
      <li>
        <Link href={"/docs"}>Docs</Link>
      </li>
    </ul>
  );
}
