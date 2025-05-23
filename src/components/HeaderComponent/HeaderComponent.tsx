'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import './HeaderComponent.css'
import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const logoRef = useRef(null)
  const navLinksRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const bgAnimationRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const logo = logoRef.current
    const navLinks = navLinksRef.current
    const bgAnimation = bgAnimationRef.current

    // Initial animations
    gsap.fromTo(header, 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )

    gsap.fromTo(logo,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
    )
    // @ts-ignore
    if (typeof navLinks?.children !== 'undefined') {
       // @ts-ignore
      gsap.fromTo(navLinks?.children,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.5, ease: 'power3.out' }
      )
    }
    

    // Background animation
    gsap.to(bgAnimation, {
      x: '100%',
      repeat: -1,
      duration: 10,
      ease: 'none',
    })

    // Hover animations for nav links 
    // @ts-ignore
    navLinks?.childNodes?.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.1, duration: 0.3, ease: 'power2.out' })
      })
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, duration: 0.3, ease: 'power2.out' })
      })
    })

  }, [])

  useEffect(() => {
    // Mobile menu toggle animation
    if (mobileMenuRef.current) {
      // @ts-ignore
      const mobileMenuItems = mobileMenuRef?.current?.children
      if (isMenuOpen) {
        gsap.set(mobileMenuRef.current, { height: 'auto' })
        gsap.from(mobileMenuRef.current, {
          height: 0,
          duration: 0.5,
          ease: 'power2.out',
        })
        gsap.fromTo(mobileMenuItems,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: 'power2.out',height: '100%'  }
        )
      } else {     
        gsap.to(mobileMenuRef.current, {
          height: 0,
          duration: 0.5,
          ease: 'power2.in',
        })
        gsap.to(mobileMenuItems, { opacity: 0, y: -20, duration: 0.3, stagger: 0.05, ease: 'power2.in' })
      }
    }
  }, [isMenuOpen])

  return (
    <header ref={headerRef} className="fixed from-gray-900 to-gray-800 text-gray-100 shadow-md overflow-hidden md:w-full ">
      <div className="container mx-auto px-4 py-4 relative z-10 ">
        <nav className="flex justify-between items-center p-2 nav-bg">
          <Link href="/" ref={logoRef} className="text-xl font-semibold tracking-tight hover:text-white logo-ank flex items-center" onClick={()=>{
            setIsMenuOpen(false)
          }}>
            <Image alt="Logo" src="/images/Dark Logo.png" width={"50"} height={50}/> <span className='ml-2 font-Poppins font-light text-white'>Ank<span className="text-slate-400 font-normal">ith</span></span>
          </Link>
          <div ref={navLinksRef} className="hidden md:flex space-x-1 mx-auto text-gray-500">

            <NavLink href="/projects" setIsMenuOpen>Projects</NavLink>
            <NavLink href="#about" setIsMenuOpen>About</NavLink>
            <NavLink href="/resume" setIsMenuOpen>Resume</NavLink>
            <NavLink href="#contact" setIsMenuOpen>Contact</NavLink>
          </div>
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoClose /> : <FiAlignJustify />}
          </button>
        </nav>
        <div 
          ref={mobileMenuRef} 
          className="md:hidden overflow-hidden"
          style={{ height: 0 }}
        >
          <div className="mt-4 space-y-2 pb-4">
            <NavLink href="/projects" setIsMenuOpen>Projects</NavLink>
            <NavLink href="/#about" setIsMenuOpen>About</NavLink>
            <NavLink href="/resume" setIsMenuOpen>Resume</NavLink>
            <NavLink href="/#contact" setIsMenuOpen>Contact</NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children, setIsMenuOpen }: { href: string; children: React.ReactNode; setIsMenuOpen:any }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 rounded-md text-sm font-medium transition-colors"
      onClick={()=>{
        setIsMenuOpen(false)
      }}
    >
      {children}
    </Link>
  )
}