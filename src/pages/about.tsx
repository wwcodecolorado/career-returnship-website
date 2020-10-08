// Gatsby supports TypeScript natively!
import React from "react"
import Styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper>
      <div classname="description">
        <div classname="intro">
          <div classname="title">ABOUT US</div>
          <div classname="text">
            Kickstarting your career and reentering the workforce after a break
            can be a huge challenge; together we can make this a lot easier.
            This initiative is a small step towards empowering those of us in
            technology trying to relaunch our careers. <br />
            Join us in this biweekly event series where we learn, network,
            engage in meaningful projects and crack the interviews together.
            <br />
            Who should attend: If you are thinking about restarting your career
            or if you are currently struggling alone in the process, this
            program is for you. If you are currently working, we would love your
            insights to help the community.
          </div>
          <button className="become-member-button" type="button">
            BECOME A MEMBER
          </button>
          <button className="become-sponsor-button" type="button">
            BE A SPONSOR/VOLUNTEER
          </button>
        </div>
      </div>
      <div classname="links">Hello World</div>
    </Wrapper>
  </Layout>
)

const Wrapper = Styled.div`
align-items: center;
display: flex;
flex-direction: column;
width: 100%;
`

export default AboutPage
