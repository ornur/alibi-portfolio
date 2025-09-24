// TypeScript interfaces and types for the project

// Define interface types
export interface Project {
  id: number;
  title: string;
  client: string;
  image: string;
  description: string;
  results: string;
  tags: string[];
  year: string;
}

export interface FamousPersonality {
  id: number;
  name: string;
  nameEn: string;
  profession: string;
  image: string;
}

// Define nested translation key types
type KeyProjectsKeys =
  | "keyProjects.hajj.title"
  | "keyProjects.hajj.client"
  | "keyProjects.hajj.description"
  | "keyProjects.hajj.results"
  | "keyProjects.restaurant.title"
  | "keyProjects.restaurant.client"
  | "keyProjects.restaurant.description"
  | "keyProjects.restaurant.results"
  | "keyProjects.actors.title"
  | "keyProjects.actors.client"
  | "keyProjects.actors.description"
  | "keyProjects.actors.results"
  | "keyProjects.tary.title"
  | "keyProjects.tary.client"
  | "keyProjects.tary.description"
  | "keyProjects.tary.results"
  | "keyProjects.tumi.title"
  | "keyProjects.tumi.client"
  | "keyProjects.tumi.description"
  | "keyProjects.tumi.results"
  | "keyProjects.myrza.title"
  | "keyProjects.myrza.client"
  | "keyProjects.myrza.description"
  | "keyProjects.myrza.results";

type AchievementsKeys =
  | "achievements.myrza"
  | "achievements.sebebin"
  | "achievements.tary"
  | "achievements.international"
  | "achievements.comprehensive";

type ProjectTranslationFunction = (key: KeyProjectsKeys) => string;
type AchievementTranslationFunction = (key: AchievementsKeys) => string;

export const getKeyProjects = (t: ProjectTranslationFunction) => [
  {
    id: 1,
    title: t("keyProjects.hajj.title"),
    client: t("keyProjects.hajj.client"),
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=600&fit=crop&crop=center",
    description: t("keyProjects.hajj.description"),
    results: t("keyProjects.hajj.results"),
    tags: ["Документальный", "Духовность", "Путешествия"],
    year: "2024",
  },
  {
    id: 2,
    title: t("keyProjects.restaurant.title"),
    client: t("keyProjects.restaurant.client"),
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=center",
    description: t("keyProjects.restaurant.description"),
    results: t("keyProjects.restaurant.results"),
    tags: ["Реклама", "Ресторан", "Кулинария"],
    year: "2024",
  },
  {
    id: 3,
    title: t("keyProjects.actors.title"),
    client: t("keyProjects.actors.client"),
    image:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&h=600&fit=crop&crop=center",
    description: t("keyProjects.actors.description"),
    results: t("keyProjects.actors.results"),
    tags: ["Актёры", "Рилсы", "Развлечения"],
    year: "2023-2024",
  },
  {
    id: 4,
    title: t("keyProjects.tary.title"),
    client: t("keyProjects.tary.client"),
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop&crop=center",
    description: t("keyProjects.tary.description"),
    results: t("keyProjects.tary.results"),
    tags: ["Бренд", "Кофе", "Атмосфера"],
    year: "2023",
  },
  {
    id: 5,
    title: t("keyProjects.tumi.title"),
    client: t("keyProjects.tumi.client"),
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop&crop=center",
    description: t("keyProjects.tumi.description"),
    results: t("keyProjects.tumi.results"),
    tags: ["Люкс", "Реклама", "Международный"],
    year: "2024",
  },
  {
    id: 6,
    title: t("keyProjects.myrza.title"),
    client: t("keyProjects.myrza.client"),
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
    description: t("keyProjects.myrza.description"),
    results: t("keyProjects.myrza.results"),
    tags: ["Мода", "Бренд", "Стиль"],
    year: "2023",
  },
];

export const getAchievements = (t: AchievementTranslationFunction) => [
  t("achievements.myrza"),
  t("achievements.sebebin"),
  t("achievements.tary"),
  t("achievements.international"),
  t("achievements.comprehensive"),
];

export const famousPersonalities = [
  {
    id: 1,
    name: "Аян Өтепберген",
    nameEn: "Ayan Otepbergen",
    profession: "Актёр, режиссёр",
    image: "/ayan.jpg",
  },
  {
    id: 2,
    name: "Асылхан Төлепов",
    nameEn: "Asylkhan Tolepov",
    profession: "Актёр",
    image: "/asylkhan.jpg",
  },
  {
    id: 3,
    name: "Рустем Жаныаманов",
    nameEn: "Rustem Zhanyamanov",
    profession: "Актёр",
    image: "/rustem.webp",
  },
  {
    id: 4,
    name: "Мансур Құдайбергенов",
    nameEn: "Mansur Kudaibergenov",
    profession: "Актёр",
    image: "/mansur.jpg",
  },
  {
    id: 5,
    name: "Абуали Өмірәли",
    nameEn: "Abuali Omirali",
    profession: "Актёр, продюсер",
    image: "/abuali.jpg",
  },
  {
    id: 6,
    name: "Aqarys",
    nameEn: "Aqarys",
    profession: "Публичная личность",
    image: "/aqarys.jpg",
  },
];
