import { Phone, MapPin, Clock, Mail, Instagram } from "lucide-react"
import { FadeIn, PulseOnHover } from "@/components/animated"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact si Programari",
  description:
    "Contacteaza clinica Dr. Lungu Family din Pitesti. Programari la telefon +40 755 754 545. Luni-Vineri 08:00-20:00, Sambata 09:00-14:00.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-3xl font-extrabold tracking-tight text-primary-foreground lg:text-5xl">
                Contact si Programari
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
                Suntem aici pentru dumneavoastra. Contactati-ne pentru programari
                sau informatii despre serviciile noastre.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Cards */}
            <div className="flex flex-col gap-6">
              {/* Phone */}
              <FadeIn delay={0}>
                <PulseOnHover>
                  <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary transition-transform duration-300 hover:scale-110">
                        <Phone className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-foreground">Telefon</h2>
                        <p className="text-sm text-muted-foreground mt-1 mb-3">
                          Sunati-ne pentru programari sau informatii
                        </p>
                        <a
                          href="tel:+40755754545"
                          className="text-2xl font-bold text-primary hover:underline"
                        >
                          +40 755 754 545
                        </a>
                      </div>
                    </div>
                  </div>
                </PulseOnHover>
              </FadeIn>

              {/* Address */}
              <FadeIn delay={100}>
                <PulseOnHover>
                  <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 transition-transform duration-300 hover:scale-110">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-foreground">Adresa</h2>
                        <p className="text-sm text-muted-foreground mt-1 mb-3">
                          Vizitati-ne la clinica din Pitesti
                        </p>
                        <p className="text-base font-medium text-foreground">
                          Pitesti, Judetul Arges
                        </p>
                        <p className="text-sm text-muted-foreground">Romania</p>
                      </div>
                    </div>
                  </div>
                </PulseOnHover>
              </FadeIn>

              {/* Schedule */}
              <FadeIn delay={200}>
                <PulseOnHover>
                  <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary transition-transform duration-300 hover:scale-110">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-foreground">Program</h2>
                        <p className="text-sm text-muted-foreground mt-1 mb-3">
                          Ore de functionare
                        </p>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-foreground font-medium">Luni - Vineri</span>
                            <span className="text-muted-foreground">08:00 - 20:00</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-foreground font-medium">Sambata</span>
                            <span className="text-muted-foreground">09:00 - 14:00</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-foreground font-medium">Duminica</span>
                            <span className="text-muted-foreground">Inchis</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PulseOnHover>
              </FadeIn>

              {/* Social / Email */}
              <FadeIn delay={300}>
                <PulseOnHover>
                  <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary transition-transform duration-300 hover:scale-110">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-foreground">Social Media</h2>
                        <p className="text-sm text-muted-foreground mt-1 mb-3">
                          Urmariti-ne pe retelele sociale
                        </p>
                        <div className="flex items-center gap-3">
                          <a
                            href="https://www.instagram.com/drlungufamily"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          >
                            <Instagram className="h-4 w-4" />
                            Instagram
                          </a>
                          <a
                            href="https://tiktok.com/@dr.lungu.family"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.78a8.18 8.18 0 003.76.92V6.27a4.83 4.83 0 01-4-.58z" />
                            </svg>
                            TikTok
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </PulseOnHover>
              </FadeIn>
            </div>

            {/* Map */}
            <FadeIn direction="right">
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border border-border overflow-hidden bg-card h-80 lg:h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45389.16482137774!2d24.84203!3d44.85611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2bb4b0d4e7f1d%3A0x6e2e6e7e5c9e9d7f!2sPite%C8%99ti!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Locatie Dr. Lungu Family - Pitesti, Romania"
                  />
                </div>
                <div className="rounded-2xl bg-primary p-6 lg:p-8 text-center">
                  <h3 className="text-lg font-bold text-primary-foreground mb-2">
                    Programare rapida
                  </h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Suna acum pentru a-ti rezerva o consultatie
                  </p>
                  <a
                    href="tel:+40755754545"
                    className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-sm font-bold text-accent-foreground hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                    +40 755 754 545
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
