import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder29: "rounded-[29px]",
  CircleBorder15: "rounded-[15px]",
  CircleBorder19: "rounded-[19px]",
  icbRoundedBorder24: "rounded-[24px]",
  icbCircleBorder19: "rounded-[19px]",
};
const variants = {
  FillTealA400: "bg-teal_A400 text-black_900",
  OutlineWhiteA700:
    "bg-white_A700 border border-solid border-white_A700 text-black_900",
  FillWhiteA700: "bg-white_A700 text-black_900",
  OutlineBlack9000c: "bg-white_A700 shadow-bs text-black_900",
  OutlineWhiteA700_1: "border border-solid border-white_A700 text-white_A700",
  icbFillWhiteA700: "bg-white_A700",
  icbOutlineBlack9007e: "border border-black_900_7e border-solid",
  icbOutlineBlack900: "border border-black_900 border-solid",
};
const sizes = { sm: "p-[7px]", md: "p-3.5", lg: "p-[18px]", smIcn: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder29",
    "CircleBorder15",
    "CircleBorder19",
    "icbRoundedBorder24",
    "icbCircleBorder19",
  ]),
  variant: PropTypes.oneOf([
    "FillTealA400",
    "OutlineWhiteA700",
    "FillWhiteA700",
    "OutlineBlack9000c",
    "OutlineWhiteA700_1",
    "icbFillWhiteA700",
    "icbOutlineBlack9007e",
    "icbOutlineBlack900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
