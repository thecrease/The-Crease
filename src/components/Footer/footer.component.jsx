// import React from 'react';
// import { Row, Col, Container } from 'react-bootstrap';

// const Footer = () => {
//   return (
//     <div style={{ backgroundColor: '#282C2F', marginTop: '20px' }}>
//       <Container>
//         <Row>
//           <Col lg={4} md={12}>
//             <div
//               style={{ width: '30%' }}
//               className="d-flex flex-column justify-content-center align-items-center" >
//               <h3 style={{ color: 'white' }}>Blogs</h3>
//               <p style={{ color: 'white'}}>Heading 1</p>
//               <p style={{ color: 'white'}}>Heading 1</p>
//               <p style={{ color: 'white'}}>Heading 1</p>
//               <p style={{ color: 'white'}}>Heading 1</p>
//               <p style={{ color: 'white'}}>Heading 1</p>
//             </div>
//           </Col>
//           <Col lg={4} md={6}>
//             <div className="d-flex flex-column justify-content-center align-items-center">
//               <h3 style={{ color: 'white' }}>Blogs</h3>
//               <p style={{ color: 'white'}}>Heading 1</p>
//               <p style={{ color: 'white'}}>Heading 1</p>
//               <p style={{ color: 'white'}}>Heading 1</p>
//               <p style={{ color: 'white'}}>Heading 1</p>
//               <p style={{ color: 'white'}}>Heading 1</p>
//             </div>
//           </Col>
//           <Col lg={4} md={6}>
//             <div className="d-flex flex-column justify-content-center align-items-center">
//             <h3 style={{ color: 'white' }}>Blogs</h3>
//               <p style={{ color: 'white'}}>Heading 1</p>
//               <p style={{ color: 'white'}}>Heading 1</p>
//               <p style={{ color: 'white'}}>Heading 1</p>
//               <p style={{ color: 'white'}}>Heading 1</p>
//               <p style={{ color: 'white'}}>Heading 1</p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footerStyle.css";

const Footer = () => {
  return (
    <div className="footer">
        <Container>
          <div className="footer_flex">
            <div className="footer_nav width_30">
                <ul>
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link to="/players">Players</Link>
                  </li>
                  <li>
                    <Link to="/teams">Teams</Link>
                  </li>
                  <li>
                    <Link to="/contactus">Contact Us</Link>
                  </li>
                </ul>
            </div>
            <div className="footer_icons width_30">
             <Link
              to={{ pathname: "https://twitter.com/?lang=en" }}
              target="_blank"
              >
              <i className="social-icon fab fa-twitter footer-img"></i>
              </Link>
              <Link
              to={{ pathname: "https://www.facebook.com/" }}
              target="_blank"
              >
              <i className="social-icon fab fa-facebook-f footer-img"></i>
              </Link>

              <Link
              to={{ pathname: "https://www.instagram.com/" }}
              target="_blank"
              >
              <i className="social-icon fab fa-instagram footer-img"></i>
              </Link>

              <p>© Copyright 2020 Adeel & Group</p>

            </div>
            <div className="footer_para width_30">
              <p>The Crease is a platform where club cricketers can get some validation/recognition and to prove themselves to get selected at a higher level. </p>
            </div>
          </div>
        </Container>
    </div>
  );
};

export default Footer;

