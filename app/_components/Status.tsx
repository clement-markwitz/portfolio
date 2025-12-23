import { Card } from "@/components/ui/card";
import {Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import React from "react";
import { Bomb, BriefcaseBusiness, ChartNetwork, ChevronsLeftRightEllipsis, LucideIcon, SquarePercent } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Status = () => {
    return <Section className="flex max-md:flex-col items-start gap-2 ">
        <Card className="flex-[2] flex flex-col gap-2 max-md:w-full p-4 ">
            <p className="text-2xl   font-bold  text-muted-foreground py-4 pl-4">Mes Derniers Projets</p>
            <div className="flex flex-col gap-4">
                {SideProjectList.map((project, index) => (
                    <SideProject 
                        key={index}
                        {...project}

                    />
                ))}
            </div>
        </Card>
        <div className="flex-[2] flex flex-col gap-2 mr-5 max-md:mr-0 max-md:w-full">
            <Card className="p-4 gap-2">
                <p className="text-xl font-bold  text-muted-foreground pb-4">Formation</p>
                <div className="flex flex-col gap-4">
                    {WorkList.map((work, index) => (
                        <WorkProject 
                            key={index}
                            {...work}
                        />
                    ))}
                </div>
            </Card>
            <Card className="p-4 gap-2">
                <p className="text-xl font-bold   text-muted-foreground">Mes CV</p>
                <div className="flex flex-col gap-4">
                    {CVList.map((cv, index) => (
                        <C_V 
                            key={index}
                            {...cv}
                        />
                    ))} 
                </div>
            </Card>
        </div>
    </Section>;
};
export const SideProjectList = [
    {
        id: 1,
        logo: ChevronsLeftRightEllipsis,
        title: "Site reservation de voiture",
        resume: "Site de location avec client angular et serveur laravel",
        description: "Site de location de voitures réalisé avec Angular et Laravel. Ce projet à permis de combiné un serveur api REST en laravel et une interface utilisateur en angular. Avec la connexion et la gestion des données utilisateurs, des clients, des voitures et des reservations ,tout cela avec la gestion des rôles et des permissions du coté serveur mais aussi client. Mais aussi de l'utilisation de route, d'interception de requête et de gestion des erreurs et des tests utnitairs et linting sur le serveur avec de la doc swagger.",
        url: "https://github.com/clement-markwitz/ROAD-CAR",
        img: "/image/mv.png"
    },
    {
        
        id: 2,
        logo: BriefcaseBusiness,
        title: "Portfolio",
        resume: "Mon portfolio fait en next.js et tailwindcss",
        description: "Mon portfolio est développé avec Next.js, Tailwind CSS, et ShadCN/UI. J'ai utilisé Next.js pour sa gestion des pages dynamiques et la performance, Tailwind CSS pour un design réactif et personnalisé, et ShadCN/UI pour des composants d'interface élégants et modernes.",
        url: "https://github.com/clement-markwitz/portfolio",
        img: "/image/pf.png"
    },  
    {
        id: 3,
        logo: Bomb,
        title: "Bomberman",
        resume: "Jeu en 2D réaliser avec java en groupe de 4 personnes",
        description: "Jeu en 2D réalisé avec Java en groupe de 4 personnes. Nous avons travaillé ensemble sur la conception du jeu, la programmation des mécaniques et l'intégration des graphismes, en nous répartissant les différentes tâches pour mener à bien le projet.",
        url: "https://github.com/clement-markwitz/bomberman",
        img: "/image/bm.png"
    },
    {
        id: 4,
        logo: ChartNetwork,
        title: "Maraton du web",
        resume: "Site réaliser en PHP avec Laravel , en dormant à L'IUT. ", 
        description: "Site réalisé en PHP avec le framework Laravel, développé durant mon séjour à l'IUT. Ce projet m'a permis de mettre en pratique mes compétences en développement web, notamment avec la gestion de bases de données, l'authentification des utilisateurs, et la création d'une architecture MVC (Model-View-Controller) efficace.",
        url: "https://github.com/clement-markwitz/marathon-du-web",
        img: "/image/mw.png"
    },
    {
        id: 5,
        logo: SquarePercent,
        title: "Juste prix",
        resume: "Jeu semble à l'emission juste prix fait en python avec flask",
        description: "Jeu semblable à l'émission 'Le Juste Prix', développé en Python avec le framework Flask. Ce projet a permis de mettre en œuvre des fonctionnalités comme la gestion des sessions utilisateur, l'affichage dynamique des prix et des indices, ainsi que l'interaction avec une interface simple mais fonctionnelle pour offrir une expérience immersive.",
        url: "https://github.com/clement-markwitz/MSI-Ekip",
        img: "/image/js.png"
    },
  
 
]

type SideProjectProps = {
    id: number,
    logo: LucideIcon,
    title: string,
    resume: string,
    description: string,
    url: string,
    img: string
}
const SideProject = (props: SideProjectProps) => {
    return (
       <Link href={`/Projects/${props.id}`} className="inline-flex items-center gap-2 hover:bg-muted hover:p-2 hover:rounded-md">
    
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">
                <props.logo />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className=" text-sm font-medium leading-none text-foreground">{props.resume}</p>
            </div>
    
       </Link>
    )
}
const WorkList = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Logo_IUT_Lens.svg/1200px-Logo_IUT_Lens.svg.png",
        title: "BUT informatique",
        role: "étudiant",
        date: "2023",
        url: "https://www.iut-lens.univ-artois.fr",
        enCours: true
    },
    {
        image: "https://logo-marque.com/wp-content/uploads/2021/11/Udemy-Logo.png",
        title: "Udemy",
        role: "C# & Unity",
        date: "2024",
        url: "https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=NEW-AW-PROS-Branded-Search-FR-FRA_._ci__._sl_FRA_._vi__._sd_All_._la_FR_._&campaigntype=Search&portfolio=BrandDirect&language=FR&product=Course&test=&audience=Keyword&topic=&priority=&utm_content=deal4584&utm_term=_._ag_52142199346_._ad_607298511801_._kw_udemy_._de_c_._dm__._pl__._ti_kwd-296956216253_._li_9055856_._pd__._&matchtype=b&gad_source=1&gclid=CjwKCAiAm-67BhBlEiwAEVftNsC1JBxtmGlyrKMRw58kK-NEHPgkVC44cAkLYspHfouz9lWaqFnXjBoCaLIQAvD_BwE",
        enCours: true
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/fr/thumb/e/ea/Mcdonalds_France_2009_logo.svg/langfr-140px-Mcdonalds_France_2009_logo.svg.png",
        title: "MCDonalds",
        role: "En cuisine",
        date: "été 2023",
        url: "https://www.mcdonalds.fr/"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/fr/archive/0/00/20161112112229%21Logo_de_la_SPA_%28France%29.png",
        title: "SPA",
        role: "Soin des animaux",
        date: "été 2021",
        url: "https://www.la-spa.fr/"
    },
    
    
 
]
type WorkProps = {
    image: string,
    title: string,
    role: string,
    date: string,
    url: string
    enCours?: boolean
}
const WorkProject = (props: WorkProps) => {
    return (
       <Link href={props.url} className="inline-flex items-center gap-2 hover:bg-muted hover:p-1 hover:rounded-md">
    
            <span className="bg-accent text-accent-foreground  rounded-xl">
               <Image 
                    src={props.image} 
                    alt={props.title}
                    width={24} 
                    height={24}
                    className="w-6 h-6 object-contain"
                />
            </span>
            <div>
                <div className="inline-flex items-center">
                    <p className="text-sm font-semibold">{props.title}</p>
                    {props.enCours && <Badge variant="outline">En cours</Badge>}
                </div>
                <p className=" text-sm font-medium leading-none text-foreground">{props.role}</p>
            </div>
            <div className="ml-auto">
                <p className=" text-sm font-medium leading-none text-foreground">{props.date}</p>
            </div>
       </Link>
    )
}

const CVList = [
    {
        title: "CV - français",
        fichier: "/CV/clément.pdf"
    },
    {
        title: "CV - anglais",
        fichier: "/CV/clément-en.pdf"
    },
]  
export type CVProps = {
    title: string,
    fichier: string
}
export const C_V = (props: CVProps) => {
    return (
        <a   href={props.fichier} download={props.fichier} className="inline-flex items-center gap-2 hover:bg-muted  hover:rounded-md">
    
            <span className="bg-accent text-accent-foreground  p-2 w-full rounded-sm">
                <p>{props.title}</p>
            </span>
            

       </a>
    )
}       
            
