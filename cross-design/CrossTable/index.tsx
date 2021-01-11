import React, { ReactNode, CSSProperties, useState, useRef } from "react";
import bem from "./bem";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";
import useResize from "cross-design/useResize";
import useScrollbar from "cross-design/useScrollbar";
import CrossCheckbox from "cross-design/CrossCheckbox";

export interface CrossTableItem {
  value: string;
  label: ReactNode;
  style?: CSSProperties;
  width?: number;
  stickyLeft?: boolean;
  stickyRight?: boolean;
  className?: string;
  [key: string]: any;
}

export interface CrossTableProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  height?: string;
  data?: { [key: string]: ReactNode; $$checked?: boolean }[];
  columns: CrossTableItem[];
  onChangeSelect?: Function;
  showCheckbox?: boolean;
  showIndex?: boolean;
  indexLabel?: string;
}

const CrossTable: React.FC<CrossTableProps> = ({
  className,
  children,
  columns,
  data,
  showCheckbox,
  showIndex,
  onChangeSelect,
  indexLabel = "Index",
  height = "100%",
  ...rest
}) => {
  useSSRLayoutEffect(bem.init, []);
  const scrollbar = useScrollbar();
  const [changed, updateChanged] = useState(1);
  const [box, wh] = useResize();
  const isHaveData = data && data.length > 0;
  let isHaveUnChecked = useRef<boolean>(false);
  const nowCols = [...columns];
  if (showCheckbox) {
    nowCols.unshift({
      value: "$$checkbox",
      width: 50,
      label: (
        <CrossCheckbox
          className={bem`checkbox`}
          value={isHaveUnChecked.current}
          onChange={() => {
            isHaveUnChecked.current = !!data.find((item) => !item.$$checked);
            data.forEach((item) => {
              item.$$checked = isHaveUnChecked.current;
            });
            updateChanged(changed + 1);
            onChangeSelect && onChangeSelect();
          }}
        />
      ),
    });
  }
  if (showIndex) {
    nowCols.unshift({
      value: "$$index",
      label: indexLabel,
      width: 50,
      style: {
        textAlign: "center",
      },
    });
  }
  data = data.map((item, i) => {
    if (showCheckbox) {
      if (item.$$checked === undefined) {
        item.$$checked = false;
      }
    }
    if (showIndex) {
      item["$$index"] = i + 1;
    }
    return item;
  });

  let colW = 0;

  return (
    <div
      ref={(r) => (box.current = r)}
      className={[className, bem`box`].join(" ")}
      {...rest}
    >
      <table
        className={[bem`table`, scrollbar.className].join(" ")}
        style={{ width: wh.w, height }}
        onMouseEnter={scrollbar.onMouseEnter}
        onMouseLeave={scrollbar.onMouseLeave}
      >
        <thead className={bem`thead`}>
          <tr className={bem`thead-tr`}>
            {nowCols.map((col, i) => {
              if (col.width) {
                colW += col.width;
              }
              const isStickyLeft =
                col.stickyLeft ||
                col.value === "$$index" ||
                col.value === "$$checkbox";
              return (
                <th
                  key={col.value}
                  cr-table-sticky-left={isStickyLeft ? "on" : "off"}
                  cr-table-index={col.value === "$$index"}
                  className={[bem`th`, col.className].join(" ")}
                  style={{
                    width: col.width,
                    minWidth: col.width,
                    ...col.style,
                    left: colW - (col.width || 0),
                  }}
                >
                  {col.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={bem`tbody`}>
          {isHaveData &&
            data.map((item, cellIndex) => {
              let w = 0;
              return (
                <tr key={cellIndex} className={bem`tbody-tr`}>
                  {nowCols.map((col, i) => {
                    if (col.width) {
                      w += col.width;
                    }
                    const isStickyLeft =
                      col.stickyLeft ||
                      col.value === "$$index" ||
                      col.value === "$$checkbox";

                    return (
                      <td
                        key={col.value}
                        cr-table-sticky-left={isStickyLeft ? "on" : "off"}
                        cr-table-index={col.value === "$$index"}
                        className={[bem`td`, col.className].join(" ")}
                        style={{
                          width: col.width,
                          minWidth: col.width,
                          ...col.style,
                          left: w - (col.width || 0),
                        }}
                      >
                        {col.value !== "$$checkbox" ? (
                          item[col.value]
                        ) : (
                          <CrossCheckbox
                            value={item.$$checked}
                            className={bem`checkbox`}
                            onChange={() => {
                              item.$$checked = !item.$$checked;
                              updateChanged(changed + 1);
                              onChangeSelect && onChangeSelect(item);
                            }}
                          />
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CrossTable;
