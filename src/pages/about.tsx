// Gatsby supports TypeScript natively!
import React from "react"
import Styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import about from "../images/aboutMountains.png"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper>
      <div className="description">
        <h2 className="title">ABOUT US</h2>
        <div className="text">
          Kickstarting your career and reentering the workforce after a break
          can be a huge challenge; together we can make this a lot easier. This
          initiative is a small step towards empowering those of us in
          technology trying to relaunch our careers.
          <br />
          <br />
          Join us in this biweekly event series where we learn, network, engage
          in meaningful projects and crack the interviews together.
          <br />
          <br />
          Who should attend: If you are thinking about restarting your career or
          if you are currently struggling alone in the process, this program is
          for you. If you are currently working, we would love your insights to
          help the community.
        </div>
        <button className="join-us-button" type="button">
          JOIN US
        </button>
        <button className="become-sponsor-button" type="button">
          BE A SPONSOR/PARTNER
        </button>
      </div>
      <div className="gray-section">
        <img className="about-image" src={about} alt="women smiling" />
        <a className="link" href="https://www.womenwhocode.com/" target="_blank">WOMEN WHO CODE</a>
        <a className="link" href="https://www.womenwhocode.com/boulder-denver" target="_blank">WWC - DENVER/BOULDER</a>
        <a className="link" href="https://www.w3schools.com" target="_blank">CONTACT US</a>
      </div>
    </Wrapper>
  </Layout>
)

const Wrapper = Styled.div`
align-items: center;
display: flex;
flex-direction: column;
width: 100%;

.description {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  margin: 0 0 50px;
  max-width: 900px;
  width: 100%;

  h2 {
    color: #DA0D46;
    font-family: Myriad Pro, sans-serif;
    font-weight: 700;
    font-size: 24px;
    margin: 0px;
    padding: 20px 0px 20px;
  }

  .text {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    margin: 0px 20px 20px 20px;
  }

  .join-us-button {
    align-items: center;
    background: linear-gradient(180deg, #4C4C4C 0%, #000000 100%), #4C4C4C;
    border-radius: 15px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #FFFFFF;
    display: flex;
    font-family: Myriad Pro, sans-serif;
    font-size: 15px;
    font-weight: 700;
    height: 50px;
    justify-content: center;
    margin: 15px auto 15px;
    padding: 0;
    outline: none;
    width: 230px;
  }

  .become-sponsor-button {
    align-items: center;
    background: linear-gradient(180deg, #DA0D46 0%, #570018 100%), #DA0D46;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    color: #ffffff;
    display: flex;
    font-family: Myriad Pro, sans-serif;
    font-size: 15px;
    font-weight: 700;
    height: 50px;
    justify-content: center;
    line-height: 123.4%;
    letter-spacing: 0.02em;
    margin: 15px auto 15px;
    outline: none;
    padding: 20px;
    width: 230px;
  }
}

.gray-section {
  display: flex;
  flex-direction: column;

  .about-image {
    width: 375px;
    height: 204px;
    margin: 0px 0px 5px;
    top-left-radius: 15px;
    top-right-radius: 15px;
  }

  .link {
    width: 100%;
    height: 85px;
    background-color: #A8C4C8;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #000000;
    font-family: Myriad Pro, sans-serif;
    font-size: 15px;
    font-weight: 700;
    margin: 0px 0px 4px;
  }
}
`

export default AboutPage
