import React, { useEffect } from "react";
import bem from "./bem";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossSideProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  slot?: string;
}

const CrossSide: React.FC<CrossSideProps> = ({
  children,
  className,
  ...rest
}) => {
  useSSRLayoutEffect(bem.init, []);
  return (
    <aside
      className={[bem`side`, "none-scrollbar", className].join(" ")}
      {...rest}
    >
      {children}
    </aside>
  );
};

export default CrossSide;
