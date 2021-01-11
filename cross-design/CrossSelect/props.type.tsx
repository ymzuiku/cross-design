import { CSSProperties } from "react";

export interface CrossSelectItem {
  value: any;
  label: string;
  [key: string]: any;
}

export interface CrossSelectProps {
  os?: "desktop" | "mobile";
  onChange?: (item: CrossSelectItem) => any;
  value?: CrossSelectItem;
  className?: string;
  style?: CSSProperties;
  autoClose?: boolean;
  data: CrossSelectItem[];
}
