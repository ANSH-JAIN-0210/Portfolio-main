import React from "react";
import ProjectBox from "./ProjectBox";
import yt from "../images/yt.png";
import signature from "../images/signature.png";
import auth from "../images/auth.png";
import todo from "../images/todo.png";
import food from "../images/food.jpg";
import note from "../images/note.jpg";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        
        <ProjectBox projectPhoto={yt} projectName="Youtube 2.0" />
        <ProjectBox projectPhoto={food} projectName="Food Ordering App" />
        <ProjectBox projectPhoto={auth} projectName="Authentication" />
        <ProjectBox projectPhoto={todo} projectName="To-Do App" />
        <ProjectBox projectPhoto={note} projectName="Notes App" />
        <ProjectBox projectPhoto={signature} projectName="Signature App" />
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a
          href="https://github.com/ANSH-JAIN-0210?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              backgroundColor: "#3A1078" ,
              color: "white" ,
              padding: "10px 20px" ,
              fontSize: "16px" ,
              border: "none" ,
              borderRadius: "5px" ,
              cursor: "pointer" ,
            }}
          >
            View More Projects
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
