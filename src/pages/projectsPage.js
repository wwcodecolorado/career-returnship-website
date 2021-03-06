import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project"
import Slider from "../components/Testimonials"


const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectStyle>
        <h2>PROJECTS</h2>
        <div className="content">
          <Project />
          <a className="project-button" href="https://form.jotform.com/203324916543150">HAVE A PROJECT FOR US?</a>
          <Slider className="slider" />
        </div>
      </ProjectStyle>
    </Layout>

  )
}

const ProjectStyle = styled.div`
  align-items: center;
  background: #E5E5E5;
  color: #DA0D46;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-bottom: 3rem;
  width: 100%;

  @media (min-width: 700px) {

    margin: 0 auto;
  }

  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
    padding-bottom: 2rem;
    width: 100%;
    

    h2 {
      
      font-size: 2.5rem;
      margin-left: 8rem;
      width: 100%;
      @media (min-width: 700px) {
        margin-left: 23rem; 
      }
    }

    .row {
      display: flex;
      /* flex-direction: column; */
      justify-content: center;
      width: 95%;
      @media (min-width: 700px) {
      margin-left: 3rem;
      width: 88%;
      }
      

      .column {
        align-items: center;
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        margin: 20px auto;
        padding-bottom: 20px;
        text-align: center;
        width: 100%;
        
        img {
        border-radius: 15px 15px 0px 0px;
        object-fit: contain;
        width: 100%;
        }
        p, h3 {
         color: #000000;
         padding: 20px;
        }
        h3 {
          font-size: 16px;
          margin: 0;
          padding: 0;
        }
      }
        a {
          color: black;
          text-decoration: none;
        }
      @media  (min-width: 700px) {
        align-items: center;
        flex-direction: row;
        h2 {
          margin-left: 20rem; 
        }
        .column {
          margin: 0 10px;
          width: 70%;
        }
      }
    }
  }
    .github-button {
      background: #017A8E;
      border: 2px solid #017A8E;
    }
    .prototype-button {
      border: 2px solid #017A8E;
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
      padding: 20px;
      margin-top: 20px;
      text-decoration: none;
  }
`

export default ProjectsPage

