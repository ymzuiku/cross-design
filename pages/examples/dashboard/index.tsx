import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import SearchButton from "components/SearchButton";
import Menu from "components/Menu";
import CrossBar from "cross-design/CrossBar";

export default () => {
  return (
    <CrossLayout
      nav={
        <CrossNav useMenuButton lintBottom={true} right={<SearchButton />}>
          <div>Dashboard</div>
        </CrossNav>
      }
      side={<Menu />}
      navLarge
      rootPage
    >
      <article className="cr-content">
        <section className="cr-section cr-padding-4">
          <h2>hello dashboard</h2>
        </section>
      </article>
    </CrossLayout>
  );
};
