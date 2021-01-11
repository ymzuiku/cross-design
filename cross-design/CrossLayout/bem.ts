import css from "vanilla-cssjs";

export default css`
  ._layout {
    height: var(--cr-page-height);
    max-height: 100vh;
    width: var(--cr-page-width);
    overflow: hidden;
    background: rgb(var(--cr-gray-color));
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    backface-visibility: hidden;
    --cr-switch-side-width: 0px;
    --cr-transition: none;
  }
  ._layout[cr-nav-large="on"] {
    --cr-nav-height: 94px;
  }
  ._layout[cr-menu-show="on"] {
    --cr-switch-side-width: var(--cr-menu-width);
  }

  ._layout[cr-inited="on"] {
    --cr-transition: var(--cr-transition-base);
  }

  ._side {
    flex: 0 0 var(--cr-switch-side-width);
    width: var(--cr-switch-side-width);
    height: var(--cr-page-height);
    transition: var(--cr-transition);
    z-index: 2000;
  }

  ._main {
    flex: 1;
  }

  ._nav {
    width: calc(var(--cr-screen-width) - var(--cr-switch-side-width));
    box-sizing: border-box;
    height: var(--cr-nav-height);
    transition: var(--cr-transition);
    position: var(--cr-position);
    top: 0px;
    left: var(--cr-switch-side-width);
    z-index: 1000;
  }

  ._toolbar {
    width: calc(var(--cr-screen-width) - var(--cr-switch-side-width));
    box-sizing: border-box;
    transition: var(--cr-transition);
    position: var(--cr-position);
    left: var(--cr-switch-side-width);
    z-index: 1000;
    top: var(--cr-nav-height);
  }

  ._footer {
    width: calc(var(--cr-screen-width) - var(--cr-switch-side-width));
    bottom: 0px;
    position: var(--cr-position);
    box-sizing: border-box;
    height: var(--cr-footer-height);
    transition: var(--cr-transition);
    z-index: 1000;
  }

  ._page {
    box-sizing: border-box;
    position: relative;
    -webkit-overflow-scrolling: touch;
    padding-top: var(--cr-page-top);
    padding-bottom: 94px;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: var(--cr-page-height);
  }

  ._page[cr-nav-use-large="on"] {
    --cr-page-top: 94px;
  }

  @media screen and (min-width: 641px) {
    ._cr-user-select-none {
      -webkit-user-select: auto;
      -moz-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    ._cr-page-push-in {
      animation: none !important;
    }
    ._cr-page-fade-in {
      animation: none !important;
    }
    ._page[cr-desktop-nav-large="off"] {
      --cr-page-top: var(--cr-page-top-base);
    }
    ._layout[cr-desktop-nav-large="off"] {
      --cr-nav-height: var(--cr-nav-height-base);
    }
    ._nav {
      --cr-screen-width: 100vw;
    }
    ._toolbar {
      --cr-screen-width: 100vw;
    }
    ._footer {
      --cr-screen-width: 100vw;
    }
    ._page {
      overflow-y: scroll;
    }
  }

  @media screen and (max-width: 641px) {
    ._main {
      flex: 1;
      width: var(--cr-screen-width);
      position: var(--cr-position);
      top: 0px;
      left: 0px;
      transition: var(--cr-transition);
      --cr-switch-side-width: 0px;
    }
    ._main[cr-menu-show="on"] {
      transform: translateX(var(--cr-menu-width));
    }
    ._nav {
      --cr-screen-width: 100vw;
    }
    ._toolbar {
      --cr-screen-width: 100vw;
    }
    ._footer {
      --cr-screen-width: 100vw;
    }
    ._mask[cr-menu-show="on"] {
      position: var(--cr-position);
      left: var(--cr-switch-side-width);
      top: 0px;
      z-index: 1900;
      width: var(--cr-page-width);
      height: var(--cr-page-height);
      background-color: rgba(var(--cr-dark-color), 0.1);
      animation: var(--cr-page-fade-in-animation);
    }
    ._mask[cr-menu-show="off"] {
      pointer-events: none;
    }
  }
`("cross-layout");
