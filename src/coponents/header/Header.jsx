import React from 'react'
import "./header.css"
import { Button, Container, Nav, Navbar} from 'react-bootstrap'
import logo from "../../assets/logo.png"
import iconbtn from "../../assets/icon-button.png"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
 <>
  <Navbar expand="lg" className="manu-bg">
      <Container>
        <img src={logo} alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-gap">
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/about">About</Link>
            <Link className='link' to="/">Service</Link>
            <Link className='link' to="/">Contact</Link>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
         <div className="icon-btn">
          <img className='iconbtn' src={iconbtn} alt="" />
          <Button className='cus-btn'>Download</Button>
         </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </>
  )
}

export default Header