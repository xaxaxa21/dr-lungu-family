"use client"

import { useMemo, useState } from "react"
import { specializations, staffMembers } from "@/lib/clinic-data"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Calendar } from "lucide-react"

/** Client-only booking panel: specialty + doctor selects, placeholder for 3rd-party date/time */
export function ProgramariPanel() {
  const [specialtySlug, setSpecialtySlug] = useState<string>("")
  const [doctorName, setDoctorName] = useState<string>("")

  const selectedSpecialty = useMemo(
    () => specializations.find((s) => s.slug === specialtySlug),
    [specialtySlug],
  )

  const doctorsForSpecialty = useMemo(() => {
    if (!selectedSpecialty) return []
    return staffMembers.filter(
      (m) => m.specialization === selectedSpecialty.name,
    )
  }, [selectedSpecialty])

  const handleSpecialtyChange = (value: string) => {
    setSpecialtySlug(value)
    setDoctorName("")
  }

  return (
    <>
      <section className="border-b border-border bg-muted/30 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
            Programări
          </h1>
          <p className="mt-2 text-sm text-muted-foreground lg:text-base">
            Alege specialitatea și medicul, apoi programează-te. Integrarea cu
            calendarul va fi activată în curând.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <Card className="border-border shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Rezervare programare</CardTitle>
              <CardDescription>
                Pasul 1 și 2: specialitate și medic. Pasul 3 va fi legat de un
                sistem extern de programări.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="specialty">Specialitate</Label>
                <Select value={specialtySlug} onValueChange={handleSpecialtyChange}>
                  <SelectTrigger
                    id="specialty"
                    className="w-full"
                    aria-label="Alege specialitatea"
                  >
                    <SelectValue placeholder="Alege specialitatea" />
                  </SelectTrigger>
                  <SelectContent>
                    {specializations.map((spec) => (
                      <SelectItem
                        key={spec.slug}
                        value={spec.slug}
                        className="cursor-pointer"
                      >
                        {spec.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="doctor">Medic</Label>
                <Select
                  value={doctorName}
                  onValueChange={setDoctorName}
                  disabled={!selectedSpecialty || doctorsForSpecialty.length === 0}
                >
                  <SelectTrigger
                    id="doctor"
                    className="w-full"
                    aria-label="Alege medicul"
                  >
                    <SelectValue
                      placeholder={
                        selectedSpecialty
                          ? "Alege medicul"
                          : "Alege mai întâi specialitatea"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {doctorsForSpecialty.map((doc) => (
                      <SelectItem
                        key={doc.name}
                        value={doc.name}
                        className="cursor-pointer"
                      >
                        <span className="font-medium">{doc.name}</span>
                        <span className="text-muted-foreground">
                          {" "}
                          — {doc.title} · {doc.experience}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2 rounded-lg border border-dashed border-border bg-muted/30 p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 shrink-0" />
                  <Label className="text-muted-foreground font-normal">
                    Data și ora
                  </Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Aici se va integra sistemul extern de programări (calendar /
                  disponibilități). Poți lega acest bloc de serviciul ales.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
