import { Container, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import './NavBar.css'


export const NavBar = () => {
    return (
      <Navbar  sticky='top' collapseOnSelect expand="md" className='nav' >  
        <Container>
          <Navbar.Brand as= {Link} to = "/home"><span>Town</span>Dental</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <div className='butom'>
              <Nav.Link as= {Link} to = "/home" className='NavDesign'>Home</Nav.Link>
              <Nav.Link as= {Link} to = "/treatment" className='NavDesign'>Treatment</Nav.Link>
              <NavDropdown title="User" id="basic-nav-dropdown">
              <Nav.Link as= {Link} to = "/register" className='NavDesign'>Register</Nav.Link>
              <Nav.Link as= {Link} to = "/login" className='NavDesign'>Login</Nav.Link>
              </NavDropdown>
              {/* <Nav.Link as= {Link} to = "/profile" className='NavDesign'>Profile</Nav.Link> */}
              
              </div>
              <div className='boton'>
              <Nav.Link as= {Link} to = "/bookAppointment" className='book'>BOOK APPOINTMENT</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

























// import React from 'react'
// import { Container, Nav, NavDropdown } from 'react-bootstrap'
// import "./NavBar.css"
// import { Link } from 'react-router-dom'

// export const NavBar = () => {

//   return (
  
//     <div className='navbarstyle'>
//     <NavBar bg="light" expand="lg">
//       <Container>
//         <NavBar.Brand href="#home">Welcome To dentalSmily</NavBar.Brand>
//         <NavBar.Toggle aria-controls="basic-navbar-nav" />
//         <NavBar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/services">Services</Nav.Link>
//             <NavDropdown title="Services" id="basic-nav-dropdown">
//               <NavDropdown.Item as={Link} to="/login"> Login </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/register"> Register </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link as={Link} to="/about">About Us</Nav.Link>
//           </Nav>
//         </NavBar.Collapse>
//       </Container>
//     </NavBar>
//     </div>
//   );
// }


