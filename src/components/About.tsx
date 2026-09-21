"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   ICONS
   SVG para evitar que iOS convierta las flechas en emoji
========================================================= */

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 19L19 5M19 5H8M19 5V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-tc-off-white text-tc-black"
    >
      <div className="px-5 pb-20 pt-20 sm:px-6 md:px-10 md:pb-32 md:pt-28 lg:px-14 lg:pb-40">
        {/* =====================================================
            TOP INDEX
        ====================================================== */}

        <motion.div
          className="flex items-center justify-between border-t border-black/20 pt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-black/45 md:text-[8px]">
            04 / About
          </span>

          <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-black/45 md:text-[8px]">
            Mexico / International
          </span>
        </motion.div>

        {/* =====================================================
            MAIN EDITORIAL COMPOSITION
        ====================================================== */}

        <div className="relative mt-12 md:mt-20">
          <div className="grid md:grid-cols-12">
            {/* MAIN HEADLINE */}

            <motion.div
              className="relative z-10 md:col-span-10"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease }}
            >
              <p className="font-display text-[17vw] leading-[0.76] tracking-[-0.075em] sm:text-[15vw] md:text-[10.7vw] md:leading-[0.72] md:tracking-[-0.085em] lg:text-[9.6vw]">
                15+ YEARS
                <br />
                IN THE
                <br />
                <span className="text-tc-coral">INDUSTRY.</span>
              </p>
            </motion.div>

            {/* SMALL SIDE INDEX */}

            <motion.div
              className="mt-8 md:col-span-2 md:mt-0 md:flex md:items-end md:justify-end md:pb-[1vw]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <div className="flex items-start gap-3 md:items-end">
                <span className="mt-[3px] h-2 w-2 shrink-0 rounded-full bg-tc-coral md:mt-0" />

                <span className="text-[7px] font-medium uppercase tracking-[0.26em] text-black/40 md:text-right md:text-[8px]">
                  <span className="block">Entertainment</span>
                  <span className="block">Industry</span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              IDENTITY / WHO WE ARE
          ====================================================== */}

          <div className="mt-12 border-t border-black/20 pt-6 md:mt-24 md:pt-9">
            <div className="grid gap-7 md:grid-cols-12 md:gap-6">
              {/* LABEL */}

              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-black/40 md:text-[8px]">
                  Who we are
                </span>
              </motion.div>

              {/* LARGE STATEMENT */}

              <motion.div
                className="md:col-span-6"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease }}
              >
                <p className="max-w-[760px] text-[7.2vw] font-medium leading-[1.04] tracking-[-0.04em] sm:text-[5.8vw] md:text-[3.3vw] md:leading-[1.02] md:tracking-[-0.045em] lg:text-[2.8vw]">
                  Somos una compañía mexicana de entretenimiento que conecta
                  talento, escenarios y audiencias.
                </p>
              </motion.div>

              {/* BODY COPY */}

              <motion.div
                className="md:col-span-3 md:col-start-10 md:pt-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
              >
                <p className="max-w-[390px] text-[10px] leading-[1.75] text-black/55 md:text-[11px] md:leading-[1.8]">
                  Desarrollamos carreras, espectáculos y proyectos desde una
                  visión estratégica y creativa, trabajando junto a artistas,
                  equipos, promotores e instituciones.
                </p>
              </motion.div>
            </div>
          </div>

          {/* =====================================================
              EXPERIENCE
          ====================================================== */}

          <div className="mt-16 md:mt-28">
            <div className="grid gap-10 md:grid-cols-12 md:gap-6">
              {/* BIG 15 */}

              <motion.div
                className="relative md:col-span-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, ease }}
              >
                <div className="border-t border-black/20 pt-4">
                  <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-black/40 md:text-[8px]">
                    Experience
                  </span>
                </div>

                <div className="mt-5 flex items-start">
                  <span className="font-display text-[38vw] leading-[0.7] tracking-[-0.11em] text-tc-blue sm:text-[34vw] md:text-[22vw] lg:text-[19vw]">
                    15
                  </span>

                  <span className="ml-2 mt-[2vw] font-display text-[10vw] leading-none text-tc-coral md:ml-3 md:mt-[1vw] md:text-[5vw]">
                    +
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <span className="h-px w-10 shrink-0 bg-black/30" />

                  <span className="text-[7px] font-medium uppercase tracking-[0.22em] text-black/50 md:text-[8px] md:tracking-[0.25em]">
                    Years in entertainment
                  </span>
                </div>
              </motion.div>

              {/* EXPERIENCE COPY */}

              <div className="md:col-span-6 md:col-start-7 md:pt-20 lg:pt-24">
                <motion.p
                  className="max-w-[700px] text-[7.2vw] font-medium leading-[1.02] tracking-[-0.04em] sm:text-[6vw] md:text-[3.5vw] md:leading-[0.98] md:tracking-[-0.05em] lg:text-[3vw]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease }}
                >
                  Más de una década construyendo proyectos dentro de una
                  industria que nunca deja de moverse.
                </motion.p>

                <motion.div
                  className="mt-8 grid gap-5 border-t border-black/20 pt-6 sm:grid-cols-2 md:mt-14 md:gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease }}
                >
                  <p className="text-[10px] leading-[1.75] text-black/55 md:text-[11px] md:leading-[1.8]">
                    Durante más de 15 años hemos desarrollado proyectos dentro
                    de la industria del entretenimiento en México y otros
                    mercados.
                  </p>

                  <p className="text-[10px] leading-[1.75] text-black/55 md:text-[11px] md:leading-[1.8]">
                    Nuestra trayectoria incluye escenarios nacionales e
                    internacionales y proyectos junto a artistas de talla
                    global.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* =====================================================
              INTERNATIONAL / CLOSING COMPOSITION
          ====================================================== */}

          <div className="mt-20 border-t border-black/20 pt-5 md:mt-36 md:pt-6">
            <div className="grid gap-9 md:grid-cols-12 md:gap-6">
              {/* LEFT META */}

              <motion.div
                className="md:col-span-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-black/40 md:text-[8px]">
                  <span className="block">From Mexico</span>
                  <span className="mt-2 block md:mt-0">to the world</span>
                </span>

                <div className="mt-8 hidden md:block">
                  <span className="block h-16 w-px bg-black/20" />
                </div>
              </motion.div>

              {/* =================================================
                  BIG INTERNATIONAL STATEMENT
              ================================================== */}

              <motion.div
                className="min-w-0 md:col-span-9"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, ease }}
              >
                {/* MOBILE */}

                <div className="md:hidden">
                  <div className="flex items-start">
                    <span className="font-display text-[17vw] leading-[0.76] tracking-[-0.075em]">
                      MEXICO
                    </span>

                    <ArrowUpRight className="ml-2 mt-[1.2vw] h-[8.5vw] w-[8.5vw] shrink-0 text-tc-coral" />
                  </div>

                  <span className="mt-3 block whitespace-nowrap font-display text-[11.7vw] leading-[0.8] tracking-[-0.065em]">
                    TO THE WORLD.
                  </span>
                </div>

                {/* DESKTOP */}

                <p className="hidden font-display text-[8vw] leading-[0.76] tracking-[-0.075em] md:block lg:text-[7.1vw]">
                  <span className="inline-flex items-start">
                    MEXICO

                    <ArrowUpRight className="ml-[0.08em] mt-[0.04em] h-[0.65em] w-[0.65em] shrink-0 text-tc-coral" />
                  </span>

                  <br />

                  INTERNATIONAL.
                </p>
              </motion.div>
            </div>

            {/* =================================================
                FINAL INFORMATION LINE
            ================================================== */}

            <motion.div
              className="mt-12 grid gap-6 border-t border-black/20 pt-6 md:mt-20 md:grid-cols-12 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="md:col-span-3">
                <span className="text-[7px] font-medium uppercase tracking-[0.25em] text-black/40 md:text-[8px]">
                  TresCero Entertainment
                </span>
              </div>

              <div className="md:col-span-5">
                <p className="max-w-[520px] text-[10px] leading-[1.75] text-black/55 md:text-[11px] md:leading-[1.8]">
                  Desde México desarrollamos proyectos que conectan talento,
                  producción y estrategia con escenarios y oportunidades dentro
                  y fuera del país.
                </p>
              </div>

              <div className="flex items-end md:col-span-4 md:justify-end">
                <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
                  <span className="text-[7px] font-medium uppercase tracking-[0.22em] text-black/35">
                    Artists
                  </span>

                  <span className="text-[7px] font-medium uppercase tracking-[0.22em] text-black/35">
                    Stages
                  </span>

                  <span className="text-[7px] font-medium uppercase tracking-[0.22em] text-black/35">
                    Audiences
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}