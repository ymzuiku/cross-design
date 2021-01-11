import css from "vanilla-cssjs";

export default css`
  ._button {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.36s cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 0.3em;
  }
  @media screen and (min-width: 641px) {
    ._button:hover {
      background: rgba(var(--cr-hover-color), 0.1);
    }
    ._button:active {
      background: rgba(var(--cr-hover-color), 0.1);
      opacity: 0.7;
    }
  }
  @media screen and (max-width: 641px) {
    ._button:active {
      background: rgba(var(--cr-hover-color), 0.1);
      opacity: 0.7;
    }
  }
  ._button-disable {
    pointer-events: none;
    opacity: 0.5;
  }
`("cross-button");
