import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Podcast Dashboard",
  description: "A sleek dashboard experience for podcast insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://necolas.github.io/normalize.css/7.0.0/normalize.css"
        />
        <link rel="icon" href="/Profile_Pic.png" />
      </head>
      <body
        className={`${montserrat.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
