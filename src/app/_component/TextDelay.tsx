"use client"

import { useEffect, useState } from "react";




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
