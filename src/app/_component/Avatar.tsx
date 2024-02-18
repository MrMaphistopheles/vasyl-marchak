import Image from "next/image";

export default function Avatar({link, size }: {link: string, size: number}) {
  return (
  <Image 
    src={link} 
    alt="Avatar" 
    height={900} 
    width={400}  
    quality={80}
    className={`h-${size} w-${size} rounded-full inline-block`} 
 />

  )
  ;
}
   