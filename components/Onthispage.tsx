"use client";

import { cn } from '@/lib/utils';
import React, {useEffect, useState} from 'react'


interface LinkType {
    id:string;
    text:string;
}

const Onthispage = ({htmlContent,className}:{ htmlContent:string,className:string}) => {
    const [links, setlinks] = useState<null|LinkType[]>(null)
    useEffect(() => {
     const temp = document.createElement("div")
     temp.innerHTML = htmlContent

     const heading =temp.querySelectorAll("h2")

     const generatedLinks:LinkType[] = []

     heading.forEach((heading,index) => {
         const id = heading.id || `heading-${index}`
       heading.id = id

       generatedLinks.push({
        id: id, 
        text: (heading as HTMLElement).innerText  
     })
    
    })
    setlinks(generatedLinks);

    }, [htmlContent])
    
  return (
    <div className={cn('hidden md:block',className)}>
        <div className="sticky top-20 ">
            <h2>On This Page</h2>
            <ul className='not-prose text-sm'>
                {links && links.map((links)=>{
                    return <li key={links.id} className='pt-1'>
                        <a href={`#${links.id}`}>{links.text.slice(0,50)}{
                            (links.text.length> 50)?  "...":""}</a>
                    </li>
})}
            </ul>
        </div>
      
    </div>
  )
}

export default Onthispage
