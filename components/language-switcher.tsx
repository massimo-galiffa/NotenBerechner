"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"
import { i18n, type Locale } from "@/lib/i18n-config"

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathName = usePathname()
  const router = useRouter()

  const switchLocale = (locale: Locale) => {
    if (locale === currentLocale) return

    // Replace the locale segment in the pathname
    const segments = pathName.split("/")
    segments[1] = locale
    router.push(segments.join("/"))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLocale(locale)}
            className={currentLocale === locale ? "font-bold" : ""}
          >
            {locale === "en" ? "English" : "Deutsch"}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

