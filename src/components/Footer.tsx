'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from 'aos'

const Footer: React.FC = () => {
  const [date, setDate] = useState<number>()
  useEffect(() => {
    const date = new Date().getFullYear()
    // console.log(date)
    setDate(date)
  },[])

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <footer className="text-white ">
      <div className="container mx-auto text-center ">
        <div className="bg-[#000000a3] py-10">
          <div className="group w-fit mx-auto">
            <h3 className="text-xl font-bold text-yellow-500 hover:text-yellow-700 duration-700">Gobind Singh</h3>
            {/* <div className="w-0 group-hover:w-full mx-auto h-1 bg-yellow-400 rounded-lg"></div> */}
          </div>
          <div className="flex justify-center items-center gap-4 my-4">
            {/* Social Icons */}
            <Link data-aos="fade-up"  data-aos-anchor-placement="bottom-bottom" data-aos-duration='700' data-aos-delay="300" href="tel:7307888669" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/call-icon.svg"
                alt="LinkedIn"
                className="w-6 h-6 hover:scale-125 duration-500 hover:animate-[wiggle_0.2s_infinite]"
              />
            </Link>
            <Link data-aos="fade-up"  data-aos-anchor-placement="bottom-bottom" data-aos-duration='700' data-aos-delay="400" href="https://www.linkedin.com/in/gobind-singh-bhari/" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/linkedin-icon.svg"
                alt="LinkedIn"
                className="w-9 h-9 hover:scale-125 duration-500"
              />
            </Link>
            <Link data-aos="fade-up"  data-aos-anchor-placement="bottom-bottom" data-aos-duration='700' data-aos-delay="500" href="https://github.com/gobindbhari" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/github-icon.svg"
                alt="GitHub"
                className="w-7 h-7 hover:scale-125 duration-500"
              />
            </Link>
            <Link data-aos="fade-up"  data-aos-anchor-placement="bottom-bottom" data-aos-duration='700' data-aos-delay="600" href="mailto:gobindbhari@gmail.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/gmail-icon.svg"
                alt="Mail"
                className="w-7 h-7 hover:scale-125 duration-500"
              />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 mt-4">
            &copy; {date} Gobind Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
