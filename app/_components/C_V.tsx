import Link from "next/link"

export type ContactsProps = {
    title: string,
    url: string
}
export const Contacts = (props: ContactsProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-2 hover:bg-muted  hover:rounded-md">
    
            <span className="bg-accent text-accent-foreground  p-2 w-full rounded-sm">
                <p>{props.title}</p>
            </span>
            

       </Link>
    )
}