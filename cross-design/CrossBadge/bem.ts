import css from "vanilla-cssjs";

export default css`
  ._box {
    position: relative;
  }

  ._badge {
    position: absolute;
    right: -0.8em;
    /* top: calc(0em - (var(--cr-badge-width) / 2)); */
    width: var(--cr-badge-width);
    border-radius: var(--cr-badge-width);
    height: var(--cr-badge-width);
  }

  ._label {
    position: absolute;
    width: auto;
    left: calc(100% - 0.2em);
    padding: 0.2em 0.3em;
    color: rgb(var(--cr-light-color));
    top: calc(0em - (var(--cr-badge-width) / 2));
    border-radius: var(--cr-badge-width);
    height: var(--cr-badge-width);
    font-size: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`("cross-badge");
