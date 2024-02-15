import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import Desc from './_component/Desc';
import TypingEffect from './_component/Desc';
import textDelay from "./functions/delayText";
import TextDelay from './_component/TextDelay';


const desc = "As an aspiring junior developer, I initiated a project to simplify loyalty system setup for small coffee shops. Beginning with React and Express, I transitioned to Next.js for server-side rendering, enhancing user experience. Recognizing the significance of type safety and maintainability, I expanded the project using the T3 stack. This experience has not only sharpened my technical skills but also intensified my commitment to delivering efficient and user-friendly solutions."
const hobbies = "Engaging in street lifting and calisthenics keeps me in good physical shape. Additionally, I have a passion for drawing, and my primary hobby involves continuously learning new things. Currently, I am dedicating time to learning German as part of my ongoing pursuit of knowledge and personal development."


export default async function Home() {

 const text =  await textDelay("Hobbies", 500) 
 console.log(text);
 
  return (
    <div className="max-w-[50em] w-full flex flex-col items-center justify-start pt-10 gap-3">
        <div className="flex w-full gap-10">
          <Avatar className="h-24 w-24" src="../assets/IMG_3503.jpeg"/>
          <div className="flex flex-col items-start justify-between pl-8">
            <div>
            <p className="text-md font-light text-gray-500">
              <TypingEffect text="Lviv, Ukraine"/>
            </p>
            <p className="text-md font-light text-gray-500">
            <TypingEffect text="+380639346667 · basylmarchak@icloud.com"/>
             </p>
            </div>
            <span className="text-3xl font-bold">
            <TypingEffect text="Vasyl Marchak, Web Developer"/>
              </span>
          </div>
        </div>

        <div className="flex gap-10 w-full">
          <div className="w-24"></div>
          <span
          className="w-[80%] px-8 text-lg font-normal ">
            <TypingEffect text={desc}/>
          </span>
        </div>
        <div className="flex gap-10 w-full">
          <div className="w-24">
            <p>
              <TextDelay textDelayd="Hobbies" timeout={11000}/>
            </p>
          </div>
          <span
          className="w-[80%] px-8 text-lg font-normal ">
            <TypingEffect text={hobbies}/>
          </span>
        </div>
    </div>
  );
}
