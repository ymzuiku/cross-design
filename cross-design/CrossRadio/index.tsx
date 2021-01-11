import React from "react";
import CrossCheckbox, { CrossCheckboxProps } from "cross-design/CrossCheckbox";

const empty = `<svg class="icon" style="width: 1.3em; height: 1.3em;vertical-align: middle;fill: rgb(var(--cr-primary-color));overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1976"><path d="M512 304c-114.4 0-208 93.6-208 208s93.6 208 208 208 208-93.6 208-208-93.6-208-208-208z m0-208C283.202 96 96 283.202 96 512s187.202 416 416 416 416-187.202 416-416S740.798 96 512 96z m0 748.8c-183.036 0-332.8-149.766-332.8-332.8S328.964 179.2 512 179.2 844.8 328.964 844.8 512 695.036 844.8 512 844.8z" p-id="1977"></path></svg>
`;

const full = `<svg class="icon" style="width: 1.3em; height: 1.3em;vertical-align: middle;fill: rgb(var(--cr-primary-color));overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1965"><path d="M512 152c96.2 0 186.6 37.4 254.6 105.4S872 415.8 872 512s-37.4 186.6-105.4 254.6S608.2 872 512 872c-96.2 0-186.6-37.4-254.6-105.4S152 608.2 152 512s37.4-186.6 105.4-254.6S415.8 152 512 152m0-56C282.2 96 96 282.2 96 512s186.2 416 416 416 416-186.2 416-416S741.8 96 512 96z" p-id="1966"></path></svg>
`;

const CrossRadio: React.FC<CrossCheckboxProps> = ({
  fullSvg = full,
  emptySvg = empty,
  ...rest
}) => {
  return <CrossCheckbox emptySvg={fullSvg} fullSvg={emptySvg} {...rest} />;
};

export default CrossRadio;
