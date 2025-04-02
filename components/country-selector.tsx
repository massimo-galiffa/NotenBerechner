"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import type { Country } from "@/types"
import { useState } from "react"

interface CountrySelectorProps {
  value: Country
  onChange: (value: Country) => void
  dict: {
    label: string
    placeholder: string
    empty: string
    switzerland: string
    germany: string
    austria: string
  }
}

export function CountrySelector({ value, onChange, dict }: CountrySelectorProps) {
  const [open, setOpen] = useState(false)

  const countries = [
    { value: "switzerland" as Country, label: dict.switzerland },
    { value: "germany" as Country, label: dict.germany },
    { value: "austria" as Country, label: dict.austria },
  ]

  const selectedCountry = countries.find((country) => country.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full sm:w-[200px] justify-between">
          {selectedCountry?.label || dict.placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full sm:w-[200px] p-0">
        <Command>
          <CommandInput placeholder={dict.placeholder} />
          <CommandList>
            <CommandEmpty>{dict.empty}</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onSelect={() => {
                    onChange(country.value)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === country.value ? "opacity-100" : "opacity-0")} />
                  {country.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

