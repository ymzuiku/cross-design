import React, { ReactNode, useEffect } from "react";
import bem from "./bem";
import CrossFloat from "cross-design/CrossFloat";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossAlertOptions {
  querySelectorParent?: string;
  subHeader?: ReactNode;
  title?: ReactNode;
  info?: ReactNode;
  buttons?: { label: ReactNode; onClick?: Function }[];
  buttonAutoClose?: boolean;
  cancelLabel?: string;
}

function CrossAlert({
  querySelectorParent,
  title,
  subHeader,
  info,
  buttons,
  buttonAutoClose = true,
  cancelLabel = "Cancel",
}: CrossAlertOptions) {
  const Alert = () => {
    useSSRLayoutEffect(bem.init, []);
    return (
      <div className={["cross-alert-box", "cr"].join(" ")}>
        {title && <div className={"cross-alert-title"}>{title}</div>}
        {subHeader && <div className={"cross-alert-title"}>{subHeader}</div>}
        <div className={["cross-alert-info", "cr-line-bottom"].join(" ")}>
          {info}
        </div>
        {buttons &&
          buttons.map((v, i) => (
            <div
              onClick={() => {
                if (v.onClick) {
                  v.onClick(i);
                }
                if (buttonAutoClose) {
                  close();
                }
              }}
              key={i}
              className={["cross-alert-button", "cr-line-bottom"].join(" ")}
            >
              {v.label}
            </div>
          ))}
        <div
          className={["cross-alert-button", "cross-alert-cancel"].join(" ")}
          onClick={() => close()}
        >
          {cancelLabel}
        </div>
      </div>
    );
  };
  const close = CrossFloat({ querySelectorParent, children: <Alert /> });
}

export default CrossAlert;
