"use client"

import { useEffect, useState } from "react";

export default function Bubbles({children}:{children: React.ReactNode}) {


    const [bubblesArr, setBubblesArr] = useState< { id: number, x: number, y: number }[]>([]);
 
    
    
    useEffect(() => {


        let bubbles = 5

        const width = document.body.clientWidth

        if (width < 400) {

            bubbles = 3
            
        }
 

            let newBubbles = []

            for (let i = 0; i < bubbles; i++) {
                newBubbles.push({
                    id: i,
                    x: Math.round(Math.random() * 60),
                    y: Math.round(Math.random() * 65),
                 })
                
            }
            setBubblesArr(newBubbles)


   
    }, []);
    
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
