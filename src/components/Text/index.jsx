import React from "react";

const variantClasses = {
  h1: "font-medium md:text-5xl sm:text-[42px] text-[56px]",
  h2: "font-medium text-5xl sm:text-[38px] md:text-[44px]",
  h3: "font-medium text-4xl sm:text-[32px] md:text-[34px]",
  h4: "font-medium text-2xl md:text-[22px] sm:text-xl",
  h5: "text-lg",
  h6: "font-normal text-base",
  body1: "text-sm",
  body2: "text-xs",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
