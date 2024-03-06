import { Avatar, Button, CircularProgress } from "@nextui-org/react";
import TypingEffect from './_component/Desc';
import { ComponentDelay } from './_component/TextDelay';
import Download from './_component/Download';
import Link from "next/link";







const desc = "Over the past three years, I frequented a small coffee bar where the paper card loyalty system irked me. This annoyance sparked the idea to create a simple browser-based loyalty system. Implementing the concept proved more challenging than expected, requiring several weeks of dedicated effort. This endeavor propelled me to delve into understanding web development through building various small projects."
const hobbies = "Engaging in street lifting and calisthenics keeps me in good physical shape. Additionally, I have a passion for drawing, and my primary hobby involves continuously learning new things. Currently, I am dedicating time to learning German as part of my ongoing pursuit of knowledge and personal development."
const projectDesc = "The project focuses on simplifying the setup of a loyalty system, requiring just a few clicks from the user. Notable features include online reviews and tips for baristas. The system functions as a Progressive Web App (PWA), offering consumers an app-like experience. Additionally, I have implemented a customization feature, allowing managers to personalize the brand style for a cohesive appearance on customers' mobile devices. One of the project's key aspects is providing a cost-effective alternative to more expensive native apps."
const wordsProject = "The primary goal of this project is to develop a Progressive Web App (PWA) for engaging vocabulary learning using a 'repeating' method. Additionally, a Chrome extension will capture new words from Netflix and YouTube, creating personalized vocabulary lists. The aim is to simplify language learning through active engagement with real-world content and systematic reinforcement."
const skils = [
  {name: "Node.js", score: 70},
  {name: "Git", score: 60},
  {name: "HTML & CSS", score: 60},
  {name: "TypeScript", score: 65},
  {name: "Tailwind CSS", score: 50},
  {name: "SQL", score: 54},
  {name: "Javascript", score: 75},
  {name: "React.js", score: 79},
  {name: "Prisma ORM", score: 60},
  {name: "Next.js", score: 60},
]

const projectTechStak = [
  {name: "TypeScript", score: 65},
  {name: "Tailwind CSS", score: 50},
  {name: "React.js", score: 79},
  {name: "Prisma ORM", score: 60},
  {name: "Next.js", score: 60},
  {name: "Tanstack/React-Query", score: 60},
  {name: "Trpc", score: 60},
  {name: "NextUI", score: 60},
]

const wordsProejectTechStak = [
  {name: "TypeScript", score: 65},
  {name: "Tailwind CSS", score: 50},
  {name: "React.js", score: 79},
  {name: "Prisma ORM", score: 60},
  {name: "Next.js", score: 60},
  {name: "Tanstack/React-Query", score: 60},
  {name: "Trpc", score: 60},
  {name: "Google Text to Speach API", score: 60},
  {name: "NextUI", score: 60},
]


const languages = [
  {name: "Ukranian", score: 100, level: "Native speaker"},
  {name: "English", score: 50, level: "Good working knowledge"},
]

const delay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function Home() {

  await delay(2000)
  return (
    <div className="max-w-[50em] w-full flex flex-col items-center justify-start py-16 sm:px-3 lg:gap-5 sm:gap-3 overflow-scroll hide-scroll ">

        <div className="flex w-full lg:gap-10 sm:gap-4">
          <Avatar src="https://storage.googleapis.com/bonuslite1/avatar.jpeg" className="w-24 h-24"/>


          <div className="flex flex-col items-start justify-between lg:pl-8 sm:pl-2 sm:w-[60%] lg:w-[70%]">
            <div>
            <p className="lg:text-md font-light text-gray-500 sm:text-sm">
              <TypingEffect text="Lviv, Ukraine"/>
            </p>
            <p className="lg:text-md font-light text-gray-500 sm:text-sm">
              <Link href="tel:+380639346667">
              <TypingEffect text="+380639346667 "/>
              </Link>
              <Link href="mailto:basylmarchak@icloud.com">
              <TypingEffect text="basylmarchak@icloud.com"/>
              </Link>
  {/*             <Link href=" https://vasylmarchak.com" target="_blank">
              <TypingEffect text=" https://vasylmarchak.com"/>
              </Link> */}
           
             </p>
            </div>
            <span className="lg:text-3xl font-bold sm:text-xl">
            <TypingEffect text="Vasyl Marchak, Web Developer"/>
              </span>
          </div>
        </div>

        <div className="flex sm:flex-col lg:flex-row lg:gap-10 w-full">
          <div className="w-24"></div>
          <span
          className="w-[80%] lg:px-8  sm:px-2 text-lg font-normal sm:w-full sm:text-md">
            <TypingEffect text={desc}/>
          </span>
        </div>


        <div className="flex sm:flex-col lg:flex-row lg:gap-10 sm:gap-3 w-full">
          <div className="w-24 sm:px-2">
            <p className="font-semibold text-gray-600 pt-1">
              <ComponentDelay delay={11000}>
                  <TypingEffect text="Details"/>
              </ComponentDelay>
            </p>
          </div>


        <div className="flex lg:w-[30%] lg:px-8 sm:px-2 sm:w-full">
          <p className="text-lg font-light sm:text-md">
            <TypingEffect text="Nationality"/>
          </p>
          <p className="text-lg font-normal text-gray-500 sm:text-md">
            <TypingEffect text="________"/>
          </p>
          <p className="text-lg font-medium sm:text-md">
            <TypingEffect text="Ukranian"/>
          </p>
        </div>

        <div className="flex lg:w-[50%] sm:px-2 lg:px-8 sm:w-full">
          <p className="text-lg font-light sm:text-md">
            <TypingEffect text="Date of birth"/>
          </p>
          <p className="text-lg font-normal text-gray-500 sm:text-md">
            <TypingEffect text="________"/>
          </p>
          <p className="text-lg font-medium sm:text-md">
            <TypingEffect text="05.01.2000"/>
          </p>
        </div>
         
          
        </div>

        <div className="flex sm:flex-col lg:flex-row lg:gap-10 sm:gap-3 w-full sm:px-2">
          <div className="w-24">
            <p className=" font-semibold text-gray-600 pt-1">
             <ComponentDelay delay={11000}>
                  <TypingEffect text="Skils"/>
              </ComponentDelay>
            </p>
          </div>
         


            <div className="flex pl-8 gap-3 flex-wrap lg:max-w-[60%] sm:px-2 sm:max-w-full">

              {skils.map((i) => (

              <div className="flex gap-2" key={i.name}>
                 <ComponentDelay delay={500}>
                 <CircularProgress  
                aria-label="Loading..."
                value={i.score}
                classNames={{
                  svg: "w-6 h-6",
                  indicator: "stroke-black",
                  track: "stroke-black/10",
                  value: "text-sm font-semibold text-black",
                }}/>
                 </ComponentDelay>
             
                <p className="text-lg font-medium sm:text-md">
                <TypingEffect text={i.name}/>
                </p>
              </div>
              ))}

             </div>

        </div>

        <div className="flex sm:flex-col lg:flex-row lg:gap-10 sm:gap-3 w-full sm:px-2">
          <div className="w-24">
            <p className=" font-semibold text-gray-600 pt-1">
             <ComponentDelay delay={11000}>
                  <TypingEffect text="Language"/>
              </ComponentDelay>       
            </p>
          </div>
         


            <div className="flex pl-8 gap-3 flex-wrap lg:max-w-[60%] sm:px-2 sm:max-w-full">

              {languages.map((i) => (

              <div className="flex gap-2" key={i.name}>
                <ComponentDelay delay={500}>
                <CircularProgress  
                aria-label="Loading..."
                value={i.score}
                classNames={{
                  svg: "w-6 h-6",
                  indicator: "stroke-black",
                  track: "stroke-black/10",
                  value: "text-sm font-semibold text-black",
                }}/>
                </ComponentDelay>
              
                <p className="lg:text-lg font-medium sm:text-md">
                <TypingEffect text={i.name}/>
                </p>
                <p className="lg:text-lg font-light sm:text-md">
                <TypingEffect text={i.level}/>
                </p>
              </div>
              ))}

             </div>

        </div>

        <div className="flex sm:flex-col lg:flex-row lg:gap-10 sm:gap-3 w-full ">
          <div className="w-24 sm:px-2">
            <p className=" font-semibold text-gray-600 pt-1">
              <ComponentDelay delay={11000}>
                  <TypingEffect text="Hobbies"/>
              </ComponentDelay>
            </p>
          </div>
          <span
          className="w-[80%] lg:px-8 lg:text-lg font-normal sm:px-2 sm:w-full sm:text-md">
            <TypingEffect text={hobbies}/>
          </span>
        </div>

        <ComponentDelay delay={11000}>
            <Download/>
        </ComponentDelay>

       <div className="flex sm:flex-col lg:flex-row lg:gap-10 sm:gap-3 w-full ">
          <div className="w-24 sm:px-2">
            <p className=" font-semibold text-gray-600 pt-1">
              <ComponentDelay delay={11000}>
                  <TypingEffect text="Current Project"/>
              </ComponentDelay>
            </p>
          </div>
          <span
          className="w-[80%] lg:px-8 lg:text-lg font-normal sm:px-2 sm:w-full sm:text-md">
            <TypingEffect text={projectDesc}/>
          </span>
        </div>
        

        <div className="flex sm:flex-col lg:flex-row lg:gap-10 sm:gap-3 w-full ">
          <div className="w-24 sm:px-2"/>
          <div className="w-[80%] lg:px-8 lg:text-lg font-normal sm:px-2 sm:w-full sm:text-md">
          <ComponentDelay delay={11000}>
          <p className="font-medium text-md text-black pb-2">
                  <TypingEffect text="Core Technology"/>
          </p>
          </ComponentDelay>
           <ComponentDelay delay={11000}>
            <div className="flex w-full gap-2 flex-wrap">
            {projectTechStak.map((i) => (
                  <Button className="cursor-default bg-white text-black" size="sm" key={i.name}>{i.name}</Button>
                ))}
            </div>
           </ComponentDelay>
          </div>
        </div>


        <ComponentDelay delay={11000}>
          <div className="flex justify-center w-full pt-5 gap-3">
            <Link href="https://lite-theta.vercel.app/about" target="_blank">
              <Button className=" bg-black text-white ">
              <svg className="w-5 h-5  text-white" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24">
              <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1"/>
            </svg>
                More Detailed   
              </Button>
            </Link>
          </div>
        </ComponentDelay>    




      <div className="flex sm:flex-col lg:flex-row lg:gap-10 sm:gap-3 w-full ">
          <div className="w-24 sm:px-2">
            <p className=" font-semibold text-gray-600 pt-1">
              <ComponentDelay delay={11000}>
                  <TypingEffect text="Deferred Project"/>
              </ComponentDelay>
            </p>
          </div>
          <span
          className="w-[80%] lg:px-8 lg:text-lg font-normal sm:px-2 sm:w-full sm:text-md">
            <TypingEffect text={wordsProject}/>
          </span>
        </div>

        <div className="flex sm:flex-col lg:flex-row lg:gap-10 sm:gap-3 w-full ">
          <div className="w-24 sm:px-2"/>
          <div className="w-[80%] lg:px-8 lg:text-lg font-normal sm:px-2 sm:w-full sm:text-md">
          <ComponentDelay delay={11000}>
          <p className="font-medium text-md text-black pb-2">
                  <TypingEffect text="Core Technology"/>
          </p>
          </ComponentDelay>
           <ComponentDelay delay={11000}>
            <div className="flex w-full gap-2 flex-wrap">
            {wordsProejectTechStak.map((i) => (
                  <Button className="cursor-default bg-white text-black" size="sm" key={i.name}>{i.name}</Button>
                ))}
            </div>
           </ComponentDelay>
          </div>
        </div>


        <ComponentDelay delay={11000}>
          <div className="flex justify-center w-full pt-5 gap-3">
            <Link href="https://words-gilt.vercel.app/signin" target="_blank">
              <Button className=" bg-black text-white ">
              <svg className="w-5 h-5  text-white" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24">
              <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1"/>
            </svg>
               Try It
              </Button>
            </Link>
          </div>
        </ComponentDelay> 
        
    </div>
  );
}


