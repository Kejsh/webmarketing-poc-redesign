"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealMode = "hero" | "section";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
  mode?: ScrollRevealMode;
  threshold?: number;
};

export function ScrollReveal({
  children,
  className,
  id,
  mode = "section",
  threshold = 0.2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(mode === "hero");
  const [isReady, setIsReady] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (mode === "hero") {
          if (!entry.isIntersecting) {
            setIsReady(true);
            setIsVisible(false);
            return;
          }

          setIsVisible(true);
          return;
        }

        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [mode, threshold]);

  return (
    <section
      ref={ref}
      id={id}
      className={className}
      data-reveal={mode}
      data-reveal-mounted={String(isMounted)}
      data-reveal-ready={mode === "hero" ? String(isReady) : undefined}
      data-reveal-state={isVisible ? "visible" : "hidden"}
    >
      {children}
    </section>
  );
}
