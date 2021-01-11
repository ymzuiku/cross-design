import React, { useEffect } from "react";
import CrossButton from "cross-design/CrossButton";
import useCrossOb from "cross-design";
import BackIcon from "cross-design/CrossIcons/BackIcon";
import bem from "./bem";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossNavBackButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  svg?: string;
}

const CrossNavBackButton: React.FC<CrossNavBackButtonProps> = ({
  className,
  svg,
  children,
  ...rest
}) => {
  const pageAnimation = useCrossOb.get().pageAnimation;

  useSSRLayoutEffect(bem.init, []);

  return (
    <CrossButton
      onClick={() => {
        useCrossOb.fn.goback();
      }}
      className={[className, bem`button`, pageAnimation && "cr-page-push"].join(
        " "
      )}
      {...rest}
    >
      <BackIcon svg={svg} />
      <span className={[bem`title`, pageAnimation && "cr-page-push"].join(" ")}>
        {children || ""}
      </span>
    </CrossButton>
  );
};

export default CrossNavBackButton;
