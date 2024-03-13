"use client"

import { useEffect, useState } from "react";

export default function Bubbles({children, bubbles}:{children: React.ReactNode, bubbles: number}) {

    const [bubblesArr, setBubblesArr] = useState< { id: number, x: number, y: number }[]>([]);
 
    
    
    useEffect(() => {

 

            let newBubbles = []

            for (let i = 0; i < bubbles; i++) {
                newBubbles.push({
                    id: i,
                    x: Math.round(Math.random() * 85),
                    y: Math.round(Math.random() * 85),
                 })
                
            }
            setBubblesArr(newBubbles)


   
    }, [bubbles]);
    
    console.log(bubblesArr);
    

  return(  
  <>
<div className="flex flex-wrap items-center justify-center">
{bubblesArr.map((i) => (
        <div className={`size-[150px] absolute bg-blue-500 rounded-full animate-bouncing`} key={i.id} style={{
            left: `${i.x}%`,
            top: `${i.y}%`
        }} />
    ))}
</div>
  

   
   

        {children}
  </>
  );
}
