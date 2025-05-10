import React from "react";
import ProjectBox from "./ProjectBox";
import yt from "../images/yt.webp";
import test from "../images/typing-test.webp";
import cloth from "../images/e-commerce.webp";
import job from "../images/job.png";
import gemini from "../images/gemini.png";
import invoice from "../images/invoice.jpeg";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        
        <ProjectBox projectPhoto={yt} projectName="Youtube 2.0" />
        <ProjectBox projectPhoto={gemini} projectName="Gemini" />
        <ProjectBox projectPhoto={cloth} projectName="Clothing E-Commerce Site" />
        <ProjectBox projectPhoto={job} projectName="Job Tracking App" />
        <ProjectBox projectPhoto={invoice} projectName="Invoice" />
        <ProjectBox projectPhoto={test} projectName="Typing Test App" />
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
