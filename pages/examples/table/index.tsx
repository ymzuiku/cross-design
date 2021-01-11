import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import SearchButton from "components/SearchButton";
import Menu from "components/Menu";
import CrossInput from "cross-design/CrossInput";
import css from "./index.module.css";
import { useState, CSSProperties } from "react";
import CrossSelect from "cross-design/CrossSelect";
import CrossTable from "cross-design/CrossTable";

const columns = Array(30)
  .fill(0)
  .map((v, i) => ({
    value: "value-" + i,
    label: "label-" + i,
    stickyLeft: i === 0,
    style: {
      minWidth: i % 3 == 0 ? "200px" : undefined,
    } as CSSProperties,
  }));

const data = Array(20)
  .fill(0)
  .map((v, i) => {
    const a = {};
    columns.forEach((v) => {
      a[v.value] = "data-" + v.label + "--" + i;
    });
    return a;
  });

export default () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <CrossLayout
      nav={
        <CrossNav useMenuButton lintBottom={true} right={<SearchButton />}>
          <div>Table</div>
        </CrossNav>
      }
      side={<Menu />}
      navLarge
      rootPage
    >
      <article className="cr-content">
        <section className="cr-section cr-padding-3r">
          <div className="cr-row cr-between-center">
            <h2>导出</h2>
            <p>other</p>
          </div>
        </section>
        <section className="cr-section cr-padding-3r">
          <div className={["cr-row", css.head].join(" ")}>
            <CrossSelect
              className="cr-margin-1r"
              data={[
                { value: "all", label: "所有类别" },
                { value: "label-1", label: "label-1" },
                { value: "label-2", label: "label-2" },
              ]}
            />
            <CrossSelect
              className="cr-margin-1r"
              data={Array(30)
                .fill(0)
                .map((v, i) => ({ value: "value-" + i, label: "label-" + i }))}
            />
            <CrossInput
              className="cr-margin-1r"
              type="number"
              placeholder="输入手机号查询"
            />
            <div className="cr-flex"></div>
            <button
              className="cr-button cr-margin-1r cr-box-shadow-1"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "收起" : "展开"}
            </button>
            <button className="cr-button cr-box-shadow-1">搜索</button>
            <button className="cr-button-o cr-margin-1r">重置 </button>
          </div>
          {showMore && (
            <div className={["cr-row", css.head2].join(" ")}>
              <CrossInput
                className="cr-margin-1r"
                type="number"
                placeholder="输入手机号查询"
              />
              <CrossInput
                className="cr-margin-1r"
                type="number"
                placeholder="输入手机号查询"
              />
            </div>
          )}

          <CrossTable
            showIndex
            showCheckbox
            height="500px"
            columns={columns}
            data={data}
          />
          <CrossTable height="500px" columns={columns} data={data} />
        </section>
      </article>
    </CrossLayout>
  );
};
