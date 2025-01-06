import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { Contacts } from "./C_V"

export const Contact = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-2 ">
            <Card className="flex-[2] flex flex-col gap-2 max-md:w-full p-4 ">
                <p className="text-2xl   font-bold  text-muted-foreground py-4 pl-4">Contactez moi</p>    
                    <div className="flex flex-col w-full gap-4">
                        <Contacts title="clem.markwitz@gmail.com" url="mailto:clem.markwitz@gmail.com" />
                        <Contacts title="LinkedIn" url="https://www.linkedin.com/in/cl%C3%A9ment-markwitz-44660b1b7/" />
                        <Contacts title="GitHub" url="https://github.com/clement-markwitz" />
                        <Contacts title="07 82 48 35 62" url="/CV/clément.pdf" />
                    </div>
            </Card>
        </Section>
    )
}