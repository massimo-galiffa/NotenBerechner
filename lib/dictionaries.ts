import type { Locale } from "./i18n-config"

const dictionaries = {
  en: {
    title: "Grade Calculator",
    description: "Calculate grades based on the grading systems of Switzerland, Germany, and Austria.",
    countries: {
      label: "Country",
      placeholder: "Select country",
      empty: "No country found",
      switzerland: "Switzerland",
      germany: "Germany",
      austria: "Austria",
    },
    calculator: {
      title: "Grade Calculator",
      description: "Calculate grades or grade averages",
      byPoints: "Calculate by points",
      average: "Calculate average",
    },
    pointCalculator: {
      totalPoints: "Total points",
      achievedPoints: "Achieved points",
      calculate: "Calculate grade",
      result: "Your grade is",
      error: {
        totalPoints: "Please enter a valid number of total points",
        achievedPoints: "Please enter a valid number of achieved points",
        exceeded: "Achieved points cannot exceed total points",
      },
    },
    averageCalculator: {
      grade: "Grade",
      weight: "Weight",
      addGrade: "+ Add grade",
      calculate: "Calculate average",
      result: "Your average is",
      error: {
        noGrades: "Please add at least one grade",
        invalidGrade: "Please enter valid grades",
        invalidWeight: "Please enter valid weights",
      },
    },
    theme: {
      light: "Light",
      dark: "Dark",
      system: "System",
    },
    footer: {
      text: "A tool for students to calculate their grades",
    },
  },
  de: {
    title: "Noten Berechner",
    description: "Berechne Noten basierend auf den Notensystemen der Schweiz, Deutschland und Österreich.",
    countries: {
      label: "Land",
      placeholder: "Land auswählen",
      empty: "Kein Land gefunden",
      switzerland: "Schweiz",
      germany: "Deutschland",
      austria: "Österreich",
    },
    calculator: {
      title: "Noten Berechner",
      description: "Berechne Noten oder Notendurchschnitte",
      byPoints: "Note berechnen (nach Punkten)",
      average: "Noten zusammenrechnen (Durchschnitt)",
    },
    pointCalculator: {
      totalPoints: "Maximalpunkte",
      achievedPoints: "Erreichte Punkte",
      calculate: "Note berechnen",
      result: "Deine Note ist",
      error: {
        totalPoints: "Bitte gib eine gültige Anzahl von Maximalpunkten ein",
        achievedPoints: "Bitte gib eine gültige Anzahl von erreichten Punkten ein",
        exceeded: "Erreichte Punkte können nicht höher als Maximalpunkte sein",
      },
    },
    averageCalculator: {
      grade: "Note",
      weight: "Gewichtung",
      addGrade: "+ Note hinzufügen",
      calculate: "Durchschnitt berechnen",
      result: "Dein Durchschnitt ist",
      error: {
        noGrades: "Bitte füge mindestens eine Note hinzu",
        invalidGrade: "Bitte gib gültige Noten ein",
        invalidWeight: "Bitte gib gültige Gewichtungen ein",
      },
    },
    theme: {
      light: "Hell",
      dark: "Dunkel",
      system: "System",
    },
    footer: {
      text: "Ein Tool für Schüler und Studenten zur Berechnung ihrer Noten",
    },
  },
}

export const getDictionary = (locale: Locale) => dictionaries[locale]

