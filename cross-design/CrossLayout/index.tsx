import React from "react";
import bem from "./bem";
import useCrossOb from "cross-design";
import LayoutPage from "./LayoutPage";
import { useMemo, ReactNode, useEffect, useState } from "react";
import scrollTopStatus from "cross-design/scrollTopStatus";
import mobile, { stopTouchMove } from "./mobile";
import CrossFloatActionButton from "cross-design/CrossFloatActionButton";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossLayoutProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  nav?: ReactNode;
  side?: ReactNode;
  footer?: ReactNode;
  toolbar?: ReactNode;
  rootPage?: boolean;
  scrollTop?: boolean;
  navLarge?: boolean;
  useCrossStyle?: boolean;
  useFloatActionButton?: boolean;
  FloatActionButtonComponent?: any;
}

const CrossLayout: React.FC<CrossLayoutProps> = ({
  className,
  children,
  rootPage,
  navLarge,
  scrollTop,
  nav,
  side,
  footer,
  toolbar,
  useFloatActionButton,
  useCrossStyle = true,
  FloatActionButtonComponent = CrossFloatActionButton,
  ...rest
}) => {
  // 每当页面渲染，重新设置状态
  useMemo(() => {
    if (navLarge) {
      useCrossOb.get().isNavLarge = scrollTopStatus.getLastTop() < 50;
    } else {
      useCrossOb.get().isNavLarge = false;
    }
    useCrossOb.get().isRootPage = !!rootPage;
  }, []);

  useSSRLayoutEffect(() => {
    bem.init();
    mobile();
  }, []);

  let {
    isDesktopNavLarge,
    isNavLarge,
    isShowMenu,
    isInited,
  } = useCrossOb((s) => [s.isNavLarge, s.isShowMenu, s.isInited]);
  if (!side) {
    isShowMenu = false;
  }

  return (
    <div
      cr-desktop-nav-large={isDesktopNavLarge ? "on" : "off"}
      cr-inited={isInited ? "on" : "off"}
      cr-menu-show={isShowMenu ? "on" : "off"}
      cr-nav-large={isNavLarge ? "on" : "off"}
      className={[className, useCrossStyle && "cr-base", bem`layout`].join(" ")}
      {...rest}
    >
      {side && <aside className={bem`side`}>{side}</aside>}
      <div cr-menu-show={isShowMenu ? "on" : "off"} className={bem`main`}>
        {nav && (
          <div className={bem`nav`} onTouchMove={stopTouchMove as any}>
            {nav}
          </div>
        )}
        {toolbar && <div className={bem`toolbar`}>{toolbar}</div>}
        <LayoutPage navLarge={navLarge} scrollTop={scrollTop}>
          {children}
        </LayoutPage>
        {footer && <div className={bem`footer`}>{footer}</div>}
        <div
          onClick={() => useCrossOb.fn.changeShowMenu(false)}
          cr-menu-show={isShowMenu ? "on" : "off"}
          className={bem`mask`}
        ></div>
        {useFloatActionButton && (
          <FloatActionButtonComponent
            hidden={isShowMenu}
            haveFooter={!!footer}
            onClick={useCrossOb.fn.changeShowMenu as any}
          />
        )}
      </div>
    </div>
  );
};

export default CrossLayout;
