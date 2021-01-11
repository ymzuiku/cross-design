import css from "./index.module.css";
import React from "react";
import CrossSide from "cross-design/CrossSide";
import useMenuOb from "./data";
import CrossMenu from "cross-design/CrossMenu";
import CrossLogoIcon from "cross-design/CrossIcons/CrossLogoIcon";
import Router from "next/router";
import useCrossOb from "cross-design";

export interface IMenu
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  nowUrl?: string;
}

const menu: React.FC<IMenu> = ({ nowUrl, className, children, ...rest }) => {
  const { data } = useMenuOb();

  return (
    <CrossSide className={css.box}>
      <div className="cr-row  cr-center-center cr-padding-3">
        <CrossLogoIcon color="#888" style={{ fontSize: 40 }} />
      </div>
      <CrossMenu
        nowUrl={nowUrl}
        onPick={({ data }) => {
          useMenuOb.next();
          if (data.url) {
            Router.push(data.url);
          }
        }}
        data={data}
      ></CrossMenu>
    </CrossSide>
  );
};

export default menu;
