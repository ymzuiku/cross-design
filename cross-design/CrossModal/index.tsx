import React, { ReactNode, useEffect } from "react";
import bem from "./bem";
import CrossFloat from "cross-design/CrossFloat";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossModalOptions {
  querySelectorParent?: string;
  subHeader?: ReactNode;
  title?: ReactNode;
  info: ReactNode;
  buttons?: ReactNode[];
  buttonAutoClose?: boolean;
  cancelLabel?: string;
}

function CrossModal({
  querySelectorParent,
  title,
  subHeader,
  info,
  buttons,
  buttonAutoClose = true,
  cancelLabel = "Cancel",
}: CrossModalOptions) {
  function handleAutoClose() {
    if (buttonAutoClose) {
      close();
    }
  }
  const Modal = () => {
    useSSRLayoutEffect(bem.init, []);

    return (
      <div className={[bem`box`].join(" ")}>
        {title && <div className={bem`title`}>{title}</div>}
        {subHeader && <div className={bem`title`}>{subHeader}</div>}
        <div className={[bem`info`, "cr-line-bottom"].join(" ")}>{info}</div>
        {buttons &&
          buttons.map((v, i) => (
            <div
              onClick={handleAutoClose}
              key={i}
              className={[bem`button`, "cr-line-bottom"].join(" ")}
            >
              {v}
            </div>
          ))}
        <div className={[bem`button`].join(" ")} onClick={() => close()}>
          {cancelLabel}
        </div>
      </div>
    );
  };
  const close = CrossFloat({ querySelectorParent, children: <Modal /> });
}

export default CrossModal;
