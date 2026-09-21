"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const artists = [
  {
    name: "JOEL DELEŌN",
    image: "/media/roster/joel-deleon.jpg",
  },
  {
    name: "ANDRESSE",
    image: "/media/roster/andresse.jpg",
  },
  {
    name: "CARLOS CUEVAS",
    image: "/media/roster/carlos-cuevas.jpg",
  },
  {
    name: "JORGE MUÑIZ",
    image: "/media/roster/jorge-muniz.jpg",
  },
  {
    name: "ARTURO PENICHE",
    image: "/media/roster/arturo-peniche.jpg",
  },
  {
    name: "RUBÉN ALBARRÁN",
    image: "/media/roster/ruben-albarran.jpg",
  },
];

export default function Roster() {
  const [activeArtist, setActiveArtist] = useState<number | null>(null);

  return (
    <section
      id="roster"
      className="relative overflow-hidden bg-tc-blue text-white"
    >
      <div className="px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-14 lg:py-32">
        {/* SECTION HEADER */}
        <motion.div
          className="mb-12 flex items-end justify-between border-b border-white/15 pb-5 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.24em] text-white/50 md:text-[10px]">
              Talent
            </p>

            <h2 className="font-display text-[11vw] leading-none tracking-[-0.055em] sm:text-[9vw] lg:text-[7vw]">
              ROSTER
            </h2>
          </div>

          <p className="pb-1 text-[9px] font-medium tracking-[0.2em] text-white/40 md:text-[10px]">
            01—06
          </p>
        </motion.div>

        {/* DESKTOP / TABLET ROSTER */}
        <div
          className="relative hidden md:block"
          onMouseLeave={() => setActiveArtist(null)}
        >
          {/* FLOATING IMAGE */}
          <div className="pointer-events-none absolute right-[4%] top-1/2 z-20 aspect-[3/4] w-[25vw] max-w-[340px] -translate-y-1/2">
            <AnimatePresence mode="wait">
              {activeArtist !== null && (
                <motion.div
                  key={artists[activeArtist].name}
                  className="absolute inset-0 overflow-hidden"
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    rotate: 2,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src={artists[activeArtist].image}
                    alt={artists[activeArtist].name}
                    fill
                    sizes="(max-width: 1200px) 25vw, 340px"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-tc-blue/10" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ARTIST LIST */}
          <div>
            {artists.map((artist, index) => {
              const isActive = activeArtist === index;
              const hasActiveArtist = activeArtist !== null;

              return (
                <motion.a
                  key={artist.name}
                  href="#booking"
                  className="group relative flex min-h-[110px] items-center border-b border-white/15 py-5 lg:min-h-[130px]"
                  onMouseEnter={() => setActiveArtist(index)}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span
                    className={`mr-6 w-7 shrink-0 text-[9px] font-medium tracking-[0.16em] transition-colors duration-300 ${
                      isActive ? "text-tc-coral" : "text-white/35"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3
                    className={`relative z-30 font-display text-[clamp(2.6rem,5.2vw,5.5rem)] leading-[0.9] tracking-[-0.055em] transition-all duration-300 ${
                      hasActiveArtist && !isActive
                        ? "text-white/25"
                        : isActive
                          ? "translate-x-3 text-tc-coral"
                          : "text-white"
                    }`}
                  >
                    {artist.name}
                  </h3>

                  <span
                    className={`relative z-30 ml-auto pr-2 text-xl transition-all duration-300 ${
                      isActive
                        ? "translate-x-1 text-tc-coral"
                        : "text-white/30"
                    }`}
                  >
                    ↗
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* MOBILE ROSTER */}
        <div className="md:hidden">
          {artists.map((artist, index) => (
            <motion.a
              key={artist.name}
              href="#booking"
              className="group block border-b border-white/15 py-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.65,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 group-active:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-tc-blue/10" />

                <span className="absolute left-4 top-4 text-[9px] font-medium tracking-[0.18em] text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-end justify-between gap-4">
                <h3 className="font-display text-[9vw] leading-[0.9] tracking-[-0.05em]">
                  {artist.name}
                </h3>

                <span className="shrink-0 pb-1 text-lg text-tc-coral">↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}