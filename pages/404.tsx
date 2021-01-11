import React from "react";
import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import Menu from "components/Menu";
import CrossAlert from "cross-design/CrossAlert";
import CrossInput from "cross-design/CrossInput";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <CrossLayout
      nav={
        <CrossNav useBackButton>
          <div>Alert</div>
        </CrossNav>
      }
      side={<Menu />}
      scrollTop
    >
      <article className="cr-content">
        <section className="cr-section cr-padding-3">
          <h2 className="cr-margin-bottom-3">404</h2>
          <p className="cr-margin-bottom-3">您访问的页面不存在</p>
          <Link href="/">
            <a>
              <button>回到首页</button>
            </a>
          </Link>
        </section>
      </article>
    </CrossLayout>
  );
};

export default Page;
