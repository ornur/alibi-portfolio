import { NextIntlClientProvider } from "next-intl";

export function Provider({ children }: { children: React.ReactNode }) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
