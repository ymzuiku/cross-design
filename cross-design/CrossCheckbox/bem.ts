import css from "vanilla-cssjs";

export default css`
  ._box {
    cursor: pointer;
    position: relative;
    display: inline-block;
    width: auto;
    min-width: 1.3em;
    height: 1.3em;
    padding: var(--cr-space-1);
    border-radius: var(--cr-radius-1);
  }
  @media screen and (min-width: 641px) {
    ._box:hover {
      background-color: rgba(var(--cr-primary-color), 0.05);
    }
  }
  ._box:active {
    background-color: rgba(var(--cr-primary-color), 0.15);
  }

  ._empty {
    position: absolute;
    opacity: 0;
    transform: scale(0.5);
    transition: var(--cr-transition);
    will-change: transform;
  }

  ._empty[cr-checkbox="off"] {
    opacity: 1;
    transform: scale(1);
  }

  ._full {
    position: absolute;
    opacity: 0;
    transform: scale(0.5);
    transition: var(--cr-transition);
  }

  ._full[cr-checkbox="on"] {
    opacity: 1;
    transform: scale(1);
  }

  ._disabled {
    pointer-events: none;
    cursor: no-drop;
    opacity: 0.7;
  }

  ._child {
    margin-left: calc(1em + var(--cr-space-2));
  }
`("cross-check-box");
