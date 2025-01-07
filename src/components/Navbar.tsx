"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    // State to control the mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuSvgChange, setMenuSvgChange] = useState(false);

    // Toggle the menu open/close
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setMenuSvgChange(!menuSvgChange);
    };

    return (
        <>
        <header className=''>
            <nav className='fixed top-0 z-50 bg-black'>
                <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4 px-10 border-b-[1px] border-[#ffff0048] duration-300 ease-in-out  min-h-[70px] max-sm:px-4  max-md:py-0 max-h-full w-screen">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span  data-aos="zoom-in" data-aos-delay='600' className="self-center text-2xl max-sm:text-lg font-semibold whitespace-nowrap text-purple-500 flex justify-center items-center gap-2">
                            {'< Gobind'}
                            <span className='font-bold text-2xl'>{'/'}</span>
                            {'Singh >'}
                        </span>
                        {/* <span className='font-bold text-3xl'>Gobind Singh</span> */}
                    </Link>

                    {/* Hamburger button for mobile */}
                    <button
                        onClick={toggleMenu} // Toggle menu on click
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden "
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen ? 'true' : 'false'}
                    >
                        <span className="sr-only">Open main menu</span>
                        {!menuSvgChange ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27" height="27" color="#fff" fill="none">
                            <path d="M4 5L20 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 19L20 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                                <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                    </button>

                    {/* Navbar menu ( and desktop) */}
                    <div
                        className='w-full md:block hidden md:w-auto max-md:bg-[#ffffff0e] md:text-xl'
                        // {`${isMenuOpen ? 'opacity-100 duration-500 h-full' : 'opacity-0 h-0'} 
                        // } // Show or hide based on `isMenuOpen` state
                        // id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white">
                            <li className="group">
                                <Link
                                    href="#home"
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                                <div className="opacity-0 bg-yellow-400 h-[3px] w-0 rounded-xl duration-700 group-hover:opacity-100 group-hover:w-full mx-auto"></div>
                            </li>
                            <li className="group">
                                <Link
                                    href="#skills"
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Skills
                                </Link>
                                <div className="opacity-0 bg-yellow-400 h-[3px] w-0 rounded-xl duration-700 group-hover:opacity-100 group-hover:w-full mx-auto"></div>
                            </li>
                            <li className="group">
                                <Link
                                    href="#projects"
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Projects
                                </Link>
                                <div className="opacity-0 bg-yellow-400 h-[3px] w-0 rounded-xl duration-700 group-hover:opacity-100 group-hover:w-full mx-auto"></div>
                            </li>
                            {/* <li className="group">
                                <Link
                                    href="/"
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Contact
                                </Link>
                                <div className="opacity-0 bg-yellow-400 h-[3px] w-0 rounded-xl duration-300 group-hover:opacity-100 group-hover:w-full mx-auto"></div>
                            </li>
                            <li className="group">
                                <Link
                                    href="/"
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    About
                                </Link>
                                <div className="opacity-0 bg-yellow-400 h-[3px] w-0 rounded-xl duration-300 group-hover:opacity-100 group-hover:w-full mx-auto"></div>
                            </li> */}
                            <li className="group">
                                <Link
                                    href="https://www.linkedin.com/in/gobind-singh-bhari/"
                                    target='_blank'
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Linkedin
                                </Link>
                                <div className="opacity-0 bg-yellow-400 h-[3px] w-0 rounded-xl duration-700 group-hover:opacity-100 group-hover:w-full mx-auto"></div>
                            </li>
                            <li className="group">
                                <Link
                                    href="https://github.com/gobindbhari"
                                    target='_blank'
                                    className="py-2 px-3 text-white rounded md:bg-transparent md:p-0 flex gap-1"
                                    aria-current="page"
                                >
                                    Github 
                                    <span className='lg:block hidden'> Profile</span>
                                </Link>
                                <div className="opacity-0 bg-yellow-400 h-[3px] w-0 rounded-xl duration-700 group-hover:opacity-100 group-hover:w-full mx-auto"></div>
                            </li>
                        </ul>
                    </div>

                        {/*  Navbar menu mobile */}
                    <div
                        className={`${isMenuOpen && 'opacity-100 duration-1000 w-[85vw] h-fit mx-auto' } w-0 max-md:block hidden md:w-auto duration-300  h-0 opacity-0 absolute top-[70px] max-w-screen-sm border-[1px] border-[#ffff0048] border-t-0 box-border`} // Show or hide based on `isMenuOpen` state
                        id="navbar-default"
                    >
                        <div className={`${isMenuOpen && 'h-full  duration-700 bg-black '} duration-700 ease-in-out h-0`}>
                        <ul className="font-medium flex flex-col p-4 md:p-0  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white">
                            <li className="group">
                                <Link
                                    href="#home"
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                                <div className="opacity-0 bg-yellow-400 h-[3px] w-0 rounded-xl duration-700 group-hover:opacity-100 group-hover:w-full mx-auto"></div>
                            </li>
                            <li className="group">
                                <Link
                                    href="#skills"
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Skills
                                </Link>
                                <div className="opacity-0 bg-yellow-400 h-[3px] w-0 rounded-xl duration-700 group-hover:opacity-100 group-hover:w-full mx-auto"></div>
                            </li>
                            <li className="group">
                                <Link
                                    href="#projects"
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Projects
                                </Link>
                                <div className="opacity-0 bg-yellow-400 h-[3px] w-0 rounded-xl duration-700 group-hover:opacity-100 group-hover:w-full mx-auto"></div>
                            </li>
                            {/* <li className="group">
                                <Link
                                    href="/"
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Contact
                                </Link>
                                <div className="opacity-0 bg-yellow-400 h-[3px] w-0 rounded-xl duration-300 group-hover:opacity-100 group-hover:w-full mx-auto"></div>
                            </li>
                            <li className="group">
                                <Link
                                    href="/"
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    About
                                </Link>
                                <div className="opacity-0 bg-yellow-400 h-[3px] w-0 rounded-xl duration-300 group-hover:opacity-100 group-hover:w-full mx-auto"></div>
                            </li> */}
                            <li className="group">
                                <Link
                                    href="https://www.linkedin.com/in/gobind-singh-bhari/"
                                    target='_blank'
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Linkedin
                                </Link>
                                <div className="opacity-0 bg-yellow-400 h-[3px] w-0 rounded-xl duration-700 group-hover:opacity-100 group-hover:w-full mx-auto"></div>
                            </li>
                            <li className="group">
                                <Link
                                    href="https://github.com/gobindbhari"
                                    target='_blank'
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Github Profile
                                </Link>
                                <div className="opacity-0 bg-yellow-400 h-[3px] w-0 rounded-xl duration-700 group-hover:opacity-100 group-hover:w-full mx-auto"></div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    );
};

export default Navbar;
