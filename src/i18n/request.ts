import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const locales = ["kk", "ru"] as const;

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale =
    (store.get("locale")?.value as (typeof locales)[number]) || "kk";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
