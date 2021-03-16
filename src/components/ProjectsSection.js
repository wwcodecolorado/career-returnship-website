import React from "react"
import styled from "styled-components"

import Project from "./Project"

const Projects = () => (
  <ProjectsWrapper>

    <div>
      <h2>PROJECTS</h2>
    </div>

    <Project />


    <a className="project-button" href="https://form.jotform.com/203324916543150" target="_blank" rel="noreferrer">HAVE A PROJECT FOR US?</a>

  </ProjectsWrapper>
)

export default Projects
const ProjectsWrapper = styled.div`
  margin-bottom: 2rem;
  height: 72rem;
  text-align: center;
  width: 80%;
  position: relative;
@media (min-width: 700px){
  width: 100%;
  height: 42rem;
}
@media (min-width: 900px){
  width: 80%;
}
  h2{
    color: #DA0D46;
    margin-bottom: 1rem;
  }
 
  .project-button {
      background: linear-gradient(180deg, #DA0D46 0%, #570018 100%), #DA0D46;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      font-size: 16px;
      line-height: 123.4%;
      letter-spacing: 0.02em;
      color: #ffffff;
      align-self: center;
      padding: 1.25rem;
      margin-top: 1.25rem;
      text-decoration: none;
      
      @media (min-width: 700px){

      position: absolute; 
      bottom: 0;
      right: 30%;
      }
      @media (min-width: 900px){
        right: 38%;
      }
  }
`
