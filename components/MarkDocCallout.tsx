import {
  FaInfoCircle,
  FaThumbsUp,
  FaExclamationTriangle,
} from "react-icons/fa";

type CalloutProps = {
  children: any;
  title: string;
  type: "warning" | "info" | "success";
};

export default function Callout({ children, title, type }: CalloutProps) {
  let bgColor = "";
  let textColor = "";
  let borderColor = "";

  switch (type) {
    case "warning":
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-600";
      borderColor = "border-yellow-200";
      break;
    case "info":
      bgColor = "bg-blue-100";
      textColor = "text-blue-600";
      borderColor = "border-blue-200";
      break;
    case "success":
      bgColor = "bg-green-100";
      textColor = "text-green-600";
      borderColor = "border-green-200";
      break;
    default:
      break;
  }

  let Icon = FaInfoCircle;

  switch (type) {
    case "warning":
      Icon = FaExclamationTriangle;
      break;
    case "info":
      Icon = FaInfoCircle;
      break;
    case "success":
      Icon = FaThumbsUp;

      break;
    default:
      break;
  }
  return (
    <div
      className={`m-4 flex flex-col rounded px-4 py-2 ${bgColor} ${textColor}`}
    >
      <div className={`text-xl border-b-[1px] pb-1 ${borderColor}`}>
        <Icon className="inline mr-2 text-sm" />
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
}
