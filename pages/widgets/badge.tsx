import React from "react";
import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import Menu from "components/Menu";
import CrossLoading from "cross-design/CrossLoading";
import CrossBadge from "cross-design/CrossBadge";
import DetailsCode from "components/DetailCode";
import ExampleCard from "components/ExampleCard";

const code1 = `
<CrossBadge>
  <h3 style={{ display: "inline-block" }}>Empty</h3>
</CrossBadge>
`.trim();

const code2 = `
<CrossBadge color="#66f">
  <h3 style={{ display: "inline-block" }}>Blue</h3>
</CrossBadge>
`.trim();

const code3 = `
<CrossBadge label="9999">
  <h3 style={{ display: "inline-block" }}>Show Label</h3>
</CrossBadge>
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
          <div>Badge</div>
        </CrossNav>
      }
      side={<Menu nowUrl="/widgets" />}
    >
      <article className="cr-content">
        <div className="cr-row cr-start-start">
          <ExampleCard head="默认 Badge" info="" code={code1}>
            <h3 style={{ display: "inline-block" }}>
              Empty
              <CrossBadge />
            </h3>
          </ExampleCard>
          <ExampleCard head="修改 Badge 颜色" info="" code={code2}>
            <h3 style={{ display: "block" }}>
              Blue
              <CrossBadge color="#66f" />
            </h3>
          </ExampleCard>
          <ExampleCard head="带 Label 的 Badge" info="" code={code3}>
            <h3 style={{ display: "inline-block" }}>
              Show Label <CrossBadge label="9999" />
            </h3>
          </ExampleCard>
        </div>
      </article>
    </CrossLayout>
  );
};

export default Page;
