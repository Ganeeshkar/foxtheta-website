import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

// Each scene owns one timeline. It plays on its own whenever it is on screen
// and the tab is visible; the visitor can still pause it at any time.
export default function useDiagramMotion(root, build, steps) {
  const timeline = useRef(null);
  const visible = useRef(false);
  const pausedRef = useRef(false);
  const activeRef = useRef(-1);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const element = root.current;
    const updatePlayback = () => {
      const shouldPlay = visible.current && !document.hidden && !pausedRef.current;
      timeline.current?.paused(!shouldPlay);
    };
    const context = gsap.context(() => {
      const tl = build(element);
      timeline.current = tl;
      tl.eventCallback("onUpdate", () => {
        const time = tl.time();
        element.style.setProperty("--scene-progress", (time / tl.duration()).toFixed(4));
        const index = Math.max(0, steps.findLastIndex(step => time >= step.time));
        if (index !== activeRef.current) {
          activeRef.current = index;
          setActive(index);
        }
      });
    }, element);
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting && entry.intersectionRatio >= 0.15;
      updatePlayback();
    }, { threshold: 0.15 });
    observer.observe(element);
    document.addEventListener("visibilitychange", updatePlayback);
    updatePlayback();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      context.revert();
      timeline.current = null;
    };
  }, [root, build, steps]);

  function toggle() {
    pausedRef.current = !pausedRef.current;
    setPaused(pausedRef.current);
    timeline.current?.paused(pausedRef.current || !visible.current || document.hidden);
  }

  function select(index) {
    pausedRef.current = true;
    setPaused(true);
    timeline.current?.pause().seek(steps[index].time + 1.1);
    activeRef.current = index;
    setActive(index);
  }

  return { active, paused, toggle, select };
}

export function signal(timeline, root, selector, time, duration = 1.2) {
  const paths = root.querySelectorAll(selector);
  timeline.fromTo(paths,
    { opacity: 0, strokeDashoffset: 5 },
    { opacity: 1, strokeDashoffset: -95, duration, ease: "none" }, time)
    .to(paths, { opacity: 0, duration: 0.15 }, time + duration);
}
