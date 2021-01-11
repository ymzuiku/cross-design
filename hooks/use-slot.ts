import { ReactNode } from "react";

export default function useSlot(children) {
  const childs = {} as { [key: string]: ReactNode };

  if (children) {
    if (children.forEach) {
      children.forEach((v: any) => {
        if (v.props && v.props.slot) {
          childs[v.props.slot] = v;
        }
      });
    } else if (children.props) {
      childs[children.props.slot] = children;
    }
  }

  return childs;
}
