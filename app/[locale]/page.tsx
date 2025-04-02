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
    <div className="flex flex-col gap-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">{dict.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{dict.description}</p>
      </section>

      <Card className="mx-auto w-full max-w-3xl">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>{dict.calculator.title}</CardTitle>
              <CardDescription>{dict.calculator.description}</CardDescription>
            </div>
            <CountrySelector value={country} onChange={setCountry} dict={dict.countries} />
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="points" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="points">{dict.calculator.byPoints}</TabsTrigger>
              <TabsTrigger value="average">{dict.calculator.average}</TabsTrigger>
            </TabsList>
            <TabsContent value="points" className="mt-6">
              <GradeCalculator country={country} dict={dict.pointCalculator} />
            </TabsContent>
            <TabsContent value="average" className="mt-6">
              <GradeAverage country={country} dict={dict.averageCalculator} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

