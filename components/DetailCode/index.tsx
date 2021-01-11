import React, { ReactNode } from "react";
import css from "./index.module.css";
import CrossDetails, { CrossDetailsProps } from "cross-design/CrossDetails";

export interface CrossDetailsCellProps extends CrossDetailsProps {}

const DetailsCode: React.FC<CrossDetailsCellProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <CrossDetails
      className={[className, css.box].join(" ")}
      renderSummary={(show) => {
        return (
          <button className="cr-button cr-width-100" style={{} as any}>
            {!show ? "显示Code" : "隐藏Code"}
          </button>
        );
      }}
      {...rest}
    >
      <code className="cr-code cr-margin-top-3">{children}</code>
    </CrossDetails>
  );
};

export default DetailsCode;
