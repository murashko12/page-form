"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function ErrorPage({ error }: { error: Error }) {

    useEffect(() => (
        console.error(error)
    ), [error])

    return (
        <div className="flex items-center justify-center h-full w-full flex-col gap-4">
            <h2 className="text-destructive text-4xl">Something went wrong!</h2>
            <Button asChild>
                <Link href={"/"}>Go back to home</Link>
            </Button>
        </div>
    )
}

export default ErrorPage