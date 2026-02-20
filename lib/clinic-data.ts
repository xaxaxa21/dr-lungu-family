import {
  Heart,
  Droplets,
  Baby,
  Brain,
  Smile,
  Sun,
  Ear,
  Activity,
  Eye,
  Stethoscope,
  type LucideIcon,
} from "lucide-react"

export interface Specialization {
  slug: string
  name: string
  shortName: string
  icon: LucideIcon
  color: string
  description: string
  details: string[]
  symptoms: string[]
}

export const specializations: Specialization[] = [
  {
    slug: "cardiologie",
    name: "Cardiologie",
    shortName: "Cardio",
    icon: Heart,
    color: "text-red-600",
    description:
      "Departamentul de Cardiologie al clinicii Dr. Lungu Family ofera servicii complete de diagnostic si tratament al afectiunilor cardiovasculare. Echipa noastra de cardiologi cu experienta vasta utilizeaza tehnologii moderne pentru evaluarea starii de sanatate a inimii dumneavoastra.",
    details: [
      "Electrocardiograma (EKG) si Holter EKG 24h",
      "Ecocardiografie transtoracica si de efort",
      "Monitorizare tensiune arteriala (ABPM)",
      "Consultatie cardiologica completa",
      "Evaluare risc cardiovascular",
      "Management hipertensiune arteriala",
    ],
    symptoms: [
      "Dureri in piept sau disconfort toracic",
      "Palpitii sau batai neregulate ale inimii",
      "Dificultati de respiratie la efort",
      "Umflaturi la nivelul picioarelor",
      "Ameteala sau lesin",
      "Tensiune arteriala crescuta",
    ],
  },
  {
    slug: "diabet",
    name: "Diabet si Boli Metabolice",
    shortName: "Diabet",
    icon: Droplets,
    color: "text-blue-600",
    description:
      "La Dr. Lungu Family, departamentul de Diabet si Boli Metabolice ofera o abordare personalizata pentru fiecare pacient. Specialistii nostri va ajuta sa intelegeti si sa gestionati diabetul, oferindu-va suportul necesar pentru o viata activa si sanatoasa.",
    details: [
      "Diagnostic si clasificare diabet zaharat tip 1 si tip 2",
      "Monitorizare glicemie si HbA1c",
      "Ajustare schema de tratament cu insulina",
      "Educatie terapeutica pentru pacienti",
      "Screening complicatii diabetice",
      "Plan nutritional personalizat",
    ],
    symptoms: [
      "Sete excesiva si urinari frecvente",
      "Pierdere in greutate inexplicabila",
      "Oboseala cronica si slabiciune",
      "Vedere incetosata",
      "Vindecarea lenta a ranilor",
      "Furnicaturi sau amorteli in extremitati",
    ],
  },
  {
    slug: "ginecologie",
    name: "Ginecologie",
    shortName: "Gineco",
    icon: Baby,
    color: "text-pink-600",
    description:
      "Departamentul de Ginecologie al clinicii noastre pune sanatatea femeii pe primul loc. De la controale de rutina la probleme ginecologice complexe, echipa noastra de specialisti ofera ingrijire cu compasiune si profesionalism in cele mai bune conditii.",
    details: [
      "Consultatie ginecologica completa",
      "Ecografie ginecologica si obstetricala",
      "Teste screening Babes-Papanicolau",
      "Monitorizare sarcina si control prenatal",
      "Tratament afectiuni ginecologice",
      "Consiliere planificare familiala",
    ],
    symptoms: [
      "Neregularitati menstruale",
      "Dureri pelvine sau abdominale",
      "Simptome de sarcina",
      "Disconfort sau dureri in timpul ciclului",
      "Necesitate control ginecologic anual",
      "Simptome menopauza",
    ],
  },
  {
    slug: "neurologie",
    name: "Neurologie",
    shortName: "Neuro",
    icon: Brain,
    color: "text-purple-600",
    description:
      "Departamentul de Neurologie de la Dr. Lungu Family este dedicat diagnosticarii si tratamentului afectiunilor sistemului nervos. Cu o echipa de neurologi experimentati, oferim evaluari complete si planuri de tratament personalizate pentru fiecare pacient.",
    details: [
      "Electroencefalograma (EEG)",
      "Electromiografie (EMG) si studii de conducere nervoasa",
      "Evaluare neurologica completa",
      "Diagnostic si tratament cefalee si migrena",
      "Management boli neurodegenerative",
      "Tratament vertij si tulburari de echilibru",
    ],
    symptoms: [
      "Dureri de cap frecvente sau severe",
      "Ameteala si vertij",
      "Tremor sau miscarile involuntare",
      "Pierderi de memorie sau confuzie",
      "Amorteli sau slabiciune musculara",
      "Tulburari de somn",
    ],
  },
  {
    slug: "psihiatrie",
    name: "Psihiatrie",
    shortName: "Psihiatrie",
    icon: Smile,
    color: "text-teal-600",
    description:
      "La Dr. Lungu Family, departamentul de Psihiatrie ofera un mediu sigur si confidential pentru evaluarea si tratamentul tulburarilor de sanatate mintala. Psihiatrii nostri combina empatia cu expertiza clinica pentru a va ajuta sa va regasiti echilibrul emotional.",
    details: [
      "Evaluare psihiatrica completa",
      "Tratament depresie si tulburari de anxietate",
      "Managementul tulburarilor de somn",
      "Psihoterapie si consiliere",
      "Tratament farmacologic personalizat",
      "Suport pentru managementul stresului",
    ],
    symptoms: [
      "Tristete persistenta sau lipsa de interes",
      "Anxietate excesiva sau atacuri de panica",
      "Insomnie sau tulburari de somn",
      "Schimbari bruste de dispozitie",
      "Dificultati de concentrare",
      "Retragere sociala sau izolare",
    ],
  },
  {
    slug: "dermatologie",
    name: "Dermatologie",
    shortName: "Dermato",
    icon: Sun,
    color: "text-orange-600",
    description:
      "Departamentul de Dermatologie al clinicii Dr. Lungu Family se ocupa de diagnosticarea si tratarea afectiunilor pielii, parului si unghiilor. Dermatologii nostri utilizeaza cele mai noi metode de diagnostic si tratament pentru a va asigura sanatatea si frumusetea pielii.",
    details: [
      "Dermatoscopie digitala",
      "Consultatie dermatologica completa",
      "Tratament acnee si rosacee",
      "Screening cancer de piele",
      "Tratament eczeme si psoriazis",
      "Proceduri dermatologice minim invazive",
    ],
    symptoms: [
      "Eruptii cutanate persistente",
      "Alunite care isi schimba forma sau culoarea",
      "Mancarimi intense sau cronice",
      "Acnee severa sau cicatrici",
      "Caderea parului",
      "Modificari ale texturii pielii",
    ],
  },
  {
    slug: "orl",
    name: "ORL (Otorinolaringologie)",
    shortName: "ORL",
    icon: Ear,
    color: "text-amber-700",
    description:
      "Departamentul ORL de la Dr. Lungu Family ofera servicii specializate pentru afectiunile urechii, nasului si gatului. Echipa noastra de specialisti ORL va pune la dispozitie consultatie de inalta calitate si tratamente moderne.",
    details: [
      "Audiometrie si timpanometrie",
      "Endoscopie nazala si laringiana",
      "Consultatie ORL completa",
      "Tratament sinuzita si rinita alergica",
      "Evaluare si tratament vertij",
      "Management apnee in somn",
    ],
    symptoms: [
      "Dureri de urechi sau pierdere de auz",
      "Nas infundat cronic sau sinuzita",
      "Dureri de gat persistente",
      "Sforait sau apnee in somn",
      "Ameteala legata de ureche",
      "Pierderea mirosului sau gustului",
    ],
  },
  {
    slug: "endocrinologie",
    name: "Endocrinologie",
    shortName: "Endocrino",
    icon: Activity,
    color: "text-emerald-700",
    description:
      "Departamentul de Endocrinologie al clinicii noastre se ocupa de diagnosticarea si tratarea dezechilibrelor hormonale si a bolilor glandelor endocrine. Endocrinologii nostri va ofera o evaluare completa si un plan de tratament personalizat.",
    details: [
      "Evaluare si tratament afectiuni tiroidiene",
      "Ecografie tiroidiana",
      "Diagnostic osteoporoza si tulburari de calciu",
      "Evaluare si tratament tulburari hormonale",
      "Management sindrom metabolic",
      "Monitorizare noduli tiroidieni",
    ],
    symptoms: [
      "Oboseala inexplicabila sau modificari de greutate",
      "Sensibilitate la frig sau caldura",
      "Modificari de dispozitie frecvente",
      "Probleme cu ciclul menstrual",
      "Umflatura la nivelul gatului",
      "Sed si urinari frecvente",
    ],
  },
  {
    slug: "oftalmologie",
    name: "Oftalmologie",
    shortName: "Oftalmo",
    icon: Eye,
    color: "text-cyan-600",
    description:
      "Departamentul de Oftalmologie de la Dr. Lungu Family va ofera ingrijire completa pentru sanatatea ochilor. De la consultatii de rutina la diagnosticarea afectiunilor oculare complexe, oftalmologii nostri sunt dedicati protejarii vederii dumneavoastra.",
    details: [
      "Consultatie oftalmologica completa",
      "Tomografie in coerenta optica (OCT)",
      "Fundoscopie si biomicroscopie",
      "Determinare acuitate vizuala si refractie",
      "Screening glaucom si degenerescenta maculara",
      "Evaluare si prescriptie ochelari/lentile de contact",
    ],
    symptoms: [
      "Vedere incetosata sau dubla",
      "Dureri de ochi sau presiune oculara",
      "Ochi rosii sau iritatii oculare frecvente",
      "Dificultati de vedere pe timp de noapte",
      "Puncte sau linii plutitoare in campul vizual",
      "Pierdere progresiva a vederii",
    ],
  },
  {
    slug: "pediatrie",
    name: "Pediatrie",
    shortName: "Pediatrie",
    icon: Stethoscope,
    color: "text-green-600",
    description:
      "Departamentul de Pediatrie al clinicii Dr. Lungu Family este dedicat sanatatii si bunastarii copiilor. Pediatrii nostri experimentati ofera ingrijire medicala calduroasa si profesionista, asigurandu-se ca cei mici primesc cea mai buna atentie medicala.",
    details: [
      "Consultatie pediatrica completa",
      "Monitorizare crestere si dezvoltare",
      "Vaccinari si imunizari conform schemei nationale",
      "Diagnostic si tratament boli infectioase pediatrice",
      "Evaluare alergii si intoleranee alimentare",
      "Consiliere nutritionala pentru copii",
    ],
    symptoms: [
      "Febra sau stari febrile la copii",
      "Tuse persistenta sau probleme respiratorii",
      "Dureri abdominale sau tulburari digestive",
      "Eruptii cutanate la copii",
      "Intarzieri in crestere sau dezvoltare",
      "Infectii recurente",
    ],
  },
]

export interface StaffMember {
  name: string
  role: string
  specialization: string
  title: string
  experience: string
}

export const staffMembers: StaffMember[] = [
  // Cardiologie
  {
    name: "Dr. Andrei Marinescu",
    role: "Sef Departament",
    specialization: "Cardiologie",
    title: "Medic Primar Cardiolog",
    experience: "18 ani experienta",
  },
  {
    name: "Dr. Elena Dumitrescu",
    role: "Medic Specialist",
    specialization: "Cardiologie",
    title: "Medic Specialist Cardiolog",
    experience: "10 ani experienta",
  },
  // Diabet
  {
    name: "Dr. Catalin Ionescu",
    role: "Sef Departament",
    specialization: "Diabet si Boli Metabolice",
    title: "Medic Primar Diabetolog",
    experience: "20 ani experienta",
  },
  {
    name: "Dr. Ioana Radulescu",
    role: "Medic Specialist",
    specialization: "Diabet si Boli Metabolice",
    title: "Medic Specialist Diabetolog",
    experience: "8 ani experienta",
  },
  // Ginecologie
  {
    name: "Dr. Maria Stefanescu",
    role: "Sef Departament",
    specialization: "Ginecologie",
    title: "Medic Primar Ginecolog",
    experience: "22 ani experienta",
  },
  {
    name: "Dr. Cristina Popescu",
    role: "Medic Specialist",
    specialization: "Ginecologie",
    title: "Medic Specialist Ginecolog",
    experience: "12 ani experienta",
  },
  // Neurologie
  {
    name: "Dr. Radu Constantinescu",
    role: "Sef Departament",
    specialization: "Neurologie",
    title: "Medic Primar Neurolog",
    experience: "16 ani experienta",
  },
  {
    name: "Dr. Ana Vladescu",
    role: "Medic Specialist",
    specialization: "Neurologie",
    title: "Medic Specialist Neurolog",
    experience: "9 ani experienta",
  },
  // Psihiatrie
  {
    name: "Dr. Mihai Barbu",
    role: "Sef Departament",
    specialization: "Psihiatrie",
    title: "Medic Primar Psihiatru",
    experience: "19 ani experienta",
  },
  {
    name: "Dr. Laura Nicolescu",
    role: "Medic Specialist",
    specialization: "Psihiatrie",
    title: "Medic Specialist Psihiatru",
    experience: "11 ani experienta",
  },
  // Dermatologie
  {
    name: "Dr. Diana Gheorghe",
    role: "Sef Departament",
    specialization: "Dermatologie",
    title: "Medic Primar Dermatolog",
    experience: "15 ani experienta",
  },
  {
    name: "Dr. Alexandru Stanescu",
    role: "Medic Specialist",
    specialization: "Dermatologie",
    title: "Medic Specialist Dermatolog",
    experience: "7 ani experienta",
  },
  // ORL
  {
    name: "Dr. Bogdan Florescu",
    role: "Sef Departament",
    specialization: "ORL (Otorinolaringologie)",
    title: "Medic Primar ORL",
    experience: "17 ani experienta",
  },
  {
    name: "Dr. Simona Tanase",
    role: "Medic Specialist",
    specialization: "ORL (Otorinolaringologie)",
    title: "Medic Specialist ORL",
    experience: "10 ani experienta",
  },
  // Endocrinologie
  {
    name: "Dr. Adriana Manolescu",
    role: "Sef Departament",
    specialization: "Endocrinologie",
    title: "Medic Primar Endocrinolog",
    experience: "21 ani experienta",
  },
  {
    name: "Dr. Stefan Dragomir",
    role: "Medic Specialist",
    specialization: "Endocrinologie",
    title: "Medic Specialist Endocrinolog",
    experience: "6 ani experienta",
  },
  // Oftalmologie
  {
    name: "Dr. Gabriel Petrescu",
    role: "Sef Departament",
    specialization: "Oftalmologie",
    title: "Medic Primar Oftalmolog",
    experience: "14 ani experienta",
  },
  {
    name: "Dr. Raluca Ene",
    role: "Medic Specialist",
    specialization: "Oftalmologie",
    title: "Medic Specialist Oftalmolog",
    experience: "8 ani experienta",
  },
  // Pediatrie
  {
    name: "Dr. Iuliana Voiculescu",
    role: "Sef Departament",
    specialization: "Pediatrie",
    title: "Medic Primar Pediatru",
    experience: "23 ani experienta",
  },
  {
    name: "Dr. Florin Matei",
    role: "Medic Specialist",
    specialization: "Pediatrie",
    title: "Medic Specialist Pediatru",
    experience: "9 ani experienta",
  },
]
