import React, { useState, ReactNode } from "react";
import bem from "./bem";

export interface CrossDetailsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  renderSummary?: (show: boolean) => ReactNode;
  maxHeight?: number;
  useArrow?: boolean;
}

const CrossDetails: React.FC<CrossDetailsProps> = ({
  className,
  children,
  renderSummary,
  maxHeight = 1000,
  useArrow,
  onClick,
  ...rest
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className={[className, bem`summary`].join(" ")}
        onClick={(e: any) => {
          onClick && onClick(e);
          setShow(!show);
        }}
        {...rest}
      >
        {renderSummary ? renderSummary(show) : "Need RenderSummary"}
      </div>
      <div
        style={{
          maxHeight: show ? maxHeight : 0,
          display: show ? undefined : "none",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default CrossDetails;
