import React, { ReactNode, useEffect } from "react";
import bem from "./bem";
import useCrossOb from "..";
import CrossNavSideButton from "cross-design/CrossNavSideButton";
import CrossNavBackButton from "cross-design/CrossNavBackButton";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface ICrossNav
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  slot?: string;
  useMenuButton?: boolean;
  useBackButton?: boolean;
  backButtonTitle?: string;
  lintBottom?: boolean;
  left?: ReactNode;
  right?: ReactNode;
}

const CrossNav: React.FC<ICrossNav> = ({
  className,
  children,
  useMenuButton,
  useBackButton,
  backButtonTitle,
  lintBottom = true,
  left,
  right,
  ...rest
}) => {
  let {
    isDesktopNavLarge,
    isNavLarge,
    isRootPage,
    pageAnimation,
  } = useCrossOb((s) => [s.isNavLarge, s.isRootPage]);

  useSSRLayoutEffect(bem.init, []);

  if (backButtonTitle || useBackButton) {
    if (useMenuButton) {
      left = (
        <div className="cr-row">
          <CrossNavBackButton>{backButtonTitle}</CrossNavBackButton>
          <CrossNavSideButton />
        </div>
      );
    } else {
      left = <CrossNavBackButton>{backButtonTitle}</CrossNavBackButton>;
    }
  } else if (useMenuButton) {
    left = <CrossNavSideButton />;
  }

  const isPageAnima = !isRootPage && pageAnimation;

  return (
    <div
      className={[className, bem`nav`, lintBottom && "cr-line-bottom"].join(
        " "
      )}
      {...rest}
    >
      <div className={[bem`box`, isPageAnima && "cr-page-fade-in"].join(" ")}>
        <span className={bem`left`}>{left}</span>
        <h2
          cr-desktop-nav-large={isDesktopNavLarge ? "on" : "off"}
          cr-nav-large={isNavLarge ? "on" : "off"}
          className={[bem`title`].join(" ")}
        >
          <span className={[isPageAnima && "cr-page-push"].join(" ")}>
            {children}
          </span>
        </h2>
        <span className={bem`right`}>{right}</span>
      </div>
    </div>
  );
};

export default CrossNav;
