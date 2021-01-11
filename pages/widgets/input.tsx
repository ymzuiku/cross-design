import React from "react";
import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import Menu from "components/Menu";
import CrossInput from "cross-design/CrossInput";
import ExampleCard from "components/ExampleCard";

const code1 = `
<input placeholder="Please input somting" className="cr-input" />
`.trim();

const code2 = `
<CrossInput placeholder="Please input somting" />
`.trim();

const code3 = `
<CrossInput type="number" placeholder="Please input somting" />
`.trim();

const code4 = `
<CrossInput line placeholder="Please input" />
`.trim();

const Page: React.FC = () => {
  return (
    <CrossLayout
      useFloatActionButton
      nav={
        <CrossNav useBackButton>
          <div>Input</div>
        </CrossNav>
      }
      side={<Menu nowUrl="/widgets" />}
    >
      <article className="cr-content">
        <div className="cr-row cr-start-start">
          <ExampleCard
            head="普通Input"
            info="普通Input仅仅是修改了input的样式"
            code={code1}
          >
            <input placeholder="Please input somting" className="cr-input" />
          </ExampleCard>
          <ExampleCard
            head="边框留白风格 Inpu"
            info="CrossInput 是一个定制化样式的Input，它保留 Placeholder 并且拥有一个清空按钮"
            code={code2}
          >
            <CrossInput placeholder="Please input somting" />
          </ExampleCard>
          <ExampleCard head="Number Input" code={code3}>
            <CrossInput type="number" placeholder="Please input number" />
          </ExampleCard>
          <ExampleCard head="线风格 Input" code={code4}>
            <CrossInput line placeholder="Please input" />
          </ExampleCard>
        </div>
      </article>
    </CrossLayout>
  );
};

export default Page;
