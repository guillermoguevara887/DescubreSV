import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DescubreSV — Turismo auténtico en El Salvador",
  description:
    "Conectamos turistas con guías locales, rutas culturales, gastronomía auténtica y creadores de contenido que muestran lo mejor de El Salvador.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
