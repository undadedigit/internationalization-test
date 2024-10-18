"use client";

import { useTranslations } from "../utils/i18n";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemList from "../components/ItemList";

export default function Home() {
  const translations = useTranslations();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{translations.home.welcome}</h1>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
          <ItemList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
