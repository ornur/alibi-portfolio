"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { BorderTrail } from "../ui/border-trail";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function ContactSection() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("msg") as string;

    // Format message for WhatsApp based on locale
    const isEnglish = locale === "en";
    const whatsappMessage = isEnglish
      ? `*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Message:*%0A${message}`
      : `*Имя:* ${name}%0A*Телефон:* ${phone}%0A*Email:* ${email}%0A*Сообщение:*%0A${message}`;

    const whatsappNumber = "77007280546";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    try {
      window.open(whatsappUrl, "_blank");
      e.currentTarget.reset();
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      alert(
        isEnglish
          ? "Error opening WhatsApp. Please try again."
          : "Ошибка при открытии WhatsApp. Попробуйте еще раз."
      );
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contacts" className="py-32">
      <div className="mx-auto max-w-3xl px-8 font-cyrillic lg:px-0">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-center">{t("subtitle")}</p>

        <Card className="relative mx-auto mt-12 max-w-4xl border-gray-500/20 bg-background p-8 text-foreground shadow-md sm:p-16">
          <BorderTrail
            style={{
              boxShadow:
                "0px 0px 60px 30px rgb(255 117 23 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
            }}
            size={60}
            
          />
          <div>
            <h2 className="text-xl font-semibold">{t("form-title")}</h2>
            <p className="mt-4 text-sm">{t("form-description")}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-6 *:space-y-3 **:[&>label]:block"
          >
            <div>
              <Label htmlFor="name">{t("form-name")}</Label>
              <Input type="text" id="name" name="name" required />
            </div>

            <div>
              <Label htmlFor="phone">{t("form-phone")}</Label>
              <Input type="tel" id="phone" name="phone" required />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" required />
            </div>

            <div>
              <Label htmlFor="msg">{t("form-message")}</Label>
              <Textarea
                id="msg"
                name="msg"
                rows={3}
                placeholder={t("form-message-placeholder")}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-new-orange hover:bg-loading-orange border-0"
            >
              {isSubmitting ? t("form-submitting") : `${t("form-submit")}`}
            </Button>

            <p className="mt-2 text-xs text-muted-foreground">
              {locale === "en"
                ? "* After submitting the form, WhatsApp will open with a prepared message"
                : "* После отправки формы откроется WhatsApp с готовым сообщением"}
            </p>
          </form>

          <div className="mt-8 space-y-4 border-t pt-8">
            <h3 className="font-semibold">{t("form-subtext")}</h3>
            <div className="space-y-2 font-latin text-sm">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:alibialisher48@gmail.com"
                  className="text-primary hover:underline"
                >
                  alibialisher48@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/87007280546"
                  className="text-primary hover:underline"
                >
                  +7 700 728 05 46
                </a>
              </p>
              <p>
                <span className="font-medium">Instagram:</span>{" "}
                <a
                  href="https://instagram.com/alibi.alisherr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @alibi.alisherr
                </a>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
