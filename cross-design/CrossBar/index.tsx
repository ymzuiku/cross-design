import React, { useEffect } from "react";
import bem from "./bem";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossBarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  lineTop?: boolean;
  lineBottom?: boolean;
  safeBottom?: boolean;
}

const CrossBar: React.FC<CrossBarProps> = ({
  lineTop,
  lineBottom,
  className,
  children,
  safeBottom,
  ...rest
}) => {
  useSSRLayoutEffect(bem.init, []);
  return (
    <div
      className={[
        className,
        bem`box`,
        lineTop && "cr-line-top",
        lineBottom && "cr-line-bottom",
        safeBottom && bem`safe-bottom`,
      ].join(" ")}
      {...rest}
    >
      <div className={[bem`bar`].join("")}>{children}</div>
    </div>
  );
};

export default CrossBar;
