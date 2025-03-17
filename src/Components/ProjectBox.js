import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    "Youtube 2.0": {
      desc: "A fully responsive YouTube clone built with React, featuring a modern UI, video playback, and seamless user interaction.",
      github: "https://github.com/ANSH-JAIN-0210/youtube-2.0",
      website:
        "https://youtube-2-0-fk5bbh2y6-ansh-jain-0210s-projects.vercel.app/",
    },
    "Food Ordering App": {
      desc: "Craving something delicious? This sleek app lets you browse, select, and order your favorite meals seamlessly.",
      github: "https://github.com/ANSH-JAIN-0210/food-ordering-app",
      website:
        "https://full-stack-task-management-app-aeae-biklu6p2s.vercel.app/",
    },
    "Clothing E-Commerce Site": {
      desc: "A modern e-commerce platform for clothing. Browse, filter, and purchase your favorite styles with ease.",
      github: "https://github.com/ANSH-JAIN-0210/E-commerce",
      website: "https://e-commerce-one-flame-18.vercel.app/",
    },
    "To-Do App": {
      desc: "Stay organized effortlessly! A powerful to-do app to keep track of tasks and boost productivity.",
      github: "https://github.com/ANSH-JAIN-0210/Todo",
      website: "",
    },
    "Notes App": {
      desc: "Capture ideas on the go! A seamless notes app designed for quick and easy note-taking anytime, anywhere.",
      github: "https://github.com/ANSH-JAIN-0210/notes-app",
      website: "",
    },
    "Typing Test App": {
      desc: "Test your typing speed and accuracy with this interactive typing test app, featuring real-time feedback and scoring.",
      github: "https://github.com/ANSH-JAIN-0210/typing-test",
      website: "https://typing-test-livid-sigma.vercel.app/",
    },
  };

  const project = desc[projectName];
  const showGithub = project.github !== "" ? "block" : "none";

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <h3>{projectName}</h3>
        <p>{project.desc}</p>
        <a
          style={{ display: showGithub }}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>
        <a href={project.website} target="_blank" rel="noopener noreferrer">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
