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
