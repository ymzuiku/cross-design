import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

export interface AppendToDOMOptions {
  querySelectorParent?: string;
  callback?: (e: HTMLElement) => any;
  id?: string;
}

export default function appendToDOM(
  render: (id: string) => ReactNode,
  { querySelectorParent, callback, id }: AppendToDOMOptions = {}
): [HTMLElement, HTMLElement] {
  let eleId =
    id || "cross_" + Date.now() + Math.random().toString().replace(".", "");
  let ele = document.createElement("div");
  ele.id = eleId;
  let root: any;

  if (querySelectorParent) {
    root = document.body.querySelector(querySelectorParent);
  } else {
    root =
      document.getElementById("root") ||
      document.getElementById("__next") ||
      document.body;
  }

  ReactDOM.render(render(eleId) as any, ele);
  if (callback) {
    callback(ele);
  }
  root.append(ele);

  return [root, ele];
}
