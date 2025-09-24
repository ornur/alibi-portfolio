"use server";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { locales } from "./global";

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale =
    (store.get("locale")?.value as (typeof locales)[number]) || "kk";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

export async function setUserLocale(locale: string) {
  const store = await cookies();
  store.set("locale", locale);
}