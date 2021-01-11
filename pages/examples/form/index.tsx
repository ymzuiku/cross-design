import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import SearchButton from "components/SearchButton";
import Menu from "components/Menu";

export default () => {
  return (
    <CrossLayout
      nav={
        <CrossNav useMenuButton lintBottom={true} right={<SearchButton />}>
          <div>Form</div>
        </CrossNav>
      }
      side={<Menu />}
      navLarge
      rootPage
    >
      <article className="cr-content">
        <section className="cr-section cr-padding-4">
          <h2>hello</h2>
          <div className="cr-row">
            <button className="cr-button">dog</button>
            <button className="cr-button">cat</button>
          </div>
        </section>
      </article>
    </CrossLayout>
  );
};
