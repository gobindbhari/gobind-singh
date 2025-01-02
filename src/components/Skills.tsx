import React from 'react'
import SkillCard from './SkillCard'

interface data {
  src:string,
  title:string
}
const Skills = () => {
  const data : data[]= [
    {src:"skills/reactjs.svg", title:'React js' },
    {src:"next.svg", title:'Next js'}
    // {src: , title:}
    // {src: , title:}
  ]
  return (
  <>
  <div className="max-w-screen mt-3">
    {/* heading  */}
  <div className="relative">
  <div className="text-stroke  mx-auto w-fit text-[200px] font-bold text-transparent">Skills
  </div>
    {/* <h2 className='mx-auto w-fit font-bold absolute text-white text-8xl top-28 left-[40vw]'>Skills</h2> */}
  </div>
    <div className="flex gap-2 flex-wrap max-w-[80%] mx-auto justify-between">
      {data.map((e, i)=>{
        return <SkillCard key={i} src={e.src} title={e.title}/>
      })}

    
    <SkillCard src="\skills\reactjs.svg" title='React js'/>
    <SkillCard src="\skills\reactjs.svg" title='React js'/>
    <SkillCard src="\skills\reactjs.svg" title='React js'/>
    </div>


    

  </div>

  </>
  )
}

export default Skills
