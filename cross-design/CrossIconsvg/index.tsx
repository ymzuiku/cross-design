import React, { useEffect } from "react";
import bem from "./bem";
import CrossSvg from "cross-design/CrossSvg";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossIconsvgProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  svg: string;
}

const CrossIconsvg: React.FC<CrossIconsvgProps> = ({
  className,
  children,
  svg,
  ...rest
}) => {
  useSSRLayoutEffect(bem.init, []);

  return (
    <i className={[bem`icon`, className].join(" ")} {...rest}>
      <CrossSvg svg={svg} />
    </i>
  );
};

export default CrossIconsvg;
