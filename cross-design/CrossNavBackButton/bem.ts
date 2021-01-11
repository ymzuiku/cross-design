import css from "vanilla-cssjs";

export default css`
  ._button {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  ._icon {
    opacity: 1 !important;
  }
  ._title {
    font-weight: var(--cr-back-button-fw);
    margin-left: -0.7em;
    white-space: nowrap;
    padding-right: 0.7em;
  }
`("cross-nav-back-button");
