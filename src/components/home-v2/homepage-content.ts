export type HomepageMetric = {
  value: string;
  label: string;
};

export type HomepageDeliverable = {
  text: string;
};

export type HomepageService = {
  title: string;
  description: string;
  bullets: string[];
  href: string;
};

export type HomepageTrigger = {
  text: string;
};

export type HomepageProject = {
  client: string;
  industry: string;
  solutionType: string;
  description: string;
  href: string;
  imageId: string;
};

export type HomepageStep = {
  number: string;
  title: string;
  description: string;
};

export type HomepageFaq = {
  question: string;
  answer: string;
};

export type HomepageArticle = {
  title: string;
  description: string;
  href: string;
  category: string;
  date: string;
};

export type HomepageAiProvider = {
  provider: "chatgpt" | "gemini" | "claude";
  label: string;
  url: string;
};

export type HomepageEvidenceItem = {
  title: string;
  text: string;
};

export type HomepageContactItem = {
  label: string;
  value: string;
  href: string;
};

export type HomepageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: HomepageMetric[];
    analysisTitle: string;
    analysisDescription: string;
    deliverables: HomepageDeliverable[];
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  services: {
    title: string;
    intro: string;
    items: HomepageService[];
    ctaTitle: string;
    ctaDescription: string;
    ctaLabel: string;
    ctaHref: string;
  };
  triggers: {
    title: string;
    items: HomepageTrigger[];
    closingText: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaLabel: string;
    ctaHref: string;
  };
  projects: {
    title: string;
    intro: string;
    aboveCards: string;
    items: HomepageProject[];
    ctaTitle: string;
    ctaDescription: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  process: {
    title: string;
    intro: string;
    steps: HomepageStep[];
    ctaTitle: string;
    ctaDescription: string;
    ctaLabel: string;
    ctaHref: string;
  };
  easyEdit: {
    title: string;
    description: string;
    benefits: string[];
    businessSentence: string;
    ctaTitle: string;
    ctaDescription: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  trust: {
    title: string;
    intro: string;
    metrics: HomepageMetric[];
    description: string;
    evidenceTitle: string;
    evidenceItems: HomepageEvidenceItem[];
    ctaLabel: string;
    ctaHref: string;
  };
  faq: {
    title: string;
    intro: string;
    items: HomepageFaq[];
    ctaQuestion: string;
    ctaText: string;
    ctaLabel: string;
    ctaHref: string;
  };
  blog: {
    title: string;
    intro: string;
    aboveCards: string;
    items: HomepageArticle[];
    ctaLabel: string;
    ctaHref: string;
  };
  askAi: {
    title: string;
    text: string;
    explanation: string;
    note: string;
    prompt: string;
    providers: HomepageAiProvider[];
  };
  finalCta: {
    title: string;
    text: string;
    deliverables: HomepageDeliverable[];
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    contacts: HomepageContactItem[];
  };
};

export const homepageContent: HomepageContent = {
  hero: {
    eyebrow: "Web rješenja, e-commerce i razvoj funkcionalnosti po mjeri",
    title:
      "Razvijamo digitalna rješenja koja podržavaju vaše poslovanje, pojednostavljuju procese i stvaraju prostor za rast",
    description:
      "U WEB Marketingu razvijamo web rješenja, e-commerce sustave i funkcionalnosti po mjeri na vlastitom EasyEdit CMS sustavu. Prilagođavamo postojeće funkcionalnosti konkretnim potrebama projekta, a kada je potrebno, razvijamo i nove module ili specifična rješenja od nule.",
    metrics: [
      { value: "25+", label: "godina na tržištu" },
      { value: "500+", label: "projekata" },
      { value: "Više", label: "industrija i složenih poslovnih sustava" },
      { value: "In-house", label: "vlastiti CMS razvijen in-house" },
    ],
    analysisTitle: "Javite nam se za besplatnu početnu analizu",
    analysisDescription:
      "Kako bismo vam već u prvoj fazi dali konkretnu vrijednost, kroz uvodni razgovor i analizu možemo pripremiti:",
    deliverables: [
      { text: "detaljnu razradu koncepta projekta" },
      { text: "prijedlog strukture naslovnice i ostalih ključnih podstranica" },
      { text: "živi prototip naslovne stranice" },
      { text: "prijedlog suradnje s procjenom elemenata i troškovnikom" },
    ],
    primaryCtaLabel: "Zatražite besplatnu analizu",
    primaryCtaHref: "/kontakt",
    secondaryCtaLabel: "Pogledajte projekte",
    secondaryCtaHref: "/reference/istaknuti-projekti",
  },
  services: {
    title: "Digitalna rješenja prilagođena stvarnim poslovnim potrebama",
    intro:
      "Ne razvijamo web rješenja samo zato da dobro izgledaju, nego zato da imaju jasnu poslovnu funkciju. Fokus nam je na rješenjima koja podržavaju vaše procese, olakšavaju upravljanje sadržajem, povezuju sustave i stvaraju kvalitetan temelj za daljnji razvoj.",
    items: [
      {
        title: "Web rješenja",
        description:
          "Razvijamo korporativne web stranice, portale i druga digitalna rješenja koja su pregledna, stabilna i prilagođena načinu na koji vaše poslovanje stvarno funkcionira.",
        bullets: [
          "prilagodba strukture sadržaja i funkcionalnosti",
          "lakše upravljanje sadržajem kroz EasyEdit CMS",
          "rješenje usklađeno s vašim poslovnim procesima",
        ],
        href: "/rjesenja/web-platforme",
      },
      {
        title: "E-commerce",
        description:
          "Razvijamo webshopove i e-commerce sustave koji podržavaju prodaju, administraciju i povezivanje s postojećim poslovnim sustavima.",
        bullets: [
          "povezivanje s ERP-om, CRM-om i drugim sustavima",
          "prilagodba procesa kupnje i administracije",
          "skalabilnost za rast prodaje",
        ],
        href: "/rjesenja/ecommerce",
      },
      {
        title: "Custom programiranje",
        description:
          "Kada standardna rješenja nisu dovoljna, razvijamo funkcionalnosti, module i digitalna rješenja po mjeri vaših konkretnih zahtjeva.",
        bullets: [
          "razvoj specifičnih funkcionalnosti",
          "prilagodba stvarnim poslovnim potrebama",
          "veća fleksibilnost i dugoročna održivost",
        ],
        href: "/rjesenja",
      },
    ],
    ctaTitle: "Javite nam se za besplatnu početnu analizu",
    ctaDescription:
      "Ako još niste sigurni koji je najbolji smjer za vaš projekt, kroz početni razgovor i analizu možemo pripremiti početnu razradu koncepta, predložiti strukturu ključnih stranica i pokazati kako bi projekt mogao biti postavljen.",
    ctaLabel: "Zatražite besplatnu analizu",
    ctaHref: "/kontakt",
  },
  triggers: {
    title: "Klijenti nam se najčešće javljaju kada trebaju:",
    items: [
      { text: "novu web stranicu koja bolje podržava poslovanje" },
      { text: "webshop povezan s postojećim poslovnim sustavima" },
      { text: "specifične funkcionalnosti ili module po mjeri" },
      { text: "nadogradnju postojećeg digitalnog rješenja" },
      { text: "partnera za dugoročan razvoj i podršku" },
      { text: "veću fleksibilnost i kontrolu nad sadržajem i administracijom" },
    ],
    closingText:
      "Ako se prepoznajete u jednoj od ovih situacija, vjerojatno vam ne treba generičko rješenje, nego partner koji razumije poslovni kontekst i zna kako ga pretočiti u funkcionalan digitalni sustav.",
    ctaTitle: "Javite nam se za besplatnu početnu analizu",
    ctaDescription:
      "Kroz uvodni razgovor možemo sagledati vaše potrebe i pripremiti konkretniji početni smjer projekta — od razrade koncepta do prijedloga strukture i suradnje.",
    ctaLabel: "Zatražite besplatnu analizu",
    ctaHref: "/kontakt",
  },
  projects: {
    title: "Projekti koji pokazuju kako pristupamo stvarnim poslovnim izazovima",
    intro:
      "Ne prikazujemo samo završni vizual, nego rješenja koja nastaju iz konkretnih poslovnih potreba, jasnih ciljeva i stvarnih operativnih izazova.",
    aboveCards:
      "Od korporativnih web stranica i webshopova do internih sustava i funkcionalnosti po mjeri, svaki projekt razvijamo s fokusom na upotrebljivost, stabilnost i dugoročnu vrijednost za poslovanje.",
    items: [
      {
        client: "Orbico",
        industry: "Distribucija",
        solutionType: "E-commerce sustav",
        description:
          "Za klijenta smo razvili rješenje prilagođeno konkretnim poslovnim potrebama, s fokusom na funkcionalnost, jednostavnije upravljanje i mogućnost daljnjeg razvoja.",
        href: "/work/global-b2b",
        imageId: "case-study-1",
      },
      {
        client: "Wiener osiguranje",
        industry: "Osiguranje",
        solutionType: "Portal i korisničke funkcionalnosti",
        description:
          "Za klijenta smo razvili rješenje prilagođeno konkretnim poslovnim potrebama, s fokusom na funkcionalnost, jednostavnije upravljanje i mogućnost daljnjeg razvoja.",
        href: "/work/insurance-portal",
        imageId: "case-study-2",
      },
      {
        client: "Atlantic Grupa",
        industry: "Logistika i operativa",
        solutionType: "Integracije i custom dashboard",
        description:
          "Za klijenta smo razvili rješenje prilagođeno konkretnim poslovnim potrebama, s fokusom na funkcionalnost, jednostavnije upravljanje i mogućnost daljnjeg razvoja.",
        href: "/work/logistics-iot",
        imageId: "case-study-3",
      },
    ],
    ctaTitle: "Javite nam se za besplatnu početnu analizu",
    ctaDescription:
      "Ako planirate novi projekt ili nadogradnju postojećeg sustava, kroz prvu fazu možemo pripremiti početnu razradu koncepta, okvir strukture i prijedlog suradnje koji će vam pomoći da jasnije sagledate sljedeće korake.",
    primaryCtaLabel: "Zatražite besplatnu analizu",
    primaryCtaHref: "/kontakt",
    secondaryCtaLabel: "Pogledajte sve projekte",
    secondaryCtaHref: "/reference/istaknuti-projekti",
  },
  process: {
    title: "Jasna struktura projekta od prve ideje do daljnjeg razvoja",
    intro:
      "Ozbiljan digitalni projekt ne traži samo dobru izvedbu, nego i jasan proces. Zato radimo strukturirano — od analize i definiranja prioriteta do razvoja, lansiranja i daljnjih nadogradnji.",
    steps: [
      {
        number: "1.",
        title: "Analiza i ciljevi",
        description:
          "Za početak razumijemo vaše poslovne potrebe, sadržaj, procese, prioritete i ciljeve projekta.",
      },
      {
        number: "2.",
        title: "Arhitektura rješenja",
        description:
          "Definiramo funkcionalnosti, strukturu i smjer razvoja kako bi rješenje bilo logično, održivo i spremno za daljnji rast.",
      },
      {
        number: "3.",
        title: "Razvoj i integracije",
        description:
          "Razvijamo, testiramo i povezujemo sustav s postojećim alatima i procesima tamo gdje projekt to zahtijeva.",
      },
      {
        number: "4.",
        title: "Lansiranje i daljnji razvoj",
        description:
          "Projekt ne završava objavom. Nakon lansiranja slijede podrška, optimizacije, nadogradnje i kontinuirani razvoj.",
      },
    ],
    ctaTitle: "Javite nam se za besplatnu početnu analizu",
    ctaDescription:
      "Već u prvoj fazi možemo vam pomoći konkretizirati projekt kroz razradu koncepta, prijedlog strukture ključnih stranica, živi prototip naslovnice i okvir suradnje s troškovnikom.",
    ctaLabel: "Zatražite besplatnu analizu",
    ctaHref: "/kontakt",
  },
  easyEdit: {
    title: "Vlastiti CMS za veću fleksibilnost i razvoj bez ograničenja",
    description:
      "WEB Marketing razvija web rješenja na vlastitom EasyEdit CMS sustavu. To nam omogućuje visoku razinu prilagodbe — postojeće funkcionalnosti prilagođavamo konkretnim potrebama projekta, a po potrebi razvijamo i nove module.",
    benefits: [
      "razvijen in-house",
      "prilagodba postojećih funkcionalnosti",
      "razvoj novih modula po potrebi",
      "veća kontrola nad sadržajem i administracijom",
      "dugoročnija fleksibilnost i održivost rješenja",
    ],
    businessSentence:
      "EasyEdit CMS nije samo alat za unos sadržaja. On je temelj za razvoj rješenja koje se može prilagođavati vašem poslovanju kako raste, mijenja se i postaje kompleksnije.",
    ctaTitle: "Javite nam se za besplatnu početnu analizu",
    ctaDescription:
      "Kroz uvodni razgovor i analizu možemo pripremiti početnu razradu koncepta, prijedlog strukture projekta i okvir suradnje kako biste jasnije vidjeli što vaše rješenje može uključivati.",
    primaryCtaLabel: "Saznajte više o EasyEdit CMS-u",
    primaryCtaHref: "/easyedit",
    secondaryCtaLabel: "Zatražite besplatnu analizu",
    secondaryCtaHref: "/kontakt",
  },
  trust: {
    title: "Zašto nam klijenti daju povjerenje",
    intro:
      "Kada razvijate web rješenje koje mora biti stabilno, prilagodljivo i dugoročno održivo, važno je znati kome ga povjeravate.",
    metrics: [
      { value: "25+", label: "godina iskustva" },
      { value: "500+", label: "projekata" },
      { value: "Više", label: "industrija" },
      { value: "In-house", label: "vlastiti CMS i razvojni tim" },
      { value: "Dugoročno", label: "suradnje i kontinuirani razvoj" },
    ],
    description:
      "Iza svakog projekta stoji kombinacija tehničkog znanja, razumijevanja poslovnog konteksta i suradnje usmjerene na rezultat. Zato naši projekti često ne završavaju samo isporukom, nego prerastaju u dugoročan razvoj i podršku.",
    evidenceTitle: "Prostor za logotipe klijenata, certifikate, partnerstva, nagrade, reference i vanjske recenzije",
    evidenceItems: [
      {
        title: "Logotipi klijenata",
        text: "Croatia osiguranje, Wiener, Orbico, HEP, Atlantic Grupa, Podravka",
      },
      {
        title: "Certifikati i partnerstva",
        text: "Predviđen prostor za formalne dokaze povjerenja i kompatibilnosti.",
      },
      {
        title: "Nagrade i reference",
        text: "Blok je spreman za nagrade, case study istupe i vanjske recenzije.",
      },
    ],
    ctaLabel: "Pogledajte projekte i reference",
    ctaHref: "/reference/istaknuti-projekti",
  },
  faq: {
    title: "Česta pitanja",
    intro:
      "Ako ste na početku planiranja novog web projekta, nadogradnje postojećeg sustava ili razvoja funkcionalnosti po mjeri, ovo su pitanja koja klijenti najčešće postavljaju.",
    items: [
      {
        question: "Radite li web stranice potpuno od nule?",
        answer:
          "WEB Marketing razvija web rješenja na vlastitom EasyEdit CMS sustavu koji smo razvili in-house. To omogućuje prilagodbu postojećih funkcionalnosti konkretnim potrebama projekta, a po potrebi razvijamo i nove module ili specifične funkcionalnosti od nule.",
      },
      {
        question: "Možete li nadograditi postojeći sustav ili web?",
        answer:
          "Da. Klijenti nam se često javljaju upravo kada trebaju nadogradnju postojećeg digitalnog rješenja, dodatne funkcionalnosti, modernizaciju strukture ili povezivanje s drugim sustavima.",
      },
      {
        question: "Razvijate li webshopove i integracije s poslovnim sustavima?",
        answer:
          "Da. Razvijamo e-commerce rješenja i povezujemo ih s postojećim sustavima kada projekt to zahtijeva.",
      },
      {
        question: "Kako izgleda početak suradnje?",
        answer:
          "Suradnja najčešće počinje uvodnim razgovorom i početnom analizom potreba, ciljeva i postojećeg stanja, nakon čega definiramo mogući smjer rješenja i sljedeće korake.",
      },
      {
        question: "Što dobivamo kroz početnu analizu?",
        answer:
          "Kroz početnu fazu možemo pripremiti detaljniju razradu koncepta projekta, prijedlog strukture naslovnice i ostalih ključnih podstranica, živi prototip naslovne stranice te prijedlog suradnje s procjenom elemenata i troškovnikom.",
      },
      {
        question: "Je li početna analiza besplatna?",
        answer: "Da, početni razgovor i početna analiza su bez obveze.",
      },
    ],
    ctaQuestion: "Imate specifično pitanje vezano uz vaš projekt?",
    ctaText: "Javite nam se za besplatnu početnu analizu",
    ctaLabel: "Zatražite besplatnu analizu",
    ctaHref: "/kontakt",
  },
  blog: {
    title: "Uvidi iz prakse, tehnologije i digitalnog poslovanja",
    intro:
      "Kroz stručne članke i analize dijelimo iskustva iz razvoja web rješenja, e-commerce sustava, digitalne strategije i tehnoloških tema relevantnih za poslovanje.",
    aboveCards:
      "Pišemo o temama koje tvrtkama pomažu bolje razumjeti digitalne projekte, procese razvoja, tehnologiju i odluke koje utječu na uspjeh online poslovanja.",
    items: [
      {
        title: "AI u Enterprise pretrazi: Kako EasyEdit mijenja način na koji korisnici pronalaze podatke",
        description:
          "Analiza integracije velikih jezičnih modela u zatvorene sustave i poslovnog učinka koji takva pretraga može donijeti.",
        href: "/blog",
        category: "Tehnologija",
        date: "15.05.2024",
      },
      {
        title: "Sigurnost zatvorenog koda u 2024.",
        description:
          "Zašto enterprise klijenti sve češće traže veću kontrolu nad sigurnosnim slojem i operativnom pouzdanošću platforme.",
        href: "/blog",
        category: "Sigurnost",
        date: "10.05.2024",
      },
      {
        title: "ERP sinkronizacija bez greške",
        description:
          "Praktičan pregled middleware pristupa i odluka koje olakšavaju povezivanje webshopa i poslovnih sustava.",
        href: "/blog",
        category: "Poslovni procesi",
        date: "25.04.2024",
      },
    ],
    ctaLabel: "Pogledajte sve članke",
    ctaHref: "/blog",
  },
  askAi: {
    title: "Želite dodatno provjeriti pojedine tvrdnje ili usporediti pristup?",
    text:
      "Kod važnih tema i poslovnih odluka korisnici sve češće koriste AI alate za dodatno istraživanje. Zato na odabranim mjestima možemo predvidjeti “Pitaj AI” element uz važne tvrdnje, reference ili stručne teme.",
    explanation:
      "Klikom na odabranu opciju korisnik se može otvoriti u AI alatu s unaprijed pripremljenim promptom vezanim uz konkretnu temu, tvrdnju ili područje usporedbe.",
    note:
      "Ovaj element koristi se selektivno — tamo gdje dodatno pojačava vjerodostojnost, transparentnost i interes korisnika.",
    prompt:
      "Provjeri tvrdnje i pristup predstavljene na naslovnici WEB Marketinga. Usporedi prednosti vlastitog CMS-a, custom razvoja, e-commerce integracija i početne analize projekta s generičkim pristupima. Navedi koje su tvrdnje razumno utemeljene, što bi trebalo dodatno dokazati i koja pitanja bi poslovni korisnik trebao postaviti prije odluke.",
    providers: [
      { provider: "chatgpt", label: "Pitajte ChatGPT", url: "https://chatgpt.com/" },
      { provider: "gemini", label: "Pitajte Gemini", url: "https://gemini.google.com/app" },
      { provider: "claude", label: "Pitajte Claude", url: "https://claude.ai/new" },
    ],
  },
  finalCta: {
    title: "Javite nam se za besplatnu početnu analizu",
    text:
      "Kako bismo vam već u prvoj fazi dali konkretnu vrijednost, kroz uvodni razgovor i analizu možemo pripremiti:",
    deliverables: [
      { text: "detaljnu razradu koncepta projekta" },
      { text: "prijedlog strukture naslovnice i ostalih ključnih podstranica" },
      { text: "živi prototip naslovne stranice" },
      { text: "prijedlog suradnje s procjenom elemenata i troškovnikom" },
    ],
    primaryCtaLabel: "Zatražite besplatnu analizu",
    primaryCtaHref: "/kontakt",
    secondaryCtaLabel: "Dogovorite uvodni razgovor",
    secondaryCtaHref: "/kontakt",
    contacts: [
      { label: "prodaja@wem.hr", value: "prodaja@wem.hr", href: "mailto:prodaja@wem.hr" },
      { label: "+385 1 3817 757", value: "+385 1 3817 757", href: "tel:+38513817757" },
    ],
  },
};
