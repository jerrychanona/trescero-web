"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function LiveTransition() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const talentX = useTransform(
    scrollYProgress,
    [0, 1],
    ["12vw", "-18vw"]
  );

  const liveX = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10vw", "8vw"]
  );

  const lineScale = useTransform(
    scrollYProgress,
    [0.15, 0.55],
    [0, 1]
  );

  const numberY = useTransform(
    scrollYProgress,
    [0, 1],
    ["10%", "-15%"]
  );

  return (
    <section
      ref={sectionRef}
      aria-hidden="true"
      className="relative h-[62vh] min-h-[440px] overflow-hidden bg-tc-blue text-white md:h-[72vh] lg:h-[82vh]"
    >
      {/* SUBTLE BACKGROUND NUMBER */}

      <motion.div
        className="pointer-events-none absolute -right-[3vw] top-1/2 font-display text-[70vw] leading-none tracking-[-0.1em] text-white/[0.025] md:text-[50vw] lg:text-[38vw]"
        style={{
          y: numberY,
          translateY: "-50%",
        }}
      >
        03
      </motion.div>

      {/* TOP META */}

      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 pt-8 md:px-10 md:pt-10 lg:px-14">
        <div className="flex items-center gap-3">
          <span className="h-[5px] w-[5px] rounded-full bg-tc-coral" />

          <span className="text-[7px] uppercase tracking-[0.28em] text-white/45 md:text-[8px]">
            Talent
          </span>
        </div>

        <span className="text-[7px] uppercase tracking-[0.28em] text-white/35 md:text-[8px]">
          Live Entertainment
        </span>
      </div>

      {/* MAIN TYPOGRAPHY */}

      <div className="absolute inset-0 flex flex-col justify-center">
        {/* TALENT */}

        <motion.div
          style={{ x: talentX }}
          className="whitespace-nowrap"
        >
          <span className="block font-display text-[25vw] leading-[0.72] tracking-[-0.075em] text-white md:text-[20vw] lg:text-[16vw]">
            TALENT
          </span>
        </motion.div>

        {/* MIDDLE */}

        <div className="relative my-[5vh] flex items-center px-6 md:my-[4vh] md:px-10 lg:px-14">
          <motion.div
            className="h-px flex-1 origin-left bg-white/25"
            style={{
              scaleX: lineScale,
            }}
          />

          <span className="mx-5 text-[7px] uppercase tracking-[0.4em] text-white/45 md:mx-8 md:text-[8px]">
            Becomes
          </span>

          <motion.div
            className="h-px flex-1 origin-right bg-white/25"
            style={{
              scaleX: lineScale,
            }}
          />
        </div>

        {/* LIVE */}

        <motion.div
          style={{ x: liveX }}
          className="flex justify-end whitespace-nowrap pr-[6vw]"
        >
          <span className="block font-display text-[27vw] leading-[0.72] tracking-[-0.075em] text-tc-coral md:text-[21vw] lg:text-[17vw]">
            LIVE.
          </span>
        </motion.div>
      </div>

      {/* BOTTOM */}

      <div className="absolute inset-x-0 bottom-0 px-6 pb-7 md:px-10 md:pb-9 lg:px-14">
        <div className="flex items-end justify-between border-t border-white/15 pt-3">
          <span className="max-w-[170px] text-[7px] uppercase leading-[1.6] tracking-[0.22em] text-white/35 md:max-w-none md:text-[8px]">
            Artists / Stages / Audiences
          </span>

          <span className="text-[7px] uppercase tracking-[0.25em] text-tc-coral md:text-[8px]">
            TresCero
          </span>
        </div>
      </div>
    </section>
  );
}