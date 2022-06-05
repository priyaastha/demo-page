import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ga from './assets/ga.svg'
import "./styles/Footer.css";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <img src={ga} alt="logo" className='logo' />
          </MDBCol>
          <MDBCol md="3">
            <ul>
              <li className="list-unstyled foottitle">
                <h5 className="title">Products</h5>
              </li>
              <li className="list-unstyled footli">
                <a href="#!">What we do</a>
              </li>
              <li className="list-unstyled footli">
                <a href="#!">Supported Platforms</a>
              </li>
              <li className="list-unstyled footli">
                <a href="#!">How it works</a>
              </li>
              <li className="list-unstyled footli">
                <a href="#!">Reviews</a>
              </li>
              <li className="list-unstyled footli">
                <a href="#!">Pricing</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <ul>
              <li className="list-unstyled foottitle">
                <h5 className="title">More</h5>
              </li>
              <li className="list-unstyled footli">
                <a href="#!">Package Options</a>
              </li>
              <li className="list-unstyled footli">
                <a href="#!">FAQ's</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <ul>
              <li className="list-unstyled foottitle">
                <h5 className="title">About</h5>
              </li>
              <li className="list-unstyled footli">
                <a href="#!">Contact</a>
              </li>
              <li className="list-unstyled footli">
                <a href="#!">Privacy Policy</a>
              </li>
              <li className="list-unstyled footli">
                <a href="#!">Terms and Conditions</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: SetupGA
          <br></br>
          <FontAwesomeIcon icon={faFacebook} size="lg" color='orange'/>&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faTwitter} size="lg" color='orange'/>&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faLinkedin} size="lg" color='orange'/>&nbsp;&nbsp;&nbsp;&nbsp;
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;