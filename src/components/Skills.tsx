import React from 'react'
import SkillCard from './SkillCard'
import FrontendSkillCard from './FrontendSkillCard'


interface data {
  name:string,
  icon:string,
  alt:string
}
const Skills = () => {

  // const data : data[]= [
  //   {src:"skills/reactjs.svg", title:'React js' },
  //   {src:"next.svg", title:'Next js'}
  //   // {src: , title:}
  //   // {src: , title:}
  // ]

  const frontendskills :data[] = [
    { name: 'Next Js', icon: '/icons/next-icon.svg', alt: 'Next js' },
    { name: 'React Js', icon: '/icons/react-icon.svg', alt: 'React js' },
    { name: 'Redux', icon: '/icons/redux-icon.svg', alt: 'Redux' },
    { name: 'HTML', icon: '/icons/html-5-icon.svg', alt: 'HTML' },
    { name: 'CSS', icon: '/icons/css-3-icon.svg', alt: 'CSS' },
    { name: 'JavaScript', icon: '/icons/javascript-icon.svg', alt: 'JavaScript' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind-icon.svg', alt: 'Tailwind CSS' },
    { name: 'React Router', icon: '/icons/react-router-icon.svg', alt: 'React Router' },
  ];
  const backendskills: data[] = [
    { name: 'Node Js', icon: '/icons/nodejs-icon.svg', alt: 'Node js' },
    { name: 'Express', icon: '/icons/express-icon.svg', alt: 'Express js' },
    { name: 'MongoDB', icon: '/icons/mongodb-icon.svg', alt: 'MongoDB' },
    { name: 'MySQL', icon: '/icons/mysql-icon.svg', alt: 'MySQL' },
    { name: 'Sequelize', icon: '/icons/sequelize-icon.svg', alt: 'Sequelize ORM' },
  ];
  const otherskills: data[] = [
    { name: 'Git', icon: '/icons/git-icon.svg', alt: 'Git' },
    { name: 'Express', icon: '/icons/express-icon.svg', alt: 'Express js' },
    { name: 'MongoDB', icon: '/icons/mongodb-icon.svg', alt: 'MongoDB' },
    { name: 'MySQL', icon: '/icons/mysql-icon.svg', alt: 'MySQL' },
    { name: 'Sequelize', icon: '/icons/sequelize-icon.svg', alt: 'Sequelize ORM' },
  ];
 

  return (
  <>
  <div className="max-w-screen mt-3">
    {/* heading  */}
  <div className="">
  <div className='text-stroke-p duration-200 mx-auto w-fit text-[200px] max-md:text-[100px] font-bold text-transparent'>
   
    Skills
    {/* <TextHoverEffect text='Skills' duration={3}/> */}
  </div>
    {/* <h2 className='mx-auto w-fit font-bold absolute text-white text-8xl top-28 left-[40vw]'>Skills</h2> */}
  </div>
    <div className="flex gap-2 gap-y-10 flex-wrap max-w-[80%] mx-auto justify-between">
      {/* {data.map((e, i)=>{
        return <SkillCard key={i} src={e.src} title={e.title}/>
      })}*/}

    <FrontendSkillCard data={frontendskills} title='Frontend'/>
    <FrontendSkillCard data={backendskills} title='Backend'/>
    <FrontendSkillCard data={otherskills} title='others'/>
    </div>


    

  </div>

  </>
  )
}

export default Skills
 {/* <span className='hover:text-stroke-p duration-700'>S</span>
    <span className='hover:text-stroke-p duration-700'>k</span>
    <span className='hover:text-stroke-p duration-700'>i</span>
    <span className='hover:text-stroke-p duration-700'>l</span>
    <span className='hover:text-stroke-p duration-700'>l</span>
    <span className='hover:text-stroke-p duration-700'>S</span> */}