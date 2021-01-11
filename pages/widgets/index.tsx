import React from "react";
import CrossLayout from "cross-design/CrossLayout";
import CrossNav from "cross-design/CrossNav";
import Menu from "components/Menu";
import CrossIconCellLink from "cross-design/CrossIconCellLink";

const Page: React.FC = () => {
  return (
    <CrossLayout
      navLarge
      nav={
        <CrossNav useMenuButton>
          <div>组件列表</div>
        </CrossNav>
      }
      rootPage
      side={<Menu />}
    >
      <article className="cr-content">
        <div className="cr-row cr-start-start">
          <section className="cr-section cr-min-width-500px">
            <div className="cr-padding-3 cr-row cr-between-center">
              <h2>展示组件</h2>
              <p>共6个</p>
            </div>
            <CrossIconCellLink href="/widgets/message">
              Message
            </CrossIconCellLink>
            <CrossIconCellLink href="/widgets/alert">Alert</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/loading">
              Loading
            </CrossIconCellLink>
            <CrossIconCellLink href="/widgets/cell">Cell</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/badge">Badge</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/icon">Icon</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/details">
              Details
            </CrossIconCellLink>
            <CrossIconCellLink
              bottomLine={false}
              href="/widgets/markdown_render"
            >
              Markdown Render
            </CrossIconCellLink>
          </section>
          <section className="cr-section cr-min-width-500px">
            <div className="cr-padding-3 cr-row cr-between-center">
              <h2>表单组件</h2>
              <p>共10个</p>
            </div>
            <CrossIconCellLink href="/widgets/input">Input</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/select_input">
              SelectInput
            </CrossIconCellLink>
            <CrossIconCellLink href="/widgets/switch">Switch</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/checkbox">
              Checkbox
            </CrossIconCellLink>
            <CrossIconCellLink href="/widgets/radio">Radio</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/slider">Slider</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/step_slider">
              StepSlider
            </CrossIconCellLink>
            <CrossIconCellLink href="/widgets/upload_file">
              Upload File
            </CrossIconCellLink>
            <CrossIconCellLink bottomLine={false} href="/widgets/camera">
              Camera
            </CrossIconCellLink>
          </section>
        </div>
        <div className="cr-row cr-start-start">
          <section className="cr-section cr-min-width-500px">
            <div className="cr-padding-3 cr-row cr-between-center">
              <h2>选择器组件</h2>
              <p>共11个</p>
            </div>
            <CrossIconCellLink href="/widgets/popver">Popver</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/select">Select</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/levels_select">
              Levels Select
            </CrossIconCellLink>
            <CrossIconCellLink href="/widgets/multiple_select">
              Multiple Select
            </CrossIconCellLink>
            <CrossIconCellLink href="/widgets/date_select">
              Date Select
            </CrossIconCellLink>
            <CrossIconCellLink href="/widgets/time_select">
              Time Select
            </CrossIconCellLink>
            <CrossIconCellLink href="/widgets/date_time_picker">
              Date time select
            </CrossIconCellLink>
            <CrossIconCellLink href="/widgets/date_between">
              Date between
            </CrossIconCellLink>
            <CrossIconCellLink href="/widgets/date_time_between">
              Date time between
            </CrossIconCellLink>
            <CrossIconCellLink href="/widgets/address_select">
              Address between
            </CrossIconCellLink>
            <CrossIconCellLink bottomLine={false} href="/widgets/tree">
              Tree
            </CrossIconCellLink>
          </section>
          <section className="cr-section cr-min-width-500px">
            <div className="cr-padding-3 cr-row cr-between-center">
              <h2>布局组件</h2>
              <p>共12个</p>
            </div>
            <CrossIconCellLink href="/widgets/layout">Layout</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/Side">Side</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/Nav">Nav</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/footer">Footer</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/bar">Bar</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/Tabs">Tabs</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/Menu">Menu</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/Modal">Modal</CrossIconCellLink>
            <CrossIconCellLink href="/widgets/float_action_button">
              Float Action Button
            </CrossIconCellLink>
            <CrossIconCellLink href="/widgets/cross_styles">
              Cross Styles
            </CrossIconCellLink>
            <CrossIconCellLink href="/widgets/load_more">
              Load More
            </CrossIconCellLink>
            <CrossIconCellLink bottomLine={false} href="/widgets/refresher">
              Refresher
            </CrossIconCellLink>
          </section>
        </div>
      </article>
    </CrossLayout>
  );
};

export default Page;
