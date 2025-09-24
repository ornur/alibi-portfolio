"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { setUserLocale } from "@/i18n/request";

export function LanguageSwitcher() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const newLocale = locale === "kk" ? "ru" : "kk";
    startTransition(() => {
      setUserLocale(newLocale);
    });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      disabled={isPending}
      className="h-auto border-border/40 bg-background/50 px-3 py-1 text-xs font-medium backdrop-blur-sm hover:bg-accent/50"
    >
      {locale === "kk" ? "RU" : "KZ"}
    </Button>
  );
}
