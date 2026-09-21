"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

const bookingServices = [
  {
    number: "01",
    title: "ARTIST MANAGEMENT",
    short: "Representación, estrategia y desarrollo integral de artistas.",
    statement: "Construimos carreras con visión, estrategia y dirección.",
    description:
      "Trabajamos junto al artista para desarrollar una carrera sólida, conectando identidad, música, oportunidades y estrategia dentro de una misma visión.",
    capabilities: [
      "Representación",
      "Estrategia de carrera",
      "Desarrollo artístico",
      "Lanzamientos",
      "Alianzas",
      "Negociación",
    ],
  },
  {
    number: "02",
    title: "LIVE ENTERTAINMENT",
    short:
      "Producción, promoción y desarrollo de conciertos y experiencias en vivo.",
    statement: "Transformamos escenarios en experiencias.",
    description:
      "Desarrollamos y ejecutamos experiencias en vivo, desde la conceptualización y programación hasta la producción y promoción del espectáculo.",
    capabilities: [
      "Concert Production",
      "Promotion",
      "Programming",
      "Festivals",
      "Touring",
      "Live Experiences",
    ],
  },
  {
    number: "03",
    title: "BOOKING",
    short:
      "Contratación y comercialización de talento para conciertos, festivales y eventos.",
    statement: "Conectamos el talento correcto con el escenario correcto.",
    description:
      "Facilitamos la contratación de talento y conectamos artistas, promotores, festivales, instituciones y marcas para desarrollar oportunidades en vivo.",
    capabilities: [
      "Artist Booking",
      "Concerts",
      "Festivals",
      "Private Events",
      "Corporate Events",
      "Talent Procurement",
    ],
  },
  {
    number: "04",
    title: "SPECIAL PROJECTS",
    short:
      "Proyectos especiales, colaboraciones, alianzas y experiencias desarrolladas a la medida.",
    statement: "Cuando el proyecto no cabe en una categoría, lo construimos.",
    description:
      "Creamos proyectos a la medida que conectan música, entretenimiento, talento, instituciones y marcas bajo conceptos únicos.",
    capabilities: [
      "Brand Partnerships",
      "Collaborations",
      "Institutional Projects",
      "Creative Concepts",
      "Special Events",
      "Custom Experiences",
    ],
  },
];

export default function Booking() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setActiveService((current) => (current === index ? null : index));
  };

  return (
    <section id="booking" className="relative overflow-hidden">
      {/* =====================================================
          01 — BOOK THE TALENT
      ====================================================== */}

      <div className="relative bg-tc-coral text-tc-blue">
        <div className="relative flex min-h-[72vh] flex-col px-5 py-8 sm:px-6 md:px-10 md:py-10 lg:px-14">
          {/* TOP */}

          <motion.div
            className="flex items-center justify-between border-t border-tc-blue/25 pt-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-tc-blue/55 md:text-[8px]">
              03 / Booking
            </span>

            <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-tc-blue/55 md:text-[8px]">
              TresCero Entertainment
            </span>
          </motion.div>

          {/* MAIN */}

          <div className="flex flex-1 items-center py-12 md:py-14">
            <div className="w-full">
              <motion.p
                className="mb-4 text-[7px] font-medium uppercase tracking-[0.3em] text-tc-blue/55 md:text-[8px]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
              >
                Talent / Live / Experiences
              </motion.p>

              <motion.h2
                className="font-display text-[20vw] leading-[0.7] tracking-[-0.085em] sm:text-[17vw] md:text-[13vw] lg:text-[11.5vw]"
                initial={{
                  clipPath: "inset(0 0 100% 0)",
                }}
                whileInView={{
                  clipPath: "inset(0 0 0% 0)",
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease,
                }}
              >
                BOOK
                <br />
                THE <span className="text-white">TALENT.</span>
              </motion.h2>
            </div>
          </div>

          {/* BOTTOM */}

          <motion.div
            className="grid gap-6 border-t border-tc-blue/25 pt-5 md:grid-cols-12 md:items-end"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease,
            }}
          >
            <div className="md:col-span-5">
              <p className="max-w-[430px] text-[10px] leading-[1.7] text-tc-blue/65 md:text-[11px]">
                Conectamos talento con escenarios, promotores y audiencias para
                desarrollar oportunidades y experiencias en vivo.
              </p>
            </div>

            <div className="flex justify-end md:col-span-1 md:col-start-12">
              <ArrowDown className="h-5 w-5 text-tc-blue" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          02 — WHAT WE DO
      ====================================================== */}

      <div className="relative bg-tc-coral text-tc-blue">
        {/* HEADER */}

        <div className="px-5 pb-10 pt-20 sm:px-6 md:px-10 md:pb-14 md:pt-24 lg:px-14 lg:pt-28">
          <motion.div
            className="flex items-center justify-between border-t border-tc-blue/25 pt-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-tc-blue/50 md:text-[8px]">
              Our Capabilities
            </span>

            <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-tc-blue/50 md:text-[8px]">
              01 — 04
            </span>
          </motion.div>

          <motion.h3
            className="mt-10 font-display text-[17vw] leading-[0.74] tracking-[-0.08em] sm:text-[15vw] md:mt-12 md:text-[10.5vw] lg:text-[9vw]"
            initial={{
              clipPath: "inset(0 0 100% 0)",
            }}
            whileInView={{
              clipPath: "inset(0 0 0% 0)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease,
            }}
          >
            WHAT
            <br />
            WE DO.
          </motion.h3>
        </div>

        {/* SERVICES */}

        <div className="border-t border-tc-blue/25">
          {bookingServices.map((service, index) => {
            const isActive = activeService === index;

            return (
              <div
                key={service.number}
                className={[
                  "relative overflow-hidden border-b transition-colors duration-500",
                  isActive
                    ? "border-white/15 bg-tc-blue text-white"
                    : "border-tc-blue/25 bg-tc-coral text-tc-blue",
                ].join(" ")}
              >
                {/* SERVICE HEADER */}

                <motion.button
                  type="button"
                  onClick={() => toggleService(index)}
                  aria-expanded={isActive}
                  className="group relative z-10 grid w-full cursor-pointer items-center gap-5 px-5 py-7 text-left sm:px-6 md:min-h-[150px] md:grid-cols-12 md:px-10 md:py-7 lg:px-14"
                  whileTap={{ scale: 0.995 }}
                >
                  {/* BACKGROUND NUMBER */}

                  <span
                    aria-hidden="true"
                    className={[
                      "pointer-events-none absolute -bottom-[0.25em] right-[2vw] font-display text-[28vw] leading-none tracking-[-0.08em] transition-colors duration-500 md:text-[14vw]",
                      isActive
                        ? "text-white/[0.035]"
                        : "text-tc-blue/[0.045]",
                    ].join(" ")}
                  >
                    {service.number}
                  </span>

                  {/* NUMBER */}

                  <div className="relative md:col-span-1">
                    <span
                      className={[
                        "text-[8px] font-medium tracking-[0.22em] transition-colors duration-500",
                        isActive ? "text-white/45" : "text-tc-blue/45",
                      ].join(" ")}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* TITLE */}

                  <div className="relative md:col-span-7">
                    <h4
                      className={[
                        "font-display text-[9.5vw] leading-[0.82] tracking-[-0.065em] transition-colors duration-500 sm:text-[7.5vw] md:text-[4.2vw] lg:text-[3.7vw]",
                        isActive ? "text-white" : "text-tc-blue",
                      ].join(" ")}
                    >
                      {service.title}
                    </h4>
                  </div>

                  {/* SHORT DESCRIPTION */}

                  <div className="relative md:col-span-3">
                    <p
                      className={[
                        "max-w-[320px] text-[10px] leading-[1.6] transition-colors duration-500 md:text-[11px]",
                        isActive ? "text-white/55" : "text-tc-blue/55",
                      ].join(" ")}
                    >
                      {service.short}
                    </p>
                  </div>

                  {/* PLUS */}

                  <div className="relative flex md:col-span-1 md:justify-end">
                    <motion.span
                      className={[
                        "flex h-10 w-10 items-center justify-center rounded-full border text-lg transition-colors duration-300",
                        isActive
                          ? "border-tc-coral bg-tc-coral text-tc-blue"
                          : "border-tc-blue/25 text-tc-blue",
                      ].join(" ")}
                      animate={{
                        rotate: isActive ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.45,
                        ease,
                      }}
                    >
                      +
                    </motion.span>
                  </div>
                </motion.button>

                {/* EXPANDED */}

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.65,
                          ease,
                        },
                        opacity: {
                          duration: 0.4,
                          delay: 0.08,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-10 sm:px-6 md:px-10 md:pb-14 lg:px-14">
                        <div className="border-t border-white/15 pt-8">
                          <div className="grid gap-10 md:grid-cols-12 md:gap-6">
                            {/* STATEMENT */}

                            <motion.div
                              className="md:col-span-6 md:col-start-2"
                              initial={{
                                opacity: 0,
                                y: 20,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.6,
                                delay: 0.15,
                                ease,
                              }}
                            >
                              <p className="max-w-[700px] font-display text-[9vw] leading-[0.88] tracking-[-0.055em] text-tc-coral sm:text-[7vw] md:text-[4vw] lg:text-[3.4vw]">
                                {service.statement}
                              </p>
                            </motion.div>

                            {/* INFO */}

                            <motion.div
                              className="md:col-span-4 md:col-start-9"
                              initial={{
                                opacity: 0,
                                y: 20,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.6,
                                delay: 0.22,
                                ease,
                              }}
                            >
                              <p className="max-w-[390px] text-[10px] leading-[1.75] text-white/60 md:text-[11px]">
                                {service.description}
                              </p>

                              <div className="mt-7 border-t border-white/15">
                                {service.capabilities.map(
                                  (capability, capabilityIndex) => (
                                    <div
                                      key={capability}
                                      className="flex items-center justify-between border-b border-white/10 py-2.5"
                                    >
                                      <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-white/60">
                                        {capability}
                                      </span>

                                      <span className="text-[7px] text-white/25">
                                        {String(capabilityIndex + 1).padStart(
                                          2,
                                          "0",
                                        )}
                                      </span>
                                    </div>
                                  ),
                                )}
                              </div>

                              <a
                                href="#contact"
                                className="group mt-7 inline-flex items-center gap-4"
                              >
                                <span className="text-[8px] font-medium uppercase tracking-[0.22em] text-white">
                                  Start a conversation
                                </span>

                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-tc-coral transition-all duration-300 group-hover:rotate-45 group-hover:border-tc-coral group-hover:bg-tc-coral group-hover:text-tc-blue">
                                  <ArrowUpRight className="h-4 w-4" />
                                </span>
                              </a>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          03 — COMPACT CTA
      ====================================================== */}

      <div className="relative overflow-hidden bg-tc-blue px-5 py-20 text-white sm:px-6 md:px-10 md:py-24 lg:px-14 lg:py-28">
        {/* GIANT BACKGROUND TYPE */}

        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[0.25em] right-0 font-display text-[25vw] leading-none tracking-[-0.09em] text-white/[0.025]"
        >
          GO
        </span>

        <motion.div
          className="relative z-10"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
        >
          <div className="flex items-center justify-between border-t border-white/20 pt-3">
            <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-white/40 md:text-[8px]">
              Have a project?
            </span>

            <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-white/40 md:text-[8px]">
              Booking Inquiries
            </span>
          </div>

          <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
            <h3 className="font-display text-[14vw] leading-[0.76] tracking-[-0.075em] sm:text-[11vw] md:text-[7.5vw] lg:text-[6.6vw]">
              LET&apos;S
              <br />
              <span className="text-tc-coral">TALK.</span>
            </h3>

            <div className="flex flex-col gap-6 md:items-end">
              <p className="max-w-[340px] text-[10px] leading-[1.7] text-white/45 md:text-right md:text-[11px]">
                Cuéntanos sobre tu artista, evento o proyecto.
              </p>

              <a
                href="#contact"
                className="group inline-flex items-center gap-5"
              >
                <span className="text-[8px] font-medium uppercase tracking-[0.24em]">
                  Start a conversation
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-tc-coral transition-all duration-300 group-hover:rotate-45 group-hover:border-tc-coral group-hover:bg-tc-coral group-hover:text-tc-blue">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}