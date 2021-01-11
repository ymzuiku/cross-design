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

const CrossLogoIcon: React.FC<ArrowIconProps> = ({
  color = 'rgb(var(--cr-primary-color, "0,0,0"))',
  svg,
  ...rest
}) => {
  return (
    <CrossIconsvg
      svg={
        svg ||
        `<svg width="1em" height="1em" viewBox="0 0 3033 1790" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Frame 1">
        <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M2279 0H1575V128.836C1838.31 283.903 2015 570.317 2015 898C2015 1225.68 1838.31 1512.1 1575 1667.16V1790H2279V0Z" fill="${color}"/>
        <path id="Subtract_2" fill-rule="evenodd" clip-rule="evenodd" d="M1344 128.836C1211.45 50.7756 1056.95 6 892 6C399.362 6 0 405.362 0 898C0 1390.64 399.362 1790 892 1790C1056.95 1790 1211.45 1745.22 1344 1667.16V128.836Z" fill="${color}"/>
        <circle id="Ellipse 3" cx="2749" cy="284" r="284" fill="${color}"/>
        </g>
        </svg>
        `
      }
      {...rest}
    />
  );
};

export default CrossLogoIcon;
