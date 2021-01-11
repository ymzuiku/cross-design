import React from "react";
import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import Menu from "components/Menu";
import CrossCheckbox from "cross-design/CrossCheckbox";
import ExampleCard from "components/ExampleCard";
import CrossMessage from "cross-design/CrossMessage";

const code1 = `
<CrossCheckbox className="cr-margin-1"></CrossCheckbox>

<CrossCheckbox
  className="cr-margin-1"
  style={{ fontSize: "22px" }}
/>

<CrossCheckbox
  className="cr-margin-1"
  style={{ fontSize: "30px" }}
/>

<CrossCheckbox
  style={{ "--cr-checkbox-radius": "0px" } as any}
  className="cr-margin-1"
/>

<CrossCheckbox
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

<CrossCheckbox
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
        <CrossCheckbox
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
        </CrossCheckbox>
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
          <div>Checkbox</div>
        </CrossNav>
      }
      side={<Menu nowUrl="/widgets" />}
    >
      <article className="cr-content">
        <ExampleCard head="默认 Checkbox" code={code1}>
          <div className="cr-row">
            <CrossCheckbox className="cr-margin-1"></CrossCheckbox>
            <CrossCheckbox
              className="cr-margin-1"
              style={{ fontSize: "22px" }}
            ></CrossCheckbox>
            <CrossCheckbox
              className="cr-margin-1"
              style={{ fontSize: "30px" }}
            ></CrossCheckbox>
            <CrossCheckbox
              style={{ "--cr-checkbox-radius": "0px" } as any}
              className="cr-margin-1"
            ></CrossCheckbox>
            <CrossCheckbox
              style={
                {
                  "--cr-checkbox-radius": "0px",
                  "--cr-checkbox-bg-color": "var(--cr-light-color)",
                  "--cr-checkbox-front-color": "var(--cr-primary-color)",
                  fontSize: "22px",
                } as any
              }
              className="cr-margin-1"
            ></CrossCheckbox>
            <CrossCheckbox
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
            ></CrossCheckbox>
          </div>
        </ExampleCard>
        <ExampleCard head="带文字的 Checkbox" code={code2}>
          <div className="cr-row">
            {Array(30)
              .fill(0)
              .map((v, i) => {
                return (
                  <div className="cr-margin-3 cr-min-width-200px">
                    <CrossCheckbox
                      onChange={(v) => {
                        CrossMessage({
                          message: `你${
                            v ? "勾选" : "取消"
                          }了第 ${i} 个 Checkbox`,
                        });
                      }}
                    >
                      Label {i}
                    </CrossCheckbox>
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
