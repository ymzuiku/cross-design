import React, { useEffect } from "react";
import bem from "./bem";
import CrossSvg from "cross-design/CrossSvg";
import CrossCell, { CrossCellProps } from "cross-design/CrossCell";
import useCrossOb from "cross-design";
import useSSRLayoutEffect from "cross-design/useSSRLayoutEffect";

export interface CrossNextIconCellLInkProps extends CrossCellProps {
  href: string;
  svg?: string;
}

const A = (props: any) => <div {...props} />;

const CrossIconCellLink = ({
  className,
  children,
  href,
  svg,
  ...rest
}: CrossNextIconCellLInkProps) => {
  const TheLink = useCrossOb.get().components.Link || (A as any);

  useSSRLayoutEffect(bem.init, []);

  return (
    <TheLink href={href}>
      <a href={href}>
        <CrossCell
          showArrow
          left={<WidgetImg svg={svg} />}
          className={[className, bem`box`].join(" ")}
          {...rest}
        >
          {children}
        </CrossCell>
      </a>
    </TheLink>
  );
};

CrossIconCellLink.Link = null as any;

export default CrossIconCellLink;

function WidgetImg({ svg }: { svg?: string }) {
  return (
    <span className={bem`widget`}>
      <CrossSvg svg={svg || baseSvg}></CrossSvg>
    </span>
  );
}

const baseSvg = `<svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: rgb(var(--cr-light-color));overflow: hidden; transform:translate(-0.06em, -0.1em);" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3282"><path d="M943.157895 202.105263h-168.421053a168.421053 168.421053 0 0 0-336.842105 0H269.473684c-37.187368 0-67.368421 30.181053-67.368421 67.368421v168.421053a168.421053 168.421053 0 0 0 0 336.842105V943.157895c0 37.187368 30.181053 67.368421 67.368421 67.368421h235.789474V943.157895a101.052632 101.052632 0 0 1 202.105263 0v67.368421H943.157895c37.187368 0 67.368421-30.181053 67.368421-67.368421v-235.789474H943.157895a101.052632 101.052632 0 0 1 0-202.105263h67.368421V269.473684c0-37.187368-30.181053-67.368421-67.368421-67.368421z m-168.421053 404.210526c0 93.022316 75.452632 168.421053 168.421053 168.421053V943.157895h-168.421053a168.421053 168.421053 0 1 0-336.842105 0H269.473684v-235.789474H202.105263a101.052632 101.052632 0 0 1 0-202.105263H269.473684V269.473684h235.789474V202.105263a101.052632 101.052632 0 0 1 202.105263 0V269.473684H943.157895v168.421053a168.421053 168.421053 0 0 0-168.421053 168.421052z" p-id="3283"></path></svg>`;
