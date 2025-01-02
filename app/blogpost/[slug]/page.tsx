import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react';
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeSlug from 'rehype-slug'
import rehypeStringify from "rehype-stringify"
import rehypePrettyCode from "rehype-pretty-code";
import matter from "gray-matter";
import fs from "fs"
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import Onthispage from '@/components/Onthispage';
import type { Metadata, ResolvingMetadata } from 'next'
import CommentSection from '@/components/CommentSection';
 
type Props = {
  params: Promise<{ slug: string, title: string ,description: string, imageUrl: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

//https://ondrejsevcik.com/blog/building-perfect-markdown-processor-for-my-blog




export default async function BlogPage({params,}: {params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug 
    
  const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify)
  .use(rehypeAutolinkHeadings)
  .use(rehypeSlug)
  .use(rehypePrettyCode, {
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ],
    theme:"material-theme-ocean"
  })
  
 

const filepath =`content/${slug}.md`
const fileContent = fs.readFileSync(filepath, "utf-8")
const {data, content} = matter(fileContent)

const htmlContent = (await processor.process(content)).toString()

    return (
    <MaxWidthWrapper className='prose dark:prose-invert'>
    <div className='flex '>
        <div className='px-16 max-sm:w-[95%] max-sm:px-5'>
   
        <h1 className=' '>{data.title}</h1>
        <div className=" " dangerouslySetInnerHTML={{ __html: htmlContent}}></div>
        <CommentSection /> 
        
        </div>
        <Onthispage className="text-sm w-[50%] pr-3" htmlContent={htmlContent}/> 

        </div>  

   </MaxWidthWrapper>
    )
  }


  export async function generateMetadata(
    { params }: Props,
  ): Promise<Metadata> {
    // read route params
  

    const filepath =`content/${(await params).slug}.md`
const fileContent = fs.readFileSync(filepath, "utf-8")
const {data} = matter(fileContent)

    return {
      title: data.title,
      description: data.description,
    }
  }
   




