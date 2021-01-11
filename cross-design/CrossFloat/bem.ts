import css from "vanilla-cssjs";

export default css`
._render {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  z-index: 2000;
}

._mask {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  background-color: rgb(var(--cr-dark-color), 0.5);
  z-index: 2001;
  animation: var(--cr-page-fade-in-animation);
}

._mask[cr-move-down="on"] {
  animation: var(--cr-page-fade-out-animation);
}

._alert {
  z-index: 2002;
  animation: var(--cr-page-move-up-animation);
}

._alert[cr-move-down="on"] {
  animation: var(--cr-page-move-down-animation);
}

`('cross-float')