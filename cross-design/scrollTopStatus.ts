// const cache = { save: false } as { save: boolean; [key: string]: any };
const cache = {} as { [key: string]: { index: number; top: number } };
let saved = false;
let lastHref = "";

const scrollTopStatus = {
  save: (ele: HTMLElement) => {
    saved = true;
    if (ele) {
      cache[window.location.href] = {
        index: Object.keys(cache).length,
        top: ele.scrollTop,
      };
      lastHref = window.location.href;
    }
  },
  replace: (ele: HTMLElement): Promise<number> => {
    return new Promise((res) => {
      if (ele) {
        requestAnimationFrame(() => {
          const data = cache[window.location.href];
          let top = data ? data.top : 0;
          ele.scrollTo(0, top);
          res(top);
        });
      }
    });
  },
  getLastTop: () => {
    if (saved) {
      const data = cache[window.location.href];
      if (data) {
        return data.top;
      }
      return 0;
    }
    return 0;
  },
  clearnNowPageTop: () => {
    delete cache[window.location.href];
  },
};

export default scrollTopStatus;
