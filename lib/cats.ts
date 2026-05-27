export type CatBreed = "maine-coon" | "siberian"
export type CatCategory = "kandur" | "nosteny" | "kiscica"

export type Cat = {
  id: number
  name: string
  color: string
  breed: CatBreed
  category: CatCategory
  description: string
  image: string
}

export const BREED_LABELS: Record<CatBreed, string> = {
  "maine-coon": "Maine Coon",
  siberian: "Szibériai",
}

export const CATEGORY_LABELS: Record<CatCategory, string> = {
  kandur: "Kandúrok",
  nosteny: "Nőstény",
  kiscica: "Kiscicáink",
}

export const GALLERY_CATEGORIES: CatCategory[] = ["kandur", "nosteny", "kiscica"]

export const cats: Cat[] = [
  {
    id: 1,
    name: "Apollo",
    color: "Ezüst tabby",
    breed: "maine-coon",
    category: "kandur",
    description:
      "Apollo egy fenséges ezüst tabby kandúr, gyönyörű zöld szemekkel és lenyűgöző bundával. Barátságos és játékos természetű.",
    image: "/images/cat-1.jpg",
  },
  {
    id: 2,
    name: "Luna",
    color: "Vörös mackerel",
    breed: "maine-coon",
    category: "nosteny",
    description:
      "Luna a tenyészet büszkesége, mesés vörös bundájával és arany szemeivel. Gyengéd és szeretetteljes.",
    image: "/images/cat-2.jpg",
  },
  {
    id: 3,
    name: "Artemis",
    color: "Fehér krém",
    breed: "maine-coon",
    category: "nosteny",
    description:
      "Artemis névadónk, elegáns fehér-krém bundával és kék szemekkel. Igazi hercegnő a tenyészetben.",
    image: "/images/cat-3.jpg",
  },
  {
    id: 4,
    name: "Zeus",
    color: "Barna tabby",
    breed: "maine-coon",
    category: "kandur",
    description:
      "Zeus az egyik legnagyobb Maine Coon-unk, impozáns méretével és sűrű bundájával igazi király.",
    image: "/images/cat-4.jpg",
  },
  {
    id: 5,
    name: "Kicsike",
    color: "Tabby kölyök",
    breed: "maine-coon",
    category: "kiscica",
    description:
      "A legújabb Maine Coon kölykeink egyike, játékos és kíváncsi. Hamarosan új otthont keres!",
    image: "/images/cat-5.jpg",
  },
  {
    id: 6,
    name: "Shadow",
    color: "Fekete füst",
    breed: "maine-coon",
    category: "kandur",
    description:
      "Shadow misztikus fekete füst bundájával és aranysárga szemeivel lenyűgöző látványt nyújt.",
    image: "/images/cat-6.jpg",
  },
  {
    id: 7,
    name: "Taiga",
    color: "Barna mackerel",
    breed: "siberian",
    category: "kandur",
    description:
      "Taiga impozáns szibériai kandúr, sűrű, vízálló bundával és mély zöld szemekkel. Nyugodt, bátor természetű.",
    image: "/images/cat-4.jpg",
  },
  {
    id: 8,
    name: "Mira",
    color: "Ezüst tigriscsíkos",
    breed: "siberian",
    category: "nosteny",
    description:
      "Mira elegáns szibériai nőstény, ragyogó szőrzettel és kifejező tekintettel. Csodálatos anya és társ.",
    image: "/images/cat-2.jpg",
  },
  {
    id: 9,
    name: "Sasha",
    color: "Kék-fehér",
    breed: "siberian",
    category: "nosteny",
    description:
      "Sasha finom vonalú szibériai macska, hófehér mellkasával és intenzív kék szemével. Szeretetteljes és intelligens.",
    image: "/images/cat-3.jpg",
  },
  {
    id: 10,
    name: "Frost",
    color: "Fekete-füst",
    breed: "siberian",
    category: "kandur",
    description:
      "Frost karakteres szibériai kandúr, sűrű aljszőrzettel és erős testfelépítéssel. Igazi őrző a tenyészetben.",
    image: "/images/cat-6.jpg",
  },
  {
    id: 11,
    name: "Bogyó",
    color: "Arany tigriscsíkos",
    breed: "siberian",
    category: "kiscica",
    description:
      "Bogyó játékos szibériai kölyök, merész és kíváncsi. Hamarosan új, szerető családot keres.",
    image: "/images/cat-5.jpg",
  },
  {
    id: 12,
    name: "Nyusha",
    color: "Krém-fehér",
    breed: "siberian",
    category: "kiscica",
    description:
      "Nyusha bájos szibériai kiscica, puha bundával és vidám természettel. Remekül szocializált, emberbarát kölyök.",
    image: "/images/cat-1.jpg",
  },
]

export function filterCats(
  breed: CatBreed,
  category: CatCategory | "all"
): Cat[] {
  return cats.filter(
    (cat) =>
      cat.breed === breed &&
      (category === "all" || cat.category === category)
  )
}

export const featuredCats = cats.filter((cat) =>
  [1, 2, 3, 8].includes(cat.id)
)
