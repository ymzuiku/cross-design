import React from "react";
import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import Menu from "components/Menu";
import CrossLoading from "cross-design/CrossLoading";
import DetailsCode from "components/DetailCode";
import ExampleCard from "components/ExampleCard";

const code1 = `
<CrossLoading />
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
          <div>Alert</div>
        </CrossNav>
      }
      side={<Menu nowUrl="/widgets" />}
    >
      <article className="cr-content">
        <div className="cr-row cr-start-start">
          <ExampleCard head="默认Loading" code={code1}>
            <CrossLoading />
          </ExampleCard>
          <ExampleCard head="修改颜色" code={code2}>
            <CrossLoading color="#f00" />
            <CrossLoading color="#000" />
            <CrossLoading color="#aaa" />
          </ExampleCard>
          <ExampleCard head="修改速度" code={code3}>
            <CrossLoading speed="1" />
            <CrossLoading speed="2" />
            <CrossLoading speed="3" />
            <CrossLoading speed="4" />
            <CrossLoading speed="5" />
          </ExampleCard>
          <ExampleCard head="修改尺寸" code={code4}>
            <CrossLoading width="1em" height="1em" />
            <CrossLoading width="2em" height="2em" />
            <CrossLoading width="3em" height="3em" />
            <CrossLoading width="4em" height="4em" />
            <CrossLoading width="5em" height="5em" />
          </ExampleCard>
        </div>
      </article>
    </CrossLayout>
  );
};

export default Page;
