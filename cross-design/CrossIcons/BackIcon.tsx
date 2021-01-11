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

const BackIcon: React.FC<IconProps> = ({
  color = 'rgb(var(--cr-primary-color, "0,0,0"))',
  svg,
  ...rest
}) => {
  return (
    <CrossIconsvg
      svg={
        svg ||
        `<svg class="icon" style="width: 1.2em; height: 1.2em;vertical-align: middle;fill: ${color};overflow: hidden;" viewBox="0 0 1083 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3026"><path d="M254.555203 512L642.784245 117.480071l-117.088772-117.449971L15.11017 512l510.585303 511.9699 117.088772-117.449971z" p-id="3027"></path></svg>`
      }
      {...rest}
    />
  );
};

export default BackIcon;
