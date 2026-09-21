"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

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

const navigation = [
  { label: "Roster", href: "#roster" },
  { label: "Live", href: "#live" },
  { label: "Booking", href: "#booking" },
  { label: "About", href: "#about" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-tc-blue text-white"
    >
      {/* =====================================================
          CONTACT
      ====================================================== */}

      <div className="relative px-5 pb-20 pt-20 sm:px-6 md:px-10 md:pb-24 md:pt-28 lg:px-14 lg:pb-28">
        {/* TOP INDEX */}

        <motion.div
          className="flex items-center justify-between border-t border-white/20 pt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-white/45 md:text-[8px]">
            05 / Contact
          </span>

          <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-white/45 md:text-[8px]">
            Mexico / International
          </span>
        </motion.div>

        {/* MAIN */}

        <div className="mt-14 md:mt-20">
          <div className="grid gap-12 md:grid-cols-12 md:gap-6">
            {/* TITLE */}

            <motion.div
              className="md:col-span-8"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease }}
            >
              <span className="mb-5 block text-[7px] font-medium uppercase tracking-[0.3em] text-white/40 md:text-[8px]">
                Start a conversation
              </span>

              <h2 className="font-display leading-[0.74] tracking-[-0.08em]">
                <span className="block text-[18vw] sm:text-[15vw] md:text-[10vw] lg:text-[8.8vw]">
                  LET&apos;S
                </span>

                <span className="block text-[18vw] sm:text-[15vw] md:text-[10vw] lg:text-[8.8vw]">
                  CREATE
                </span>

                <span className="block whitespace-nowrap text-[13.5vw] tracking-[-0.095em] text-tc-coral min-[390px]:text-[14vw] sm:text-[12.5vw] md:text-[9vw] lg:text-[8.1vw]">
                  SOMETHING.
                </span>
              </h2>
            </motion.div>

            {/* INTRO */}

            <motion.div
              className="flex flex-col justify-end md:col-span-3 md:col-start-10 md:pb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <p className="max-w-[360px] text-[10px] leading-[1.8] text-white/55 md:text-[11px]">
                Artistas, conciertos, booking, colaboraciones y proyectos
                especiales. Cuéntanos qué tienes en mente.
              </p>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            CONTACT ROUTES
        ====================================================== */}

        <div className="mt-16 border-t border-white/20 md:mt-24">
          {/* EMAIL */}

          <motion.a
            href="mailto:contacto@trescero.net"
            className="group relative flex items-center justify-between gap-5 border-b border-white/20 py-7 md:py-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="min-w-0">
              <span className="mb-2 block text-[7px] font-medium uppercase tracking-[0.26em] text-white/35 md:text-[8px]">
                Email
              </span>

              <span className="block break-all text-[5.8vw] font-medium leading-none tracking-[-0.04em] transition-colors duration-300 group-hover:text-tc-coral sm:text-[4.5vw] md:text-[3vw] lg:text-[2.5vw]">
                contacto@trescero.net
              </span>
            </div>

            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-tc-coral transition-all duration-300 group-hover:rotate-45 group-hover:border-tc-coral group-hover:bg-tc-coral group-hover:text-tc-blue md:h-12 md:w-12">
              <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
            </span>
          </motion.a>

          {/* INSTAGRAM */}

          <motion.a
            href="https://www.instagram.com/tresceromx/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between gap-5 border-b border-white/20 py-7 md:py-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            <div>
              <span className="mb-2 block text-[7px] font-medium uppercase tracking-[0.26em] text-white/35 md:text-[8px]">
                Instagram
              </span>

              <span className="block text-[7vw] font-medium leading-none tracking-[-0.04em] transition-colors duration-300 group-hover:text-tc-coral sm:text-[5vw] md:text-[3vw] lg:text-[2.5vw]">
                @tresceromx
              </span>
            </div>

            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-tc-coral transition-all duration-300 group-hover:rotate-45 group-hover:border-tc-coral group-hover:bg-tc-coral group-hover:text-tc-blue md:h-12 md:w-12">
              <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
            </span>
          </motion.a>
        </div>

        {/* =====================================================
            SMALL POSITIONING LINE
        ====================================================== */}

        <motion.div
          className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:col-span-3">
            <span className="text-[7px] font-medium uppercase tracking-[0.26em] text-white/35 md:text-[8px]">
              TresCero Entertainment
            </span>
          </div>

          <div className="md:col-span-5">
            <p className="max-w-[460px] text-[10px] leading-[1.75] text-white/45 md:text-[11px]">
              Entertainment company based in Mexico, working across talent,
              live entertainment and special projects.
            </p>
          </div>

          <div className="flex items-end md:col-span-4 md:justify-end">
            <span className="text-[7px] font-medium uppercase tracking-[0.25em] text-white/30 md:text-[8px]">
              Creating Experiences
            </span>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-white/15 bg-[#060a56]">
        <div className="px-5 py-8 sm:px-6 md:px-10 md:py-10 lg:px-14">
          {/* MAIN FOOTER */}

          <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-6">
            {/* LOGO */}

            <div className="md:col-span-4">
              <a
                href="#top"
                aria-label="TresCero Entertainment — Inicio"
                className="inline-block"
              >
                <Image
                  src="/brand/trescero-logo-light.png"
                  alt="TresCero Entertainment"
                  width={220}
                  height={80}
                  className="h-auto w-[145px] md:w-[165px]"
                />
              </a>
            </div>

            {/* NAV */}

            <nav
              aria-label="Navegación del footer"
              className="grid grid-cols-2 gap-x-8 gap-y-3 md:col-span-3"
            >
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[8px] font-medium uppercase tracking-[0.22em] text-white/45 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                className="text-[8px] font-medium uppercase tracking-[0.22em] text-white/45 transition-colors duration-300 hover:text-white"
              >
                Contact
              </a>
            </nav>

            {/* CONTACT */}

            <div className="md:col-span-3 md:col-start-10 md:text-right">
              <a
                href="mailto:contacto@trescero.net"
                className="text-[9px] text-white/55 transition-colors duration-300 hover:text-tc-coral"
              >
                contacto@trescero.net
              </a>

              <p className="mt-2 text-[7px] font-medium uppercase tracking-[0.22em] text-white/25">
                Mexico
              </p>
            </div>
          </div>

          {/* LEGAL */}

          <div className="mt-10 border-t border-white/15 pt-5 md:mt-12">
            <p className="text-[7px] uppercase tracking-[0.2em] text-white/25">
              © {new Date().getFullYear()} TresCero Entertainment
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}