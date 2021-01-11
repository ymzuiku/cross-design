import React from "react";
import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import Menu from "components/Menu";
import ExampleCard from "components/ExampleCard";

const code1 = `
<CrossDetails
  className={[className, css.box].join(" ")}
  renderSummary={(show) => (<button className="cr-button" style={{} as any}>
  {!show ? "显示Code" : "隐藏Code"}
</button>)}
  {...rest}
>
  <code className="cr-code cr-margin-top-3">{children}</code>
</CrossDetails>
`.trim();

const code2 = `
<CrossLoading color="#f00" />
`.trim();

const code3 = `
<CrossLoading speed="2"/>
`.trim();

const code4 = `
<CrossLoading width="80px" height="80px" />
`.trim();

const Page: React.FC = () => {
  return (
    <CrossLayout
      useFloatActionButton
      nav={
        <CrossNav useBackButton>
          <div>Details</div>
        </CrossNav>
      }
      side={<Menu nowUrl="/widgets" />}
    >
      <article className="cr-content">
        <div className="cr-row cr-start-start">
          <ExampleCard
            head="Details 用于隐藏细节"
            info="下面的显示Code按钮就是一个 CrossDetails 组件"
            code={code1}
          ></ExampleCard>
        </div>
      </article>
    </CrossLayout>
  );
};

export default Page;
