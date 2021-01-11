import css from "vanilla-cssjs";

export default css`
  :root {
    --cr-nav-bg: 255, 255, 255;
    --cr-nav-title-fs: 17px;
    --cr-nav-title-fw: 700;
    --cr-nav-title-scale: 1.8;
    --cr-nav-line-bottom-color: 241, 242, 245;
  }
  @media screen and (max-width: 641px) {
    :root {
      --cr-nav-title-fw: 400;
    }
  }
  ._nav {
    --cr-line-bottom-color: var(--cr-nav-line-bottom-color);
    z-index: 1;
    display: block;
    position: relative;
    box-sizing: border-box;
    height: 100%;
    will-change: transform, opacity;
    width: 100%;
    background: rgba(var(--cr-nav-bg), 1);
    box-shadow: var(--cr-box-shadow-4);
    /* backdrop-filter: saturate(180%) blur(10px); */
  }
  ._box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: var(--cr-nav-height-base);
    font-size: var(--cr-nav-title);
    width: 100%;
    box-sizing: border-box;
    padding: 0px var(--cr-space-1);
  }
  ._title {
    font-size: var(--cr-nav-title-fs);
    font-weight: var(--cr-nav-title-fw);
    transition: var(--cr-transition);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }
  ._title[cr-nav-large="on"] {
    transform: translate(
        calc(
          100% - (var(--cr-page-width) - var(--cr-switch-side-width)) / 2 +
            var(--cr-space-0)
        ),
        var(--cr-nav-height-base)
      )
      scale(var(--cr-nav-title-scale));
  }
  @media screen and (min-width: 641px) {
    ._title[cr-nav-large="on"][cr-desktop-nav-large="off"] {
      transform: none;
    }
  }

  ._right {
    flex: 0 0 25%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  ._left {
    flex: 0 0 25%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`("cross-nav");
