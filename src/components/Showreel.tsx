"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

export default function Showreel() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* =====================================================
      VIDEO REVEAL
  ====================================================== */

  const reveal = useTransform(
    scrollYProgress,
    [0.04, 0.28],
    [0, 1]
  );

  const videoScale = useTransform(
    scrollYProgress,
    [0.25, 0.82],
    [1, 1.06]
  );

  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.88, 1],
    [0, 1, 1, 0]
  );

  /* =====================================================
      TYPOGRAPHY
  ====================================================== */

  const titleOpacity = useTransform(
    scrollYProgress,
    [0.16, 0.32, 0.8, 0.94],
    [0, 1, 1, 0]
  );

  const titleY = useTransform(
    scrollYProgress,
    [0.16, 0.38, 0.82],
    ["6vh", "0vh", "-2vh"]
  );

  /* =====================================================
      META
  ====================================================== */

  const metaOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.34, 0.8, 0.92],
    [0, 1, 1, 0]
  );

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["5vh", "-8vh"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[175vh] bg-[#070707] text-white md:h-[190vh]"
    >
      <div className="sticky top-0 h-[100dvh] overflow-hidden bg-[#070707]">

        {/* =====================================================
            BACKGROUND DEPTH
        ====================================================== */}

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(8,13,104,0.30) 0%, rgba(8,13,104,0.10) 30%, rgba(7,7,7,0) 68%)",
          }}
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[4vw] top-[5vh] font-display text-[54vw] leading-none tracking-[-0.1em] text-white/[0.018] md:text-[36vw] lg:text-[28vw]"
          style={{
            y: backgroundY,
          }}
        >
          30
        </motion.div>

        {/* =====================================================
            TOP META
        ====================================================== */}

        <motion.div
          className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 pt-24 md:px-10 md:pt-28 lg:px-14"
          style={{
            opacity: metaOpacity,
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-[5px] w-[5px] rounded-full bg-tc-coral" />

            <span className="text-[7px] uppercase tracking-[0.28em] text-white/40 md:text-[8px]">
              Live Entertainment
            </span>
          </div>

          <span className="text-[7px] uppercase tracking-[0.28em] text-white/30 md:text-[8px]">
            TresCero
          </span>
        </motion.div>

        {/* =====================================================
            VIDEO
        ====================================================== */}

        <div className="absolute inset-0 z-10 flex items-center justify-center">

          {/* DESKTOP */}

          <motion.div
            className="relative hidden h-[74vh] w-[31vw] max-w-[520px] overflow-hidden md:block"
            style={{
              opacity: videoOpacity,
              scaleX: reveal,
              transformOrigin: "center",
            }}
          >
            <motion.video
              src="/media/showreel/showreel.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                scale: videoScale,
              }}
            />

            <div className="pointer-events-none absolute inset-0 bg-tc-blue/10 mix-blend-color" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />
          </motion.div>

          {/* MOBILE */}

          <motion.div
            className="relative h-[68vh] w-[72vw] overflow-hidden md:hidden"
            style={{
              opacity: videoOpacity,
              scaleX: reveal,
              transformOrigin: "center",
            }}
          >
            <motion.video
              src="/media/showreel/showreel.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                scale: videoScale,
              }}
            />

            <div className="pointer-events-none absolute inset-0 bg-tc-blue/10 mix-blend-color" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          </motion.div>
        </div>

        {/* =====================================================
            MAIN TYPOGRAPHY
        ====================================================== */}

        <motion.div
          className="pointer-events-none absolute inset-0 z-20 flex items-center"
          style={{
            opacity: titleOpacity,
            y: titleY,
          }}
        >
          <div className="w-full px-6 md:px-10 lg:px-14">

            <div className="mx-auto max-w-[1700px]">

              {/* WE CREATE */}

              <span className="block whitespace-nowrap font-display text-[16vw] leading-[0.78] tracking-[-0.075em] text-white md:text-[11.5vw] lg:text-[9.2vw]">
                WE CREATE
              </span>

              {/* SMALL DIVIDER */}

              <div className="my-[3.2vh] flex items-center gap-5 md:my-[2.5vh] md:gap-8">
                <div className="h-px flex-1 bg-white/20" />

                <span className="shrink-0 text-[6px] uppercase tracking-[0.42em] text-white/40 md:text-[7px]">
                  Live
                </span>

                <div className="h-px flex-1 bg-white/20" />
              </div>

              {/* THE MOMENT */}

              <span className="block whitespace-nowrap text-right font-display text-[14.3vw] leading-[0.78] tracking-[-0.075em] text-tc-coral md:text-[10.6vw] lg:text-[8.5vw]">
                THE MOMENT.
              </span>

            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM META
        ====================================================== */}

        <motion.div
          className="absolute inset-x-0 bottom-0 z-30 px-6 pb-7 md:px-10 md:pb-9 lg:px-14"
          style={{
            opacity: metaOpacity,
          }}
        >
          <div className="flex items-end justify-between border-t border-white/10 pt-3">

            <span className="max-w-[160px] text-[7px] uppercase leading-[1.6] tracking-[0.22em] text-white/30 md:max-w-none md:text-[8px]">
              Artists / Stages / Audiences
            </span>

            <span className="text-right text-[7px] uppercase tracking-[0.25em] text-tc-coral/70 md:text-[8px]">
              Creating Experiences
            </span>

          </div>
        </motion.div>

      </div>
    </section>
  );
}