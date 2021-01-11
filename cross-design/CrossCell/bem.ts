import css from "vanilla-cssjs";

export default css`
  ._box {
    position: relative;
    width: 100%;
    background: rgb(var(--cr-bg-color));
    min-height: var(--cr-cell-height);
    display: flex;
    padding: var(--cr-space-1) 0px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.23s cubic-bezier(0.23, 1, 0.32, 1);
  }
  ._title {
    padding: 0px var(--cr-cell-title-padding);
  }
  ._arrow {
    padding: 0.7em;
  }
  ._touch {
    cursor: pointer;
  }

  @media screen and (min-width: 641px) {
    ._touch:hover {
      background: rgba(var(--cr-hover-color), 0.05);
    }
    ._touch:active {
      background: rgba(var(--cr-hover-color), 0.15);
    }
  }
  @media screen and (max-width: 641px) {
    ._touch:active {
      background: rgba(var(--cr-hover-color), 0.15);
    }
  }
`("cross-cell");
