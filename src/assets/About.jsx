import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { IoCheckmarkDone } from "react-icons/io5";

function About() {
  return (
    <div>
      <Container className='text-center p-4 mt-4'>
      <h3 className='border-bottom border-3 w-25 mx-auto d-block pb-3'>About Us</h3>
      <p className='mt-3'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <Row className='mt-5 p-3 text-start'>
          <Col>
          <img src='./img/about.jpg' alt='' className='w-100 img-fluid mx-auto d-block'/>
          </Col>
          <Col>
          <h4>Voluptatem dignissimos provident quasi<h4>corporis voluptates sit assumenda.</h4></h4>
          <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em></p>
          <ul className='list-unstyled'>
            <li><IoCheckmarkDone className='fs-5 text-success'/> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
            <li><IoCheckmarkDone className='fs-5 text-success'/> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
            <li><IoCheckmarkDone className='fs-5 text-success'/> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
          </ul>
          <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default About