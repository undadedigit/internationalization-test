'use client'

import { useParams } from 'next/navigation'

export function useTranslations() {
  const params = useParams()
  const locale = (params.locale as string) || 'en'
  const translations = require(`../locales/${locale}.json`)

  return translations
}
