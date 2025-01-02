import React from 'react'

interface SkillCardProps{
    src:string,
    title:string
}
const SkillCard : React.FC<SkillCardProps> = ({src,title}) => {
  return (
   <>
   {/* <div className=" bg-red-100 w-fit pl- h-full"> */}
    <div className="w-[150px] h-fit flex flex-col justify-items-center">
        <img className='m-auto h-20 w-20' src={src} alt="" />
        <h2 className='text-2xl mx-auto w-fit'>{title}</h2>
    </div>
   {/* </div> */}
   </>
  )
}

export default SkillCard
