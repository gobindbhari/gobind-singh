"use client"
// import Image from 'next/image'
import React,{useEffect, useRef} from 'react'
import AOS from 'aos';
// import dynamic from 'next/dynamic';
import Typed from "typed.js";



const HeroSection = () => {
  const el = useRef<HTMLSpanElement>(null);

  // const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ['Programmer',"Full Stack Developer", "MERN Stack Developer", "Frontend Developer",
          "React js Developer","Backend Developer"],
        typeSpeed: 70, // Speed at which the text is typed
        backSpeed: 70, // Speed at which the text is erased
        backDelay: 1400, // Delay before erasing
        startDelay: 500, // Delay before typing starts
        loop: true, // Loop the animation
      });
      // Cleanup on unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);
  
  return (
    <>
      <div id='home' className="hover-tilt w-[100%] pt-[80px] min-h-fit px-3 max-md:px-5 flex max-lg:flex-col justify-between max-md:gap-2 gap-10 ">
        <div data-aos="fade-right" data-aos-duration='1000' className="min-w-[320px] lg:max-w-[55%] font-bold md:pt-24 pt-5 md:pl-10 mx-auto flex flex-col gap-3">
          <h2 className='text-5xl max-md:text-2xl'>Hi, I am</h2>
          <h1 className='text-6xl max-md:text-5xl max-sm:text-4xl text-yellow-400'>Gobind Singh</h1>
          
          <div data-aos="zoom-in" data-aos-delay='1000' data-aos-duration='700' className='text-justify w-[90%] text-2xl font-medium max-md:text-lg'>
            <div className="text-3xl max-md:text-xl">I am a <span ref={el} className='text-[#9135e0]'></span>
            </div>
            I specialize in React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, Sequelize, Tailwind CSS, and SEO optimization to create high-performance, scalable, SEO-friendly websites.
          </div>
        </div>

        <div data-aos="fade-left" className=" min-w-[320px] max-w-screen overflow-hidden mx-auto mt-10 my-auto">
          <img 
          className='min-w-[310px] max-w-screen md:h-[30vw] object-fill'
          src="/HeroSection/computer.jpg" alt="computer image" />
        </div>
      </div>
    </>
  )
}

export default HeroSection
