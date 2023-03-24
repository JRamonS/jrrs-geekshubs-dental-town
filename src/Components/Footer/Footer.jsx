import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
    <div className="main-footer ">
        <div className="container-footer">
            <div className="row text-center yes">

                <div className="col-md-4 col-sm-4 mt-4">
                    <h5>PLACE</h5>
                    <p>C/ Calle Isla De Lobeira 433,</p>
                    <p> 28400, Madrid</p> 
                </div>

                <div className="col-md-4 col-sm-4 mt-4">
                    <h5>Open Time</h5>
                    <p>Monday to Friday: 08:00 – 17:00</p>
                    <p>Saturday and Sunday: Close</p>
                </div>
    
                <div className="col-md-4 col-sm-4 mt-4">
                    <h5>CONTACT</h5>
                    <div>
                    <p> +34 643 426 671 </p>
                    <p> info@laelectronica@gmail.com </p>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom text-center">
                <p className="text-xs-center mb-0">
                    &copy;{new Date().getFullYear()} All Rights Reserved
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import './Footer.css'



// export const Footer = () => {
//     return (
//     <>
// <div className='su' >
//     <Container className="main-footer su">
// <Row>
//         <Col className='col-md-4 col-sm-4 mt-4 text-center'>  
//         <h5>PLACE</h5>
//         <p>C/ Calle Isla De Lobeira 45,</p>
//         <p> 28400, Madrid</p> 
//         </Col>
//     <Col className='col-md-4 col-sm-4 mt-4 text-center'> 
//         <h5>Open Time</h5>
//         <p>Monday to Friday: 10:00 – 20:00</p>
//         <p>Saturday and Sunday: Close</p>
//         </Col>
//     <Col className='col-md-4 col-sm-4 mt-4 text-center'>
//         <h5>CONTACT</h5>
//         <p> +44 111 222 444 </p>
//         <p> info@laelectronicagmail.com </p>
//         </Col>
//     <Row>
//         <Col className='footer-bottom text-center'>
//             <p>&copy;{new Date().getFullYear()} All Rights Reserved </p>
//             </Col>
//     </Row>
// </Row>
//     </Container>
// </div>
//     </>
//     )
// }