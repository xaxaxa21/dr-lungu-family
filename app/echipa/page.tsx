import Link from "next/link"
import Image from "next/image"
import { Award, Star } from "lucide-react"
import { specializations, staffMembers } from "@/lib/clinic-data"
import { FadeIn, CountUp } from "@/components/animated"
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

export const metadata: Metadata = {
  title: "Echipa Medicala",
  description:
    "Cunoaste echipa de medici specialisti de la Dr. Lungu Family Pitesti. Profesionisti cu experienta vasta, dedicati sanatatii familiei tale.",
}

export default function EchipaPage() {
  const groupedBySpec = specializations.map((spec) => ({
    spec,
    members: staffMembers.filter((m) => m.specialization === spec.name),
  }))

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/hero-doctors.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-3xl font-extrabold tracking-tight text-primary-foreground lg:text-5xl">
                Echipa Medicala
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
                Specialisti de top din Bucuresti, acum la dispozitia
                dumneavoastra in Pitesti. Cunoasteti medicii care va vor ingriji
                sanatatea.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0}>
              <div className="flex flex-col items-center text-center gap-1">
                <CountUp end={staffMembers.length} className="text-3xl font-bold text-primary" />
                <span className="text-sm text-muted-foreground">Medici Specialisti</span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="flex flex-col items-center text-center gap-1">
                <CountUp end={specializations.length} className="text-3xl font-bold text-primary" />
                <span className="text-sm text-muted-foreground">Specialitati</span>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="flex flex-col items-center text-center gap-1">
                <CountUp end={15} suffix="+" className="text-3xl font-bold text-primary" />
                <span className="text-sm text-muted-foreground">Ani Experienta Medie</span>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="flex flex-col items-center text-center gap-1">
                <CountUp end={100} suffix="%" className="text-3xl font-bold text-primary" />
                <span className="text-sm text-muted-foreground">Dedicare</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Staff by Department */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-16">
            {groupedBySpec.map(({ spec, members }, groupIndex) => (
              <FadeIn key={spec.slug} delay={groupIndex * 100}>
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                      <spec.icon className={`h-6 w-6 ${spec.color}`} />
                    </div>
                    <div>
                      <Link
                        href={`/specialitati/${spec.slug}`}
                        className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                      >
                        {spec.name}
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        {members.length} {members.length === 1 ? "medic" : "medici"}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {members.map((member, i) => (
                      <FadeIn key={member.name} delay={i * 100} direction="up">
                        <div className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                          <div className="relative h-52 overflow-hidden">
                            <Image
                              src={doctorImages[member.name] || "/images/doctor-male.jpg"}
                              alt={member.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-50" />
                          </div>
                          <div className="p-5 flex flex-col gap-1.5">
                            <p className="font-bold text-foreground truncate">{member.name}</p>
                            <div className="flex items-center gap-2">
                              {member.role === "Sef Departament" ? (
                                <span className="inline-flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                                  <Star className="h-3 w-3" />
                                  {member.role}
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                                  <Award className="h-3 w-3" />
                                  {member.role}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground">{member.title}</p>
                            <p className="text-xs text-muted-foreground">{member.experience}</p>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
