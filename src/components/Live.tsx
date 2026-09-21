"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 4V20M12 20L6 14M12 20L18 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export default function Live() {
  return (
    <section id="live" className="relative overflow-hidden bg-[#090909] text-white">

      {/* =====================================================
          LIVE — INTRO
      ====================================================== */}

      <div className="relative px-5 pb-20 pt-28 sm:px-6 md:px-10 md:pb-28 md:pt-36 lg:px-14">
        <motion.div
          className="flex items-center justify-between border-t border-white/15 pt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[7px] uppercase tracking-[0.28em] text-white/40 md:text-[8px]">
            02 / Live
          </span>

          <span className="text-[7px] uppercase tracking-[0.28em] text-white/40 md:text-[8px]">
            TresCero Entertainment
          </span>
        </motion.div>

        <motion.h2
          className="mt-12 font-display text-[27vw] leading-[0.72] tracking-[-0.09em] sm:text-[23vw] md:mt-16 md:text-[18vw] lg:text-[16vw]"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
        >
          LIVE<span className="text-tc-coral">.</span>
        </motion.h2>

        <motion.div
          className="mt-10 grid gap-8 border-t border-white/15 pt-5 md:mt-14 md:grid-cols-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <p className="max-w-[430px] text-[10px] leading-[1.75] text-white/45 md:col-span-4 md:text-[11px]">
            Del escenario a la audiencia. Creamos, producimos y desarrollamos
            experiencias en vivo diseñadas para permanecer.
          </p>

          <span className="text-[7px] uppercase tracking-[0.25em] text-white/30 md:col-span-3 md:col-start-10 md:text-right md:text-[8px]">
            Music / Stage / Audience
          </span>
        </motion.div>
      </div>

      {/* =====================================================
          ACT 01 — FROM STAGE TO AUDIENCE
          RICKY 2
      ====================================================== */}

      <div className="relative min-h-screen overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.07 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 2.2, ease }}
        >
          <Image
            src="/media/live/ricky2.jpg"
            alt="Concierto en vivo"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25" />

        <div className="absolute left-5 right-5 top-7 z-20 flex items-center justify-between sm:left-6 sm:right-6 md:left-10 md:right-10 lg:left-14 lg:right-14">
          <span className="text-[7px] uppercase tracking-[0.28em] text-white/50 md:text-[8px]">
            01 / Live
          </span>

          <span className="text-[7px] uppercase tracking-[0.28em] text-white/50 md:text-[8px]">
            Stage / Audience
          </span>
        </div>

        <div className="relative z-10 flex min-h-screen items-end px-5 pb-14 sm:px-6 md:px-10 md:pb-16 lg:px-14">
          <motion.h3
            className="font-display text-[15vw] leading-[0.77] tracking-[-0.075em] sm:text-[13vw] md:text-[9vw] lg:text-[8.2vw]"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease }}
          >
            FROM STAGE
            <br />
            TO <span className="text-tc-coral">AUDIENCE.</span>
          </motion.h3>
        </div>
      </div>

      {/* =====================================================
          ACT 02 — THE CONNECTION
          AUDIENCE + SIN BANDERA
      ====================================================== */}

      <div className="relative bg-[#090909] px-5 py-24 sm:px-6 md:px-10 md:py-32 lg:px-14 lg:py-36">
        <div className="flex items-center justify-between border-t border-white/15 pt-3">
          <span className="text-[7px] uppercase tracking-[0.28em] text-white/35 md:text-[8px]">
            02 / Connection
          </span>

          <span className="text-[7px] uppercase tracking-[0.28em] text-white/35 md:text-[8px]">
            Artists / Audiences
          </span>
        </div>

        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
        >
          <h3 className="font-display text-[16vw] leading-[0.76] tracking-[-0.075em] sm:text-[13vw] md:text-[8.5vw] lg:text-[7.7vw]">
            ARTISTS.
            <br />
            <span className="text-tc-coral">AUDIENCES.</span>
          </h3>
        </motion.div>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-12 md:gap-5">
          {/* AUDIENCE */}

          <motion.div
            className="relative aspect-[4/5] overflow-hidden md:col-span-5 md:aspect-[4/5]"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
          >
            <motion.div
              className="absolute inset-0"
              whileInView={{ scale: [1.05, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease }}
            >
              <Image
                src="/media/live/rickypublico1.jpg"
                alt="Audiencia en concierto"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5">
              <span className="text-[7px] uppercase tracking-[0.25em] text-white/60">
                The Audience
              </span>
            </div>
          </motion.div>

          {/* SIN BANDERA */}

          <motion.div
            className="relative aspect-[4/3] overflow-hidden md:col-span-7 md:mt-24 md:aspect-[16/10]"
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
          >
            <motion.div
              className="absolute inset-0"
              whileInView={{ scale: [1.05, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease }}
            >
              <Image
                src="/media/live/sinbandera1.JPG"
                alt="Artistas sobre el escenario"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

            <div className="absolute bottom-5 left-5">
              <span className="text-[7px] uppercase tracking-[0.25em] text-white/60">
                The Artists
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex justify-end border-t border-white/15 pt-4 md:mt-14">
          <p className="max-w-[380px] text-[10px] leading-[1.7] text-white/40 md:text-[11px]">
            El escenario cobra sentido cuando el artista y la audiencia
            comparten el mismo momento.
          </p>
        </div>
      </div>

      {/* =====================================================
          ACT 03 — THE STAGE
          LEONEL + MORAT
      ====================================================== */}

      <div className="relative overflow-hidden bg-tc-blue px-5 py-24 sm:px-6 md:px-10 md:py-32 lg:px-14 lg:py-36">
        <div className="flex items-center justify-between border-t border-white/20 pt-3">
          <span className="text-[7px] uppercase tracking-[0.28em] text-white/45 md:text-[8px]">
            03 / The Stage
          </span>

          <span className="text-[7px] uppercase tracking-[0.28em] text-white/45 md:text-[8px]">
            Live Experiences
          </span>
        </div>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-12">
          {/* LEONEL */}

          <motion.div
            className="relative aspect-[4/5] overflow-hidden md:col-span-5"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
          >
            <Image
              src="/media/live/leonel1.jpg"
              alt="Artista en concierto"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5">
              <span className="text-[7px] uppercase tracking-[0.25em] text-white/60">
                Live / Performance
              </span>
            </div>
          </motion.div>

          {/* TEXT */}

          <motion.div
            className="flex flex-col justify-center py-10 md:col-span-7 md:py-0 md:pl-[4vw]"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
          >
            <span className="mb-5 text-[7px] uppercase tracking-[0.28em] text-white/40 md:text-[8px]">
              Energy / Emotion / Connection
            </span>

            <h3 className="font-display text-[14vw] leading-[0.77] tracking-[-0.075em] sm:text-[11vw] md:text-[7.2vw] lg:text-[6.5vw]">
              THE STAGE
              <br />
              IS <span className="text-tc-coral">ALIVE.</span>
            </h3>
          </motion.div>
        </div>

        {/* MORAT WIDE */}

        <motion.div
          className="relative mt-5 aspect-[4/3] overflow-hidden md:mt-8 md:aspect-[16/7]"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease }}
        >
          <motion.div
            className="absolute inset-0"
            whileInView={{ scale: [1.05, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease }}
          >
            <Image
              src="/media/live/morat1.jpg"
              alt="Experiencia de concierto en vivo"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

          <div className="absolute inset-x-4 bottom-5 md:inset-x-8 md:bottom-8">
            <h4 className="w-full text-center font-display text-[11.2vw] leading-[0.82] tracking-[-0.06em] sm:text-[10.8vw] md:text-[8.2vw] lg:text-[7.7vw]">
              <span className="block whitespace-nowrap">EXPERIENCES.</span>
            </h4>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          ACT 04 — LEGACY
          JOSÉ JOSÉ
      ====================================================== */}

      <div className="relative min-h-screen overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 2, ease }}
        >
          <Image
            src="/media/live/jose1.jpg"
            alt="José José en vivo"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30" />

        <div className="absolute left-5 right-5 top-7 z-20 flex items-center justify-between sm:left-6 sm:right-6 md:left-10 md:right-10 lg:left-14 lg:right-14">
          <span className="text-[7px] uppercase tracking-[0.28em] text-white/45 md:text-[8px]">
            04 / Legacy
          </span>

          <span className="text-[7px] uppercase tracking-[0.28em] text-white/45 md:text-[8px]">
            TresCero Entertainment
          </span>
        </div>

        <div className="relative z-10 flex min-h-screen items-center px-5 py-20 sm:px-6 md:px-10 lg:px-14">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1, ease }}
          >
            <motion.p
              className="mb-5 text-[7px] font-medium uppercase tracking-[0.3em] text-white/45 md:text-[8px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Legacy / Music
            </motion.p>

            <p className="max-w-[1300px] font-display text-[15vw] leading-[0.76] tracking-[-0.075em] md:text-[10.5vw]">
              MUSIC
              <br />
              BECOMES
              <br />
              <span className="text-tc-coral">MEMORY.</span>
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-5 right-5 z-20 flex items-center justify-between border-t border-white/20 pt-3 sm:left-6 sm:right-6 md:left-10 md:right-10 lg:left-14 lg:right-14">
          <span className="text-[7px] uppercase tracking-[0.28em] text-white/40">
            Music / Legacy
          </span>

          <span className="h-2 w-2 rounded-full bg-tc-coral" />
        </div>
      </div>

      {/* =====================================================
          ACT 05 — MOMENTS / CLOSING
          EMMANUEL + MIJARES / RICKY 3
      ====================================================== */}

      <div className="relative bg-[#090909] px-5 py-24 sm:px-6 md:px-10 md:py-32 lg:px-14 lg:py-36">
        <div className="flex items-center justify-between border-t border-white/15 pt-3">
          <span className="text-[7px] uppercase tracking-[0.28em] text-white/35 md:text-[8px]">
            05 / Moments
          </span>

          <span className="text-[7px] uppercase tracking-[0.28em] text-white/35 md:text-[8px]">
            Live / Memory
          </span>
        </div>

        {/* EMMANUEL + MIJARES */}

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12 md:items-end">
          <motion.div
            className="relative aspect-[4/3] overflow-hidden md:col-span-7 md:aspect-[16/10]"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
          >
            <Image
              src="/media/live/emmanuelymijares.jpeg"
              alt="Concierto en vivo"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            className="md:col-span-5 md:pb-6 md:pl-[3vw]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
          >
            <p className="font-display text-[13vw] leading-[0.78] tracking-[-0.07em] sm:text-[11vw] md:text-[6.4vw] lg:text-[5.8vw]">
              MOMENTS
              <br />
              THAT
              <br />
              <span className="text-tc-coral">REMAIN.</span>
            </p>
          </motion.div>
        </div>

        {/* FINAL RICKY */}

        <motion.div
          className="relative mt-20 overflow-hidden md:mt-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease }}
        >
          {/* MOBILE — separate asset to avoid Safari cache/decoding issues */}
          <div className="relative h-[72vh] min-h-[560px] overflow-hidden bg-black md:hidden">
            <motion.img
              src="/media/live/ricky3-mobile.jpg"
              alt="Escenario de concierto"
              className="absolute inset-0 h-full w-full object-cover object-center"
              initial={{ scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease }}
              loading="eager"
              decoding="async"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/10" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/80" />

            <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between">
              <span className="text-[6px] uppercase tracking-[0.28em] text-white/50">
                Live
              </span>
              <span className="h-[5px] w-[5px] rounded-full bg-tc-coral" />
            </div>

            <div className="absolute inset-x-5 bottom-6 z-10">
              <div className="border-t border-white/30 pt-5">
                <motion.h3
                  className="font-display text-[15vw] leading-[0.76] tracking-[-0.07em]"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15, ease }}
                >
                  THE SHOW
                  <br />
                  STARTS <span className="text-tc-coral">HERE.</span>
                </motion.h3>
              </div>
            </div>
          </div>

          {/* DESKTOP — keep the approved composition */}
          <div className="relative hidden aspect-[16/8] overflow-hidden md:block">
            <motion.div
              className="absolute inset-0"
              whileInView={{ scale: [1.06, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease }}
            >
              <Image
                src="/media/live/ricky3.jpg"
                alt="Escenario de concierto"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

            <div className="absolute inset-x-8 bottom-8">
              <div className="border-t border-white/25 pt-5">
                <motion.h3
                  className="font-display text-[7vw] leading-[0.78] tracking-[-0.07em] lg:text-[6.3vw]"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15, ease }}
                >
                  THE SHOW
                  <br />
                  STARTS <span className="text-tc-coral">HERE.</span>
                </motion.h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TRANSITION TO BOOKING */}

        <motion.div
          className="mt-8 flex items-center justify-between border-t border-white/15 pt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[7px] uppercase tracking-[0.25em] text-white/35 md:text-[8px]">
            Live Entertainment
          </span>

          <ArrowDown className="h-5 w-5 text-tc-coral" />
        </motion.div>
      </div>
    </section>
  );
}