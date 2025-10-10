// TypeScript interfaces and types for the project

// Define interface types
export interface Project {
  id: number;
  title: string;
  client: string;
  image: string;
  video?: string;
  description: string;
  results: string;
  // tags: string[];
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

type FamousPersonalityKeys =
  | "personalities.0.name"
  | "personalities.0.profession"
  | "personalities.1.name"
  | "personalities.1.profession"
  | "personalities.2.name"
  | "personalities.2.profession"
  | "personalities.3.name"
  | "personalities.3.profession"
  | "personalities.4.name"
  | "personalities.4.profession"
  | "personalities.5.name"
  | "personalities.5.profession";

type ProjectTranslationFunction = (key: KeyProjectsKeys) => string;
type AchievementTranslationFunction = (key: AchievementsKeys) => string;
type FamousPersonalityTranslationFunction = (
  key: FamousPersonalityKeys
) => string;

export const getKeyProjects = (t: ProjectTranslationFunction) => [
  {
    id: 2,
    title: t("keyProjects.restaurant.title"),
    client: t("keyProjects.restaurant.client"),
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=center",
    video: "https://vimeo.com/1125433122?share=copy",
    description: t("keyProjects.restaurant.description"),
    results: t("keyProjects.restaurant.results"),
    // tags: ["Реклама", "Ресторан", "Кулинария"],
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
    // tags: ["Актёры", "Рилсы", "Развлечения"],
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
    // tags: ["Бренд", "Кофе", "Атмосфера"],
    year: "2023",
  },
  {
    id: 5,
    title: t("keyProjects.tumi.title"),
    client: t("keyProjects.tumi.client"),
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop&crop=center",
    video: "https://vimeo.com/1125432601?share=copy",
    description: t("keyProjects.tumi.description"),
    results: t("keyProjects.tumi.results"),
    // tags: ["Люкс", "Реклама", "Международный"],
    year: "2024",
  },
  {
    id: 6,
    title: t("keyProjects.myrza.title"),
    client: t("keyProjects.myrza.client"),
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
    video: "https://vimeo.com/1125431891?fl=pl&fe=sh",
    description: t("keyProjects.myrza.description"),
    results: t("keyProjects.myrza.results"),
    // tags: ["Мода", "Бренд", "Стиль"],
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

export const famousPersonalities = (
  t: FamousPersonalityTranslationFunction
) => [
  {
    id: 1,
    name: t("personalities.0.name"),
    nameEn: "Ayan Otepbergen",
    profession: t("personalities.0.profession"),
    image: "/users/ayan.jpg",
  },
  {
    id: 2,
    name: t("personalities.1.name"),
    nameEn: "Asylkhan Tolepov",
    profession: t("personalities.1.profession"),
    image: "/users/asylkhan.jpg",
  },
  {
    id: 3,
    name: t("personalities.2.name"),
    nameEn: "Rustem Zhanyamanov",
    profession: t("personalities.2.profession"),
    image: "/users/rustem.png",
  },
  {
    id: 4,
    name: t("personalities.3.name"),
    nameEn: "Mansur Kudaibergenov",
    profession: t("personalities.3.profession"),
    image: "/users/mansur.png",
  },
  {
    id: 5,
    name: t("personalities.4.name"),
    nameEn: "Abuali Omirali",
    profession: t("personalities.4.profession"),
    image: "/users/abuali.png",
  },
  {
    id: 6,
    name: t("personalities.5.name"),
    nameEn: "Aqarys Adilzhan",
    profession: t("personalities.5.profession"),
    image: "/users/aqarys.jpg",
  },
];
