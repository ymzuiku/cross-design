import css from "vanilla-cssjs";

export default css`
  .cr-wdith-auto {
    width: auto;
  }
  .cr-height-auto {
    height: auto;
  }
  /* phone */
  @media screen and (max-width: 641px) {
    :root {
      font-size: 18px;
      --cr-button-height: 38px;
      --cr-input-height: 38px;
      /* --cr-root-fs: 18px; */
    }

    .cr-section {
      position: relative;
      flex: 1;
      margin-bottom: var(--cr-space-4);
      margin-right: 0px;
      border-radius: 0px;
      background: rgb(var(--cr-bg-color));
      box-sizing: border-box;
      min-width: 375px;
    }
    .cr-section:before {
      content: " ";
      position: absolute;
      left: 0;
      bottom: -1px;
      right: 0;
      height: 1px;
      border-bottom: 1px solid rgb(var(--cr-line-bottom-color));
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(var(--cr-line-scale));
      transform: scaleY(var(--cr-line-scale));
    }

    .cr-content {
      margin: 0 auto;
      margin-left: 0px;
      margin-top: var(--cr-space-3);
      max-width: 100vw;
    }
  }
`("cross-bem-mobile");
