"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

export default function ContactTransition() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["12vh", "0vh", "-10vh"]
  );

  const titleScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.92, 1, 1.05]
  );

  const titleOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.3, 0.72, 0.95],
    [0, 1, 1, 0]
  );

  const lineScale = useTransform(
    scrollYProgress,
    [0.18, 0.65],
    [0, 1]
  );

  const backgroundTextX = useTransform(
    scrollYProgress,
    [0, 1],
    ["5vw", "-18vw"]
  );

  const indexY = useTransform(
    scrollYProgress,
    [0, 1],
    ["20%", "-20%"]
  );

  return (
    <section
      ref={sectionRef}
      aria-hidden="true"
      className="relative h-[58vh] min-h-[400px] overflow-hidden bg-[#090909] text-white md:h-[68vh] lg:h-[74vh]"
    >
      {/* =====================================================
          BACKGROUND TYPOGRAPHY
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute left-0 top-1/2 whitespace-nowrap font-display text-[36vw] leading-none tracking-[-0.09em] text-white/[0.025] md:text-[27vw] lg:text-[21vw]"
        style={{
          x: backgroundTextX,
          translateY: "-50%",
        }}
      >
        EXPERIENCES
      </motion.div>

      {/* =====================================================
          LARGE INDEX
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute -right-[2vw] top-[10%] font-display text-[50vw] leading-none tracking-[-0.09em] text-white/[0.025] md:text-[34vw] lg:text-[26vw]"
        style={{
          y: indexY,
        }}
      >
        05
      </motion.div>

      {/* =====================================================
          TOP META
      ====================================================== */}

      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 pt-8 md:px-10 md:pt-10 lg:px-14">
        <div className="flex items-center gap-3">
          <span className="h-[5px] w-[5px] rounded-full bg-tc-coral" />

          <span className="text-[7px] uppercase tracking-[0.28em] text-white/40 md:text-[8px]">
            From idea
          </span>
        </div>

        <span className="text-[7px] uppercase tracking-[0.28em] text-white/30 md:text-[8px]">
          To experience
        </span>
      </div>

      {/* =====================================================
          MAIN STATEMENT
      ====================================================== */}

      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10 lg:px-14">
        <motion.div
          className="relative w-full"
          style={{
            y: titleY,
            scale: titleScale,
            opacity: titleOpacity,
          }}
        >
          <div className="mx-auto max-w-[1500px]">
            <span className="block font-display text-[16vw] leading-[0.78] tracking-[-0.075em] text-white md:text-[12vw] lg:text-[9vw]">
              IDEAS
            </span>

            <div className="my-[2.5vh] flex items-center gap-4 md:gap-7">
              <motion.div
                className="h-px flex-1 origin-left bg-tc-coral"
                style={{
                  scaleX: lineScale,
                }}
              />

              <span className="shrink-0 text-[7px] uppercase tracking-[0.38em] text-white/35 md:text-[8px]">
                Become
              </span>
            </div>

            <span className="block text-right font-display text-[15vw] leading-[0.78] tracking-[-0.075em] text-tc-coral md:text-[11vw] lg:text-[8.3vw]">
              EXPERIENCES.
            </span>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM META
      ====================================================== */}

      <div className="absolute inset-x-0 bottom-0 px-6 pb-7 md:px-10 md:pb-9 lg:px-14">
        <div className="flex items-end justify-between border-t border-white/10 pt-3">
          <span className="text-[7px] uppercase tracking-[0.22em] text-white/30 md:text-[8px]">
            Strategy / Talent / Production
          </span>

          <div className="flex items-center gap-3">
            <span className="text-[7px] uppercase tracking-[0.25em] text-white/30 md:text-[8px]">
              TresCero
            </span>

            <span className="h-[5px] w-[5px] rounded-full bg-tc-coral" />
          </div>
        </div>
      </div>
    </section>
  );
}