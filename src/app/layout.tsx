import { Metadata } from "next";
import { AppLayout } from "./layout/appLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biblioteca ISPB",
  description: "Biblioteca ISPB - Acesso a livros e recursos educacionais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-auto">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
