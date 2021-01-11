import React from "react";
import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import Menu from "components/Menu";
import CrossMessage from "cross-design/CrossMessage";
import ExampleCard from "components/ExampleCard";

const code1 = `
<button onClick={() => CrossMessage({ message: "😉 Hello message" })}>
  显示 Message
</button>
`.trim();

const code2 = `
<button
  onClick={() =>
    CrossMessage({ message: "😉 Hello 500ms", timeout: 500 })
  }
>
  Timeout 0.5s
</button>
`.trim();

const code3 = `
<button
  className="cr-margin-bottom-3"
  onClick={() =>
    CrossMessage({
      message: "😉 Hello Red",
      style: { background: "#f55", border: "none" },
    })
  }
>
  烈火鸟
</button>
`.trim();

const Page: React.FC = () => {
  return (
    <CrossLayout
      useFloatActionButton
      nav={
        <CrossNav useBackButton>
          <div>Message</div>
        </CrossNav>
      }
      side={<Menu nowUrl="/widgets" />}
    >
      <article className="cr-content">
        <div className="cr-row cr-start-start">
          <ExampleCard
            head="基本使用"
            info="Message 组件是一个全局显示消息的组件"
            code={code1}
          >
            <button
              className="cr-button cr-width-100"
              onClick={() => CrossMessage({ message: "😉 Hello 500ms" })}
            >
              Show Message
            </button>
          </ExampleCard>
          <ExampleCard head="自定义 Timeout" code={code2}>
            <button
              className="cr-button cr-width-100"
              onClick={() =>
                CrossMessage({ message: "😉 Hello 500ms", timeout: 500 })
              }
            >
              Timeout 0.5s
            </button>
          </ExampleCard>
          <ExampleCard
            head="自定义样式"
            info="Message 组件是一个全局显示消息的组件"
            code={code3}
          >
            <button
              className="cr-button cr-width-100"
              onClick={() =>
                CrossMessage({
                  message: "😉 Hello Red",
                  style: { background: "#f55", border: "none" },
                })
              }
            >
              烈火鸟
            </button>
          </ExampleCard>
        </div>
      </article>
    </CrossLayout>
  );
};

export default Page;
