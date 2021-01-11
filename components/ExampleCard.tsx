import React, { ReactNode } from "react";
import DetailsCode from "./DetailCode";

export interface ExampleCardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  head?: ReactNode;
  info?: ReactNode;
  code?: ReactNode;
}

const ExampleCard: React.FC<ExampleCardProps> = ({
  head,
  info,
  code,
  children,
  ...rest
}) => {
  return (
    <section className="cr-section cr-min-width-500px cr-padding-3" {...rest}>
      {head && <h2 className="cr-margin-bottom-3">{head}</h2>}
      {info && <p className="cr-margin-bottom-3">{info}</p>}
      {children}
      <DetailsCode className="cr-margin-top-2">{code}</DetailsCode>
    </section>
  );
};

export default ExampleCard;
