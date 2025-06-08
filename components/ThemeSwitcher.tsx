"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { CombineIcon, Monitor, MoonIcon, SunIcon } from "lucide-react"

function ThemeSwitcher() {

    const { theme, setTheme } = useTheme()
    const [ mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Tabs defaultValue={theme}>
            <TabsList className="border">
                <TabsTrigger
                    value="light"
                    onClick={() => setTheme("light")}
                    className="cursor-pointer"
                >
                    <SunIcon className="h-[1.2rem] w-[1.2rem]" />
                </TabsTrigger>
                <TabsTrigger
                    value="dark"
                    onClick={() => setTheme("dark")}
                    className="cursor-pointer"
                >
                    <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
                </TabsTrigger>
                <TabsTrigger
                    value="system"
                    onClick={() => setTheme("system")}
                    className="cursor-pointer"
                >
                    <Monitor className="h-[1.2rem] w-[1.2rem]" />
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}

export default ThemeSwitcher
