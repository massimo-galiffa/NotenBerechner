"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2 } from "lucide-react"
import { calculateAverage } from "@/lib/grading-systems"
import type { Country } from "@/types"

interface GradeItem {
  id: string
  grade: string
  weight: string
}

interface GradeAverageProps {
  country: Country
  dict: {
    grade: string
    weight: string
    addGrade: string
    calculate: string
    result: string
    error: {
      noGrades: string
      invalidGrade: string
      invalidWeight: string
    }
  }
}

export function GradeAverage({ country, dict }: GradeAverageProps) {
  const [grades, setGrades] = useState<GradeItem[]>([
    { id: "1", grade: "", weight: "100" },
    { id: "2", grade: "", weight: "100" },
  ])
  const [average, setAverage] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const addGrade = () => {
    setGrades([...grades, { id: Date.now().toString(), grade: "", weight: "100" }])
  }

  const removeGrade = (id: string) => {
    if (grades.length > 1) {
      setGrades(grades.filter((grade) => grade.id !== id))
    }
  }

  const updateGrade = (id: string, field: "grade" | "weight", value: string) => {
    setGrades(grades.map((grade) => (grade.id === id ? { ...grade, [field]: value } : grade)))
  }

  const handleCalculate = () => {
    setError(null)

    if (grades.length === 0) {
      setError(dict.error.noGrades)
      return
    }

    const gradeValues = grades.map((item) => {
      const grade = Number.parseFloat(item.grade)
      const weight = Number.parseFloat(item.weight)

      if (isNaN(grade) || grade <= 0) {
        setError(dict.error.invalidGrade)
        return null
      }

      if (isNaN(weight) || weight <= 0) {
        setError(dict.error.invalidWeight)
        return null
      }

      return { grade, weight }
    })

    if (gradeValues.some((item) => item === null)) {
      return
    }

    // Filter out null values (TypeScript needs this)
    const validGrades = gradeValues.filter((item): item is { grade: number; weight: number } => item !== null)

    const calculatedAverage = calculateAverage(country, validGrades)
    setAverage(calculatedAverage)
  }

  return (
      <div className="space-y-6">
        <div className="space-y-4">
          {grades.map((item) => (
              <div key={item.id} className="flex items-end gap-3">
                <div className="flex-1 space-y-2">
                  <Label htmlFor={`grade-${item.id}`}>{dict.grade}</Label>
                  <Input
                      id={`grade-${item.id}`}
                      type="number"
                      min="1"
                      step="0.01"
                      value={item.grade}
                      onChange={(e) => updateGrade(item.id, "grade", e.target.value)}
                  />
                </div>
                <div className="w-20 space-y-2">
                  <Label htmlFor={`weight-${item.id}`}>{dict.weight}</Label>
                  <Input
                      id={`weight-${item.id}`}
                      type="number"
                      min="1"
                      max="100"
                      step="1"
                      value={item.weight}
                      onChange={(e) => updateGrade(item.id, "weight", e.target.value)}
                      className="text-right"
                  />
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeGrade(item.id)}
                    disabled={grades.length <= 1}
                    className="mb-0.5"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove grade</span>
                </Button>
              </div>
          ))}
        </div>

        <Button variant="outline" onClick={addGrade} className="w-full">
          {dict.addGrade}
        </Button>

        {error && <p className="text-sm font-medium text-destructive">{error}</p>}

        <Button onClick={handleCalculate} className="w-full">
          {dict.calculate}
        </Button>

        {average !== null && (
            <div className="rounded-lg border p-4 text-center">
              <p className="text-sm text-muted-foreground">{dict.result}</p>
              <p className="text-3xl font-bold mt-1">{average.toFixed(2)}</p>
            </div>
        )}
      </div>
  )
}

