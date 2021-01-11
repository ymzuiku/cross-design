import React, { useState, useCallback, useRef } from "react";
import bem from "./bem";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";
import ArrowBlockIcon from "cross-design/CrossIcons/ArrowBlockIcon";
import { CrossSelectProps } from "./props.type";

const CrossSelectMobile: React.FC<CrossSelectProps> = ({
  className,
  children,
  onChange,
  autoClose = true,
  value,
  data,
  ...rest
}) => {
  useSSRLayoutEffect(bem.init, []);
  const [nowValue, setNowValue] = useState(value);
  const ref = useRef({} as HTMLSelectElement);

  const handleSelect = useCallback(
    (e: any, item) => {
      setNowValue(item);
      onChange && onChange(item);
      e.stopPropagation();
    },
    [autoClose]
  );

  return (
    <div
      className={[className, bem`box`].join(" ")}
      {...rest}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        ref.current!.click();
        // setShow(true);
      }}
    >
      <select
        ref={(r) => (ref.current = r)}
        value={nowValue.label}
        className={[bem`select`].join(" ")}
        onChange={(e) => {
          const value = e.target.value;
          const nowItem = data.find((v) => v.value === value);
          handleSelect(e, nowItem);
        }}
      >
        {data.map((v) => {
          return (
            <option key={v.value + v.label} value={v.value}>
              {v.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CrossSelectMobile;
