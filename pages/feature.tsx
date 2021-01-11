import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import SearchButton from "components/SearchButton";
import Menu from "components/Menu";
import CrossBar from "cross-design/CrossBar";
import CrossMarkdownRender from "cross-design/CrossMarkdownRender";

const md = `
# Feature

文档待完善...
`;

export default () => {
  return (
    <CrossLayout
      nav={
        <CrossNav useMenuButton lintBottom={true} right={<SearchButton />}>
          <div>Cross Design</div>
        </CrossNav>
      }
      side={<Menu />}
      footer={<CrossBar lineTop>footer</CrossBar>}
      navLarge
      rootPage
    >
      <article className="cr-content">
        <section className="cr-section cr-padding-4">
          <CrossMarkdownRender seo>{md}</CrossMarkdownRender>
        </section>
      </article>
    </CrossLayout>
  );
};
