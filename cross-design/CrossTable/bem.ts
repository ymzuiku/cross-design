import css from "vanilla-cssjs";

export default css`
  :root {
    --cr-table-index-width: 50px;
  }
  ._checkbox {
    margin-left: var(--cr-space-2);
    margin-right: var(--cr-space-3);
  }
  ._box {
    width: 100%;
    position: relative;
  }
  ._table {
    display: block;
    width: 100%;
    overflow: auto;
    border-collapse: collapse;
  }
  ._thead {
    /* background: rgb(var(--cr-gray-color)); */
  }
  ._thead-tr {
    margin: 0px;
  }
  ._th {
    text-align: start;
    background: rgb(var(--cr-gray-color));
    position: sticky;
    top: 0px;
    z-index: 10;
  }
  ._tbody {
    background: rgb(var(--cr-bg-color));
  }
  ._tbody-tr {
  }
  ._td {
    background: rgb(var(--cr-bg-color));
  }

  ._th[cr-table-sticky-left="on"] {
    z-index: 30;
    position: sticky;
    top: 0px;
    left: 0px;
  }

  ._td[cr-table-sticky-left="on"] {
    z-index: 20;
    position: sticky;
    left: 0px;
  }
  ._index {
    width: var(--cr-table-index-width);
    min-width: var(--cr-table-index-width);
  }
`("CrossTable");
