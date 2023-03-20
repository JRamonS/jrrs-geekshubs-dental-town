import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import './NavBar.css'
import { useDispatch, useSelector } from "react-redux";
import { userData, userout } from '../../pages/userSlice';


export const NavBar = () => {

  const ReduxCredentials = useSelector(userData)

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userout({ credentials: {}, token: '' }));
    return navigate("/");
  };

  
    return (
      <Navbar  sticky='top' collapseOnSelect expand="md" className='nav' >  
        <Container>
          <Navbar.Brand as= {Link} to = "/home"><span>Town</span>Dental</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
  
              <Nav.Link as= {Link} to = "/home" className='NavDesign'>Home</Nav.Link>
              {/* <Nav.Link as= {Link} to = "/register" className='NavDesign'>Register</Nav.Link>
              <Nav.Link as= {Link} to = "/login" className='NavDesign'>Login</Nav.Link> */}
              <Nav.Link as= {Link} to = "/treatment" className='NavDesign'>Treatment</Nav.Link>
              <Nav.Link  className='perfil' as={Link} to='/profile'>
              <div>{ReduxCredentials?.credentials?.decodificado?.username}</div>
              </Nav.Link>

              {ReduxCredentials?.credentials?.decodificado?.rolId === 1 ? (
              <>
                <Nav.Link as={Link} to='/logout' onClick={() => logout()}>Logout</Nav.Link>
                <Nav.Link as={Link} to='/newRole'>ChangeRole</Nav.Link>
                <Nav.Link as={Link} to='/user/all'>allUsers</Nav.Link>
                <Nav.Link as={Link} to='/user/all/detail'>allUsersDetails</Nav.Link>
              </>
              ) : ReduxCredentials?.credentials?.decodificado?.rolId === 2 ? (
                <>
                {/* <Nav.Link as={Link} to='/user/myprofile'>Profile</Nav.Link> */}
                <Nav.Link as={Link} to='/logout' onClick={() => logout()}>Logout</Nav.Link>
                <Nav.Link as={Link} to='/appointment'>AllAppointment</Nav.Link>
                <Nav.Link as={Link} to='/user/all'>Appointment</Nav.Link>
              </>
               ) :ReduxCredentials?.credentials?.decodificado?.rolId === 3 ? (
                <>
                {/* <Nav.Link as={Link} to='/profile'>Profile</Nav.Link> */}
                <Nav.Link as={Link} to='/logout' onClick={() => logout()}>Logout</Nav.Link>
                <div className='boton'>
              <Nav.Link as= {Link} to = "/bookAppointment" className='book'>BOOK APPOINTMENT</Nav.Link>
              </div>
                </>
                ) : (
                  <>
                  <Nav.Link as={Link} to='/login' className='NavDesign'>Login</Nav.Link>
                  <Nav.Link as={Link} to='/register' className='NavDesign'>Register</Nav.Link>
                </>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }




  // <Navbar bg="light" expand="lg">
  //     <Container>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="me-auto">
  //           <Nav.Link as={Link} to="/">Home</Nav.Link>
  //           <Nav.Link as={Link} to="/treatment">Treatment</Nav.Link>
  //           <Nav.Link  className='perfil' as={Link} to='/user/myprofile'>
  //             <div>{credencialesRedux?.credentials?.usuario?.fullName}</div>
  //           </Nav.Link>
  //           {/* <Navbar.Brand  className='Logo'><div>{credencialesRedux?.credentials?.usuario?.fullName}</div></Navbar.Brand> */}
  //           {credencialesRedux?.credentials?.usuario?.roleId === 3 ? (
  //             <>
  //               {/* <Nav.Link as={Link} to='/user/myprofile'>Profile</Nav.Link> */}
  //               <Nav.Link as={Link} to='/logout' onClick={() => logout()}>Logout</Nav.Link>
  //               <Nav.Link as={Link} to='/newRole'>ChangeRole</Nav.Link>
  //               <Nav.Link as={Link} to='/appointment'>newAppointment</Nav.Link>
  //               <Nav.Link as={Link} to='/user/all'>allUsers</Nav.Link>
  //               <Nav.Link as={Link} to='/user/all/detail'>allUsersDetails</Nav.Link>
  //             </>
  //             ) : credencialesRedux?.credentials?.usuario?.roleId === 2 ? (
  //                 <>
  //                 <Nav.Link as={Link} to='/user/myprofile'>Profile</Nav.Link>
  //                 <Nav.Link as={Link} to='/logout' onClick={() => logout()}>Logout</Nav.Link>
  //                 <Nav.Link as={Link} to='/appointment'>newAppointment</Nav.Link>
  //                 <Nav.Link as={Link} to='/user/all'>allUsers</Nav.Link>
  //               </>
  //               ) : credencialesRedux?.credentials?.usuario?.roleId === 1 ? (
  //                 <>
  //                 <Nav.Link as={Link} to='/user/myprofile'>Profile</Nav.Link>
  //                 <Nav.Link as={Link} to='/logout' onClick={() => logout()}>Logout</Nav.Link>
  //                 <Nav.Link as={Link} to='/appointment'>newAppointment</Nav.Link>
  //                 </>
  //                 ) : (
  //                 <>
  //               <Nav.Link as={Link} to='/login'>Login</Nav.Link>
  //               <Nav.Link as={Link} to='/register'>Register</Nav.Link>
  //             </>
  //               )}
  //           <Nav.Link as={Link} to="/about">About Us</Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>

























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


