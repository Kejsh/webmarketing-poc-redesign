export type NavigationItem = {
  label: string;
  href?: string;
  clickable: boolean;
  enabledInPhase1: boolean;
  children?: NavigationItem[];
};

export type NavigationGroup = {
  label: string;
  kind: "dropdown" | "direct";
  href?: string;
  clickable: boolean;
  enabledInPhase1: boolean;
  children?: NavigationItem[];
};

export const MAIN_NAV_GROUPS: NavigationGroup[] = [
  {
    label: "HOME",
    kind: "dropdown",
    clickable: false,
    enabledInPhase1: false,
    children: [
      {
        label: "Naslovnica",
        href: "/",
        clickable: true,
        enabledInPhase1: true,
      },
    ],
  },
  {
    label: "USLUGE",
    kind: "dropdown",
    clickable: false,
    enabledInPhase1: false,
    children: [
      { label: "Web rješenja", clickable: false, enabledInPhase1: false },
      { label: "Ecommerce", clickable: false, enabledInPhase1: false },
      { label: "Custom programiranje", clickable: false, enabledInPhase1: false },
      { label: "Sve usluge", clickable: false, enabledInPhase1: false },
    ],
  },
  {
    label: "REFERENCE",
    kind: "dropdown",
    clickable: false,
    enabledInPhase1: false,
    children: [
      {
        label: "Istaknuti projekti",
        href: "/reference/istaknuti-projekti",
        clickable: true,
        enabledInPhase1: true,
      },
      { label: "Svi projekti", clickable: false, enabledInPhase1: false },
      {
        label: "Case study - Wiener - interna aplikacija",
        clickable: false,
        enabledInPhase1: false,
      },
      {
        label: "Case study - Wiener - web + webshop",
        clickable: false,
        enabledInPhase1: false,
      },
      { label: "Case study - Autoto", clickable: false, enabledInPhase1: false },
      { label: "Case study - Rost Sport", clickable: false, enabledInPhase1: false },
    ],
  },
  {
    label: "EASYEDIT CMS",
    kind: "dropdown",
    clickable: false,
    enabledInPhase1: false,
    children: [
      {
        label: "EasyEdit CMS (zasebna stranica)",
        href: "/easyedit",
        clickable: true,
        enabledInPhase1: true,
      },
    ],
  },
  {
    label: "TVRTKA",
    kind: "dropdown",
    clickable: false,
    enabledInPhase1: false,
    children: [
      {
        label: "Naša priča",
        href: "/tvrtka/nasa-prica",
        clickable: true,
        enabledInPhase1: true,
      },
      { label: "Nagrade i certifikati", clickable: false, enabledInPhase1: false },
      {
        label: "Ulaganje u poslovanje",
        clickable: false,
        enabledInPhase1: false,
        children: [
          { label: "Ulaganje u softversku infrastrukturu", clickable: false, enabledInPhase1: false },
          { label: "Projekt unaprjeđenja poslovnih procesa", clickable: false, enabledInPhase1: false },
          { label: "Kako radimo (Scrum & agilni razvoj)", clickable: false, enabledInPhase1: false },
        ],
      },
      {
        label: "Karijere",
        clickable: false,
        enabledInPhase1: false,
        children: [
          { label: "Mid/Senior C#/.NET developer", clickable: false, enabledInPhase1: false },
          { label: "Business analyst", clickable: false, enabledInPhase1: false },
          { label: "Frontend developer", clickable: false, enabledInPhase1: false },
        ],
      },
    ],
  },
  {
    label: "BLOG",
    kind: "dropdown",
    clickable: false,
    enabledInPhase1: false,
    children: [
      {
        label: "Blog (lista članaka)",
        href: "/blog",
        clickable: true,
        enabledInPhase1: true,
      },
      { label: "Pojedinačni članak", clickable: false, enabledInPhase1: false },
      {
        label: "Bespovratna sredstva za digitalizaciju poslovanja",
        clickable: false,
        enabledInPhase1: false,
      },
    ],
  },
  {
    label: "Kontakt",
    kind: "direct",
    href: "/kontakt",
    clickable: true,
    enabledInPhase1: true,
  },
];
