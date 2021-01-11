import css from "vanilla-cssjs";

export default css`
  ._box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    position: fixed;
    z-index: var(--msg-zindex, 2000);
    top: var(--msg-top, 1em);
    width: 100%;
  }

  ._item {
    cursor: pointer;
    margin-top: 0.5em;
    padding: 0.6em 1.2em;
    border: 1px solid rgba(0, 0, 0, 1);
    font-size: 1em;
    color: var(--mgs-color, #f0f0f0);
    background-color: var(--msg-bg, rgba(42, 42, 42, 1));
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 0.3em;
    animation: var(--cr-page-move-up-animation);
    transition: var(--cr-transition);
  }

  ._out {
    animation: var(--cr-page-move-down-animation);
  }
`("cross-messgae");
