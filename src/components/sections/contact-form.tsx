import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { BorderTrail } from "../ui/border-trail";

export default function ContactSection() {
  return (
    <section id="contacts" className="py-32">
      <div className="mx-auto max-w-3xl px-8 font-cyrillic lg:px-0">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          Контакты
        </h1>
        <p className="mt-4 text-center">
          Готов к сотрудничеству с брендами и компаниями, которым нужен
          качественный визуальный контент и ощутимый результат.
        </p>

        <Card className="relative mx-auto mt-12 max-w-4xl border-gray-500/20 bg-background p-8 text-foreground shadow-md sm:p-16">
          <BorderTrail
            style={{
              boxShadow:
                "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
            }}
            size={150}
          />
          <div>
            <h2 className="text-xl font-semibold">
              Давайте обсудим ваш проект
            </h2>
            <p className="mt-4 text-sm">
              Свяжитесь со мной для обсуждения создания киношного контента для
              вашего бренда.
            </p>
          </div>

          <form
            action=""
            className="mt-6 space-y-6 *:space-y-3 **:[&>label]:block"
          >
            <div>
              <Label htmlFor="name">Имя</Label>
              <Input type="text" id="name" required />
            </div>

            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input type="tel" id="phone" required />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" required />
            </div>

            <div>
              <Label htmlFor="msg">Сообщение</Label>
              <Textarea
                id="msg"
                rows={3}
                placeholder="Расскажите о вашем проекте..."
              />
            </div>

            <Button>Отправить</Button>
          </form>

          <div className="mt-8 space-y-4 border-t pt-8">
            <h3 className="font-semibold">Или свяжитесь напрямую:</h3>
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
