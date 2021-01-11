import React from "react";
import bem from "./bem";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface argv_2Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const argv_2: React.FC<argv_2Props> = ({ className, children, ...rest }) => {
  useSSRLayoutEffect(bem.init, []);

  return (
    <div className={[className, bem`box`].join(" ")} {...rest}>
      <div>argv_2</div>
      {children}
    </div>
  );
};

export default argv_2;
