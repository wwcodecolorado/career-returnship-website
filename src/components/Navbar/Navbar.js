import React, { useState } from "react"
import Styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import Logo from "../../images/logoColorSvg.svg"

const Navigation = Styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  font-family: Montserrat, Myriad Pro, sans-serif;
  text-transform: capitalize;
  border-bottom: .125rem solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  .project-image {
    margin: .625rem 0;
    max-width: 15.95rem;
    max-height: 2.625rem;
  }
  @media (max-width: 56.25rem) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = Styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
 

  @media (max-width: 900px) {
    display: flex;
     
  }
`

const Navbox = Styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    position: fixed;
    width: 60%;
    justify-content: flex-start;
    padding-top: 12vh;
    background-color: #da0d46;
    opacity: 0.9;
    color: white;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "45%")};
    a{
      color: white;
      font-size: 1.5rem;
      margin: 0;
      padding: 1.5rem 0;
      text-transform: uppercase;
      
    }
    
    @media (max-width: 700px) {
      left: ${props => (props.open ? "-100%" : "0")};
      width: 80%;
      
    }
  }
`

const Hamburger = Styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
  a {
    margin-top: 1rem;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <a href="/"><img
        className="project-image"
        src={Logo}
        alt="Career Returnship Logo"

      /></a>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
