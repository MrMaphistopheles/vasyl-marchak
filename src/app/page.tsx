import { Avatar, Button, CircularProgress } from "@nextui-org/react";
import TypingEffect from './_component/Desc';
import TextDelay, { ComponentDelay } from './_component/TextDelay';
import Download from './_component/Download';





const desc = "As an aspiring junior developer, I initiated a project to simplify loyalty system setup for small coffee shops. Beginning with React and Express, I transitioned to Next.js for server-side rendering, enhancing user experience. Recognizing the significance of type safety and maintainability, I expanded the project using the T3 stack. This experience has not only sharpened my technical skills but also intensified my commitment to delivering efficient and user-friendly solutions."
const hobbies = "Engaging in street lifting and calisthenics keeps me in good physical shape. Additionally, I have a passion for drawing, and my primary hobby involves continuously learning new things. Currently, I am dedicating time to learning German as part of my ongoing pursuit of knowledge and personal development."
const skils = [
  {name: "Node.js", score: 70},
  {name: "Git", score: 50},
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
          <Avatar className="h-24 w-24" src="https://storage.googleapis.com/bonuslite1/IMG_3503.jpeg"/>

          <div className="flex flex-col items-start justify-between lg:pl-8 sm:pl-2 sm:w-[60%] lg:w-[70%]">
            <div>
            <p className="lg:text-md font-light text-gray-500 sm:text-sm">
              <TypingEffect text="Lviv, Ukraine"/>
            </p>
            <p className="lg:text-md font-light text-gray-500 sm:text-sm">
            <TypingEffect text="+380639346667 · basylmarchak@icloud.com"/>
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
                <p className="lg:text-lg font-normal sm:text-md">
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
              
       
    </div>
  );
}

