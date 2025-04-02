"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  dict: {
    light: string
    dark: string
    system: string
  }
}

export function ThemeToggle({ dict }: ThemeToggleProps) {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>{dict.light}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>{dict.dark}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>{dict.system}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

