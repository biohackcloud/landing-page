import {} from "react-icons/fa";

type CalloutProps = {
  children: any;
  title: string;
  type: "warning" | "info" | "success";
};

export default function Callout({ children, title, type }: CalloutProps) {
  let;
  return (
    <div className="m-4 flex flex-col bg-blue-300">
      <div className="text-3xl text-blue-500 font-semibold">{title}</div>
      <div>{children}</div>
    </div>
  );
}
