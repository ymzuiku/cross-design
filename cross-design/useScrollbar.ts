import { useState, useRef, useCallback } from "react";
import css from "vanilla-cssjs";
import useSSRLayoutEffect from "./useSSRLayoutEffect";

const mini = "use-scrollbar";
const hidden = "use-scrollbar-hidden";
const miniHidden = mini + " " + hidden;

const bem = css`
  @media screen and (min-width: 641px) {
    :root {
      --use-scrollbar-track: rgba(100, 101, 105, 0);
      --use-scrollbar-thumb: rgba(100, 101, 105, 0.25);
      --use-scrollbar-thumb-hover: rgba(100, 101, 105, 0.5);
      --use-scrollbar-size: 6px;
    }
    .${mini} {
      -webkit-overflow-scrolling: touch;
    }
    .${mini}::-webkit-scrollbar {
      width: var(--use-scrollbar-size);
      height: var(--use-scrollbar-size);
    }
    .${mini}::-webkit-scrollbar-track {
      background: var(--use-scrollbar-track);
    }
    .${mini}::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: var(--use-scrollbar-thumb);
    }
    .${mini}::-webkit-scrollbar-thumb:hover {
      background: var(--use-scrollbar-thumb-hover);
    }
    .${hidden}::-webkit-scrollbar-thumb {
      background: rgba(100, 100, 100, 0) !important;
    }
  }
`("cr-use-scrolbar");

export default function useScrollbar(isFistShow?: boolean) {
  useSSRLayoutEffect(bem.init, []);
  const [className, setClassName] = useState(isFistShow ? mini : miniHidden);
  const ref = useRef({} as any);
  return {
    className,
    onMouseEnter: useCallback((e: any) => {
      ref.current = true;
      if (className !== mini) {
        setClassName(mini);
      }
    }, []),
    onMouseLeave: useCallback((e: any) => {
      ref.current = false;
      setTimeout(() => {
        if (!ref.current) {
          if (className !== miniHidden) {
            setClassName(miniHidden);
          }
        }
      }, 350);
    }, []),
  };
}
