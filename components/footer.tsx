import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Clock, Instagram } from "lucide-react"
import { specializations } from "@/lib/clinic-data"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Dr. Lungu Family Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain brightness-200"
              />
              <div>
                <p className="font-bold text-lg">Dr. Lungu Family</p>
                <p className="text-sm opacity-80">Grija pentru sanatate</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Clinica medicala multidisciplinara de excelenta in Pitesti. Aducem
              specialistii de top din Bucuresti direct in inima orasului
              dumneavoastra.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://www.instagram.com/drlungufamily"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram Dr. Lungu Family"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@dr.lungu.family"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="TikTok Dr. Lungu Family"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.78a8.18 8.18 0 003.76.92V6.27a4.83 4.83 0 01-4-.58z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Specialitati */}
          <div>
            <h3 className="font-semibold text-base mb-4">Specialitati</h3>
            <ul className="flex flex-col gap-2">
              {specializations.slice(0, 6).map((spec) => (
                <li key={spec.slug}>
                  <Link
                    href={`/specialitati/${spec.slug}`}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {spec.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/specialitati/orl"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Toate specialitatile &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Linkuri */}
          <div>
            <h3 className="font-semibold text-base mb-4">Linkuri Utile</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/echipa"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Echipa Medicala
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Contact si Programari
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-4">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="tel:+40755754545" className="text-sm opacity-80 hover:opacity-100">
                  +40 755 754 545
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="text-sm opacity-80">
                  Pitesti, Judetul Arges, Romania
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <div className="text-sm opacity-80">
                  <p>Luni - Vineri: 08:00 - 20:00</p>
                  <p>Sambata: 09:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">
            &copy; {new Date().getFullYear()} Dr. Lungu Family. Toate
            drepturile rezervate.
          </p>
          <p className="text-xs opacity-40">
            Versiune Beta - In curs de dezvoltare
          </p>
        </div>
      </div>
    </footer>
  )
}
