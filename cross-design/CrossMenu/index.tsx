import React, { useEffect, useState } from "react";
import bem from "./bem";
import CrossMenuData from "./data.interface";
import CrossMenuItem from "./item";
import { OnMenuChangeParams } from "./data.interface";
import useCrossOb from "cross-design";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossMenuProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  autoClose?: boolean;
  nowUrl?: string;
  data: CrossMenuData[];
  customerSelect?: boolean;
  onPick?: (params: OnMenuChangeParams) => any;
}

function selectOne(root: any, data: any) {
  if (!data.children) {
    const setChidlrenSelect = (list: any) => {
      list.select = false;
      list.forEach((a: any) => {
        a.select = false;
        if (a.children) {
          setChidlrenSelect(a.children);
        }
      });
    };
    setChidlrenSelect(root);

    data.select = true;
  } else {
    data.open = !data.open;
  }
}

function getUrl() {
  if (window.location.href.indexOf("#") > -1) {
    return window.location.hash.replace("#", "");
  }
  return window.location.pathname;
}

function changeNowUrl(root: any, nowUrl: string) {
  nowUrl = nowUrl || getUrl();
  const setChidlrenSelect = (list: any) => {
    let isOpen = false;
    // 是否自动合并其他菜单
    // list.open = false;
    list.children.forEach((a: any) => {
      if (a.url) {
        a.select = a.url === nowUrl;
        if (a.url === nowUrl) {
          isOpen = true;
          list.open = true;
        }
      }

      if (a.children) {
        const open = setChidlrenSelect(a);
        if (open) {
          list.open = open;
        }
      }
    });
    return isOpen;
  };
  setChidlrenSelect({ children: root });
  return nowUrl;
}

const CrossMenu: React.FC<CrossMenuProps> = ({
  data,
  className,
  children,
  onPick,
  customerSelect,
  nowUrl,
  autoClose,
  ...rest
}) => {
  const setUrl = useState("")[1];
  if (!customerSelect && onPick) {
    let oldOnPick = onPick;
    onPick = (params) => {
      selectOne(data, params.data);

      oldOnPick(params);
      if (params?.data?.url && autoClose) {
        useCrossOb.fn.changeShowMenu(false);
      }
    };
  }
  useSSRLayoutEffect(bem.init, []);

  useEffect(() => {
    setUrl(changeNowUrl(data, nowUrl || ""));
  }, []);
  return (
    <menu className={bem`content`}>
      <div
        style={{ "--cr-icon-size": "1.8em" } as any}
        className={[className, bem`box`].join(" ")}
        {...rest}
      >
        {data.map((v, i) => {
          return (
            <CrossMenuItem
              key={i}
              index={i}
              data={v}
              onPick={onPick}
            ></CrossMenuItem>
          );
        })}
      </div>
    </menu>
  );
};

export default CrossMenu;
