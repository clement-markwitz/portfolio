import {  ComponentPropsWithRef } from "react"
import { Section } from "./Section"
import { cn } from "@/lib/utils"
import Link from "next/link"
const Code=({className,...props}:ComponentPropsWithRef<"span">)=>{
    return <span className={cn("text-primary bg-primary/10 rounded-sm py-0.5 px-1 ml-1 font-mono hover:bg-primary/20 transition-colors",className)} {...props} />
}
export const Hero = () => {
    return (    
        <Section className="flex max-md:flex-col items-start gap-4 max-md:gap-10">
            <div className="flex-[3] flex flex-col gap-2">
                <h2 className="text-4xl font-bold text-primary font-caption">Clement Markwitz</h2>
                <h3 className="text-3xl font-caption">Développeur Web</h3>
                <p className="text-base ">Je suis actuellement etudiant en but informatique à l'
                    <Code className="item-center gap-1"> 
                        <Link href={"https://www.iut-lens.univ-artois.fr/"}>
                        IUT de Lens
                        </Link>
                    </Code>
                    . Mon objectif est de devenir un<Code>développeur</Code>  polyvalent capable de concevoir des solutions innovantes et adaptées aux besoins des utilisateurs.
                     En dehors de mes études, je suis toujours curieux d'explorer de <Code>nouvelles technologies</Code> et de relever des défis techniques.
                </p>
                    
            </div>  
            <div className="flex-[1] m-auto">
                <img className="w-48 h-48 rounded-full flex-col" src="https://media.licdn.com/dms/image/v2/D4E35AQGpF9BeRKYJiA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1731185024081?e=1746295200&v=beta&t=frMPWfvIataHdVBu5_Ny1OIpd0bz4Oypwq_fgwj21vo" alt="Clement Markwitz" />
            </div>
        </Section>
    )
}

