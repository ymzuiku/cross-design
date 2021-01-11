import React, { useState, useCallback, useEffect } from "react";
import bem from "./bem";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";
import ArrowBlockIcon from "cross-design/CrossIcons/ArrowBlockIcon";
import { CrossSelectProps, CrossSelectItem } from "./props.type";
import useScrollbar from "cross-design/useScrollbar";

const CrossSelectDesktop: React.FC<CrossSelectProps> = ({
  className,
  children,
  onChange,
  autoClose = true,
  value,
  data,
  ...rest
}) => {
  useSSRLayoutEffect(bem.init, []);
  const [nowValue, setNowValue] = useState(value || data[0]);
  const [show, setShow] = useState(false);
  const scrollbar = useScrollbar(true);

  useEffect(() => {
    const close = () => {
      setShow(false);
    };
    window.addEventListener("click", close);
    return () => {
      window.removeEventListener("click", close);
    };
  }, []);

  const handleSelect = useCallback(
    (e: any, item) => {
      setNowValue(item);
      if (autoClose) {
        setShow(false);
      }
      onChange && onChange(item);
      e.stopPropagation();
    },
    [autoClose]
  );

  const renderLi = useCallback(
    (item: CrossSelectItem) => {
      return (
        <li
          className={[
            bem`li`,
            "cr-line-bottom",
            nowValue.value === item.value && bem`li-selected`,
          ].join(" ")}
          key={item.value}
          onClick={(e) => handleSelect(e, item)}
        >
          {item.label}
        </li>
      );
    },
    [nowValue.value]
  );

  return (
    <div
      className={[className, bem`box`, show && bem`box-show`].join(" ")}
      {...rest}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setShow(true);
      }}
    >
      <div className={bem`value`}>
        <span>{nowValue.label}</span>
        <ArrowBlockIcon
          className={[bem`arrow`, show && bem`arrow-show`].join(" ")}
        />
      </div>
      <ul
        className={[bem`ul`, scrollbar.className, show && bem`ul-show`].join(
          " "
        )}
      >
        {data.map((v) => {
          return renderLi(v);
        })}
      </ul>
    </div>
  );
};

export default CrossSelectDesktop;
