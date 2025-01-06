import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export const Section = (porps: PropsWithChildren<{className?: string}>) => {
    return (
        <section className={cn("max-w-3xl  px-4 mx-auto", porps.className)}>
            {porps.children}
        </section>
    );
}