import crossBemBase from "./crossBemBase";
import crossBemUnit from "./crossBemUnit";
import crossBemMobile from "./crossBemMobile";

export default () => {
  crossBemBase.init();
  crossBemUnit.init();
  crossBemMobile.init();
};
