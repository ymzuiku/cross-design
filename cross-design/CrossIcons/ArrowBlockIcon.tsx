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

const ArrowBlockIcon: React.FC<ArrowIconProps> = ({
  color = 'rgb(var(--cr-primary-color))',
  svg,
  ...rest
}) => {
  return (
    <CrossIconsvg
      svg={
        svg ||
        `<svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: ${color};overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2391"><path d="M130.65572488 321.32786154L512 702.67213845 893.34427512 321.32786154Z" p-id="2392"></path></svg>`
      }
      {...rest}
    />
  );
};

export default ArrowBlockIcon;
