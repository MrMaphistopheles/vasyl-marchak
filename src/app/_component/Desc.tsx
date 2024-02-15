"use client"

import { useEffect, useState } from "react"

export default function TypingEffect({text}: {text:string}) {

    const [show, setShow] = useState("");
    const [index, setIndex] = useState(0);
    

    useEffect(() => {
        if (index < text.length) {
            const timeOut = setTimeout(() => {
                setShow(prev => prev + text[index])
                setIndex(prevIndex => prevIndex + 1)
             }, 20);
             return () => clearTimeout(timeOut)
        }
    }, [text, index]);
    

  return (
  
  <>
    {show}
  </>)
}
