import React, { useEffect } from "react";
import bem from "./bem";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossBadgeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label?: string | number;
  color?: string;
  badgeProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
}

const CrossBadge: React.FC<CrossBadgeProps> = ({
  className,
  children,
  label,
  color = "rgb(var(--cr-error-color))",
  badgeProps,
  ...rest
}) => {
  const { className: bcss, style: bstyle, ...restBadge } = badgeProps || {};

  useSSRLayoutEffect(bem.init, []);

  return (
    <span className={[className, bem`box`].join(" ")} {...rest}>
      <span
        style={{ background: color, ...bstyle }}
        className={[label ? bem`label` : bem`badge`, bcss].join(" ")}
        {...restBadge}
      >
        {label || ""}
      </span>
      {children}
    </span>
  );
};

export default CrossBadge;
