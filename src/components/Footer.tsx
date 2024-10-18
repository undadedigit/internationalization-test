'use client'

import { useTranslations } from '../utils/i18n'

export default function Footer() {
  const translations = useTranslations()

  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>{translations.footer.copyright}</p>
      </div>
    </footer>
  )
}
