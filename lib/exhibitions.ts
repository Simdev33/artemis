export type ExhibitionPhoto = {
  id: number
  image: string
  caption: string
}

export type ExhibitionEvent = {
  id: number
  title: string
  location: string
  date: string
  result: string
  description: string
  photos: ExhibitionPhoto[]
}

export const exhibitionEvents: ExhibitionEvent[] = [
  {
    id: 1,
    title: "Spring Cat Show",
    location: "Budapest, Magyarország",
    date: "2026. március",
    result: "Best in Breed jelölés",
    description:
      "Tavaszi szezonnyitó eseményünkön több cicánkat is bemutattuk. A bírói értékelések külön kiemelték a harmonikus testfelépítést és a nyugodt temperamentumot.",
    photos: [
      { id: 101, image: "/images/cat-1.jpg", caption: "Ring előtti felkészülés" },
      { id: 102, image: "/images/cat-2.jpg", caption: "Bírói vizsgálat közben" },
      { id: 103, image: "/images/cat-3.jpg", caption: "Napzáró csoportkép" },
    ],
  },
  {
    id: 2,
    title: "International Feline Expo",
    location: "Bécs, Ausztria",
    date: "2025. november",
    result: "CAC pont + döntős jelölés",
    description:
      "Első nagyobb külföldi kiállításunkon nemzetközi mezőnyben szerepeltünk. Sok értékes szakmai visszajelzést kaptunk, és új kapcsolatokat építettünk.",
    photos: [
      { id: 201, image: "/images/cat-4.jpg", caption: "Nemzetközi ring" },
      { id: 202, image: "/images/cat-5.jpg", caption: "Díjátadó pillanat" },
      { id: 203, image: "/images/cat-6.jpg", caption: "Stand és közönségtalálkozó" },
    ],
  },
  {
    id: 3,
    title: "Autumn Championship Weekend",
    location: "Prága, Csehország",
    date: "2025. szeptember",
    result: "Best Opposite Sex",
    description:
      "Két napos nemzetközi hétvégén vettünk részt, ahol több kategóriában is jó eredményt értünk el. A szervezés, a mezőny és a szakmai színvonal is kiemelkedő volt.",
    photos: [
      { id: 301, image: "/images/cat-2.jpg", caption: "Szombati ringkör" },
      { id: 302, image: "/images/cat-3.jpg", caption: "Bírálat utáni pihenő" },
      { id: 303, image: "/images/cat-1.jpg", caption: "Vasárnapi döntő előtt" },
    ],
  },
]
