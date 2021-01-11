import React from "react";
import css from "./index.module.css";
import { useState, useRef } from "react";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  line?: boolean;
  type?: string;
  placeholder?: string;
  placeholderProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  value?: string;
  onChange?: (value: any) => any;
  onInput?: (value: any) => any;
}

export default ({
  inputProps,
  placeholder = "请输入",
  placeholderProps,
  value,
  onChange,
  onInput,
  type = "text",
  className,
  line,
  ...rest
}: InputProps) => {
  const input = useRef({} as any);
  const [val, setValue] = useState(value || "");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className={[css.box, className, "cr-base"].join(" ")} {...rest}>
      <input
        type={type}
        ref={(r) => (input.current = r)}
        value={val}
        onInput={(e: any) => {
          if (onInput) {
            onInput(e.target.value);
          }
          setValue(e.target.value);
        }}
        onChange={(e: any) => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        onFocus={(e: any) => {
          setIsFocus(true);
        }}
        onBlur={(e: any) => {
          setIsFocus(false);
        }}
        {...inputProps}
        className={[
          css.input,
          line ? css.inputBorderBottom : css.inputBorder,
          inputProps?.className,
        ].join(" ")}
      />
      <div
        {...placeholderProps}
        className={[
          css.placeholder,
          placeholderProps?.className,
          (val || isFocus) && css.placeholderFocus,
        ].join(" ")}
      >
        {placeholder}
      </div>
      <div
        className={css.closeBox}
        onClick={() => {
          setValue("");
          input.current?.focus();
        }}
        style={{
          display: val ? "flex" : "none",
        }}
      >
        <svg
          className={css.close}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1601"
        >
          <path
            d="M521.693867 449.297067L111.4112 39.0144a51.2 51.2 0 1 0-72.430933 72.362667l410.282666 410.3168-410.282666 410.3168a51.2 51.2 0 1 0 72.3968 72.3968l410.3168-410.282667 410.3168 410.282667a51.2 51.2 0 1 0 72.3968-72.362667l-410.282667-410.350933 410.282667-410.282667a51.2 51.2 0 1 0-72.3968-72.3968l-410.282667 410.282667z"
            fill="#000000"
            p-id="1602"
          ></path>
        </svg>
      </div>
    </div>
  );
};
