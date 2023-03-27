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
    return navigate("/login");
  };

  
    return (
      <Navbar  sticky='top' collapseOnSelect expand="md" className='nav' >  
        <Container>
          <Navbar.Brand as= {Link} to = "/home"><span>Town</span>Dental</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
  
              <Nav.Link as= {Link} to = "/home" className='NavDesign'>Home</Nav.Link>
              <Nav.Link as= {Link} to = "/treatment" className='NavDesign'>Treatment</Nav.Link>
              <Nav.Link  className='perfil NavDesign' as={Link} to='/profile'>
              <div>{ReduxCredentials?.credentials?.decodificado?.username}</div>
              </Nav.Link>

              {ReduxCredentials?.credentials?.decodificado?.rolId === 1 ? (
              <>
                <Nav.Link as={Link} to='/logout' onClick={() => logout()}>Logout</Nav.Link>
                <Nav.Link as={Link} to='/newRole' className='NavDesign'>ChangeRole</Nav.Link>
                <Nav.Link as={Link} to='/allUsers' className='NavDesign'>AllUsers</Nav.Link>
                <Nav.Link as={Link} to='/user/all/detail' className='NavDesign'>allUsersDetails</Nav.Link>
              </>
              ) : ReduxCredentials?.credentials?.decodificado?.rolId === 2 ? (
                <>
                <Nav.Link as={Link} to='/logout' onClick={() => logout()}>Logout</Nav.Link>
                <Nav.Link as={Link} to='/AppointmentAll' className='NavDesign'>AppointmentAll</Nav.Link>
              </>
               ) :ReduxCredentials?.credentials?.decodificado?.rolId === 3 ? (
                <>
                <Nav.Link as={Link} to='/logout' className='NavDesign'onClick={() => logout()}>Logout</Nav.Link>
                <Nav.Link as= {Link} to = '/AppointmentsAsClient'className='NavDesign'>Appointment</Nav.Link>
                <Nav.Link as= {Link} to = '/modifyAppointment' className='NavDesign'>Modify</Nav.Link>
                <Nav.Link as= {Link} to = '/book'className='NavDesign'>BOOK</Nav.Link>
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




 



