import React from "react";
import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import Menu from "components/Menu";
import CrossCell from "cross-design/CrossCell";
import MenuIcon from "cross-design/CrossIcons/MenuIcon";
import ExampleCard from "components/ExampleCard";

const code1 = `
<CrossCell>Cell A</CrossCell>
<CrossCell>Cell B</CrossCell>
`.trim();

const code2 = `
<CrossCell showArrow topLine bottomLine={false}>
  Cell Top Line
</CrossCell>
`.trim();

const code3 = `
<CrossCell showArrow>Cell A</CrossCell>
<CrossCell showArrow>Cell B</CrossCell>
`.trim();

const code4 = `
<CrossCell left={<MenuIcon />} showArrow>
  Cell A
</CrossCell>
<CrossCell
  left={<img ... />}
  showArrow
>
  Cell B
</CrossCell>
`.trim();

const code5 = `
<CrossCell right={<MenuIcon />} showArrow>
  Cell A
</CrossCell>
<CrossCell
  lerightft={<img ... />}
  showArrow
>
  Cell B
</CrossCell>
`.trim();

const code6 = `
<CrossCell right={<MenuIcon />} showArrow>
  <div>
    <h6 className="cr-margin-bottom-2">
      北宋思想家、政治家、文学家、改革家
    </h6>
    <h3 className="cr-margin-bottom-2">王安石</h3>
    <p className="cr-margin-bottom-2">
      王安石进士及第。历任扬州签判、鄞县知县、舒州通判等职，政绩显著。熙宁二年（1069年），任参知政事，次年拜相，主持变法。因守旧派反对，熙宁七年（1074年）罢相。
    </p>
    <p className="cr-info">
      王安石潜心研究经学，著书立说，创“荆公新学”，促进宋代疑经变古学风的形成。在哲学上，他用“五行说”阐述宇宙生成，丰富和发展了中国古代朴素唯物主义思想；其哲学命题“新故相除”，把中国古代辩证法推到一个新的高度。
    </p>
  </div>
</CrossCell>
`.trim();

const Page: React.FC = () => {
  return (
    <CrossLayout
      useFloatActionButton
      nav={
        <CrossNav useBackButton>
          <div>Cell</div>
        </CrossNav>
      }
      side={<Menu nowUrl="/widgets" />}
    >
      <article className="cr-content">
        <div className="cr-row cr-start-start">
          <ExampleCard head="Cell 是指长列表中的一行模块" info="" code={code1}>
            <CrossCell topLine>Cell A</CrossCell>
            <CrossCell>Cell B</CrossCell>
          </ExampleCard>
          <ExampleCard head="显示上分割线，隐藏下分割线" info="" code={code2}>
            <CrossCell topLine bottomLine={false}>
              Cell Top Line
            </CrossCell>
          </ExampleCard>
          <ExampleCard
            head="显示右侧箭头"
            info="若显示了右箭头，Cell会添加点击样式，Cross Design\n
            中所有交互样式，都是兼容移动端和桌面端的"
            code={code3}
          >
            <CrossCell topLine showArrow>
              Cell A
            </CrossCell>
            <CrossCell showArrow>Cell B</CrossCell>
          </ExampleCard>
          <ExampleCard
            head="添加左侧元素"
            info="若显示了右箭头，Cell会添加点击样式，Cross Design\n
            中所有交互样式，都是兼容移动端和桌面端的"
            code={code4}
          >
            <CrossCell topLine left={<MenuIcon />} showArrow>
              Cell A
            </CrossCell>
            <CrossCell
              left={
                <img
                  width="45px"
                  height="45px"
                  src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1530628949,1867294524&fm=26&gp=0.jpg"
                />
              }
              showArrow
            >
              Cell B
            </CrossCell>
          </ExampleCard>
          <ExampleCard
            head="添加右侧元素"
            info="若显示了右箭头，Cell会添加点击样式，Cross Design\n
            中所有交互样式，都是兼容移动端和桌面端的"
            code={code5}
          >
            <CrossCell topLine right={<MenuIcon />} showArrow>
              Cell A
            </CrossCell>
            <CrossCell
              right={
                <img
                  width="45px"
                  height="45px"
                  src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1530628949,1867294524&fm=26&gp=0.jpg"
                />
              }
              showArrow
            >
              Cell B
            </CrossCell>
          </ExampleCard>
          <ExampleCard head="多行内容" code={code6}>
            <CrossCell
              topLine
              left={
                <img
                  width="80px"
                  height="80px"
                  src="/static/imgs/wanganshi.jpeg"
                />
              }
              style={{ alignItems: "flex-start" }}
              showArrow
            >
              <div>
                <h6 className="cr-margin-bottom-2">
                  北宋思想家、政治家、文学家、改革家
                </h6>
                <h3 className="cr-margin-bottom-2">王安石</h3>
                <p className="cr-margin-bottom-2">
                  王安石进士及第。历任扬州签判、鄞县知县、舒州通判等职，政绩显著。熙宁二年（1069年），任参知政事，次年拜相，主持变法。因守旧派反对，熙宁七年（1074年）罢相。
                </p>
                <p className="cr-info">
                  王安石潜心研究经学，著书立说，创“荆公新学”，促进宋代疑经变古学风的形成。在哲学上，他用“五行说”阐述宇宙生成，丰富和发展了中国古代朴素唯物主义思想；其哲学命题“新故相除”，把中国古代辩证法推到一个新的高度。
                </p>
              </div>
            </CrossCell>
            <CrossCell
              left={
                <img
                  width="80px"
                  height="80px"
                  src="/static/imgs/xinqingji.jpg"
                />
              }
              topLine
              showArrow
              style={{ alignItems: "flex-start" }}
            >
              <div>
                <h6 className="cr-margin-bottom-2">
                  南宋官员、将领，豪放派词人
                </h6>
                <h3 className="cr-margin-bottom-2">辛弃疾</h3>
                <p className="cr-margin-bottom-2">
                  原字坦夫，后改字幼安，中年后别号稼轩居士。
                </p>
                <p className="cr-info">
                  辛弃疾一生以恢复为志，以功业自许，却命运多舛、壮志难酬。但他始终没有动摇恢复中原的信念，而是把满腔激情和对国家兴亡、民族命运的关切、忧虑，全部寄寓于词作之中
                  [3]
                  。其词艺术风格多样，以豪放为主，风格沉雄豪迈又不乏细腻柔媚之处。其词题材广阔又善化用典故入词，抒写力图恢复国家统一的爱国热情，倾诉壮志难酬的悲愤，对当时执政者的屈辱求和颇多谴责；也有不少吟咏祖国河山的作品。现存词六百多首，有词集《稼轩长短句》等传世。
                </p>
              </div>
            </CrossCell>
          </ExampleCard>
        </div>
        <div className="cr-row cr-start-start"></div>
        <div className="cr-row cr-start-start"></div>
      </article>
    </CrossLayout>
  );
};

export default Page;
