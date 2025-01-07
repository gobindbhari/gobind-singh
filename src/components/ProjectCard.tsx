"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import ImageSlider from './ImageSlider'
import AOS from 'aos';

interface ProjectCardProps {
    title:string,
    desc:string,
    link:string,
    image:{src:string,alt:string}[],
    // imageAlt:string,
    
}

const ProjectCard:React.FC<ProjectCardProps> = ( {title,desc,link,image}) => {

     useEffect(() => {
    AOS.init();
  }, [])

  return (
   <>
   

<div  data-aos="zoom-in"  data-aos-duration='700'  className="max-w-[400] w-fit bg-white border border-gray-200 rounded-lg  ">
    <Link href={link || ''} target='_blank' className='overflow-hidden w-fit'>
        <ImageSlider imgProps={image} />
    </Link>
    <div className="p-3 pt-1">
        <Link href={link} target='_blank'>
            <h5 className=" text-2xl max-md:text-xl font-bold tracking-tight text-gray-900">{title}</h5>
        </Link>
        <p className="mb-3 p-3  font-normal text-justify text-gray-700 dark:text-gray-400 ">{desc}</p>
        <Link href={link || ''} target='_blank' className="inline-flex items-center px-3 py-2 text-sm max-md:px-2 max-md:py-1 max-md:text-xs font-medium text-center text-white bg-slate-600 rounded-lg hover:text-yellow-400 duration-500">
            Go to Website
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>

   </>
  )
}

export default ProjectCard
