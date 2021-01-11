import React, { useEffect } from "react";
import bem from "./bem";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  disabled?: boolean;
  userSelect?: boolean;
}

const CrossButton: React.FC<CrossButtonProps> = ({
  children,
  disabled,
  userSelect,
  className,
  ...rest
}) => {
  useSSRLayoutEffect(bem.init, []);
  
  return (
    <div
      className={[
        className,
        bem`button`,
        disabled && bem`button-disable`,
        !userSelect && "cr-user-select-none",
      ].join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CrossButton;
