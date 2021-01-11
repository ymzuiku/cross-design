import css from "vanilla-cssjs";

export default css`
  ._box {
    z-index: 2002;
    width: 330px;
    background-color: rgb(var(--cr-light-color));
    border-radius: 0.8em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 10px rgba(var(--cr-dark-color), 0.2);
  }

  ._title {
    margin-top: 1em;
    font-size: 1.2em;
    font-weight: 700;
  }

  ._info {
    width: 100%;
    position: relative;
    padding: 1em 0px;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  ._button {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1em 0em;
    font-weight: 700;
    width: 100%;
    color: rgb(var(--cr-primary-color));
  }
  ._cancel {
    font-weight: 500;
  }

  @media screen and (min-width: 641px) {
    ._button:hover {
      background-color: rgba(var(--cr-dark-color), 0.05);
    }
  }

  @media screen and (max-width: 641px) {
    ._button:active {
      background-color: rgba(var(--cr-dark-color), 0.05);
    }
  }
`('cross-alert');
