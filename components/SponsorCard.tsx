import Link from "next/link";

export default function Card({
  icon,
  title,
  url,
}: {
  icon: string;
  title: string;
  url: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <img src={`/img/${icon}`} alt={title} className="w-52 block" />
      <Link className="block" href={url}>
        <span className="text-center">{title}</span>
      </Link>
    </div>
  );
}
