'use client'
import React, { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import AOS from 'aos'

interface ProjectCardData{
        title:string,
        desc:string,
        link:string,
        image:{src:string, alt:string}[]
}

const Project = () => {

     useEffect(() => {
    AOS.init();
  }, [])

    const data:ProjectCardData[] = [
        {title: 'Room Booking Web App', desc: 'A full-stack hotel room booking app with user signup/signin, JWT authentication, room creation, secure booking, and payment integration. Built using React.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Mongoose.', link: 'https://airbnb-clone-one-tan.vercel.app/', 
            image: [
                {src:'/projects/project-homenest.png', alt: 'Room Booking Web App'},
                {src:'/projects/project-homenest-2.png', alt: 'Room Booking Web App'},
                {src:'/projects/project-homenest-3.png', alt: 'Room Booking Web App'}
            ]}, 
        {title: 'Finace App', desc: 'A full-stack Finance App with dark mode, interactive dashboards, animations, responsiveness, and a WhatsApp button. Built with React.js, Tailwind CSS, Node.js, Express.js, and MongoDB for financial management.', link: 'https://master.d1oyuq8f3x4ltu.amplifyapp.com/', 
            image: [
                {src:'/projects/financeapp.png', alt: 'Finace App'},
                {src:'/projects/financeapp-2.png', alt: 'Finace App'},
                {src:'/projects/financeapp-3.png', alt: 'Finace App'}
            ]}, 
        {title: 'Avg Rating', desc: 'A backend project with a rating system where users can rate, comment, and see average ratings. Post owners can approve or delete ratings and comments. Built with Node.js, Express.js, and MongoDB.', link: 'https://reveiw-and-feedback-system.vercel.app/', 
            image: [
                {src:'/projects/review-1.png', alt: 'Avg Rating'},
                {src:'/projects/review-2.png', alt: 'Avg Rating'},
                {src:'/projects/review-3.png', alt: 'Avg Rating'},
            ]}, 
        {title: 'Restro King', desc: 'Restro King is a frontend project built with React.js, Redux, and Tailwind CSS. It features a responsive design, dynamic menu displays, state management with Redux, and an intuitive user interface for an exceptional dining experience.', link: 'https://github.com/gobindbhari', 
            image: [
                {src:'/projects/restroking.png', alt: 'Restro King'},
                {src:'/projects/restroking-2.png', alt: 'Restro King'},
                {src:'/projects/restroking-3.png', alt: 'Restro King'},
            ]}, 
    ];

  return (
    <>
    <div id='projects' className="pt-10">
    <div data-aos='zoom-in'  data-aos-duration='700' className="text-[170px] max-md:text-[100px] max-sm:text-[80px] min-w-fit max-md:max-w-[200px] mx-auto font-bold relative text-black text-stroke-p box-border ">
        <h2 className='mx-auto w-fit pb-5'>Projects</h2>
        
        {/* <h3 className='text-[60px] font-bold text-white absolute top-3'>Projects</h3> */}
    </div>
   <div className="flex gap-10 flex-wrap justify-center items-center box-border w-fit max-w-[80vw] mx-auto">
   {data.map((e,i)=> <ProjectCard key={i} title={e.title} desc={e.desc} link={e.link} image={e.image} />
    )}
   </div>
   </div>
    </>
  )
}

export default Project
