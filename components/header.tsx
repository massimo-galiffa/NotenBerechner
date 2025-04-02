import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Locale } from "@/lib/i18n-config"
import { getDictionary } from "@/lib/dictionaries"

export function Header({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale)

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={`/${locale}`} className="font-bold text-xl flex items-center gap-2">
          Noten Berechner
        </Link>
        <div className="flex items-center gap-4">
          <LanguageSwitcher currentLocale={locale} />
          <ThemeToggle dict={dict.theme} />
        </div>
      </div>
    </header>
  )
}

