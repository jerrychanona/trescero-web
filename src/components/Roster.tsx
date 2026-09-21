"use client";

import Image from "next/image";
import {
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { AnimatePresence, motion } from "motion/react";

const artists = [
  {
    name: "JOEL DELEŌN",
    image: "/media/roster/joel-deleon.jpg",
    mobilePosition: "50% 20%",
  },
  {
    name: "ANDRESSE",
    image: "/media/roster/andresse.jpg",
    mobilePosition: "50% 18%",
  },
  {
    name: "CARLOS CUEVAS",
    image: "/media/roster/carlos-cuevas.jpg",
    mobilePosition: "50% 18%",
  },
  {
    name: "JORGE MUÑIZ",
    image: "/media/roster/jorge-muniz.jpg",
    mobilePosition: "50% 18%",
  },
  {
    name: "ARTURO PENICHE",
    image: "/media/roster/arturo-peniche.jpg",
    mobilePosition: "50% 18%",
  },
  {
    name: "RUBÉN ALBARRÁN",
    image: "/media/roster/ruben-albarran.jpg",
    mobilePosition: "50% 12%",
  },
];

const IMAGE_SAFE_AREA = 32;

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

export default function Roster() {
  const [activeArtist, setActiveArtist] = useState<number | null>(null);
  const [mobileArtist, setMobileArtist] = useState<number | null>(null);
  const [imageY, setImageY] = useState(IMAGE_SAFE_AREA);

  const listRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const activeRowRef = useRef<HTMLDivElement | null>(null);

  function calculateImagePosition(row: HTMLDivElement) {
    const list = listRef.current;
    const image = imageRef.current;

    if (!list || !image) return;

    const listRect = list.getBoundingClientRect();
    const rowRect = row.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();

    const rowCenter =
      rowRect.top - listRect.top + rowRect.height / 2;

    const imageAnchor = imageRect.height * 0.58;
    const desiredY = rowCenter - imageAnchor;

    const minY = IMAGE_SAFE_AREA;

    const maxY = Math.max(
      listRect.height - imageRect.height - IMAGE_SAFE_AREA,
      minY
    );

    setImageY(Math.min(Math.max(desiredY, minY), maxY));
  }

  function activateArtist(
    index: number,
    event: ReactMouseEvent<HTMLDivElement>
  ) {
    activeRowRef.current = event.currentTarget;
    setActiveArtist(index);
  }

  useLayoutEffect(() => {
    if (activeArtist === null || !activeRowRef.current) return;

    const frame = requestAnimationFrame(() => {
      if (activeRowRef.current) {
        calculateImagePosition(activeRowRef.current);
      }
    });

    function handleResize() {
      if (activeRowRef.current) {
        calculateImagePosition(activeRowRef.current);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeArtist]);

  function clearActiveArtist() {
    setActiveArtist(null);
    activeRowRef.current = null;
  }

  function toggleMobileArtist(index: number) {
    setMobileArtist((current) =>
      current === index ? null : index
    );
  }

  return (
    <section
      id="roster"
      className="relative overflow-hidden bg-tc-blue text-white"
    >
      {/* BACKGROUND TYPOGRAPHY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.span
          className="absolute -right-[4vw] top-[27%] font-display text-[22vw] leading-none tracking-[-0.08em] text-white/[0.018]"
          animate={{
            x: activeArtist !== null ? -24 : 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          TALENT
        </motion.span>
      </div>

      <div className="relative z-10 px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-14 lg:py-32">
        {/* HEADER */}
        <motion.div
          className="mb-9 flex items-end justify-between border-b border-white/15 pb-5 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.24em] text-white/45 md:text-[10px]">
              Talent
            </p>

            <h2 className="font-display text-[11vw] leading-[0.82] tracking-[-0.055em] md:text-[8vw] lg:text-[6.5vw]">
              ROSTER
            </h2>
          </div>

          <div className="flex items-center gap-4 pb-1">
            <span className="hidden h-px w-10 bg-white/15 sm:block" />

            <p className="text-[9px] font-medium tracking-[0.2em] text-white/35 md:text-[10px]">
              01—06
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            DESKTOP
        ====================================================== */}
        <div
          ref={listRef}
          className="relative hidden md:block"
          onMouseLeave={clearActiveArtist}
        >
          {/* GIANT ACTIVE NUMBER */}
          <AnimatePresence mode="wait">
            {activeArtist !== null && (
              <motion.div
                key={`number-${activeArtist}`}
                aria-hidden="true"
                className="pointer-events-none absolute right-[1%] top-1/2 z-0 -translate-y-1/2 font-display text-[23vw] leading-none tracking-[-0.08em] text-white/[0.035]"
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  x: 40,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.04,
                  x: -20,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {String(activeArtist + 1).padStart(2, "0")}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ACTIVE IMAGE */}
          <AnimatePresence mode="wait">
            {activeArtist !== null && (
              <motion.div
                ref={imageRef}
                key={`image-${activeArtist}`}
                className="pointer-events-none absolute right-[10%] z-20 aspect-[4/5] w-[24vw] max-w-[370px] overflow-hidden bg-tc-blue shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: 28,
                  y: imageY,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: imageY,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.97,
                  x: -18,
                }}
                transition={{
                  opacity: {
                    duration: 0.28,
                  },
                  scale: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  x: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  y: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src={artists[activeArtist].image}
                    alt={artists[activeArtist].name}
                    fill
                    sizes="(max-width: 1200px) 24vw, 370px"
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-tc-blue/[0.06]" />

                <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-tc-blue/85 via-tc-blue/25 to-transparent" />

                {/* IMAGE TOP */}
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="text-[8px] font-medium uppercase tracking-[0.22em] text-white/65">
                    TresCero
                  </span>

                  <span className="text-[8px] font-medium tracking-[0.2em] text-white/65">
                    {String(activeArtist + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* IMAGE BOTTOM */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="mb-3 h-px w-full bg-white/25" />

                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <p className="mb-1 text-[8px] font-medium uppercase tracking-[0.22em] text-white/50">
                        Talent
                      </p>

                      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white">
                        {artists[activeArtist].name}
                      </p>
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-tc-coral" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ARTIST LIST */}
          <div className="relative z-10">
            {artists.map((artist, index) => {
              const isActive = activeArtist === index;
              const hasActive = activeArtist !== null;

              return (
                <motion.div
                  key={artist.name}
                  className="group relative flex min-h-[104px] cursor-pointer items-center lg:min-h-[108px]"
                  onMouseEnter={(event) =>
                    activateArtist(index, event)
                  }
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.035,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* SEPARATOR */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-px bg-white/15" />

                  {/* NUMBER */}
                  <div className="relative z-30 mr-5 flex w-12 shrink-0 items-center gap-2">
                    <motion.span
                      className="h-px bg-tc-coral"
                      animate={{
                        width: isActive ? 22 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    <span
                      className={`text-[9px] font-medium tracking-[0.18em] transition-colors duration-300 ${
                        isActive
                          ? "text-tc-coral"
                          : "text-white/35"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* NAME */}
                  <motion.h3
                    className="relative z-30 whitespace-nowrap font-display text-[clamp(2.8rem,5.1vw,5.5rem)] leading-[0.88] tracking-[-0.055em]"
                    animate={{
                      x: isActive ? 12 : 0,
                      color: isActive
                        ? "#ffffff"
                        : hasActive
                          ? "rgba(255,255,255,0.60)"
                          : "#ffffff",
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {artist.name}
                  </motion.h3>

                  {/* ACTION */}
                  <motion.div
                    className="relative z-30 ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                    animate={{
                      borderColor: isActive
                        ? "var(--tc-coral)"
                        : "rgba(255,255,255,0.16)",
                      backgroundColor: isActive
                        ? "var(--tc-coral)"
                        : "rgba(255,255,255,0)",
                      scale: isActive ? 1.08 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <motion.span
                      className="flex h-4 w-4 items-center justify-center"
                      animate={{
                        color: isActive
                          ? "var(--tc-blue)"
                          : "rgba(255,255,255,0.35)",
                        x: isActive ? 1 : 0,
                        y: isActive ? -1 : 0,
                      }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ====================================================== */}
        <div className="md:hidden">
          {artists.map((artist, index) => {
            const isOpen = mobileArtist === index;
            const hasOpen = mobileArtist !== null;

            return (
              <motion.article
                key={artist.name}
                className="relative border-b border-white/15"
                initial={{
                  opacity: 0,
                  y: 22,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* CLICKABLE ROW */}
                <button
                  type="button"
                  onClick={() => toggleMobileArtist(index)}
                  aria-expanded={isOpen}
                  className="relative flex w-full items-center py-7 text-left"
                >
                  {/* NUMBER */}
                  <div className="mr-4 flex w-8 shrink-0 items-center gap-2">
                    <motion.span
                      className="h-px bg-tc-coral"
                      animate={{
                        width: isOpen ? 14 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    <span
                      className={`text-[8px] font-medium tracking-[0.16em] transition-colors duration-300 ${
                        isOpen
                          ? "text-tc-coral"
                          : "text-white/35"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* NAME */}
                  <motion.h3
                    className="font-display text-[clamp(2rem,9vw,4.2rem)] leading-[0.88] tracking-[-0.05em]"
                    animate={{
                      x: isOpen ? 5 : 0,
                      color: isOpen
                        ? "#ffffff"
                        : hasOpen
                          ? "rgba(255,255,255,0.55)"
                          : "#ffffff",
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {artist.name}
                  </motion.h3>

                  {/* ARROW */}
                  <motion.div
                    className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
                    animate={{
                      borderColor: isOpen
                        ? "var(--tc-coral)"
                        : "rgba(255,255,255,0.18)",
                      backgroundColor: isOpen
                        ? "var(--tc-coral)"
                        : "rgba(255,255,255,0)",
                      rotate: isOpen ? 90 : 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center ${
                        isOpen
                          ? "text-tc-blue"
                          : "text-white/40"
                      }`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </motion.div>
                </button>

                {/* EXPANDED ARTIST */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
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
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.3,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="relative pb-7 pl-12 pr-1 pt-1">
                        {/* GIANT NUMBER */}
                        <motion.span
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-3 top-0 z-0 font-display text-[31vw] leading-none tracking-[-0.08em] text-white/[0.035]"
                          initial={{
                            opacity: 0,
                            x: 25,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          exit={{
                            opacity: 0,
                            x: 15,
                          }}
                          transition={{
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </motion.span>

                        {/* EDITORIAL IMAGE */}
                        <motion.div
                          className="relative z-10 ml-auto aspect-[3/2] w-[92%] overflow-hidden bg-tc-blue"
                          initial={{
                            clipPath: "inset(0% 100% 0% 0%)",
                            y: 14,
                          }}
                          animate={{
                            clipPath: "inset(0% 0% 0% 0%)",
                            y: 0,
                          }}
                          exit={{
                            clipPath: "inset(0% 0% 0% 100%)",
                            y: 8,
                          }}
                          transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {/* PHOTO */}
                          <motion.div
                            className="absolute inset-0"
                            initial={{
                              scale: 1.07,
                            }}
                            animate={{
                              scale: 1,
                            }}
                            exit={{
                              scale: 1.03,
                            }}
                            transition={{
                              duration: 0.9,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >
                            <Image
                              src={artist.image}
                              alt={artist.name}
                              fill
                              sizes="90vw"
                              className="object-cover"
                              style={{
                                objectPosition:
                                  artist.mobilePosition,
                              }}
                            />
                          </motion.div>

                          {/* COLOR TREATMENT */}
                          <div className="absolute inset-0 bg-tc-blue/[0.05]" />

                          <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-tc-blue/85 via-tc-blue/20 to-transparent" />

                          {/* TOP META */}
                          <motion.div
                            className="absolute left-4 right-4 top-4 flex items-center justify-between"
                            initial={{
                              opacity: 0,
                              y: -5,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.4,
                              delay: 0.25,
                            }}
                          >
                            <span className="text-[7px] font-medium uppercase tracking-[0.22em] text-white/65">
                              TresCero
                            </span>

                            <span className="text-[7px] font-medium tracking-[0.2em] text-white/65">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </motion.div>

                          {/* BOTTOM META */}
                          <motion.div
                            className="absolute bottom-4 left-4 right-4"
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.45,
                              delay: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >
                            <div className="mb-3 h-px w-full bg-white/25" />

                            <div className="flex items-end justify-between gap-4">
                              <div>
                                <p className="mb-1 text-[7px] font-medium uppercase tracking-[0.22em] text-white/50">
                                  Talent
                                </p>

                                <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-white">
                                  {artist.name}
                                </p>
                              </div>

                              <ArrowUpRight className="h-4 w-4 text-tc-coral" />
                            </div>
                          </motion.div>
                        </motion.div>

                        {/* CAPTION */}
                        <motion.div
                          className="relative z-10 ml-auto mt-3 flex w-[92%] items-center justify-between"
                          initial={{
                            opacity: 0,
                            y: 7,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.4,
                            delay: 0.28,
                          }}
                        >
                          <span className="text-[7px] font-medium uppercase tracking-[0.22em] text-white/35">
                            TresCero Entertainment
                          </span>

                          <span className="h-px w-8 bg-tc-coral/70" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        {/* SIGNATURE */}
        <motion.div
          className="mt-12 flex items-center justify-between pt-5 md:mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-white/30">
            Mexico
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-tc-coral/60" />

            <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-white/30">
              Creating Experiences
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}