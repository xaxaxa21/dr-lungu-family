import type { Metadata } from "next"
import { ProgramariPanel } from "./programari-panel"

export const metadata: Metadata = {
  title: "Programări",
  description:
    "Programează-te la Dr. Lungu Family: alege specialitatea și medicul.",
}

export default function ProgramariPage() {
  return <ProgramariPanel />
}
