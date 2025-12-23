import { notFound } from "next/navigation";
import Link from "next/link";import { SideProjectList } from "@/app/_components/Status";
import { Header } from "../../_components/Header";
import { Spacing } from "../../_components/Spacing";
import { Footer } from '@/app/_components/Footer';
import Image from "next/image"; 
export async function generateStaticParams() {
  return SideProjectList.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetails({ params }: { params: { id: string } }) {
  
  const project = SideProjectList.find(
    (project) => project.id.toString() === params.id
  );

  if (!project) {
    return notFound(); 
  }

  return (
    <main>
      <Header />
      <Spacing height={200}></Spacing>
      <div className="p-8"></div>
      <section className="dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            
            <Link
              href="/"
              className="mb-6 inline-flex items-center px-5 py-3 text-base font-medium text-center text-muted-foreground border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              ← Retour à l&apos;accueil
            </Link>

            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              {project.title}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {project.description}
            </p>

            <a
              href={project.url}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-muted-foreground border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Voir sur GitHub
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">

          <Image 
                    src={project.img} 
                    alt={project.title} 
                    width={600} 
                    height={400} 
                    className="rounded-lg shadow-lg object-cover"
                />
          </div>
        </div>
      </section>
      <Spacing height={200}></Spacing>
      <Footer />
    </main>
  );
}