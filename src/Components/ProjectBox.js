import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName, project }) => {
  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt={projectName} />
      <div>
        <h3>{projectName}</h3>
        <p>{project.desc}</p>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button className="projectbtn">
              <FaGithub /> Github
            </button>
          </a>
        )}
        {project.website && (
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            <button className="projectbtn">
              <CgFileDocument /> Demo
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsDisplay = () => {
  const desc = {
    "Youtube 2.0": {
      desc: "Stream, search, and explore videos just like YouTube! A feature-rich frontend with full API integration.",
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
    Authentication: {
      desc: "Secure your app with a solid authentication system! Smooth sign-in and sign-up, built for reliability.",
      github: "https://github.com/ANSH-JAIN-0210/Authentication",
      website: null,
    },
    "To-Do App": {
      desc: "Stay organized effortlessly! A powerful to-do app to keep track of tasks and boost productivity.",
      github: "https://github.com/ANSH-JAIN-0210/Todo",
      website: null,
    },
    "Notes App": {
      desc: "Capture ideas on the go! A seamless notes app designed for quick and easy note-taking anytime, anywhere.",
      github: "https://github.com/ANSH-JAIN-0210/notes-app",
      website: null,
    },
    "Signature App": {
      desc: "Sign documents digitally with ease! A smooth, interactive app for hassle-free e-signatures.",
      github: "https://github.com/ANSH-JAIN-0210/Signature-App",
      website: "https://signature-9stpkb6kx-ansh-jain-0210s-projects.vercel.app",
    },
  };

  return (
    <div className="projectsContainer">
      {Object.keys(desc).map((projectName, index) => (
        <ProjectBox
          key={projectName}
          projectPhoto={`https://picsum.photos/300/200?random=${index}`}
          projectName={projectName}
          project={desc[projectName]}
        />
      ))}
    </div>
  );
};

export default ProjectsDisplay;
