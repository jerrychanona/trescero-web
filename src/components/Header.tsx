"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navigation = [
  { label: "ROSTER", href: "#roster" },
  { label: "LIVE", href: "#live" },
  { label: "ABOUT", href: "#about" },
  { label: "BOOKING", href: "#booking" },
  { label: "CONTACT", href: "#contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =====================================================
      DETECT SCROLL
  ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
      LOCK BODY WHEN MOBILE MENU IS OPEN
  ====================================================== */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <motion.header
        className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,box-shadow] duration-500 ${
          scrolled || menuOpen
            ? "bg-tc-blue/95 shadow-[0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.05,
          ease,
        }}
      >
        <div
          className={`flex items-center justify-between px-6 transition-[height] duration-500 md:px-10 lg:px-14 ${
            scrolled ? "h-[68px] md:h-[72px]" : "h-24"
          }`}
        >
          {/* LOGO */}

          <a
            href="#top"
            aria-label="TresCero Entertainment — Inicio"
            className="relative z-[120] flex items-center"
            onClick={closeMenu}
          >
            <Image
              src="/brand/trescero-logo-light.png"
              alt="TresCero Entertainment"
              width={220}
              height={80}
              priority
              className={`h-auto transition-[width] duration-500 ${
                scrolled
                  ? "w-[125px] md:w-[145px]"
                  : "w-[150px] md:w-[180px]"
              }`}
            />
          </a>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <nav
            aria-label="Navegación principal"
            className="relative z-[110] hidden items-center gap-7 lg:flex xl:gap-9"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative py-2 text-[11px] font-medium tracking-[0.18em] !text-white transition-opacity duration-300 hover:opacity-100"
                style={{
                  color: "#ffffff",
                  opacity: 0.82,
                }}
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-tc-coral transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className="relative z-[120] flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="relative block h-5 w-6">
              <motion.span
                className="absolute left-0 top-[6px] block h-px w-full bg-white"
                animate={
                  menuOpen
                    ? {
                        rotate: 45,
                        y: 4,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease,
                }}
              />

              <motion.span
                className="absolute left-0 top-[14px] block h-px w-full bg-white"
                animate={
                  menuOpen
                    ? {
                        rotate: -45,
                        y: -4,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease,
                }}
              />
            </span>
          </button>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE FULLSCREEN MENU
      ====================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-[90] flex min-h-[100dvh] flex-col overflow-hidden bg-tc-blue text-white lg:hidden"
            initial={{
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              duration: 0.65,
              ease,
            }}
          >
            {/* DECORATIVE BACKGROUND */}

            <motion.div
              className="pointer-events-none absolute -right-[20vw] top-[12vh] font-display text-[65vw] leading-none tracking-[-0.1em] text-white/[0.025]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.6,
              }}
              aria-hidden="true"
            >
              30
            </motion.div>

            {/* MENU CONTENT */}

            <div className="relative flex min-h-[100dvh] flex-col px-6 pb-7 pt-28">
              {/* TOP INDEX */}

              <motion.div
                className="flex items-center justify-between border-t border-white/20 pt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
              >
                <span className="text-[7px] uppercase tracking-[0.28em] text-white/40">
                  Navigation
                </span>

                <span className="text-[7px] uppercase tracking-[0.28em] text-white/40">
                  TresCero Entertainment
                </span>
              </motion.div>

              {/* NAVIGATION */}

              <nav
                aria-label="Navegación móvil"
                className="flex flex-1 flex-col justify-center py-8"
              >
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between border-b border-white/15 py-[2.2vh]"
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -15,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.18 + index * 0.055,
                      ease,
                    }}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-[7px] tracking-[0.2em] text-tc-coral">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-display text-[11.5vw] leading-[0.82] tracking-[-0.06em] text-white">
                        {item.label}
                      </span>
                    </div>

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-tc-coral"
                    >
                      <path
                        d="M5 19L19 5M19 5H8M19 5V16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                      />
                    </svg>
                  </motion.a>
                ))}
              </nav>

              {/* BOTTOM */}

              <motion.div
                className="flex items-end justify-between border-t border-white/20 pt-4"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
              >
                <div>
                  <span className="block text-[7px] uppercase tracking-[0.25em] text-white/35">
                    Creating
                  </span>

                  <span className="mt-1 block text-[7px] uppercase tracking-[0.25em] text-white/35">
                    Experiences
                  </span>
                </div>

                <a
                  href="mailto:contacto@trescero.net"
                  className="text-[8px] tracking-[0.08em] text-white/50"
                >
                  contacto@trescero.net
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}