'use client'

import { useTranslations } from '../../utils/i18n'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Home() {
  const translations = useTranslations()

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4 text-blue-600">{translations.home.welcome}</h1>
          <p className="text-gray-600 mb-4">{translations.home.description}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            {translations.home.cta}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
