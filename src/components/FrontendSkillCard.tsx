import React from 'react';

interface skill{
    name: string,
    icon: string,
    alt: string
}

interface FrontendSkillCardProps{
    data:skill[],
    title:string
}
const FrontendSkillCard:React.FC<FrontendSkillCardProps> = ({data,title}) => {

    const skills = data
  return (
    <div className="bg-gray-900 text-white px-2 py-6 rounded-lg max-w-md w-fit max-h-fit mx-auto shadow-[0px_0px_10px_0px_#805ad5] hover:scale-110 duration-1000">
      <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
      <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 max-h-fit">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-transparent border-[1px] border-[#939393] flex items-center justify-center p-3 rounded-lg my-auto hover:scale-110 duration-500"
          >
            <img src={skill.icon} alt={skill.alt} className="min-w-8 max-w-10 h-7 mr-2 " />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontendSkillCard;
