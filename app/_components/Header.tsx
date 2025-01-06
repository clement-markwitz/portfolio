import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import Link from "next/link"
import { GithubIcon } from "./icons/GithubIcon";
import { cn } from "@/lib/utils"
import { LinkedinIcon } from "./icons/LinkedinIcon";
export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex item-baseline">
                <h1 className="text-lg font bold text-foreground"> <a href="/">Clement.com</a></h1>
                <div className="flex-1"/>
                        <ul className="flex gap-2">
                            <Link 
                            href="https://github.com/clement-markwitz"
                            className={cn(buttonVariants({variant: "outline"}),"size-6 p-0")}
                            >
                                <GithubIcon size={50} className="text-foreground"/>
                            </Link>
                            <Link 
                            href="https://www.linkedin.com/in/cl%C3%A9ment-markwitz-44660b1b7/"
                            className={cn(buttonVariants({variant: "outline"}),"size-6 p-0")}
                            >
                                <LinkedinIcon size={12} className="text-foreground"/>
                            </Link>
                        </ul>
            
            </Section>
        </header>
        );
    }