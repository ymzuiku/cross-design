import css from "vanilla-cssjs";

export default css`
._content {
  padding: 0em;
  margin: 0em;
  width: var(--cr-menu-width-base);
}
._box {
  width: 100%;
  background: rgba(var(--cr-light-color), 0);
  --cr-menu-bg: var(--cr-light-color, "0, 0, 0");
  --cr-menu-padding: var(--cr-space-2);
  transition: var(--cr-transition);
  overflow: hidden;
}

._cellBox {
  width: 100%;
  background: rgba(var(--cr-dark-color), 0.3);
  transition: var(--cr-transition);
}

._openBox {
  transition: max-height 1s cubic-bezier(0.23, 1, 0.32, 1);
  max-height: 25em;
  padding: 0.2em 0em 0.5em 0em;
  overflow: hidden;
}
._openBox[cr-menu-open="off"] {
  padding: 0em 0em;
  transition: var(--cr-transition);
  max-height: 0em;
}

._item {
  user-select: none;
  cursor: pointer;
  font-size: 0.85em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: rgba(var(--cr-light-color), 0.7);
  padding: 0.5em 0.75em;
  padding-left: 1em;
  overflow: hidden;
  opacity: 0.7;
  transition: var(--cr-transition);
}
._item:hover {
  opacity: 0.85;
}
._item[cr-menu-open="on"] {
  opacity: 1;
  /* color: rgba(var(--cr-light-color), 1); */
}

._cell {
  box-sizing: border-box;
  width: 100%;
  user-select: none;
  cursor: pointer;
  font-size: 0.85em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: rgba(var(--cr-light-color), 1);
  padding: var(--cr-space-2) 1.5em;
  /* padding-left: 1em; */
  overflow: hidden;
  opacity: 0.65;
  transition: var(--cr-transition);
  border-left: 6px solid rgba(var(--cr-primary-color), 0);
}

._cell:hover {
  opacity: 1;
  /* background: rgba(var(--cr-menu-bg), 0.12); */
}
._cell[cr-menu-select="on"] {
  border-left: 6px solid rgba(var(--cr-primary-color), 1);
  background: rgba(var(--cr-primary-color), 0.7);
  opacity: 1;
}

._arrow {
  transition: var(--cr-transition);
}

._arrow[cr-menu-open="off"] {
  transform: rotateZ(-90deg);
  opacity: 0.7;
}

`('cross-menu')