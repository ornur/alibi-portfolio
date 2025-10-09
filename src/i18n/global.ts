import messages from "../../messages/ru.json";

export const locales = ["ru", "en"] as const;

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof locales)[number];
    Messages: typeof messages;
  }
}
