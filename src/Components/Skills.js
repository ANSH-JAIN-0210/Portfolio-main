import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaJava } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiCss3, DiHtml5 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    '': <CgCPlusPlus />,
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    Java: <FaJava />,
    HTML: <DiHtml5 />,
    CSS: <DiCss3 />
  };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill] || <span>Unknown Skill</span>}
    </div>
  );
};

export default Skills;
