'use client';  // Indiquer que ce fichier est un Client Component

import { useParams } from 'next/navigation';  // Importation correcte de useParams
import { SideProjectList } from "@/app/_components/Status";
import { Header } from "../../_components/Header";
import { Spacing } from "../../_components/Spacing";
import { Footer } from '@/app/_components/Footer';

export default function ProjectDetails() {
  const { id } = useParams();  // Utilisation de useParams pour obtenir l'ID

  if (!id) {
    return <h1>Projet non trouvé</h1>;
  }

  // Récupérer le projet à partir de l'ID
  const project = SideProjectList.find(
    (project) => project.id.toString() === id
  );

  if (!project) {
    return <h1>Projet non trouvé</h1>;
  }

  return (
    <main>
      <Header />
      <Spacing height={200}></Spacing>
    <div className="p-8">
    </div>
    <section className="  dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{project.title}</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{project.description}</p>
            
            <a href="{project.url}" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-muted-foreground border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Voir sur GitHub
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={project.img} alt={project.title}/>
        </div>                
    </div>
</section>
    <Spacing height={200}></Spacing>
      <Footer />
    </main>
  );
}
