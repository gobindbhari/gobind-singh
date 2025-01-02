// "use client"
import Image from 'next/image'
import React,{useState, useEffect} from 'react'
import AOS from 'aos';
// // import Typewriter from 'typewriter-effect';
// import dynamic from 'next/dynamic'

// const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });



const HeroSection = () => {

  // const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
      <div className="w-[100%] mt-[80px] min-h-fit px-3 flex max-lg:flex-col justify-between max-md:gap-2 gap-10">
        <div data-aos="fade-right" data-aos-duration='1000' className="min-w-[320px] lg:max-w-[55%] font-bold md:pt-24 pt-5 md:pl-10 mx-auto flex flex-col gap-3">
          <h2 className='text-6xl max-md:text-2xl'>Hi, I am</h2>
          <h1 className='text-7xl max-md:text-5xl text-yellow-400'>Gobind Singh</h1>
          <div data-aos="zoom-in" data-aos-delay='1000' data-aos-duration='700' className='text-justify w-[90%] text-xl max-md:text-base'>I am a <span className='text-purple-500'>Full Stack Developer</span> specializing in React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, Sequelize, Tailwind CSS, and SEO optimization to create high-performance, scalable, SEO-friendly websites.
          </div>
       
           <h2>
            {/* {<Typewriter
              // options={{
                // strings: ['Hello', 'World'],
                // autoStart: true,
                // loop: true,
              // }}
            />} */}
          </h2> 
          
        </div>
        <div data-aos="fade-left" className=" min-w-[320px] max-w-screen overflow-hidden mx-auto mt-10 my-auto">
          <img 
          className='min-w-[320px] max-w-screen md:h-[30vw] object-fill'
          src="/HeroSection/computer.jpg" alt="computer image" />
        </div>
      </div>
    </>
  )
}

export default HeroSection
