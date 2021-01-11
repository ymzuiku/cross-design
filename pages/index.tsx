import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import SearchButton from "components/SearchButton";
import Menu from "components/Menu";
import CrossBar from "cross-design/CrossBar";
import CrossMarkdownRender from "cross-design/CrossMarkdownRender";

const md = `
# Cross Design 跨平台UI组件

> 一套代码，运行在移动端和桌面端

## 多端之痛

Saas 产品，我们需要在桌面端、iOS、Android、小程序都实现一遍类似的功能

我们为了提高效率，会使用跨平台方案。常见的前端技术选型有：

偏Web方案：

- 桌面端：React/Vue + Antd
- 小程序：React/Vue
- 移动端：Cordova + (React/Vue)

偏原生方案：

- 桌面端：React/Vue + Antd
- 小程序：React/Vue
- 移动端：ReactNative/Flutter

国产跨平台框架方案：

- 桌面端：React/Vue + Antd
- 小程序：Taro
- 移动端：Taro

以上任何方案，即便都是相同的技术盏如React，我们都免不了在桌面端开发一套、移动端开发一套。因为移动端和桌面端的用户习惯、组件类型是不一样的。

并且如果我们要兼容 SSR，以上问题就更复杂了。我们只能在个别页面使用 Nodejs 在服务端获取数据直出。因为市面上的组件库大部分是不兼容SSR的，最终我们还需要添加一个 Nodejs 层去单独绘制需要 SSR 的页面，而且组件库很可能会不一样。

## 两倍的工作量

以我上家公司的产品为例，Saas 产品，我们桌面端优先迭代，然后再在移动端实现一遍。相同的功能，需要设定两套需求、编写两次前端代码、提测两个工程、并且出现Bug和需求变更，都需要修改两个工程。

市面上的跨平台都是指在移动端中各平台直接的复用，却很少讨论桌面端兼容移动端。想象一下，如果一套组件可以在桌面端和移动端很好的复用，我们可以节约多少的工作量？

Cross Design 的意义就是为了解决这个问题。

## 跨越桌面端和移动端

Cross Design 的理念是让移动端和桌面端公用一套 React 组件，相同的组件会根据在移动端或桌面端的环境不同渲染成更适合它的形态。

- 桌面端：React + CrossDesign
- 小程序：React + CrossDesign + WebView
- 移动端：React + CrossDesign + WebView

这样我们整个SAAS类型的产品就只需要一套前端代码即可。

并且 Cross Design 整套组件库都是严格遵循SSR的生命周期进行开发，严格分离了在服务端渲染和同构至客户端时所使用的 Browser API，在 NextJS 或 create-react-app 中都可以开箱立用。

在页面动画方面，Cross Design 兼容了常见的路由形式，牺牲了完整的移动端推进推出动画，从而兼容桌面端和移动端的视觉感官。

Cross Design 每个组件直接都相对独立，可以分别单独使用，并且按需加载。
Cross Design 使用 css-module 和 Typescript 开发，并且所有样式设定均可以通过 css values 进行定制化，可以很轻松的修改样式。

这个网站其实就是使用 NextJS + Cross Design 创建的，我们可以在移动端和桌面端访问，查看一下它在两个端的效果。

`;

export default () => {
  return (
    <CrossLayout
      nav={
        <CrossNav useMenuButton lintBottom={true} right={<SearchButton />}>
          <div>Cross Design 简介</div>
        </CrossNav>
      }
      side={<Menu />}
      footer={
        <CrossBar safeBottom lineTop>
          footer
        </CrossBar>
      }
      navLarge
      rootPage
    >
      <article className="cr-content">
        <section className="cr-section cr-padding-4">
          <CrossMarkdownRender seo>{md}</CrossMarkdownRender>
        </section>
      </article>
    </CrossLayout>
  );
};
