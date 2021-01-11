import React from "react";
import bem from "./bem";
import CrossMenuData, { OnMenuChangeParams } from "./data.interface";
import CrossMenuCell from "./cell";

import ArrowIcon from "cross-design/CrossIcons/ArrowIcon";

export interface ICrossMenuItem
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  index: number;
  onPick?: (params: OnMenuChangeParams) => any;
  data: CrossMenuData;
  open?: boolean;
}

const CrossMenuItem: React.FC<ICrossMenuItem> = ({
  index,
  data,
  className,
  children,
  onPick,
  open,
  ...rest
}) => {
  return (
    <div
      cr-menu-open={data.open ? "on" : "off"}
      onClick={(e) => {
        e.stopPropagation();
        if (onPick) {
          onPick({
            data: data,
            index: index,
          });
        }
      }}
      className={[className, bem`box`].join(" ")}
      {...rest}
    >
      <div
        cr-menu-open={data.open ? "on" : "off"}
        className={[bem`item`].join(" ")}
      >
        {data.left}
        {data.title}
        <div className="cr-flex"></div>
        {data.right || data.children ? (
          <ArrowIcon
            cr-menu-open={data.open ? "on" : "off"}
            className={bem`arrow`}
            color="rgb(var(--cr-light-color))"
          />
        ) : (
          false
        )}
      </div>
      <div cr-menu-open={data.open ? "on" : "off"} className={bem`openBox`}>
        {data.children?.map((v, i) => {
          if (v.children) {
            return (
              <CrossMenuItem
                key={i}
                open={true}
                onPick={onPick}
                index={i}
                data={v}
              ></CrossMenuItem>
            );
          }
          return (
            <CrossMenuCell
              key={i}
              open={true}
              onPick={onPick}
              itemData={data}
              itemIndex={index}
              index={i}
              data={v}
            ></CrossMenuCell>
          );
        })}
      </div>
    </div>
  );
};

export default CrossMenuItem;
