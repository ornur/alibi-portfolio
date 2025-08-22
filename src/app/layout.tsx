import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { LoadingAnimation } from "@/components/loading-animation";
import "./globals.css";
import { Provider } from "./provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Alibi Alisher",
  description: "Producer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <LoadingAnimation />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
