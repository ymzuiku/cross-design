import React from "react";
import CrossButton from "cross-design/CrossButton";
import CrossIconsvg from "cross-design/CrossIconsvg";

export interface ISearchButton
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const SearchButton: React.FC<ISearchButton> = (props) => {
  return (
    <CrossButton {...props}>
      <CrossIconsvg svg={search} />
    </CrossButton>
  );
};

export default SearchButton;

const search = `<svg class="icon" style="width: 1.2em; height: 1.2em;vertical-align: middle;fill:rgb(var(--cr-primary-color));overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3229"><path d="M400.696889 801.393778A400.668444 400.668444 0 1 1 400.696889 0a400.668444 400.668444 0 0 1 0 801.393778z m0-89.031111a311.637333 311.637333 0 1 0 0-623.331556 311.637333 311.637333 0 0 0 0 623.331556zM667.904 601.998222l314.766222 314.823111-62.919111 62.976-314.823111-314.823111z" p-id="3230"></path></svg>`;
