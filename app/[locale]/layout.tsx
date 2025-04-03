import type React from "react"
import {type Locale, i18n} from "@/lib/i18n-config"
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({locale}))
}

export default function LocaleLayout({
                                         children, params,
                                     }: {
    children: React.ReactNode
    params: { locale: Locale }
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header locale={params.locale}/>
            <main className="flex-1 container mx-auto py-4 sm:py-8">{children}</main>
            <Footer locale={params.locale}/>
        </div>
    )
}

