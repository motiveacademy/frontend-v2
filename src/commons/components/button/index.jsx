"use client"

import Link from "next/link";

const OUTLINED_STYLING =
  "max-w-fit p-4 py-2 border border-primary-green rounded hover:bg-slate-300 hover:border-secondary-green hover:cursor-pointer";
const SOLID_STYLING =
  "max-w-fit px-4 py-2 text-white bg-primary-green border border-primary-green rounded hover:bg-secondary-green hover:border-secondary-green hover:cursor-pointer";

const DefaultButton = ({
  isLink,
  type = "default",
  color,
  onClick,
  href,
  children,
}) => {
  if (isLink) {
    return <Link href={href} className={`block ${getStyling(type)}`}>
      {children}
    </Link>
  } else {
    return (
      <button onClick={onClick} className={getStyling(type)}>
        {children}
      </button>
    );
  }
};

const getStyling = (type) => {
  switch (type) {
    case "outlined":
      return OUTLINED_STYLING;

    default:
      return SOLID_STYLING;
  }
};

export default DefaultButton;
