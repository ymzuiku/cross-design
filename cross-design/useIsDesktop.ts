import { useState } from "react";
import useSSRLayoutEffect from "./useSSRLayoutEffect";

export default (os?: "desktop" | "mobile", maxInnerWidth = 641) => {
  const [desktop, setDesktop] = useState(os === "desktop");
  useSSRLayoutEffect(() => {
    const check = () => {
      if (os === undefined) {
        setDesktop(window.innerWidth > maxInnerWidth);
      }
    };

    window.addEventListener("resize", check);

    if (os === undefined && window.innerWidth > maxInnerWidth) {
      setDesktop(true);
    }

    return () => {
      window.removeEventListener("resize", check);
    };
  }, [os]);
  return desktop;
};
