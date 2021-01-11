let isInited = false;

export default () => {
  if (isInited) {
    return;
  }
  isInited = true;
  document.addEventListener("gesturestart", function (event: any) {
    event.preventDefault();
  });
};

export function stopTouchMove(e: Event) {
  e.stopPropagation();
  e.preventDefault();
}
