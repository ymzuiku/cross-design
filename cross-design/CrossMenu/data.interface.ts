import { ReactNode } from "react";

export default interface CrossMenuData {
  url?: string;
  open?: boolean;
  select?: boolean;
  left?: ReactNode;
  right?: ReactNode;
  title: ReactNode;
  children?: CrossMenuData[];
  disable?: () => boolean;
  onClick?: (title?: string) => any;
  show?: () => boolean;
  [key: string]: any;
}

export interface OnMenuChangeParams {
  isCell?: boolean;
  data: CrossMenuData;
  index: number;
  parentData?: CrossMenuData;
  parentIndex?: number;
}
