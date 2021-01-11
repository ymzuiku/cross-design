import css from "vanilla-cssjs";

let code = "";

if (typeof document !== "undefined") {
  const mk = (len: number, fn: (i: number) => string) => {
    let label = "";
    for (let i = 0; i < len; i++) {
      label += fn(i) + "\n";
    }
    code += label;
  };

  const sampleFlex = () => {
    let liA = ["start", "center", "end", "between"];
    let liB = ["start", "center", "end"];
    let match = {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      between: "space-between",
      around: "space-around",
    };
    liA.forEach((a) => {
      liB.forEach((b) => {
        code += `.cr-${a}-${b} { justify-content: ${match[a]}; align-items: ${match[b]}; }`;
      });
    });
  };
  const samplePx = (name: string) => {
    mk(7, (i) => `.cr-${name}-${i}r {${name}:var(--cr-space-${i})}`);
    mk(101, (i) => `.cr-${name}-${i} {${name}:${i}%}`);
    mk(101, (i) => `.cr-${name}-${i}px {${name}:${i}px}`);
    mk(10, (i) => `.cr-${name}-${i}00px {${name}:${i}00px}`);
  };

  sampleFlex();
  samplePx("width");
  samplePx("min-width");
  samplePx("max-width");
  samplePx("height");
  samplePx("min-height");
  samplePx("max-height");
  samplePx("margin");
  samplePx("margin-top");
  samplePx("margin-left");
  samplePx("margin-bottom");
  samplePx("margin-right");
  samplePx("padding");
  samplePx("padding-top");
  samplePx("padding-left");
  samplePx("padding-bottom");
  samplePx("padding-right");
  mk(
    7,
    (i) =>
      `.cr-space-${i} {width:var(--cr-space-${i});height: var(--cr-space-${i})`
  );
}

export default css(code)("cross-bem-unit");
