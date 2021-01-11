import React from "react";
import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import Menu from "components/Menu";
import CrossAlert from "cross-design/CrossAlert";
import CrossInput from "cross-design/CrossInput";
import DetailsCode from "components/DetailCode";
import ExampleCard from "components/ExampleCard";

const code1 = `
<button onClick={() => CrossAlert({ title: "hello", info: "alert" })}>
  显示 Alert
</button>
`.trim();

const code2 = `
<button
  onClick={() =>
    CrossAlert({
      title: "选择一个你的宠物",
      buttons: [
        { label: "Dog", onClick: (i: any) => alert(i) },
        { label: "Cat" },
        { label: "Fish" },
      ],
    })
  }
>
  Timeout 0.5s
</button>
`.trim();

const code3 = `
<button
  onClick={() =>
    CrossAlert({
      title: "请输入你的昵称",
      info: <CrossInput className="cr-margin-3" />,
      cancelLabel: "取消",
      buttons: [{ label: "提交", onClick: (i: any) => alert(i) }],
    })
  }
>
  显示带输入框的 Alert
</button>
`.trim();

const Page: React.FC = () => {
  return (
    <CrossLayout
      useFloatActionButton
      nav={
        <CrossNav useBackButton>
          <div>Alert</div>
        </CrossNav>
      }
      side={<Menu nowUrl="/widgets" />}
    >
      <article className="cr-content">
        <ExampleCard
          head="只有取消按钮的弹框"
          info="Message 组件是一个全局显示消息的组件"
          code={code1}
        >
          <button
            className="cr-button cr-width-100"
            onClick={() => CrossAlert({ title: "hello", info: "alert" })}
          >
            显示 Alert
          </button>
        </ExampleCard>
        <ExampleCard head="多个按钮的弹框" info="选择一个你的宠物" code={code2}>
          <button
            className="cr-button cr-width-100"
            onClick={() =>
              CrossAlert({
                title: "选择一个你的宠物",
                buttons: [
                  { label: "Dog", onClick: (i: any) => alert(i) },
                  { label: "Cat" },
                  { label: "Fish" },
                ],
              })
            }
          >
            显示 Alert
          </button>
        </ExampleCard>
        <ExampleCard head="自定义弹框内容" info="请输入你的昵称" code={code3}>
          <button
            className="cr-button cr-width-100"
            onClick={() =>
              CrossAlert({
                title: "请输入你的昵称",
                info: <CrossInput className="cr-margin-3" />,
                cancelLabel: "取消",
                buttons: [{ label: "提交", onClick: (i: any) => alert(i) }],
              })
            }
          >
            显示带输入框的 Alert
          </button>
        </ExampleCard>
      </article>
    </CrossLayout>
  );
};

export default Page;
