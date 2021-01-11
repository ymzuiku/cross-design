import css from "vanilla-cssjs";

export default css`
  :root {
    --cr-select-width: 150px;
    --cr-select-height: var(--cr-input-height);
    --cr-select-radius: var(--cr-input-radius);
    --cr-select-plan-height: 250px;
    --cr-select-plan-box-shadow: var(--cr-box-shadow-4);
  }
  ._box {
    box-sizing: border-box;
    width: var(--cr-select-width);
    height: var(--cr-select-height);
    border-radius: var(--cr-select-radius);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0px var(--cr-space-2);
    align-items: center;
    position: relative;
    border: 1px solid rgba(var(--cr-dark-color), 0.2);
    cursor: pointer;
  }

  ._value {
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    pointer-events: none;
  }
  ._arrow {
    --cr-icon-size: 16px;
    --cr-primary-color: 150, 150, 150;
    margin-left: var(--cr-space-1);
    font-size: 12px;
    transition: var(--cr-transition);
    transform: rotate(0deg) scale(0.8);
  }
  ._arrow-show {
    transform: rotate(180deg) scale(0.8);
  }
  ._ul {
    position: absolute;
    left: -1px;
    font-size: 14px;
    z-index: 500;
    top: var(--cr-select-height);
    padding: 0px;
    margin: 0px;
    max-height: var(--cr-select-plan-height);
    width: var(--cr-select-width);
    background: rgb(var(--cr-bg-color));
    box-shadow: var(--cr-select-plan-box-shadow);
    border-radius: var(--cr-radius-1);
    /* border: 1px solid rgba(var(--cr-dark-color), 0.3); */
    box-sizing: border-box;
    overflow: auto;
    transition: transform 0.36s cubic-bezier(0.23, 1, 0.32, 1);
    transform: scale(1, 0.85);
    transform-origin: top;
    pointer-events: none;
    opacity: 0;
    border: 1px solid rgba(var(--cr-dark-color), 0.2);
  }
  ._ul-show {
    pointer-events: auto;
    transform: scale(1, 1);
    opacity: 1;
  }
  ._li {
    color: rgba(var(--cr-dark-color), 0.6);
    position: relative;
    padding: 0px var(--cr-space-2);
    height: var(--cr-select-height);
    transition: var(--cr-transition);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  ._select {
    border: none;
    font-size: 14px;
    width: 100%;
    background: rgba(0, 0, 0, 0);
    color: rgba(var(--cr-dark-color), 0.75);
  }
  ._box-show {
  }
  @media screen and (min-width: 720px) {
    ._li:hover {
      background: rgba(var(--cr-primary-color), 1);
      color: rgba(var(--cr-light-color), 1);
    }
    ._box:hover {
      border: 1px solid rgba(var(--cr-dark-color), 0.3);
    }
  }
  ._li-selected {
    color: rgba(var(--cr-dark-color), 1);
    background: rgba(var(--cr-primary-color), 0.05);
    /* border-left: 4px solid rgba(var(--cr-primary-color), 1); */
    font-weight: 700;
  }
`("CrossSelect");
