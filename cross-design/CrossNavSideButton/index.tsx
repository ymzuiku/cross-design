import React, { useCallback } from "react";
import CrossButton from "cross-design/CrossButton";
import useCrossOb from "cross-design";
import MenuIcon from "cross-design/CrossIcons/MenuIcon";

export interface CrossNavSideButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  svg?: string;
}

const CrossNavSideButton: React.FC<CrossNavSideButtonProps> = ({
  svg,
  ...rest
}) => {
  const openSide = useCallback(() => {
    useCrossOb.fn.changeShowMenu();
  }, []);

  return (
    <CrossButton onClick={openSide} {...rest}>
      <MenuIcon svg={svg} />
    </CrossButton>
  );
};

export default CrossNavSideButton;
