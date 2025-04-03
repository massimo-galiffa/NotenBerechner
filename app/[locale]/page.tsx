"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CountrySelector } from "@/components/country-selector"
import { GradeCalculator } from "@/components/grade-calculator"
import { GradeAverage } from "@/components/grade-average"
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/i18n-config"
import type { Country } from "@/types"

export default function LocalePage({ params: { locale } }: { params: { locale: Locale } }) {
  const [country, setCountry] = useState<Country>("switzerland")
  const dict = getDictionary(locale)

  return (
      <div className="flex flex-col gap-6 px-4 sm:px-0">
        <section className="text-center py-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{dict.title}</h1>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{dict.description}</p>
        </section>

        <Card className="mx-auto w-full max-w-3xl bg-slate-900 border-slate-800 shadow-lg">
          <CardHeader className="pb-2 sm:pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-xl sm:text-2xl">Noten Berechner</CardTitle>
                <CardDescription className="text-sm sm:text-base">{dict.calculator.description}</CardDescription>
              </div>
              <CountrySelector value={country} onChange={setCountry} dict={dict.countries} />
            </div>
          </CardHeader>
          <CardContent className="pt-2 sm:pt-0">
            <Tabs defaultValue="points" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-2">
                <TabsTrigger value="points" className="text-xs sm:text-sm py-2">
                  {dict.calculator.byPoints}
                </TabsTrigger>
                <TabsTrigger value="average" className="text-xs sm:text-sm py-2">
                  {dict.calculator.average}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="points" className="mt-4 sm:mt-6">
                <GradeCalculator country={country} dict={dict.pointCalculator} />
              </TabsContent>
              <TabsContent value="average" className="mt-4 sm:mt-6">
                <GradeAverage country={country} dict={dict.averageCalculator} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
  )
}

