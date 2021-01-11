import React, { useState, ReactNode, CSSProperties, useEffect } from "react";
import bem from "./bem";
import CrossSvg from "cross-design/CrossSvg";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossCheckboxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  value?: boolean;
  disabled?: boolean;
  onChange?: any;
  fullSvg?: string;
  emptySvg?: string;
  halfChildren?: ReactNode;
  iconStyle?: CSSProperties;
}

const full = `<svg width="1.3em" height="1.3em" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M810.667 128H213.333C166.4 128 128 166.4 128 213.333V810.667C128 857.6 166.4 896 213.333 896H810.667C857.6 896 896 857.6 896 810.667V213.333C896 166.4 857.6 128 810.667 128ZM426.667 725.333L213.333 512L273.067 452.267L426.667 605.867L750.933 281.6L810.667 341.333L426.667 725.333Z" fill="rgb(var(--cr-primary-color))"/>
</svg>
`;

const empty = `<svg width="1.3em" height="1.3em" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M213.333 148H810.667C846.554 148 876 177.446 876 213.333V810.667C876 846.554 846.554 876 810.667 876H213.333C177.446 876 148 846.554 148 810.667V213.333C148 177.446 177.446 148 213.333 148Z" stroke="rgb(var(--cr-primary-color))" stroke-width="48"/>
</svg>
`;

const CrossCheckbox: React.FC<CrossCheckboxProps> = ({
  className,
  children,
  disabled,
  value,
  onChange,
  halfChildren,
  iconStyle,
  fullSvg = full,
  emptySvg = empty,
  ...rest
}) => {
  const [on, setOn] = useState(value);
  const real = value === undefined ? on : value;
  useSSRLayoutEffect(bem.init, []);

  return (
    <span
      onClick={() => {
        if (disabled) {
          return;
        }
        setOn(!on);
        if (onChange) {
          onChange(!on);
        }
      }}
      className={[className, bem`box`, disabled && bem`disabled`].join(" ")}
      {...rest}
    >
      <CrossSvg
        cr-checkbox={real ? "on" : "off"}
        className={bem`full`}
        svg={fullSvg}
        style={iconStyle}
      />
      <CrossSvg
        cr-checkbox={real ? "on" : "off"}
        className={bem`empty`}
        svg={emptySvg}
        style={iconStyle}
      />
      {children && <span className={bem`child`}>{children}</span>}
    </span>
  );
};

export default CrossCheckbox;
