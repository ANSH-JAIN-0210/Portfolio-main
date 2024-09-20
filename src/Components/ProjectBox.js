import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    "Quiz App": {
      desc: "A dynamic and engaging quiz app designed to test knowledge with interactive and user-friendly features.",
      github: "https://github.com/ANSH-JAIN-0210/Quiz-App",
      website: "https://vercel.com/ansh-jain-0210s-projects/quiz-app/8XKkGBUdinuXkCLmsT9yykHH3XjC"
    },
    "Signature App": {
      desc: "A sleek and secure signature app that enables digital signing with ease and precision.",
      github: "https://github.com/ANSH-JAIN-0210/Signature-App",
      website: "signature-9stpkb6kx-ansh-jain-0210s-projects.vercel.app"
    },
    "Youtube 2.0": {
      desc: "A fully responsive YouTube clone built with React, featuring a modern UI, video playback, and seamless user interaction.",
      github: "https://github.com/ANSH-JAIN-0210/youtube-2.0",
      website: "https://youtube-2-0-fk5bbh2y6-ansh-jain-0210s-projects.vercel.app/"
    }
  };

  const project = desc[projectName];
  const showGithub = project.github !== "" ? "block" : "none";

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <h3>{projectName}</h3>
        <p>{project.desc}</p>
        <a style={{ display: showGithub }} href={project.github} target='_blank' rel='noopener noreferrer'>
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>
        <a href={project.website} target='_blank' rel='noopener noreferrer'>
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
