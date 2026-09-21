"use client";

import { motion } from "motion/react";

const lines = [
  { text: "MÚSICA.", accent: false },
  { text: "TALENTO.", accent: false },
  { text: "EXPERIENCIAS.", accent: true },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-tc-blue px-5 pb-8 pt-24 sm:min-h-screen sm:px-6 sm:pb-10 md:px-10 md:pb-14 lg:px-14 lg:pb-16">
      {/* VIDEO */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/media/hero/hero-desktop.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* TRATAMIENTO DE COLOR */}
      <div className="absolute inset-0 bg-tc-blue/55" />

      {/* DEGRADADOS */}
      <div className="absolute inset-0 bg-gradient-to-r from-tc-blue/80 via-tc-blue/35 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-tc-blue/65 via-transparent to-tc-blue/20" />

      {/* CONTENIDO */}
      <div className="relative z-10 w-full">
        <h1
          className="font-display text-[11vw] leading-[0.88] tracking-[-0.05em] sm:text-[clamp(4rem,11vw,10rem)] sm:leading-[0.82] sm:tracking-[-0.06em]"
          aria-label="Música. Talento. Experiencias."
        >
          {lines.map((line, index) => (
            <span
              key={line.text}
              className="block overflow-hidden pb-[0.06em]"
            >
              <motion.span
                className={`block ${
                  line.accent ? "text-tc-coral" : "text-white"
                }`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* LEMA */}
        <motion.div
          className="mt-6 flex items-center gap-3 sm:mt-7 md:mt-9"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="h-px w-7 shrink-0 bg-tc-coral sm:w-8" />

          <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/65 sm:text-[10px] sm:tracking-[0.24em] md:text-[11px]">
            Creando experiencias
          </p>
        </motion.div>
      </div>
    </section>
  );
}