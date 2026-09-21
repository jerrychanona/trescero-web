"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
} from "motion/react";

export default function SiteExperience() {
  const { scrollYProgress } = useScroll();

  /* =====================================================
      SCROLL PROGRESS
  ====================================================== */

  const progress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.35,
  });

  /* =====================================================
      CURSOR
  ====================================================== */

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const smoothX = useSpring(cursorX, {
    stiffness: 500,
    damping: 38,
    mass: 0.18,
  });

  const smoothY = useSpring(cursorY, {
    stiffness: 500,
    damping: 38,
    mass: 0.18,
  });

  const [interactive, setInteractive] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [canHover, setCanHover] = useState(false);

  const interactiveRef = useRef(false);

  /* =====================================================
      DESKTOP / POINTER DETECTION
  ====================================================== */

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 1024px)"
    );

    const updateDevice = () => {
      setCanHover(media.matches);
    };

    updateDevice();

    media.addEventListener("change", updateDevice);

    return () => {
      media.removeEventListener("change", updateDevice);
    };
  }, []);

  /* =====================================================
      CURSOR EVENTS
  ====================================================== */

  useEffect(() => {
    if (!canHover) return;

    const interactiveSelector = [
      "a",
      "button",
      '[role="button"]',
      "input",
      "textarea",
      "select",
      "[data-cursor-interactive]",
    ].join(",");

    const handleMouseMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);

      setCursorVisible(true);

      const target = event.target;

      if (!(target instanceof Element)) return;

      const nextInteractive = Boolean(
        target.closest(interactiveSelector)
      );

      if (interactiveRef.current !== nextInteractive) {
        interactiveRef.current = nextInteractive;
        setInteractive(nextInteractive);
      }
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
      interactiveRef.current = false;
      setInteractive(false);
    };

    const handleMouseEnter = () => {
      setCursorVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    document.documentElement.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
    };
  }, [canHover, cursorX, cursorY]);

  return (
    <>
      {/* =====================================================
          CINEMATIC GRAIN

          IMPORTANTE:
          z-20 para mantenerse debajo del Header.
      ====================================================== */}

      <div
        className="pointer-events-none fixed inset-0 z-20 opacity-[0.025]"
        aria-hidden="true"
      >
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="trescero-global-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>

          <rect
            width="100%"
            height="100%"
            filter="url(#trescero-global-grain)"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* =====================================================
          EDITORIAL CURSOR
          DESKTOP ONLY

          z-50 / z-51:
          encima del contenido,
          debajo del Header y menú.
      ====================================================== */}

      {canHover && (
        <>
          {/* OUTER RING */}

          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center rounded-full border border-white/45 mix-blend-difference"
            style={{
              x: smoothX,
              y: smoothY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              width: interactive ? 54 : 26,
              height: interactive ? 54 : 26,
              opacity: cursorVisible ? 1 : 0,
              borderColor: interactive
                ? "rgba(255,255,255,0.9)"
                : "rgba(255,255,255,0.45)",
            }}
            transition={{
              width: {
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              },
              height: {
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 0.18,
              },
              borderColor: {
                duration: 0.2,
              },
            }}
            aria-hidden="true"
          >
            <motion.span
              className="text-[6px] font-medium uppercase tracking-[0.18em] text-white"
              animate={{
                opacity: interactive ? 1 : 0,
                scale: interactive ? 1 : 0.75,
              }}
              transition={{
                duration: 0.18,
              }}
            >
              OPEN
            </motion.span>
          </motion.div>

          {/* CENTER DOT */}

          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[51] h-[5px] w-[5px] rounded-full bg-tc-coral"
            style={{
              x: smoothX,
              y: smoothY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              opacity: cursorVisible ? 1 : 0,
              scale: interactive ? 0 : 1,
            }}
            transition={{
              duration: 0.18,
            }}
            aria-hidden="true"
          />
        </>
      )}

      {/* =====================================================
          SCROLL PROGRESS

          z-60:
          visible sobre el sitio,
          pero debajo del Header.
      ====================================================== */}

      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          className="h-full w-full origin-left bg-tc-coral"
          style={{
            scaleX: progress,
          }}
        />
      </div>
    </>
  );
}