"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import "./HeaderComponent.css";
import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const bgAnimationRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const logo = logoRef.current;
    const navLinks = navLinksRef?.current;
    const bgAnimation = bgAnimationRef.current;

    gsap.fromTo(
      header,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    );

    gsap.fromTo(
      logo,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power3.out" },
    );

    // @ts-ignore
    if (typeof navLinks?.children !== "undefined") {
      const navLinksData = navLinks as HTMLElement[];
      gsap.fromTo(
        //@ts-ignore
        navLinksData?.children,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.5,
          ease: "power3.out",
        },
      );
    }

    gsap.to(bgAnimation, {
      x: "100%",
      repeat: -1,
      duration: 10,
      ease: "none",
    });

    // @ts-ignore
    navLinks?.childNodes?.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, { scale: 1.1, duration: 0.3, ease: "power2.out" });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(link, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      // @ts-ignore
      const mobileMenuItems = mobileMenuRef?.current?.children;
      if (isMenuOpen) {
        gsap.set(mobileMenuRef.current, { height: "auto" });
        gsap.from(mobileMenuRef.current, {
          height: 0,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.fromTo(
          mobileMenuItems,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: "power2.out" },
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          duration: 0.5,
          ease: "power2.in",
        });
        gsap.to(mobileMenuItems, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.in",
        });
      }
    }
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed from-gray-900 to-gray-800 text-gray-100 shadow-md overflow-hidden md:w-full"
    >
      <div className="container mx-auto px-4 py-4 relative z-10">
        <nav className="flex justify-between items-center p-2 nav-bg">
          <Link
            href="/"
            ref={logoRef}
            className="text-xl font-semibold tracking-tight logo-ank flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              alt="Logo"
              src="/images/Dark Logo.png"
              width={50}
              height={50}
            />
            <span className="ml-2 font-Poppins font-light text-port-primary">
              Ank<span className="text-slate-400 font-normal">ith</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div
            ref={navLinksRef}
            className="hidden md:flex space-x-4 mx-auto text-gray-500 items-center"
          >
            <NavLink href="/projects" setIsMenuOpen={setIsMenuOpen}>
              Projects
            </NavLink>
            <NavLink href="/#about" setIsMenuOpen={setIsMenuOpen}>
              About
            </NavLink>
            <NavLink href="/resume" setIsMenuOpen={setIsMenuOpen}>
              Resume
            </NavLink>
            <NavLink href="/blog" setIsMenuOpen={setIsMenuOpen}>
              Blog
            </NavLink>
            <NavLink href="/#contact" setIsMenuOpen={setIsMenuOpen}>
              Contact
            </NavLink>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            <ThemeSwitcher />
            <button
              className="md:hidden p-2 rounded-md transition-colors bg-gray-200 text-gray-900 hover:bg-gray-300 
             dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <IoClose /> : <FiAlignJustify />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden"
          style={{ height: 0 }}
        >
          <div className="mt-4 space-y-2 pb-4">
            <NavLink href="/projects" setIsMenuOpen={setIsMenuOpen}>
              Projects
            </NavLink>
            <NavLink href="/#about" setIsMenuOpen={setIsMenuOpen}>
              About
            </NavLink>
            <NavLink href="/resume" setIsMenuOpen={setIsMenuOpen}>
              Resume
            </NavLink>
            <NavLink href="/blog" setIsMenuOpen={setIsMenuOpen}>
              Blog
            </NavLink>
            <NavLink href="/#contact" setIsMenuOpen={setIsMenuOpen}>
              Contact
            </NavLink>
            {/* Theme switcher also inside mobile menu */}
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  setIsMenuOpen,
}: {
  href: string;
  children: React.ReactNode;
  setIsMenuOpen: any;
}) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 rounded-md text-sm font-medium transition-colors"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </Link>
  );
}
