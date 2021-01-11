import React from "react";

export interface CrossContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const CrossContent: React.FC<CrossContentProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <article className={[className, "cr-content"].join(" ")}>
      {children}
    </article>
  );
};

export default CrossContent;
