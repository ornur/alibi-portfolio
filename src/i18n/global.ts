import messages from "../../messages/kk.json";

export const locales = ["kk", "ru"] as const;

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof locales)[number];
    Messages: typeof messages;
  }
}
