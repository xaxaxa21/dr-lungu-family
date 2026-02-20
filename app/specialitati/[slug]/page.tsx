import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Star,
} from "lucide-react"
import { specializations, staffMembers } from "@/lib/clinic-data"
import { FadeIn, PulseOnHover } from "@/components/animated"
import type { Metadata } from "next"

const doctorImages: Record<string, string> = {
  "Dr. Andrei Marinescu": "/images/doctor-male-2.jpg",
  "Dr. Elena Dumitrescu": "/images/doctor-female.jpg",
  "Dr. Catalin Ionescu": "/images/doctor-male.jpg",
  "Dr. Ioana Radulescu": "/images/doctor-female-2.jpg",
  "Dr. Maria Stefanescu": "/images/doctor-female.jpg",
  "Dr. Cristina Popescu": "/images/doctor-female-2.jpg",
  "Dr. Radu Constantinescu": "/images/doctor-male-2.jpg",
  "Dr. Ana Vladescu": "/images/doctor-female.jpg",
  "Dr. Mihai Barbu": "/images/doctor-male.jpg",
  "Dr. Laura Nicolescu": "/images/doctor-female-2.jpg",
  "Dr. Diana Gheorghe": "/images/doctor-female.jpg",
  "Dr. Alexandru Stanescu": "/images/doctor-male-2.jpg",
  "Dr. Bogdan Florescu": "/images/doctor-male.jpg",
  "Dr. Simona Tanase": "/images/doctor-female-2.jpg",
  "Dr. Adriana Manolescu": "/images/doctor-female.jpg",
  "Dr. Stefan Dragomir": "/images/doctor-male-2.jpg",
  "Dr. Gabriel Petrescu": "/images/doctor-male.jpg",
  "Dr. Raluca Ene": "/images/doctor-female-2.jpg",
  "Dr. Iuliana Voiculescu": "/images/doctor-female.jpg",
  "Dr. Florin Matei": "/images/doctor-male-2.jpg",
}

export async function generateStaticParams() {
  return specializations.map((spec) => ({ slug: spec.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const spec = specializations.find((s) => s.slug === slug)
  if (!spec) return {}
  return {
    title: spec.name,
    description: spec.description,
  }
}

export default async function SpecializationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const spec = specializations.find((s) => s.slug === slug)
  if (!spec) notFound()

  const currentIndex = specializations.findIndex((s) => s.slug === slug)
  const prevSpec = currentIndex > 0 ? specializations[currentIndex - 1] : null
  const nextSpec =
    currentIndex < specializations.length - 1
      ? specializations[currentIndex + 1]
      : null

  const doctors = staffMembers.filter((m) => m.specialization === spec.name)

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn>
            <Link
              href="/specialitati"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Toate specialitatile
            </Link>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
                <spec.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-primary-foreground lg:text-5xl">
                  {spec.name}
                </h1>
                <p className="mt-3 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
                  {spec.description}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              {/* Services */}
              <FadeIn>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Servicii oferite
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {spec.details.map((detail, i) => (
                      <FadeIn key={detail} delay={i * 60} direction="up">
                        <div className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary/20 hover:shadow-md transition-all duration-300">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5 transition-transform group-hover:scale-110" />
                          <span className="text-sm text-foreground leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Symptoms */}
              <FadeIn>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Cand sa va adresati specialistului
                  </h2>
                  <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Programati o consultatie daca prezentati oricare dintre
                      urmatoarele simptome:
                    </p>
                    <ul className="flex flex-col gap-3">
                      {spec.symptoms.map((symptom, i) => (
                        <FadeIn key={symptom} delay={i * 60} direction="left">
                          <li className="flex items-start gap-3 text-sm text-foreground">
                            <AlertCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                            {symptom}
                          </li>
                        </FadeIn>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>

              {/* Doctors */}
              {doctors.length > 0 && (
                <FadeIn>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Echipa medicala
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2">
                      {doctors.map((doctor, i) => (
                        <FadeIn key={doctor.name} delay={i * 100} direction="up">
                          <PulseOnHover>
                            <div className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                              <div className="relative h-52 overflow-hidden">
                                <Image
                                  src={doctorImages[doctor.name] || "/images/doctor-male.jpg"}
                                  alt={doctor.name}
                                  fill
                                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-50" />
                                {doctor.role === "Sef Departament" && (
                                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-accent/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-accent-foreground">
                                    <Star className="h-3 w-3" />
                                    Sef Departament
                                  </div>
                                )}
                              </div>
                              <div className="p-5">
                                <p className="font-bold text-foreground">{doctor.name}</p>
                                <p className="text-sm text-primary font-medium">{doctor.role}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {doctor.title} &middot; {doctor.experience}
                                </p>
                              </div>
                            </div>
                          </PulseOnHover>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <FadeIn direction="right">
                <div className="rounded-2xl overflow-hidden border border-border">
                  <Image
                    src="/images/medical-equipment.jpg"
                    alt="Echipamente medicale moderne"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </FadeIn>

              {/* CTA Card */}
              <FadeIn direction="right" delay={100}>
                <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 sticky top-28">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Programeaza o consultatie
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    Suna-ne pentru a programa o consultatie cu unul dintre
                    specialistii nostri in {spec.name}.
                  </p>
                  <a
                    href="tel:+40755754545"
                    className="group flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                    +40 755 754 545
                  </a>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium text-foreground">Program:</span>{" "}
                        Luni - Vineri, 08:00 - 20:00
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Locatie:</span>{" "}
                        Pitesti, Jud. Arges
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Quick Nav */}
              <FadeIn direction="right" delay={200}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-sm font-bold text-foreground mb-4">
                    Alte specialitati
                  </h3>
                  <div className="flex flex-col gap-1">
                    {specializations
                      .filter((s) => s.slug !== slug)
                      .slice(0, 5)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          href={`/specialitati/${s.slug}`}
                          className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-secondary transition-colors text-sm text-foreground"
                        >
                          <s.icon className={`h-4 w-4 ${s.color} transition-transform group-hover:scale-110`} />
                          {s.shortName}
                          <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {prevSpec ? (
              <Link
                href={`/specialitati/${prevSpec.slug}`}
                className="group flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {prevSpec.shortName}
              </Link>
            ) : (
              <span />
            )}
            {nextSpec ? (
              <Link
                href={`/specialitati/${nextSpec.slug}`}
                className="group flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {nextSpec.shortName}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
