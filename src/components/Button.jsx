import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  classname,
  ...props
}) {
  return (
    <button className={` ${classname} ${bg}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
