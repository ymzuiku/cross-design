import css from "vanilla-cssjs";

export default css`
  ._side {
    width: 100%;
    height: var(--cr-page-height);
    background: rgb(var(--cr-side-color));
    color: rgb(var(--cr-light-color));
    overflow-y: auto;
    overflow-x: hidden;
  }
`("cross-side");
