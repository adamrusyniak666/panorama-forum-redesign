import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panorama Forum Kraków - Restauracja z widokiem 360°",
  description: "Odkryj Panorama Forum - ekskluzywną restaurację na dachu Hotelu Forum w Krakowie. Zapierające dech widoki 360°, wyśmienita kuchnia i niezapomniane wydarzenia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
