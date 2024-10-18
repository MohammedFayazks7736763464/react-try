import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Router } from 'react-router-dom'



function Header() {
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">PortFolio</Navbar.Brand>
          <Nav className=" ">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Skills</Nav.Link>
            <Nav.Link href="#pricing">Project</Nav.Link>
            <Nav.Link href="#pricing">Contact </Nav.Link> */}

            
           <Link className='text-decoration-none m-5  text-light' to={'./Home'}>Home</Link>
           <Link  className='text-decoration-none m-5 text-light' to={'./Projects'}> Projects</Link>
           <Link  className='text-decoration-none m-5 text-light' to={'./Skills'}>Skills</Link>
           <Link  className='text-decoration-none m-5 text-light' to={'./Contact'}>Contact</Link>



          </Nav>
        </Container>
      </Navbar>
        
      
    </div>
  )
}

export default Header
