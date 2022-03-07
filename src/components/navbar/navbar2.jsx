import React,{useState} from 'react'
import LogoBlack from "../../assets/logo/logoBlack.png";
import Logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import {Nav,Offcanvas,Navbar,Container,NavDropdown} from 'react-bootstrap';
import "./navbar.css";

function NavbarComponent() {
    const [navbarfunc, setNavbarfunc] = useState(false);

    const changeBackground = () => {
      if (window.scrollY >= 20) {
        setNavbarfunc(true)
      } else {
        setNavbarfunc(false)
      }
    }
    window.addEventListener('scroll', changeBackground);
  
  return (
<Navbar fixed="top" style={{height:"80px"}} className={navbarfunc?"navbarr navbar-dark" :"navbarr"} expand={false}>
  <Container fluid className='d-flex justify-content-between'>
  <Link to="/" className="link1 "><img src={Logo} alt="logo" className="left" /></Link>
      <Link to="/" className="link "><img src={LogoBlack} alt="logo" className="leftBlack"/></Link> 
      <ul className="center d-none d-md-flex">
        <Link to="/about" className="link"><li>About</li></Link>
        <Link to="/services" className="link"><li>Services</li></Link>
        <Link to="/projects" className="link"><li>Projects</li></Link>
        <Link to="/partners" className="link"><li>Partners</li></Link>
        <Link to="/contacts" className="link"><li>Contacts</li></Link>
      </ul>
      <div className="right d-none d-xl-flex">
        <select>
          <option value="Rus">Rus</option>
          <option value="Uzb">Uzb</option>
        </select>
        <p className="call ">(99) 999-99-99</p>
      </div> 
         <Navbar.Toggle 
            className=" d-block  d-md-none bg-info "
 aria-controls="offcanvasNavbar"

  />
    <Navbar.Offcanvas
    className='w-75 '
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">
        <Link to="/" className="link"><img src={LogoBlack} alt="logo" className="leftBlack"/></Link>  
          <Navbar.Toggle   aria-controls="offcanvasNavbar" />
            </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link className="link" href="/about">About</Nav.Link>
          <Nav.Link className="link" href="/services">Services</Nav.Link>
          <Nav.Link className="link" href="/projects">Projects</Nav.Link>
          <Nav.Link className="link" href="/partners">Partners</Nav.Link>
          <Nav.Link className="link" href="/contacts">Contacts</Nav.Link>
   
          <NavDropdown title="Tilni tanlash" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#uzbek">Uzbekcha</NavDropdown.Item>
            <NavDropdown.Item href="#ruskiy">Ruskiy</NavDropdown.Item>
        
          </NavDropdown>
        </Nav>
     
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  )
}

export default NavbarComponent;
