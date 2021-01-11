import React from "react";
import bem from "./bem";
import useCrossOb from "..";
import { useCallback, useRef, useEffect } from "react";
import scrollTopStatus from "cross-design/scrollTopStatus";
import useScrollbar from "cross-design/useScrollbar";

export interface LayoutPageProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: any;
  scrollTop?: boolean;
  navLarge?: boolean;
}

const LayoutPage: React.FC<LayoutPageProps> = ({
  className,
  children,
  scrollTop,
  navLarge,
  ...rest
}) => {
  let { isNavLarge, isDesktopNavLarge } = useCrossOb();
  const ref = useRef({} as any);
  const scroll = useScrollbar(true);

  useEffect(() => {
    if (!scrollTop) {
      scrollTopStatus.replace(ref.current as any);
    }
  }, [ref.current]);

  const handleOnScroll = useCallback(
    (e) => {
      if (e.target.id !== "cr-layout-page") {
        return;
      }
      scrollTopStatus.save(e.target);
      if (navLarge) {
        if (e.target.scrollTop > 50 && isNavLarge) {
          useCrossOb.set((s) => {
            s.isNavLarge = false;
          });
        } else if (e.target.scrollTop <= 50 && !isNavLarge) {
          useCrossOb.set((s) => {
            s.isNavLarge = true;
          });
        }
      }
    },
    [isNavLarge]
  );

  return (
    <div
      id="cr-layout-page"
      ref={(r) => (ref.current = r)}
      cr-nav-use-large={navLarge ? "on" : "off"}
      cr-desktop-nav-large={isDesktopNavLarge ? "on" : "off"}
      onScroll={handleOnScroll}
      className={[className, bem`page`, scroll.className].join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
};

export default LayoutPage;
