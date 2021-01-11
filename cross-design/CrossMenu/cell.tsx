import React from "react";
import bem from "./bem";
import CrossMenuData, { OnMenuChangeParams } from "./data.interface";

import ArrowIcon from "cross-design/CrossIcons/ArrowIcon";

export interface ICrossMenuCell
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  index: number;
  onPick?: (params: OnMenuChangeParams) => any;
  data: CrossMenuData;
  itemData?: CrossMenuData;
  itemIndex?: number;
  open?: boolean;
}

const CrossMenuCell: React.FC<ICrossMenuCell> = ({
  index,
  data,
  itemData,
  itemIndex,
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
            isCell: true,
            parentData: itemData,
            parentIndex: itemIndex,
            data: data,
            index: index,
          });
        }
      }}
      className={[className, bem`cellBox`].join(" ")}
      {...rest}
    >
      <div
        cr-menu-select={data.select ? "on" : "off"}
        className={[bem`cell`].join(" ")}
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
    </div>
  );
};

export default CrossMenuCell;
