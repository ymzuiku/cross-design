import css from "vanilla-cssjs";

export default css`
  ._box {
    position: var(--cr-position);
    right: var(--cr-space-2);
    bottom: calc(
      var(--cr-footer-height) + var(--cr-space-3) + var(--cr-safe-bottom)
    );
    z-index: 2000;
    width: var(--cr-float-action-button-width);
    height: var(--cr-float-action-button-width);
    background: rgb(var(--cr-primary-color));
    border-radius: calc(var(--cr-float-action-button-width) / 2);
    color: rgb(var(--cr-light-color));
    box-shadow: var(--cr-box-shadow-2);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: var(--cr-transition);
    transform: scale(1);
    cursor: pointer;
  }

  @media screen and (min-width: 641px) {
    ._box:hover {
      box-shadow: var(--cr-box-shadow-4);
      transform: scale(1) translateY(-2px);
    }
  }

  ._hidden {
    transform: scale(0);
  }
`("cross-float-action-button");
