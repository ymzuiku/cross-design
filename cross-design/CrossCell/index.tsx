import React, { ReactNode, useEffect } from "react";
import bem from "./bem";
import CrossSvg from "cross-design/CrossSvg";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossCellProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  canTouch?: boolean;
  showArrow?: boolean;
  topLine?: boolean;
  bottomLine?: boolean;
  left?: ReactNode;
  right?: ReactNode;
}

const arrowSvg = `<svg class="icon" style="width: 0.8em; height: 0.8em;vertical-align: middle;fill:rgba(var(--cr-dark-color), 0.3);overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2339"><path d="M862.15130276 512l-477.53331436 477.53331439L273.23334283 878.14866885 639.38201159 512 273.23334283 145.85133115 384.6179884 34.46668561z" p-id="2340"></path></svg>`;

const CrossCell: React.FC<CrossCellProps> = ({
  className,
  children,
  canTouch,
  showArrow,
  topLine,
  bottomLine = true,
  left = <span />,
  right = <span />,
  ...rest
}) => {
  canTouch = showArrow ? true : canTouch;
  useSSRLayoutEffect(bem.init, []);

  return (
    <div
      className={[
        "cr",
        className,
        bem`box`,
        canTouch && bem`touch`,
        topLine && "cr-line-top",
        bottomLine && "cr-line-bottom",
      ].join(" ")}
      {...rest}
    >
      {left}
      <span className={[bem`title`, "cr-user-select-none"].join(" ")}>
        {children}
      </span>
      <span className="cr-flex" />
      {right}
      {showArrow && <CrossSvg className={bem`arrow`} svg={arrowSvg} />}
    </div>
  );
};

export default CrossCell;
