import React, { useEffect, useRef } from "react";

export interface CrossMarkdownRenderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  seo?: boolean;
  getMoc?: boolean;
}

const CrossMarkdownRender: React.FC<CrossMarkdownRenderProps> = ({
  className,
  children,
  getMoc,
  seo,
  ...rest
}) => {
  const ref = useRef({} as any);

  useEffect(() => {
    import("./markdown").then((v) => {
      const Markdown = v.default;
      if (typeof children === "string" && ref.current) {
        const ele = Markdown(children as any, getMoc);
        ele.style.padding = "0px";
        ele.style.background = "rgb(var(--cr-light-color))";
        ref.current.innerHTML = "";
        ref.current.append(ele);
        // setRendered(true);
      }
    });
  }, [children]);

  return (
    <>
      {seo && <div style={{ display: "none" }}>{children}</div>}
      <div ref={(r) => (ref.current = r)} className={className} {...rest}></div>
    </>
  );
};

export default CrossMarkdownRender;
