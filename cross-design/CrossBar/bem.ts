import css from "vanilla-cssjs";

export default css`
  ._box {
    --cr-line-top-color: var(--cr-nav-line-top-color);
    z-index: 1;
    display: block;
    position: relative;
    box-sizing: border-box;
    height: 100%;
    min-height: var(--cr-bar-height);
    will-change: transform, opacity;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background: rgba(var(--cr-nav-bg), 1);
  }
  ._bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0px var(--cr-space-2);
  }

  ._safe-bottom {
    padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
    padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
  }
`("cross-bar");
