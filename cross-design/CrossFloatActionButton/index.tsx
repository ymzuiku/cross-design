import React, { useEffect } from "react";
import bem from "./bem";
import MenuIcon from "cross-design/CrossIcons/MenuIcon";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossFloatActionButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  haveFooter?: boolean;
  hidden?: boolean;
  svg?: string;
}

const CrossFloatActionButton: React.FC<CrossFloatActionButtonProps> = ({
  className,
  children,
  haveFooter,
  style,
  hidden,
  svg,
  ...rest
}) => {
  let sty = { ...style } as any;
  if (!haveFooter) {
    sty["--cr-footer-height"] = "0px";
  }

  useSSRLayoutEffect(bem.init, []);
  return (
    <div
      className={[className, bem`box`, hidden && bem`hidden`].join(" ")}
      {...rest}
      style={sty}
    >
      <MenuIcon color="#fff" svg={svg} />
    </div>
  );
};

export default CrossFloatActionButton;
