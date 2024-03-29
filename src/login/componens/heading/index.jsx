import React from "react";

const sizes = {
  s: "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  xs: "text-2xl font-bold md:text-[22px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue-900 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
