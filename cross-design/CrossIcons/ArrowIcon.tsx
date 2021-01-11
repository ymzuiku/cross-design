import React from "react";
import CrossIconsvg from "cross-design/CrossIconsvg";

interface ArrowIconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  color?: string;
  svg?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  color = 'rgb(var(--cr-primary-color, "0,0,0"))',
  svg,
  ...rest
}) => {
  return (
    <CrossIconsvg
      svg={
        svg ||
        `<svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: ${color};overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4402"><path d="M512 745.81375209l-377.06160075-377.06160074L222.88801761 280.80253298 512 569.91451532 801.11198239 280.80253298 889.06160075 368.75215135z" p-id="4403"></path></svg>`
      }
      {...rest}
    />
  );
};

export default ArrowIcon;
