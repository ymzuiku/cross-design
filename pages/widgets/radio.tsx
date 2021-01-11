import React from "react";
import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import Menu from "components/Menu";
import CrossRadio from "cross-design/CrossRadio";
import ExampleCard from "components/ExampleCard";
import CrossMessage from "cross-design/CrossMessage";

const code1 = `
<CrossRadio className="cr-margin-1"></CrossRadio>

<CrossRadio
  className="cr-margin-1"
  style={{ fontSize: "22px" }}
/>

<CrossRadio
  className="cr-margin-1"
  style={{ fontSize: "30px" }}
/>

<CrossRadio
  style={{ "--cr-checkbox-radius": "0px" } as any}
  className="cr-margin-1"
/>

<CrossRadio
  style={
    {
      "--cr-checkbox-radius": "0px",
      "--cr-checkbox-bg-color": "var(--cr-light-color)",
      "--cr-checkbox-front-color": "var(--cr-primary-color)",
      fontSize: "22px",
    } as any
  }
  className="cr-margin-1"
/>

<CrossRadio
  style={
    {
      "--cr-checkbox-radius": "0px",
      "--cr-checkbox-bg-color": "var(--cr-light-color)",
      "--cr-checkbox-front-color": "var(--cr-secondary-color)",
      "--cr-checkbox-border-color": "var(--cr-secondary-color)",
      fontSize: "30px",
    } as any
  }
  className="cr-margin-1"
/>
`.trim();

const code2 = `
<div className="cr-row">
  {Array(30)
    .fill(0)
    .map((v, i) => {
      return (
        <CrossRadio
          onChange={(v) => {
            CrossMessage({
              message: \`你\${
                v ? "勾选" : "取消"
              }了第 \${i} 个 Checkbox\`,
            });
          }}
          className="cr-margin-2 cr-min-width-200px"
        >
          Label {i}
        </CrossRadio>
      );
    })}
</div>
`.trim();

const Page: React.FC = () => {
  return (
    <CrossLayout
      useFloatActionButton
      nav={
        <CrossNav useBackButton>
          <div>Radio</div>
        </CrossNav>
      }
      side={<Menu nowUrl="/widgets" />}
    >
      <article className="cr-content">
        <ExampleCard head="默认 Radio" code={code1}>
          <div className="cr-row">
            <CrossRadio className="cr-margin-1"></CrossRadio>
            <CrossRadio
              className="cr-margin-1"
              style={{ fontSize: "22px" }}
            ></CrossRadio>
            <CrossRadio
              className="cr-margin-1"
              style={{ fontSize: "30px" }}
            ></CrossRadio>
            <CrossRadio
              style={{ "--cr-checkbox-radius": "0px" } as any}
              className="cr-margin-1"
            ></CrossRadio>
            <CrossRadio
              style={
                {
                  "--cr-checkbox-radius": "0px",
                  "--cr-checkbox-bg-color": "var(--cr-light-color)",
                  "--cr-checkbox-front-color": "var(--cr-primary-color)",
                  fontSize: "22px",
                } as any
              }
              className="cr-margin-1"
            ></CrossRadio>
            <CrossRadio
              style={
                {
                  "--cr-checkbox-radius": "0px",
                  "--cr-checkbox-bg-color": "var(--cr-light-color)",
                  "--cr-checkbox-front-color": "var(--cr-secondary-color)",
                  "--cr-checkbox-border-color": "var(--cr-secondary-color)",
                  fontSize: "30px",
                } as any
              }
              className="cr-margin-1"
            ></CrossRadio>
          </div>
        </ExampleCard>
        <ExampleCard head="带文字的 Checkbox" code={code2}>
          <div className="cr-row">
            {Array(30)
              .fill(0)
              .map((v, i) => {
                return (
                  <div className="cr-margin-3 cr-min-width-100px">
                    <CrossRadio
                      onChange={(v) => {
                        CrossMessage({
                          message: `你${
                            v ? "勾选" : "取消"
                          }了第 ${i} 个 Checkbox`,
                        });
                      }}
                    >
                      Label {i}
                    </CrossRadio>
                  </div>
                );
              })}
          </div>
        </ExampleCard>
      </article>
    </CrossLayout>
  );
};

export default Page;
