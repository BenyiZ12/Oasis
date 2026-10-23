import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StructuredData } from "./StructuredData";
import { useTranslations } from "@/content/i18n";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { lang } = useTranslations();
  return (
    <div className="min-h-screen flex flex-col bg-blanco">
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <StructuredData lang={lang} />
      <Navbar />
      <main id="main-content" className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
