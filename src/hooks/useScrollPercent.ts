import { useEffect, useRef, useState } from "react";

type ScrollTarget = string | HTMLElement | Window;

interface ScrollInfo {
  scrollPercentage: number;
  isScrollingUp: boolean;
  scrollLength: {
    total: number; // total scrollable area (px)
    current: number; // current scroll position (px)
    relativeToScreenHeight: number; // % of current scroll relative to viewport height
  };
}

/**
 * Tracks the scroll progress of an element and direction, returning rich scroll info.
 *
 * @param {string | HTMLElement | Window} targetElement - Optional selector, element, or window to observe.
 */
export default function useScrollPercent(
  targetElement: ScrollTarget = window
): ScrollInfo {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [scrollLength, setScrollLength] = useState({
    total: 0,
    current: 0,
    relativeToScreenHeight: 0,
  });

  const prevScrollTopRef = useRef(0);

  useEffect(() => {
    let element: HTMLElement | Window | null = null;

    // Resolve element (selector, HTMLElement, or window)
    if (typeof targetElement === "string") {
      const found = document.querySelector(targetElement);
      if (found instanceof HTMLElement) {
        element = found;
      } else {
        element = window;
      }
    } else {
      element = targetElement;
    }

    if (!element) return;

    const handleScroll = (): void => {
      let scrollTop: number, scrollHeight: number, clientHeight: number;

      if (element === window) {
        scrollTop =
          window.scrollY ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        scrollHeight = document.documentElement.scrollHeight;
        clientHeight = document.documentElement.clientHeight;
      } else {
        const el = element as HTMLElement;
        scrollTop = el.scrollTop;
        scrollHeight = el.scrollHeight;
        clientHeight = el.clientHeight;
      }

      // Calculate scroll stats
      const newScrollPercentage = Math.floor(
        (scrollTop / (scrollHeight - clientHeight)) * 100
      );
      const newScrollLength = {
        total: scrollHeight - clientHeight,
        current: scrollTop,
        relativeToScreenHeight: Math.min(
          Math.floor((scrollTop / clientHeight) * 100),
          100
        ),
      };

      // Direction detection
      const isUp = scrollTop < prevScrollTopRef.current;

      // Update states only if changed
      if (newScrollPercentage !== scrollPercentage)
        setScrollPercentage(newScrollPercentage);

      if (isUp !== isScrollingUp) setIsScrollingUp(isUp);

      setScrollLength(newScrollLength);

      // Store current position
      prevScrollTopRef.current = scrollTop;
    };

    const target = element === window ? window : element;
    target.addEventListener("scroll", handleScroll, { passive: true });

    // Initialize immediately (in case already scrolled)
    handleScroll();

    return () => target.removeEventListener("scroll", handleScroll);
  }, [targetElement, scrollPercentage, isScrollingUp]);

  return {
    scrollPercentage,
    isScrollingUp,
    scrollLength,
  };
}
