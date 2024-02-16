"use client"

import { useEffect, useState } from "react";
import TypingEffect from "./Desc";


export default function TextDelay({textDelayd, timeout}:{textDelayd: string, timeout:number}) {

    const [text, setText] = useState("");
    
    useEffect(() => {
      const timeOut = setTimeout(() => {
        setText(textDelayd)
      }, timeout);
    
      return () => clearTimeout(timeOut)
    }, [textDelayd, timeout]);
    
    
  return <TypingEffect text={text}/>
}


export function ComponentDelay({children, delay }:{children: React.ReactNode, delay: number}) {

  const [delaydChildren, setDelaydChildren] = useState<React.ReactNode>();
  
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDelaydChildren(children)
    }, delay);
  
    return () => clearTimeout(timeOut)
  }, [children, delay]);
  
  
return delaydChildren
}
