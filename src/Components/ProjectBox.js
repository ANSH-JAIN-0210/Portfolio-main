import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    "Youtube 2.0": {
      desc: "A fully responsive YouTube clone built with React, featuring a modern UI, video playback, and seamless user interaction.",
      github: "https://github.com/ANSH-JAIN-0210/youtube-2.0",
      website: "https://youtube-2-0-fk5bbh2y6-ansh-jain-0210s-projects.vercel.app/"
    },
    "Food Ordering App": {
      desc: "Craving something delicious? This sleek app lets you browse, select, and order your favorite meals seamlessly.",
      github: "https://github.com/ANSH-JAIN-0210/food-ordering-app",
      website: "https://full-stack-task-management-app-aeae-biklu6p2s.vercel.app/"
    },
    "Authentication": {
      desc: "Secure your app with a solid authentication system! Smooth sign-in and sign-up, built for reliability.",
      github: "https://github.com/ANSH-JAIN-0210/Authentication",
      website: ""
    },
    "To-Do App": {
      desc: "Stay organized effortlessly! A powerful to-do app to keep track of tasks and boost productivity.",
      github: "https://github.com/ANSH-JAIN-0210/Todo",
      website: ""
    },
    "Notes App": {
      desc: "Capture ideas on the go! A seamless notes app designed for quick and easy note-taking anytime, anywhere.",
      github: "https://github.com/ANSH-JAIN-0210/notes-app",
      website: ""
    },
    "Signature App": {
      desc: "A sleek and secure signature app that enables digital signing with ease and precision.",
      github: "https://github.com/ANSH-JAIN-0210/Signature-App",
      website: "signature-9stpkb6kx-ansh-jain-0210s-projects.vercel.app"
    },
    
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
