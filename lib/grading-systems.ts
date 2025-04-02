import type { Country } from "@/types"

// Calculate grade based on country's grading system
export function calculateGrade(country: Country, achievedPoints: number, totalPoints: number): number {
  const percentage = (achievedPoints / totalPoints) * 100

  switch (country) {
    case "switzerland":
      return calculateSwissGrade(percentage)
    case "germany":
      return calculateGermanGrade(percentage)
    case "austria":
      return calculateAustrianGrade(percentage)
    default:
      return 0
  }
}

// Swiss grading system: 6 is best, 1 is worst, 4 is passing
// Linear scale where 0% = 1 and 100% = 6
function calculateSwissGrade(percentage: number): number {
  return 1 + (percentage / 100) * 5
}

// German grading system: 1 is best, 6 is worst, 4 is passing
// Typically 50% is passing (grade 4)
function calculateGermanGrade(percentage: number): number {
  if (percentage >= 92) return 1.0
  if (percentage >= 85) return 1.3
  if (percentage >= 80) return 1.7
  if (percentage >= 75) return 2.0
  if (percentage >= 70) return 2.3
  if (percentage >= 65) return 2.7
  if (percentage >= 60) return 3.0
  if (percentage >= 55) return 3.3
  if (percentage >= 50) return 3.7
  if (percentage >= 45) return 4.0
  if (percentage >= 40) return 4.3
  if (percentage >= 33) return 4.7
  if (percentage >= 27) return 5.0
  if (percentage >= 20) return 5.3
  if (percentage >= 10) return 5.7
  return 6.0
}

// Austrian grading system: 1 is best, 5 is worst, 4 is passing
function calculateAustrianGrade(percentage: number): number {
  if (percentage >= 87.5) return 1.0
  if (percentage >= 75) return 2.0
  if (percentage >= 62.5) return 3.0
  if (percentage >= 50) return 4.0
  return 5.0
}

// Calculate weighted average of grades
export function calculateAverage(country: Country, grades: { grade: number; weight: number }[]): number {
  const totalWeight = grades.reduce((sum, item) => sum + item.weight, 0)
  const weightedSum = grades.reduce((sum, item) => sum + item.grade * item.weight, 0)

  return weightedSum / totalWeight
}

