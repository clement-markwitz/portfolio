import { Section } from "./Section"
import { PhpIcon } from "./icons/PhpIcon"
import { LaravelIcon } from "./icons/LaravelIcon"
import { FlaskIcon } from "./icons/FlaskIcon"
import { NextIcon } from "./icons/NextIcon"
import { TailwindIcon } from "./icons/TailwindIcon"
import { HtmlIcon } from "./icons/HtmlIcon"
import { JavaIcon } from "./icons/JavaIcon"
import { PythonIcon } from "./icons/PythonIcon"
import { BashIcon } from "./icons/BashIcon"
import { JetIcon } from "./icons/JetIcon"
import { GithubIcon } from "./icons/GithubIcon"
import { LinuxIcon } from "./icons/LinuxIcon"
import { AngIcon } from "./icons/AngIcon"

export const Skills = () => {
    return (
        <Section className="  max-md:flex-col items-start gap-4">
            <h2 className="text-4xl font-bold text-primary font-caption m-auto text-center">Skills</h2>
            <h3 className="text-2xl font-bold text-muted-foreground font-mono m-auto gap-2 p-2">Techno Web</h3>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 pb-10">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <AngIcon className=" text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" size={32}/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Angular</h3>
              <p className="text-gray-500 dark:text-gray-400"> </p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <PhpIcon className=" text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" size={32}/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">PHP</h3>
              <p className="text-gray-500 dark:text-gray-400"> </p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <LaravelIcon className=" text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" size={32}/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Laravel</h3>
              <p className="text-gray-500 dark:text-gray-400"> </p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <FlaskIcon className=" text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" size={32}/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Flask</h3>
              <p className="text-gray-500 dark:text-gray-400"> </p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <NextIcon className=" text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" size={32}/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Next.js</h3>
              <p className="text-gray-500 dark:text-gray-400"> </p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <TailwindIcon className=" text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" size={32}/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Tailwind CSS</h3>
              <p className="text-gray-500 dark:text-gray-400"> </p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <HtmlIcon className=" text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" size={32}/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">HTML 5/CSS 3</h3>
              <p className="text-gray-500 dark:text-gray-400"> </p>
          </div>
          </div>
          <h3 className="text-2xl font-bold text-muted-foreground font-mono m-auto gap-2 p-2">Programation</h3>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 pb-10">
            
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <JavaIcon className=" text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" size={32}/>              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Java</h3>
              <p className="text-gray-500 dark:text-gray-400"> </p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <PythonIcon className=" text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" size={32}/>              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Python</h3>
              <p className="text-gray-500 dark:text-gray-400"> </p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <BashIcon className=" text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" size={32}/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Bash</h3>
              <p className="text-gray-500 dark:text-gray-400"> </p>
          </div>
         
          </div>
          <h3 className="text-2xl font-bold text-muted-foreground font-mono m-auto gap-2 p-2">Outils - IDE - Systèmes</h3>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <JetIcon className=" text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" size={32}/>              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Suite JetBrains</h3>
              <p className="text-gray-500 dark:text-gray-400"> </p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <GithubIcon className=" text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" size={32}/>              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">GitHub - GitLab</h3>
              <p className="text-gray-500 dark:text-gray-400"> </p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <LinuxIcon className=" text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" size={32}/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Linux</h3>
              <p className="text-gray-500 dark:text-gray-400"> </p>
          </div>
         
          </div>
        </Section>
    )
}