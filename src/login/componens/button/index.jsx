import PropTypes from "prop-types";


const shapes = {
    round: "rounded-lg",
  };
  const variants = {
    fill: {
      green_A700: "bg-green-A700 text-white-A700",
    },
  };
  const sizes = {
    xs: "h-[44px] px-[35px] text-base",
  };
  
  const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "xs",
    color = "green_A700",
    ...restProps
  }) => {
    return (
      <button
        className={`${className} flex items-center justify-center text-center cursor-pointer text-white-A700 uppercase text-base font-medium bg-green-A700 rounded-lg ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["green_A700"]),
  };
  
  export { Button };
  