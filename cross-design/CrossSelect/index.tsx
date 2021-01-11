import React, { useState } from "react";
import bem from "./bem";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";
import useIsDesktop from "cross-design/useIsDesktop";
import { CrossSelectProps } from "./props.type";
import CrossSelectDesktop from "./desktop";
import CrossSelectMobile from "./mobile";

const CrossSelect: React.FC<CrossSelectProps> = ({
  os,
  value,
  data,
  ...rest
}) => {
  const [nowValue, setNowValue] = useState(value || data[0]);
  const isDesktop = useIsDesktop(os);

  useSSRLayoutEffect(bem.init, []);
  return isDesktop ? (
    <CrossSelectDesktop
      value={value || nowValue}
      onChange={setNowValue}
      data={data}
      {...rest}
    />
  ) : (
    <CrossSelectMobile
      value={value || nowValue}
      onChange={setNowValue}
      data={data}
      {...rest}
    />
  );
};

export default CrossSelect;
