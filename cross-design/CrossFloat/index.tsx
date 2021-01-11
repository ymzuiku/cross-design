import React, { useState, ReactNode, useRef, useEffect } from "react";
import bem from "./bem";
import appendToDOM from "cross-design/appendToDOM";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export type CrossFlexClassName =
  | "cr-start-center"
  | "cr-start-start"
  | "cr-start-end"
  | "cr-end-center"
  | "cr-end-start"
  | "cr-end-end"
  | "cr-center-center"
  | "cr-center-start"
  | "cr-center-end";

export interface ICrossAlert
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const CrossFloatView: React.FC<ICrossAlert> = ({
  className,
  children,
  id,
  ...rest
}) => {
  useSSRLayoutEffect(bem.init, []);

  const [out, setOut] = useState("off");
  const ref = useRef({} as any);
  useEffect(() => {
    if (ref.current) {
      (ref as any).current.onclick = () => {
        if (setOut) {
          setOut("on");
          setTimeout(() => {
            if (id) {
              const ele = document.getElementById(id);
              if (ele) {
                ele.remove();
              }
            }
          }, 200);
        }
      };
    }
  }, [ref.current]);

  return (
    <>
      <div
        ref={(r) => (ref.current = r)}
        cr-move-down={out}
        className={[bem`mask`, id, "cr-base"].join(" ")}
      ></div>
      <div
        cr-move-down={out}
        className={[className, bem`alert`].join(" ")}
        {...rest}
      >
        {children}
      </div>
    </>
  );
};

export interface CrossFloatOptions {
  querySelectorParent?: string;
  title?: string;
  children?: ReactNode;
  flex?: CrossFlexClassName;
  closeRef?: {
    close: Function;
  };
}

function CrossFloat({
  querySelectorParent,
  children,
  flex = "cr-center-center",
  closeRef,
}: CrossFloatOptions) {
  const [root, ele] = appendToDOM(
    (id) => <CrossFloatView id={id}>{children}</CrossFloatView>,
    { querySelectorParent }
  );
  const eleId = ele.id;

  ele.className = [bem`render`, flex].join(" ");

  const close = () => {
    const mask = document.body.querySelector("." + eleId) as any;
    if (mask) {
      mask.onclick();
    }
  };
  if (closeRef) {
    closeRef.close = close;
  }
  return close;
}

export default CrossFloat;
