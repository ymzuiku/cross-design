import React from "react";
import reactOb from "react-ob";
import CrossMenuData from "cross-design/CrossMenu/data.interface";
import CrossIconfont from "cross-design/CrossIconfont";
const icon = (icon: string) => (
  <CrossIconfont
    icon={icon}
    size="22px"
    style={{ marginRight: "var(--cr-space-2)" }}
    color="rgb(var(--cr-light-color))"
  />
);

const menuData = [
  {
    title: "设计理念",
    left: icon("icon-security"),
    children: [
      {
        left: icon("icon-discount"),
        title: "Cross Design 简介",
        url: "/",
      },
      {
        left: icon("icon-good"),
        title: "Cross Design 的特点",
        url: "/feature",
      },
    ],
  },
  {
    title: "Example",
    left: icon("icon-product"),
    children: [
      {
        left: icon("icon-phone"),
        title: "Dashboard 例子",
        url: "/examples/dashboard",
      },
      {
        left: icon("icon-rankinglist"),
        title: "表单页面例子",
        url: "/examples/form",
      },
      {
        left: icon("icon-copy1"),
        title: "数据查询例子",
        url: "/examples/table",
      },
      {
        left: icon("icon-assessed-badge"),
        title: "登陆页面例子",
        url: "/examples/login",
      },
    ],
  },
  {
    title: "文档",
    left: icon("icon-column"),
    children: [
      {
        title: "组件列表",
        left: icon("icon-integral"),
        url: "/widgets",
      },
      {
        left: icon("icon-training"),
        title: "开始使用",
        url: "/doc/get-started",
      },
      {
        left: icon("icon-pcm"),
        title: "布局及结构",
        url: "/doc/layout",
      },
      {
        left: icon("icon-Transfermoney"),
        title: "自定义样式",
        url: "/doc/customer-style",
      },
      {
        left: icon("icon-process"),
        title: "页面动画",
        url: "/doc/page-animation",
      },
    ],
  },
] as CrossMenuData[];

const useMenuOb = reactOb({ data: menuData });

export default useMenuOb;
