"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { calculateGrade } from "@/lib/grading-systems"
import type { Country } from "@/types"

interface GradeCalculatorProps {
  country: Country
  dict: {
    totalPoints: string
    achievedPoints: string
    calculate: string
    result: string
    error: {
      totalPoints: string
      achievedPoints: string
      exceeded: string
    }
  }
}

export function GradeCalculator({ country, dict }: GradeCalculatorProps) {
  const [totalPoints, setTotalPoints] = useState<string>("")
  const [achievedPoints, setAchievedPoints] = useState<string>("")
  const [grade, setGrade] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleCalculate = () => {
    setError(null)

    const total = Number.parseFloat(totalPoints)
    const achieved = Number.parseFloat(achievedPoints)

    if (isNaN(total) || total <= 0) {
      setError(dict.error.totalPoints)
      return
    }

    if (isNaN(achieved) || achieved < 0) {
      setError(dict.error.achievedPoints)
      return
    }

    if (achieved > total) {
      setError(dict.error.exceeded)
      return
    }

    const calculatedGrade = calculateGrade(country, achieved, total)
    setGrade(calculatedGrade)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="total-points">{dict.totalPoints}</Label>
          <Input
            id="total-points"
            type="number"
            min="1"
            value={totalPoints}
            onChange={(e) => setTotalPoints(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="achieved-points">{dict.achievedPoints}</Label>
          <Input
            id="achieved-points"
            type="number"
            min="0"
            value={achievedPoints}
            onChange={(e) => setAchievedPoints(e.target.value)}
          />
        </div>
      </div>

      {error && <p className="text-sm font-medium text-destructive">{error}</p>}

      <Button onClick={handleCalculate} className="w-full">
        {dict.calculate}
      </Button>

      {grade !== null && (
        <div className="rounded-lg border p-4 text-center">
          <p className="text-sm text-muted-foreground">{dict.result}</p>
          <p className="text-3xl font-bold mt-1">{grade.toFixed(2)}</p>
        </div>
      )}
    </div>
  )
}

