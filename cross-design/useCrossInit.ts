import useCrossOb from ".";
import useSSRLayoutEffect from "./useSSRLayoutEffect";
import { useState } from "react";

export default () => {
  const [inited, setInited] = useState(false);
  useSSRLayoutEffect(() => {
    useCrossOb.fn.init();
    setInited(true);
  }, []);

  return inited;
};
