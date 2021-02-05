import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


const Project = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: {fields: {collections: {eq: "projects"}}}
                sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        tools
                        Project_url 
                        GitHub_url
                        Project_Image {
                            childImageSharp {
                            fluid(maxWidth: 250, maxHeight: 250) {
                            ...GatsbyImageSharpFluid
                            }
                  }
                }
              }
              html
            }
          }
        }
      }
      `)

  return(
    <ProjectStyle>
    {data.allMarkdownRemark.edges.map((edge) => {
      return(
      <div className="row">
        
        <div className="column">
        <PreviewCompatibleImage
            imageInfo={{imageInfo: edge.node.frontmatter.Project_Image,
            alt: "Gatsby Docs are awesome",
            }}/>

          <h3>{edge.node.frontmatter.title}</h3>
          <p>Tools Used: {edge.node.frontmatter.tools}</p>
         
          <div dangerouslySetInnerHTML={{__html:edge.node.html}}></div>
        
          <div className="toggle-buttons">
            <button className="github-button"><a href={edge.node.frontmatter.GitHub_url}>GITHUB</a></button>
            <button className="prototype-button"><a href={edge.node.frontmatter.Project_url}>Project Page</a></button>
          </div>
        </div>
       
      </div>
      )
      })}
     
     </ProjectStyle>
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
  text-decoration: none;
  @media (min-width: 700px) {

    margin: 0 auto;
  }

  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 20px 0;
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
      flex-direction: column;
      justify-content: center;
      width: 95%;
      @media (min-width: 700px) {
      margin-left: 3rem;
      width: 78%;
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
          text-decoration: none;
          color: black;
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

 export default Project


