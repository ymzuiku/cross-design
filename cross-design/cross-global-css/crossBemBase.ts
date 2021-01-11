import css from "vanilla-cssjs";

const mk = (len: number, fn: (i: number) => string) => {
  let label = "";
  for (let i = 0; i < len; i++) {
    label += fn(i) + "\n";
  }
  return label;
};

export default css`
  :root {
    --cr-fm: -apple-system, "SF Pro Text", "SF UI Text", system-ui,
      "Helvetica Neue", Helvetica, Arial, sans-serif, Roboto, system-ui, Noto,
      Helvetica, Arial, sans-serif;
    --cr-fm2: ssans-serif, SimSun, 宋体, serif, Arial, sans-serif;
    --cr-safe-top: constant(safe-area-inset-top);
    --cr-safe-top: env(safe-area-inset-top);
    --cr-safe-bottom: constant(safe-area-inset-bottom);
    --cr-safe-bottom: env(safe-area-inset-bottom);
    --cr-safe-left: constant(safe-area-inset-left);
    --cr-safe-left: env(safe-area-inset-left);
    --cr-safe-right: constant(safe-area-inset-right);
    --cr-safe-right: env(safe-area-inset-right);
    --cr-bg-color: 255, 255, 255;
    --cr-gray-color: 249, 250, 253;
    --cr-side-color: 49, 58, 71;
    --cr-primary-color: 114, 124, 245;
    --cr-secondary-color: 60, 206, 5;
    --cr-tertriary-color: 51, 101, 250;
    --cr-dark-color: 39, 40, 47;
    --cr-medium-color: 128, 128, 128;
    --cr-light-color: 255, 255, 255;
    --cr-hover-color: 78, 94, 242;
    --cr-success-color: 0, 210, 118;
    --cr-warning-color: 255, 195, 54;
    --cr-error-color: 248, 68, 92;
    --cr-title-color: 0, 0, 0;
    --cr-line-top-color: 217, 216, 221;
    --cr-line-bottom-color: 217, 216, 221;
    --cr-line-scale: 0.49;
    --cr-text-color: 49, 50, 57;
    --cr-info-color: 125, 145, 160;
    --cr-screen-width: 100vw;
    --cr-screen-height: 100vh;
    --cr-nav-height: 45px;
    --cr-nav-height-base: 45px;
    --cr-bar-height: 45px;
    --cr-input-radius: var(--cr-radius-1);
    --cr-button-height: 32px;
    --cr-input-height: 32px;
    --cr-float-action-button-width: 4em;
    --cr-footer-height: calc(45px + env(safe-area-inset-bottom));
    --cr-menu-width-base: 260px;
    --cr-menu-width: var(--cr-menu-width-base);
    --cr-page-width: 100vw;
    --cr-page-height: 100vh;
    --cr-input-width: 230px;
    --cr-badge-width: 16px;
    --cr-page-top-base: 45px;
    --cr-page-top: var(--cr-page-top-base);
    --cr-root-fs: 16px;
    --cr-title-fs: 1.5em;
    --cr-space-0: 0px;
    --cr-space-1: 4px;
    --cr-space-2: 8px;
    --cr-space-3: 16px;
    --cr-space-4: 24px;
    --cr-space-5: 32px;
    --cr-space-6: 40px;
    --cr-radius-0: 0px;
    --cr-radius-1: 4px;
    --cr-radius-2: 6px;
    --cr-radius-3: 8px;
    --cr-radius-4: 12px;
    --cr-radius-5: 16px;
    --cr-radius-6: 20px;
    --cr-box-shadow-0: 0px 0px 0px rgba(var(--cr-dark-color), 0);
    --cr-box-shadow-1: 0px 1px 2px rgba(var(--cr-dark-color), 0.2);
    --cr-box-shadow-2: 0px -1px 4px rgba(var(--cr-dark-color), 0.025),
      0px 5px 10px rgba(var(--cr-dark-color), 0.03);
    --cr-box-shadow-3: 0px 1px 3px rgba(var(--cr-dark-color), 0.2),
      0px -1px 3px rgba(var(--cr-dark-color), 0.1),
      0px 5px 10px rgba(var(--cr-dark-color), 0.07);
    --cr-box-shadow-4: 0 0 35px 0 rgba(var(--cr-dark-color), 0.05);
    --cr-box-shadow-5: 0px 5px 10px rgba(var(--cr-dark-color), 0.2);
    --cr-box-shadow-6: 0px 6px 12px rgba(var(--cr-dark-color), 0.2);
    --cr-input-radius: 4px;
    --cr-max-width: 100%;
    --cr-transition-base: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    --cr-transition: var(--cr-transition-base);
    --cr-transition-fast: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
    --cr-transition-transform: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    --cr-transition-opacity: opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    --cr-page-push-unit: 100%;
    --cr-page-move-up-animation: cr-page-move-up 0.4s
      cubic-bezier(0.23, 1, 0.32, 1);
    --cr-page-move-down-animation: cr-page-move-down 0.4s
      cubic-bezier(0.23, 1, 0.32, 1);
    --cr-page-push-animation: cr-page-push 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    --cr-page-pop-animation: cr-page-pop 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    --cr-page-fade-in-animation: cr-page-fade-in 0.5s
      cubic-bezier(0.23, 1, 0.32, 1);
    --cr-page-fade-out-animation: cr-page-fade-out 0.4s
      cubic-bezier(0.23, 1, 0.32, 1);
    --cr-icon-size: 40px;
    --cr-cell-height: 38px;
    --cr-cell-title-padding: var(--cr-space-3);
    --cr-card-radius: var(--cr-radius-2);
    --cr-back-button-fw: 400;
    --cr-position: fixed;
  }

  #root #__next {
    position: relative;
  }

  body {
    font-size: var(--cr-root-fs);
    font-family: var(--cr-fm);
    margin: 0px;
    padding: 0px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  * {
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .cr-flex {
    flex: 1;
  }

  .cr-base * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    touch-action: manipulation;
    box-sizing: border-box;
  }

  .cr-base body,
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  button,
  input,
  figure,
  code,
  details {
    color: rgb(var(--cr-text-color));
    margin: 0em;
    padding: 0em;
    outline: none;
    border: none;
  }
  .cr-base h1 {
    font-size: 1.8em;
  }
  .cr-base input {
    -webkit-user-select: text !important;
  }

  .cr-base input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }

  .cr-base img,
  image {
    -o-object-fit: cover;
    object-fit: cover;
  }

  .cr-code {
    display: inline-block;
    overflow: auto;
    background: rgba(var(--cr-gray-color), 0.5);
    border: 1px dashed rgba(var(--cr-dark-color), 0.12);
    color: rgba(var(--cr-dark-color), 0.7);
    padding: var(--cr-space-2) var(--cr-space-3);
    border-radius: var(--cr-radius-2);
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
    white-space: pre-wrap;
    word-wrap: break-word;
    width: 100%;
    box-sizing: border-box;
  }

  .cr-code-dark {
    border: none;
    background: rgba(var(--cr-dark-color), 0.83);
    color: rgba(var(--cr-light-color), 0.9);
  }

  .cr-blockquote {
    border-left: 4px solid rgba(var(--cr-primary-color), 0.65);
    color: rgba(var(--cr-info-color), 1);
  }

  .cr-section {
    overflow: hidden;
    flex: 1;
    margin-bottom: var(--cr-space-3);
    margin-right: var(--cr-space-3);
    border-radius: var(--cr-card-radius);
    background: rgb(var(--cr-bg-color));
    box-sizing: border-box;
    box-shadow: var(--cr-box-shadow-2);
  }

  .cr-content {
    margin: 0 auto;
    margin-left: var(--cr-space-3);
    margin-top: var(--cr-space-3);
    max-width: calc(100vw - var(--cr-space-3));
  }

  .cr-button {
    cursor: pointer;
    border: none;
    background: rgb(var(--cr-primary-color));
    padding: var(--cr-space-2) var(--cr-space-4);
    height: var(--cr-button-height);
    outline: none;
    color: rgb(var(--cr-light-color));
    border-radius: var(--cr-radius-1);
    transition: var(--cr-transition);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .cr-button-o {
    cursor: pointer;
    border: 1px solid rgba(var(--cr-dark-color), 0.2);
    background: rgb(var(--cr-bg-color));
    padding: var(--cr-space-2) var(--cr-space-4);
    height: var(--cr-button-height);
    outline: none;
    color: rgb(var(--cr-dark-color));
    border-radius: var(--cr-radius-1);
    transition: var(--cr-transition);
    opacity: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 641px) {
    .cr-button:hover {
      background: rgb(var(--cr-hover-color));
    }
    .cr-button-o:hover {
      opacity: 0.7;
    }
    .cr-input:hover {
      border: 1px solid rgb(var(--cr-primary-color), 0.65);
    }
  }
  .cr-button:active {
    opacity: 0.5;
  }
  .cr-button-o:active {
    opacity: 0.5;
  }

  .cr-input {
    width: var(--cr-input-width);
    height: var(--cr-input-height);
    padding: var(--cr-space-2) var(--cr-space-2);
    border-radius: var(--cr-input-radius);
    box-sizing: border-box;
    border: 1px solid rgba(var(--cr-dark-color), 0.2);
  }

  .cr-input:focus {
    border: 2px solid rgb(var(--cr-primary-color));
  }

  .cr-input[type="checkbox"],
  .cr-input[type="radio"] {
    width: auto;
  }

  .cr-input[type="file"] {
    box-sizing: border-box;
  }

  .cr-base a {
    color: rgb(var(--cr-dark-color));
    text-decoration: none;
  }

  .cr-info {
    font-size: 0.85em;
    color: rgba(var(--cr-info-color), 1);
  }

  .cr-col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .cr-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    max-width: 100vw;
    flex-wrap: wrap;
  }

  .cr-line-top:after {
    content: "  ";
    position: absolute;
    left: 0;
    top: -1px;
    right: 0;
    height: 1px;
    border-top: 1px solid rgb(var(--cr-line-top-color));
    -webkit-transform-origin: 0 1;
    transform-origin: 0 1;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .cr-line-bottom:before {
    content: " ";
    position: absolute;
    left: 0;
    bottom: -1px;
    right: 0;
    height: 1px;
    border-bottom: 1px solid rgb(var(--cr-line-bottom-color));
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(var(--cr-line-scale));
    transform: scaleY(var(--cr-line-scale));
  }

  .cr-user-select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  ${mk(7, (i) => `.cr-box-shadow-${i} {box-shadow: var(--cr-box-shadow-${i})}`)}

  @keyframes cr-page-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes cr-page-fade-out {
    100% {
      opacity: 0;
    }
    0% {
      opacity: 1;
    }
  }
  @keyframes cr-page-push {
    0% {
      transform: translateX(var(--cr-page-push-unit));
    }
    100% {
      transform: translateX(0px);
    }
  }

  @keyframes cr-page-pop {
    100% {
      transform: translateX(var(--cr-page-push-unit));
    }
    0% {
      transform: translateX(0px);
    }
  }

  @keyframes cr-page-move-up {
    0% {
      opacity: 0;
      transform: translateY(var(--cr-page-push-unit));
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes cr-page-move-down {
    100% {
      opacity: 0;
      transform: translateY(var(--cr-page-push-unit));
    }
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .cr-page-pop {
    animation: var(--cr-page-pop-animation);
  }
  .cr-page-push {
    animation: var(--cr-page-push-animation);
  }
  .cr-page-fade-in {
    animation: var(--cr-page-fade-in-animation);
  }
  .cr-page-fade-out {
    animation: var(--cr-page-fade-out-animation);
  }
  .cr-page-move-up {
    animation: var(--cr-page-move-up-animation);
  }
  .cr-page-move-down {
    animation: var(--cr-page-move-down-animation);
  }

  .cr-safe-top {
    padding-top: var(--cr-safe-top);
  }
  .cr-safe-bottom {
    padding-bottom: var(--cr-safe-bottom);
  }
  .cr-safe-left {
    padding-left: var(--cr-safe-left);
  }
  .cr-safe-right {
    padding-right: var(--cr-safe-right);
  }
  .cr-bg-color {
    background: rgb(var(--cr-bg-color));
  }
  .cr-gray-color {
    background: rgb(var(--cr-gray-color));
  }
  .cr-side-color {
    background: rgb(var(--cr-side-color));
  }
  [data-simplebar] {
    -webkit-overflow-scrolling: touch;
  }

  /* desktop */
  @media screen and (min-width: 641px) {
    [data-simplebar]::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
`("cross-bem-base");
