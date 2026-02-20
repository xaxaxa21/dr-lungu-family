import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { specializations } from "@/lib/clinic-data"
import { FadeIn, PulseOnHover } from "@/components/animated"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Specialitati Medicale",
  description:
    "Descopera toate specialitatile medicale disponibile la Dr. Lungu Family: Cardiologie, Pediatrie, Ginecologie, Neurologie si multe altele.",
}

export default function SpecialitatiPage() {
  return (
    <>
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-3xl font-extrabold tracking-tight text-primary-foreground lg:text-5xl">
                Specialitatile noastre medicale
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
                Un portofoliu complet de specialitati medicale, toate sub acelasi
                acoperis. Echipa noastra de specialisti va sta la dispozitie.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {specializations.map((spec, i) => (
              <FadeIn key={spec.slug} delay={i * 80} direction="up">
                <PulseOnHover>
                  <Link
                    href={`/specialitati/${spec.slug}`}
                    className="group flex gap-5 rounded-2xl border border-border bg-card p-6 lg:p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary group-hover:bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <spec.icon className={`h-7 w-7 ${spec.color}`} />
                    </div>
                    <div className="relative flex flex-col gap-2 min-w-0">
                      <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {spec.name}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {spec.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-1">
                        Afla mai multe
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5 duration-300" />
                      </span>
                    </div>
                  </Link>
                </PulseOnHover>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
