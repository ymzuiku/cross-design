import React from "react";
import CrossIconsvg from "cross-design/CrossIconsvg";

interface IconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  color?: string;
  svg?: string;
}

const MenuIcon: React.FC<IconProps> = ({
  color = 'rgb(var(--cr-primary-color, "0,0,0"))',
  svg,
  ...rest
}) => {
  return (
    <CrossIconsvg
      svg={
        svg ||
        `<svg class="icon" style="width: 1.166015625em; height: 1em;vertical-align: middle;fill: ${color};overflow: hidden;" viewBox="0 0 1194 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2309"><path d="M78.769231 67.516484h945.230769v135.032967H78.769231zM78.769231 405.098901h945.230769v135.032967H78.769231zM78.769231 742.681319h945.230769v135.032967H78.769231z"  p-id="2310"></path></svg>`
      }
      {...rest}
    />
  );
};

export default MenuIcon;
