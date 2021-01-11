import React, { useEffect } from "react";
import bem from "./bem";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossIconfontProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size?: string;
  type?: "font" | "svg";
  icon: string;
  iconfontClass?: string;
}

const CrossIconfont: React.FC<CrossIconfontProps> = ({
  type = "svg",
  size = "24px",
  className,
  children,
  iconfontClass = "iconfont",
  icon,
  color,
  style,
  ...rest
}) => {
  useSSRLayoutEffect(bem.init, []);

  if (type === "svg") {
    return (
      <svg
        className={[iconfontClass, className].join(" ")}
        style={{ width: size, height: size, fill: color, ...style }}
        aria-hidden="true"
      >
        <use xlinkHref={`#${icon}`}></use>
      </svg>
    );
  }

  return (
    <i
      className={[bem`box`, className, iconfontClass, icon].join(" ")}
      style={{ "--cr-icon-size": size, ...style } as any}
      {...rest}
    ></i>
  );
};

export default CrossIconfont;
