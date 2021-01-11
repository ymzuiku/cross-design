import reactOb from "react-ob";
import crossGlobalCss from "./cross-global-css";

const baseState = {
  isInited: false,
  isNavLarge: true,
  isShowMenu: false,
  isRootPage: false,
  isDesktopNavLarge: false,
  isDesktop: false,
  pageAnimation: true,
  components: {
    Link: null as any,
  },
};

const actions = {
  goback: () => {
    window.history.back();
  },
  changeShowMenu: (isShowMenu?: boolean) => {
    isShowMenu =
      isShowMenu === undefined ? !useCrossOb.get().isShowMenu : isShowMenu;
    if (useCrossOb.get().isShowMenu !== isShowMenu) {
      useCrossOb.set((s) => (s.isShowMenu = !!isShowMenu));
      localStorage.setItem("cr-isShowMenu", String(isShowMenu));
    }
  },
  init: () => {
    crossGlobalCss();
    let isShowMenu = localStorage.getItem("cr-isShowMenu") === "true";

    if (window.innerWidth < 641) {
      isShowMenu = false;
    }
    useCrossOb.set((s) => {
      s.isDesktop = window.innerWidth > 641;
    });

    useCrossOb.fn.changeShowMenu(isShowMenu);

    setTimeout(() => {
      useCrossOb.set((s) => (s.isInited = true));
    }, 200);
  },
};

const useCrossOb = reactOb(baseState, { actions });

if (typeof document !== "undefined") {
  useCrossOb.fn.init();
}

export default useCrossOb;
