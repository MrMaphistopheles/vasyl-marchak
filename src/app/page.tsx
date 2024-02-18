import { Avatar, Button, CircularProgress } from "@nextui-org/react";
import TypingEffect from './_component/Desc';
import { ComponentDelay } from './_component/TextDelay';
import Download from './_component/Download';
import Link from "next/link";







const desc = "As an aspiring junior developer, I initiated a project to simplify loyalty system setup for small coffee shops. Beginning with React and Express, I transitioned to Next.js for server-side rendering, enhancing user experience. Recognizing the significance of type safety and maintainability, I expanded the project using the T3 stack. This experience has not only sharpened my technical skills but also intensified my commitment to delivering efficient and user-friendly solutions."
const hobbies = "Engaging in street lifting and calisthenics keeps me in good physical shape. Additionally, I have a passion for drawing, and my primary hobby involves continuously learning new things. Currently, I am dedicating time to learning German as part of my ongoing pursuit of knowledge and personal development."
const projectDesc = "The project focuses on simplifying the setup process, requiring just a few clicks from the user. Notable features include online reviews and tips for baristas. The system functions as a Progressive Web App (PWA), offering consumers an app-like experience. Additionally, I have implemented a customisation feature, allowing managers to personalise the brand style for a cohesive appearance on customers' mobile devices. One of the project's key aspects is providing a cost-effective alternative to more expensive native apps."
const skils = [
  {name: "Node.js", score: 70},
  {name: "Git", score: 60},
  {name: "HTML & CSS", score: 60},
  {name: "TypeScript", score: 72},
  {name: "Tailwind CSS", score: 50},
  {name: "SQL", score: 54},
  {name: "Javascript", score: 80},
  {name: "React.js", score: 79},
  {name: "Prisma ORM", score: 60},
  {name: "Next.js", score: 60},
]

const languages = [
  {name: "Ukranian", score: 100, level: "Native speaker"},
  {name: "English", score: 50, level: "Good working knowledge"},
]

export default async function Home() {

 
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
            <p className="font-semibold text-gray-500 pt-1">
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
            <p className=" font-semibold text-gray-500 pt-1">
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
            <p className=" font-semibold text-gray-500 pt-1">
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
            <p className=" font-semibold text-gray-500 pt-1">
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
            <p className=" font-semibold text-gray-500 pt-1">
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


        <ComponentDelay delay={11000}>
          <div className="flex justify-center w-full pt-5">
          <Link href="https://github.com/MrMaphistopheles/loyalty-system" target="_blank">
              <Button className=" bg-black text-white ">
                <svg className="w-6 h-6 text-white" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24">
                  <path fillRule="evenodd" 
                  d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" 
                  clipRule="evenodd"/>
                </svg>
                View code
              </Button>
            </Link>
          </div>
        </ComponentDelay>    
    </div>
  );
}


