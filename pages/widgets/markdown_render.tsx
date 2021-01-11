import React from "react";
import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import Menu from "components/Menu";
import CrossMarkdownRender from "cross-design/CrossMarkdownRender";
import ExampleCard from "components/ExampleCard";

const code1 = `
<CrossMarkdownRender>{\`
# 一级标题示例
## 二级标题示例
### 三级标题示例
#### 四级标题示例
##### 五级标题示例
###### 六级标题示例

**加粗**

_斜体_

\`块状\`

- 无序列表a
- 无序列表b

1. 有序列表a
1. 有序列表b

我们也可以用一些html语意的功能：

热键：<kbd>ctrl+c</kbd>

上标: H<sup>2</sup>O

下标: O<sub>2</sub>

## 表格

|  默认对齐 | 左对齐 | 右对齐 | 居中对齐 |
| :-----| :-----| ----: | :----: |
| Apple | Apple | Dog | iOS |
| Banana| Banana | Cat | Android |

> 引用，整行

\`}</CrossMarkdownRender>
`.trim();

const code2 = `
<CrossMarkdownRender seo>{\`
### 此篇 Markdown 的源内容可以被 SEO 搜索

打开页面源码，查看HTML文件是否有此段落
\`}</CrossMarkdownRender>
`.trim();

const Page: React.FC = () => {
  return (
    <CrossLayout
      useFloatActionButton
      nav={
        <CrossNav useBackButton>
          <div>Markdown Render</div>
        </CrossNav>
      }
      side={<Menu nowUrl="/widgets" />}
    >
      <article className="cr-content">
        <ExampleCard
          head="以下内容由 CrossMarkdownRender 组件渲染"
          code={code1}
        >
          <p className="cr-margin-top-6">
            注意 CrossMarkdownRender 的 children 内容必须要去除 JSX的锁进
          </p>
          <p className="cr-margin-top-3">
            使用 marked 作为 Markdown 解析器，并且内置了 Github
            样式；为了提高页面加载效率，解析器和样式会做异步加载
          </p>
          <p className="cr-margin-top-3">以下为上文代码：</p>
          <CrossMarkdownRender>{`
# 一级标题示例
## 二级标题示例
### 三级标题示例
#### 四级标题示例
##### 五级标题示例
###### 六级标题示例

**加粗**

_斜体_

\`块状\`

- 无序列表a
- 无序列表b

1. 有序列表a
1. 有序列表b

我们也可以用一些html语意的功能：

热键：<kbd>ctrl+c</kbd>

上标: H<sup>2</sup>O

下标: O<sub>2</sub>

## 表格

|  默认对齐 | 左对齐 | 右对齐 | 居中对齐 |
| :-----| :-----| ----: | :----: |
| Apple | Apple | Dog | iOS |
| Banana| Banana | Cat | Android |

> 引用，整行


          `}</CrossMarkdownRender>
        </ExampleCard>
        <ExampleCard head="设定SEO参数" code={code2}>
          <p className="cr-margin-bottom-3">
            若添加SEO参数，在SSR的环境下，CrossMarkdownRender会将md源内容添加到html，补充
            Markdown
            前端渲染的SEO不足，若想获得完整的HTML语意，MarkdownRender得需要放到服务端渲染内容。
          </p>
          <CrossMarkdownRender seo>{`
### 此篇 Markdown 的源内容可以被 SEO 搜索

打开页面源码，查看HTML文件是否有此段落
          `}</CrossMarkdownRender>
        </ExampleCard>
      </article>
    </CrossLayout>
  );
};

export default Page;
