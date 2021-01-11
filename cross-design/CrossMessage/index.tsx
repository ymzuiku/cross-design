import React from "react";
import bem from "./bem";
import appendToDOM from "cross-design/appendToDOM";
import { useState, useEffect } from "react";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

const CrossMessageView: React.FC<{
  id: string;
  timeout: number;
  style: any;
  className?: string;
}> = ({ timeout, className, children, id, style }) => {
  const [out, setOut] = useState(false);

  function close() {
    setOut(true);
    setTimeout(() => {
      const ele = document.getElementById(id);
      if (ele) {
        ele.remove();
      }
    }, 250);
  }
  useSSRLayoutEffect(bem.init, []);

  useEffect(() => {
    setTimeout(close, timeout);
  }, []);

  return (
    <div className={[bem`box`, "cr"].join(" ")}>
      <div
        onClick={close}
        className={[bem`item`, className, out && bem`out`].join(" ")}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};

interface CrossMessageOptions {
  timeout?: number;
  style?: any;
  className?: string;
  message?: string;
}

const CrossMessage = ({
  message = "",
  timeout = 3800,
  style,
  className,
}: CrossMessageOptions = {}) => {
  appendToDOM((id) => (
    <CrossMessageView
      style={style}
      timeout={timeout}
      className={className}
      id={id}
    >
      {message}
    </CrossMessageView>
  ));
};

export default CrossMessage;
