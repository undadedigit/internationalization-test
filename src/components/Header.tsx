'use client'

import { useTranslations } from '../utils/i18n'
import Link from 'next/link'

export default function Header() {
  const translations = useTranslations()

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{translations.header.title}</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/en" className="hover:text-blue-200 transition duration-300">English</Link></li>
            <li><Link href="/fr" className="hover:text-blue-200 transition duration-300">Français</Link></li>
            <li><Link href="/es" className="hover:text-blue-200 transition duration-300">Español</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
