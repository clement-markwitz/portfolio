// portfolio/app/_components/Section.tsx
import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export const Section = (props: PropsWithChildren<{className?: string}>) => {
    return (
        <section className={cn("max-w-3xl px-4 mx-auto", props.className)}>
            {props.children}
        </section>
    );
}