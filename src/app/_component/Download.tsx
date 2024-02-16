"use client"

import { Button } from "@nextui-org/react"


export default function Download() {

    


  return (
    <div className="p-4"> 
    <Button className="bg-black text-white" onClick={() => window.open('https://storage.googleapis.com/bonuslite1/Vasyl%20Marchak_compressed.pdf')}>
    <svg className=" w-5 h-5 text-white" 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    viewBox="0 0 24 24">
    <path 
    fillRule="evenodd" 
    d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Z" 
    clipRule="evenodd"/>
    </svg>


      Get pdf
    </Button>
  </div>
  )
}
