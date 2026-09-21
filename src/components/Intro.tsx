"use client";

import { motion } from "motion/react";

export default function Intro() {
  return (
    <section
      id="about-intro"
      className="relative overflow-hidden bg-tc-off-white text-tc-black"
    >
      <div className="px-5 py-14 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-14 lg:py-32">
        {/* EYEBROW */}
        <motion.p
          className="mb-8 text-[9px] font-medium uppercase tracking-[0.22em] text-tc-gray sm:text-[10px] md:mb-12 md:text-[11px]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          TresCero Entertainment
        </motion.p>

        {/* TITLE */}
        <div>
          <motion.h2
            className="font-display text-[10vw] leading-[0.9] tracking-[-0.045em] sm:text-[clamp(4rem,10.5vw,11rem)] sm:leading-[0.82] sm:tracking-[-0.06em]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            CREANDO
          </motion.h2>

          <motion.h2
            className="font-display text-[10vw] leading-[0.9] tracking-[-0.045em] text-tc-coral sm:text-[clamp(4rem,10.5vw,11rem)] sm:leading-[0.82] sm:tracking-[-0.06em]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            EXPERIENCIAS.
          </motion.h2>
        </div>

        {/* STATEMENT */}
        <motion.div
          className="mt-10 flex justify-end sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="w-full max-w-xl border-t border-black/15 pt-5">
            <p className="text-[15px] leading-[1.45] tracking-[-0.02em] sm:text-xl md:text-2xl lg:text-3xl">
              Somos TresCero. Una compañía mexicana de entretenimiento que
              conecta talento, escenarios y audiencias.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}