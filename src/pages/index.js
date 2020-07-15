import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/Logo - white.svg"
import card from "../images/WWC-card.png"
import hero from "../images/Hero-subtract.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <div className="landing">
        <div className="hero">
          {/* <img className ="hero-img" src={hero} alt="Woman looking at a monitor" /> */}
          <img className ="logo" src={logo} alt="WWC Returnship icon" width="500" height="600"/>
        </div>
        <div className="about-us">
          <h2>ABOUT US</h2>
          <div className="description">
            <div className="column">
              <p>Kickstarting your career and re-entering the workforce after a break can be a huge challenge; <span>together we can make this a lot easier</span>. This initiative is a small step towards empowering those of us in technology trying to relaunch our careers.</p>
              <button>LEARN MORE</button>
            </div>
            <img className="card" src={card} alt="WWC Returnship ad" />
          </div>
        </div>
      </div>  
      <div className="get-involved">
        <h2>WANT TO GET INVOLVED?</h2>
        <div className="columns">
          <div className="column1">
            <button>BECOME A MEMBER</button>
            <p>We meet every 2 weeks on Wednesday. 6:00-8:00pm Sign-up online with Meetup</p>
          </div>
          <div className="column2">
            <button>BE A SPONSOR/VOLUNTEER</button>
            <p>Interested in partnering with us? A few options we are currently looking to fill. Weekly Food Sponsors Host Mock Interviews Lead a Code Challenge Portfolio/Resume Review Lightening Talks Domain Sponsorship Donations</p>
          </div>
          <div className="column3">
            <div className="logos-row1">
              <img />
              <img />
            </div>
            <div className="logos-row2">
              <img />
              <img />
            </div>
            <div className="logos-row3">
              <img />
            </div>
          <p>Thank you sponsors!</p>
          </div>
        </div>
      </div>
      <div className="events"></div>
      <div className="projects"></div>
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;

  .landing {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    /* background-image: url('../images/Hero-subtract.png') no-repeat fixed center; */

    .hero {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      height: 75vh;
      width: 100%;
      padding-top: 100px;
      background: url("${hero}") no-repeat center;

      .hero-img {
        max-width: 100%;
      }

      .logo {
        width: 750px;
        height: 172px;
      }

      h1 {
        font-family: Montserrat, sans-serif;
        font-size: 2rem;
        font-weight: lighter;
        letter-spacing: 0.02em;
        color: #FFFFFF;
      }
    }

    .about-us {
      display: flex;
      flex-direction: column;
      width: 100%
      height: 40vh;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 20px 300px;

      h2 {
        color: #DA0D46;
        font-family: 'Myriad Pro', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 42px;
        letter-spacing: 0.02em;
      }

      .description {
        display: flex;
        flex-direction: row;

        .column {
          display: flex;
          flex-direction: column;
    
          p {
            font-family: Montserrat, sans-serif;
            font-style: normal;
            font-weight: lighter;
            font-size: 18px;
            line-height: 123.4%;
            letter-spacing: 0.02em;
            color: #000000;

            span {
              font-weight: bold;
              font-style: italic;
            }
          }

          button {
            font-family: Myriad Pro, sans-serif;
            font-size: 16px;
            font-weight: bold;
            line-height: 123.4%;
            display: flex;
            align-self: center;
            text-align: center;
            letter-spacing: 0.02em;
            color: #DA0D46;
            border: 1px solid #DA0D46;
            box-sizing: border-box;
            border-radius: 15px;
            padding: 15px 70px;
          }
        }

        img {
          width: 272px;
          height: 172px;
          border-radius: 15px;    
        }
      }
    }
  }

  .get-involved {
    height: 50vh;
    width: 100%;
    background: #DA0D46;
    padding: 20px 300px;

    h2 {
      font-family: Myriad Pro, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      color: #FFFFFF;
      /* padding-top: 30px; */
    }

    .columns {
      direction: flex;
      flex-direction: row;
      width: 100%;

      p {
          font-family: Montserrat, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          color: #FFFFFF;
        }

      .column1 {
        button {
          font-family: Myriad Pro, sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #FFFFFF;

          background: linear-gradient(180deg, #4C4C4C 0%, #000000 100%), #4C4C4C;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 15px;
        }
      }

      .column2 {
        button {
          font-family: Myriad Pro, sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #4C4C4C;

          background: linear-gradient(180deg, #FFFFFF 0%, #E9CFD6 100%);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 15px;
        }
      }

      .column3 {
        .logos-row1 {

        }
        .logos-row2 {

        }
        .logos-row3 {

        }
    
        p {

        }
      }
    }
  }

  .events {
    height: 50vh;
    width: 100%;
    background: gray;
  }

  .projects {
    height: 100vh;
  }
`

export default IndexPage;
