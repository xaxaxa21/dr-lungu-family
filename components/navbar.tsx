"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { specializations } from "@/lib/clinic-data"

const navLinks = [
  { href: "/", label: "Acasa" },
  { href: "/specialitati", label: "Specialitati", hasDropdown: true },
  { href: "/programari", label: "Programari" },
  { href: "/echipa", label: "Echipa Medicala" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [specOpen, setSpecOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Dr. Lungu Family Logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-primary leading-tight">
              Dr. Lungu Family
            </span>
            <span className="text-xs text-muted-foreground leading-tight">
              Grija pentru sanatate
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigatie principala">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => setSpecOpen(true)}
                onMouseLeave={() => setSpecOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors">
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {specOpen && (
                  <div className="absolute top-full left-0 w-72 bg-card rounded-xl shadow-xl border border-border p-2 mt-1">
                    {specializations.map((spec) => (
                      <Link
                        key={spec.slug}
                        href={`/specialitati/${spec.slug}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors"
                        onClick={() => setSpecOpen(false)}
                      >
                        <spec.icon className={`h-4 w-4 ${spec.color}`} />
                        <span className="text-sm text-foreground">{spec.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+40755754545"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
            +40 755 754 545
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Inchide meniu" : "Deschide meniu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="flex flex-col p-4 gap-1" aria-label="Navigatie mobila">
            <Link
              href="/"
              className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Acasa
            </Link>
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                onClick={() => setSpecOpen(!specOpen)}
              >
                Specialitati
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${specOpen ? "rotate-180" : ""}`}
                />
              </button>
              {specOpen && (
                <div className="ml-4 flex flex-col gap-0.5">
                  {specializations.map((spec) => (
                    <Link
                      key={spec.slug}
                      href={`/specialitati/${spec.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-secondary transition-colors"
                      onClick={() => {
                        setSpecOpen(false)
                        setMobileOpen(false)
                      }}
                    >
                      <spec.icon className={`h-4 w-4 ${spec.color}`} />
                      <span className="text-sm text-foreground">{spec.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/programari"
              className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Programari
            </Link>
            <Link
              href="/echipa"
              className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Echipa Medicala
            </Link>
            <Link
              href="/contact"
              className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:+40755754545"
              className="flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
            >
              <Phone className="h-4 w-4" />
              +40 755 754 545
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
