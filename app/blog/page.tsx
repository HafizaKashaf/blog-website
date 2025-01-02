import React from "react";

import { Button, buttonVariants } from "@/components/ui/button"
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";

interface Blog {
  slug: string;
  title: string;
  imageUrl: string;
  description: string;
}

interface BlogListProps {
  blogs: Blog[];
}
 const dirContent = fs.readdirSync("content", "utf-8");
 console.log(dirContent)


 const file: Blog[] = dirContent.map(file=>{
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  const value : Blog ={
    slug: data.slug ,
    title: data.title,
    imageUrl: data.imageUrl,
    description: data.description,
  }
  
  return value
 })
 console.log(file)

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  console.log(blogs)
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Blogs</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {file.map((blog:Blog) => (
          <div
            key={blog.slug}
            className=" shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={blog.imageUrl || "/images/blogimg1.jpg"}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold  mb-2">{blog.title}</h2>
              <p className=" mb-4">
                {blog.description.substring(0, 100)}...
              </p>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: "default" })}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      
     
    </div>
   
    
   
  );
};
export const metadata: Metadata = {
  title: 'Blogs 404 FoundDiaries',
  description: 'Discover insightful coding blogs, tutorials, and guides on a wide range of programming topics. From beginner-friendly concepts to advanced techniques, 404 FoundDiaries is your go-to source for enhancing your coding skills and staying updated in the tech world.',
}

 

export default BlogList;
