import type { Locale } from "@/lib/i18n-config"
import { getDictionary } from "@/lib/dictionaries"

export function Footer({ locale }: { locale: Locale }) {
    const dict = getDictionary(locale)

    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4 md:h-16">
                <p className="text-xs sm:text-sm text-muted-foreground">
                    2025 Noten Berechner by{" "}
                    <a
                        href="https://github.com/massimo-galiffa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-primary"
                    >
                        M4SSI
                    </a>
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">{dict.footer.text}</p>
            </div>
        </footer>
    )
}

