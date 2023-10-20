import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import logo2 from '../assets/img/logo3.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={scrolled ? logo : logo} size={25} alt="Logo" className={scrolled ? 'z10 filterInvert0' : 'z10 filterInvert10'} style={{maxWidth: 300,}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className={scrolled ? 'navbar-toggler-icon z10 filterInvert10' : 'navbar-toggler-icon z10 filterInvert0'}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={scrolled ? "ms-auto colorWhite" : "ms-auto"}>
              <Nav.Link href="#home" className={scrolled ? 'active navbar-link colorWhite' : 'navbar-link colorBlack'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={scrolled ? 'active navbar-link colorWhite' : 'navbar-link colorBlack'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={scrolled ? 'active navbar-link colorWhite' : 'navbar-link colorBlack'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text z10">
              <div className={scrolled ? "social-icon" : " social-icon bgBlack"}>
                <a href="https://br.linkedin.com/in/lucas-alves-rocha" className={scrolled ? "" : "bgWhite"} ><img  src={navIcon1} alt="" /></a>
                {/* <a href="#" className={scrolled ? "" : "bgWhite"}><img src={navIcon2} alt="" /></a>
                <a href="#" className={scrolled ? "" : "bgWhite"}><img src={navIcon3} alt="" /></a> */}
              </div>
              <HashLink to='#connect'>
                <button className=""><span  className={scrolled ? "" : "colorBlack"}>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
