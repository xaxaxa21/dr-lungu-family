import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Clock, ArrowRight, Shield, Users, Award, CheckCircle2, Heart, Sparkles, Star } from "lucide-react"
import { specializations } from "@/lib/clinic-data"
import { FadeIn, CountUp, FloatingElement, PulseOnHover } from "@/components/animated"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturesSection />
      <SpecializationsSection />
      <WhyUsSection />
      <DoctorsPreview />
      <CTASection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary min-h-[90vh] flex items-center">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement amplitude={15} duration={6} className="absolute top-20 left-[10%] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <FloatingElement amplitude={20} duration={8} className="absolute bottom-20 right-[15%] h-96 w-96 rounded-full bg-primary-foreground/5 blur-3xl" />
        <FloatingElement amplitude={12} duration={5} className="absolute top-[40%] right-[30%] h-48 w-48 rounded-full bg-accent/5 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <FadeIn direction="none" duration={400}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 text-sm text-primary-foreground border border-primary-foreground/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                Ne deschidem portile in curand!
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={150}>
              <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground lg:text-6xl xl:text-7xl text-balance leading-[1.1]">
                Gata cu drumurile
                <span className="block text-accent">la Bucuresti!</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={300}>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 max-w-xl">
                Clinica medicala multidisciplinara de excelenta, acum in inima
                Pitestiului. Echipa medicala de top din Bucuresti vine la
                dumneavoastra.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={450}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+40755754545"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-sm font-bold text-accent-foreground hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                  Suna acum: +40 755 754 545
                </a>
                <Link
                  href="/specialitati"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-7 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
                >
                  Descopera specialitatile
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={600}>
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {["/images/doctor-male.jpg", "/images/doctor-female.jpg", "/images/doctor-male-2.jpg", "/images/doctor-female-2.jpg"].map((src, i) => (
                    <div key={i} className="relative h-10 w-10 rounded-full border-2 border-primary overflow-hidden">
                      <Image src={src} alt="" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  <span className="font-bold text-primary-foreground">20+</span> medici specialisti
                  <br />
                  <span className="text-xs text-primary-foreground/60">din cele mai bune spitale</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="right" delay={300} className="relative hidden lg:block">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
                <Image
                  src="/images/hero-doctors.jpg"
                  alt="Echipa medicala Dr. Lungu Family din Pitesti"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>

              {/* Floating stat card top-right */}
              <FloatingElement amplitude={8} duration={4} className="absolute -top-4 -right-4 z-10">
                <div className="rounded-2xl bg-card p-4 shadow-xl border border-border/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                      <Heart className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">10+ Specialitati</p>
                      <p className="text-xs text-muted-foreground">Sub acelasi acoperis</p>
                    </div>
                  </div>
                </div>
              </FloatingElement>

              {/* Floating card bottom-left */}
              <FloatingElement amplitude={6} duration={5} className="absolute -bottom-6 -left-6 z-10">
                <div className="rounded-2xl bg-card p-4 shadow-xl border border-border/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Excelenta medicala</p>
                      <p className="text-xs text-muted-foreground">Centrul Pitestiului</p>
                    </div>
                  </div>
                </div>
              </FloatingElement>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="py-6 bg-card border-b border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-muted-foreground">
          <FadeIn delay={0}>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>Medici din Bucuresti</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>Echipamente de ultima generatie</span>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>Programari rapide</span>
            </div>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>10+ Specialitati</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: MapPin,
      title: "Locatie Centrala",
      description: "Situati in Pitesti, Judetul Arges, usor accesibili din orice zona a orasului.",
      image: "/images/clinic-interior.jpg",
      imageAlt: "Interior clinica Dr. Lungu Family",
    },
    {
      icon: Clock,
      title: "Program Extins",
      description: "Luni - Vineri: 08:00 - 20:00, Sambata: 09:00 - 14:00. Programari flexibile.",
      image: "/images/family-health.jpg",
      imageAlt: "Familie la clinica medicala",
    },
    {
      icon: Phone,
      title: "Programare Rapida",
      description: "Sunati la +40 755 754 545 pentru programari rapide, fara timpi lungi de asteptare.",
      image: "/images/medical-equipment.jpg",
      imageAlt: "Echipamente medicale moderne",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="text-center mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            De ce sa ne alegi
          </p>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Totul pentru sanatatea ta, intr-un singur loc
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 150} direction="up">
              <PulseOnHover>
                <div className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-card shadow-lg border border-border">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </PulseOnHover>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function SpecializationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="mb-14 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Servicii medicale
          </p>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Specialitatile noastre
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Un portofoliu complet de specialitati medicale, toate sub acelasi
            acoperis. De la pediatrie la cardiologie, echipa noastra va sta la
            dispozitie.
          </p>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {specializations.map((spec, i) => (
            <FadeIn key={spec.slug} delay={i * 80} direction="up">
              <Link
                href={`/specialitati/${spec.slug}`}
                className="group relative flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center hover:border-primary/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary group-hover:bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <spec.icon className={`h-8 w-8 ${spec.color} transition-transform duration-300`} />
                </div>
                <h3 className="text-sm font-bold text-foreground relative">{spec.shortName}</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  <span>Afla mai multe</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500} className="mt-10 text-center">
          <Link
            href="/specialitati"
            className="group inline-flex items-center gap-2 rounded-xl border-2 border-primary/20 px-8 py-3.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Vezi toate specialitatile
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

function WhyUsSection() {
  const reasons = [
    {
      icon: Award,
      title: "Medici de Excelenta",
      description:
        "Specialisti cu experienta vasta, formati in cele mai prestigioase centre medicale din Bucuresti.",
    },
    {
      icon: Shield,
      title: "Echipamente Moderne",
      description:
        "Tehnologie medicala de ultima generatie pentru diagnostic precis si tratament eficient.",
    },
    {
      icon: Users,
      title: "Abordare Familiala",
      description:
        "Ingrijire completa pentru intreaga familie, de la copii la adulti, intr-un mediu prietenos.",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="/images/consultation.jpg"
                  alt="Consultatie medicala la clinica Dr. Lungu Family"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl bg-primary p-6 shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <CountUp end={20} suffix="+" className="text-3xl font-extrabold text-primary-foreground" />
                  <span className="text-xs text-primary-foreground/80 mt-1">Medici Specialisti</span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 lg:-left-6">
                <FloatingElement amplitude={6} duration={4}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent shadow-lg">
                    <Sparkles className="h-7 w-7 text-accent-foreground" />
                  </div>
                </FloatingElement>
              </div>
            </div>
          </FadeIn>

          {/* Content column */}
          <div>
            <FadeIn direction="right">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                De ce noi
              </p>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance leading-tight">
                Sanatatea familiei tale,
                <span className="text-primary"> prioritatea noastra</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                La Dr. Lungu Family, fiecare pacient este tratat cu atentie si respect.
                Combinam expertiza medicala din Bucuresti cu grija si caldura unei clinici de familie.
              </p>
            </FadeIn>

            <div className="mt-8 flex flex-col gap-6">
              {reasons.map((reason, i) => (
                <FadeIn key={reason.title} delay={i * 150} direction="right">
                  <div className="group flex items-start gap-4 rounded-xl p-4 -ml-4 hover:bg-secondary/50 transition-colors duration-300">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <reason.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{reason.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground mt-1">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Stats row */}
            <FadeIn delay={500} direction="up">
              <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl bg-secondary/50 p-6">
                <div className="text-center">
                  <CountUp end={10} suffix="+" className="text-2xl font-extrabold text-primary" />
                  <p className="text-xs text-muted-foreground mt-1">Specialitati</p>
                </div>
                <div className="text-center border-x border-border">
                  <CountUp end={15} suffix="+" className="text-2xl font-extrabold text-primary" />
                  <p className="text-xs text-muted-foreground mt-1">Ani Experienta</p>
                </div>
                <div className="text-center">
                  <CountUp end={100} suffix="%" className="text-2xl font-extrabold text-primary" />
                  <p className="text-xs text-muted-foreground mt-1">Dedicare</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

function DoctorsPreview() {
  const doctors = [
    { src: "/images/doctor-male-2.jpg", name: "Dr. Andrei Marinescu", role: "Sef Dept. Cardiologie", exp: "18 ani" },
    { src: "/images/doctor-female.jpg", name: "Dr. Maria Stefanescu", role: "Sef Dept. Ginecologie", exp: "22 ani" },
    { src: "/images/doctor-male.jpg", name: "Dr. Catalin Ionescu", role: "Sef Dept. Diabet", exp: "20 ani" },
    { src: "/images/doctor-female-2.jpg", name: "Dr. Iuliana Voiculescu", role: "Sef Dept. Pediatrie", exp: "23 ani" },
  ]

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="mb-14 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Echipa noastra
          </p>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Cunoaste-ti medicii
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Specialisti cu experienta din cele mai bune spitale din Bucuresti, dedicati sanatatii dumneavoastra.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, i) => (
            <FadeIn key={doctor.name} delay={i * 120} direction="up">
              <PulseOnHover>
                <div className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={doctor.src}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                    {/* Badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-accent/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-accent-foreground">
                      <Star className="h-3 w-3" />
                      {doctor.exp}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground text-base">{doctor.name}</h3>
                    <p className="text-sm text-primary font-medium mt-1">{doctor.role}</p>
                  </div>
                </div>
              </PulseOnHover>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={600} className="mt-10 text-center">
          <Link
            href="/echipa"
            className="group inline-flex items-center gap-2 rounded-xl border-2 border-primary/20 px-8 py-3.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Vezi intreaga echipa
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/clinic-interior.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm" />
      </div>

      {/* Animated shapes */}
      <FloatingElement amplitude={15} duration={7} className="absolute top-10 right-[20%] h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
      <FloatingElement amplitude={10} duration={5} className="absolute bottom-10 left-[10%] h-48 w-48 rounded-full bg-primary-foreground/5 blur-2xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        <FadeIn>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 mb-6">
            <Phone className="h-7 w-7 text-accent" />
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <h2 className="text-3xl font-bold text-primary-foreground lg:text-5xl text-balance">
            Programeaza-te acum
          </h2>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-4 text-primary-foreground/80 leading-relaxed text-lg max-w-xl mx-auto">
            Nu mai pierde timp pe drumuri lungi. Suna-ne sau viziteaza-ne la
            clinica din Pitesti pentru o consultatie cu specialistii nostri.
          </p>
        </FadeIn>

        <FadeIn delay={450}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+40755754545"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-accent px-10 py-4 text-sm font-bold text-accent-foreground hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
              +40 755 754 545
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 px-10 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
            >
              Detalii Contact
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
