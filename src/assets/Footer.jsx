import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <Container fluid className='bg-dark text-white p-5'>
        <Row className='gap-2'>
          <Col md={5}>
          <h3>Green</h3>
          <p className='fw-light'>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <ul className='list-unstyled list-inline text-secondary mt-4'>
            <li className='list-inline-item'><FaXTwitter className='border rounded-circle p-1 fs-2 me-2'/></li>
            <li className='list-inline-item'><FaFacebook className='border rounded-circle p-1 fs-2 me-2' /></li>
            <li className='list-inline-item'><FaInstagram className='border rounded-circle p-1 fs-2 me-2' /></li>
            <li className='list-inline-item'><FaLinkedin className='border rounded-circle p-1 fs-2 me-2' /></li>
          </ul>
          </Col>
          <Col md={2}>
          <h4>Useful Links</h4>
          <ul className='list-unstyled'>
            <li><a href='#' className='text-light fw-light fs-6'>Home</a></li>
            <li><a href='#' className='text-light fw-light fs-6'>About Us</a></li>
            <li><a href='#' className='text-light fw-light fs-6'>Services</a></li>
            <li><a href='#' className='text-light fw-light fs-6'>Terms of Service</a></li>
            <li><a href='#' className='text-light fw-light fs-6'>Privacy Policy</a></li>
          </ul>
          </Col>
          <Col md={2}>
          <h4>Our Services</h4>
          <ul className='list-unstyled'>
            <li><a href='#' className='text-light fw-light fs-6'>Web Design</a></li>
            <li><a href='#' className='text-light fw-light fs-6'>Web Development</a></li>
            <li><a href='#' className='text-light fw-light fs-6'>Product Management</a></li>
            <li><a href='#' className='text-light fw-light fs-6'>Marketing</a></li>
            <li><a href='#' className='text-light fw-light fs-6'>Graphic Design</a></li>
          </ul>
          </Col>
          <Col md={2}>
          <h4>Contact Us</h4>
          <ul className='list-unstyled'>
            <li className='text-light fw-light fs-6'>A108 Adam Street</li>
            <li className='text-light fw-light fs-6'>New York, NY 535022</li>
            <li className='text-light fw-light fs-6'>United States</li>
          </ul>
          <ul className='list-unstyled mt-3'>
            <li className='text-light fw-light fs-6'>Phone: +1 5589 55488 55</li>
            <li className='text-light fw-light fs-6'>Email: info@example.com</li>
          </ul>
          </Col>
        </Row>
        <div className='text-center mt-5'>
          <p>&copy;Copyright <span className='fw-bolder'>Green</span> All Rights Reserved</p>
          <p>Designed by <span className='text-success'>TAKSH</span></p>
        </div>
      </Container>
    </div>
  )
}

export default Footer