import React from 'react'
import { Container } from 'react-bootstrap'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Team() {
  return (
    <div className='bg-body-tertiary'>
      <Container className='text-center p-4 mt-4'>
      <h3 className='border-bottom border-3 w-25 mx-auto d-block pb-3'>Team</h3>
      <p className='mt-3'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
  <div className="col">
    <div className="card h-100">
      <img src="./img/team/team-1.jpg" class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Walter White</h5>
        <p className="card-text text-secondary">Web Develoment</p>
        <p className='text-secondary'>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</p>
      </div>
      <div className="card-footer">
       <Link to="" className='fs-4 text-secondary'> <FaXTwitter className='me-2'/></Link>
       <Link to="" className='fs-4 text-secondary'><FaFacebook className='me-2'/></Link>
       <Link to="" className='fs-4 text-secondary'><FaInstagram className='me-2'/></Link>
       <Link to="" className='fs-4 text-secondary'><FaLinkedin/></Link>
      </div>
    </div>
  </div>
  <div class="col">
  <div className="card h-100">
      <img src="./img/team/team-2.jpg" class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Sarah Jhinson</h5>
        <p className="card-text text-secondary">Marketing</p>
        <p className='text-secondary'>Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus</p>
      </div>
      <div className="card-footer">
       <Link to="" className='fs-4 text-secondary'> <FaXTwitter className='me-2'/></Link>
       <Link to="" className='fs-4 text-secondary'><FaFacebook className='me-2'/></Link>
       <Link to="" className='fs-4 text-secondary'><FaInstagram className='me-2'/></Link>
       <Link to="" className='fs-4 text-secondary'><FaLinkedin/></Link>
      </div>
    </div>
  </div>
  <div class="col">
  <div className="card h-100">
      <img src="./img/team/team-3.jpg" class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">William Anderson</h5>
        <p className="card-text text-secondary">Content</p>
        <p className='text-secondary'>Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara</p>
      </div>
      <div className="card-footer">
       <Link to="" className='fs-4 text-secondary'> <FaXTwitter className='me-2'/></Link>
       <Link to="" className='fs-4 text-secondary'><FaFacebook className='me-2'/></Link>
       <Link to="" className='fs-4 text-secondary'><FaInstagram className='me-2'/></Link>
       <Link to="" className='fs-4 text-secondary'><FaLinkedin/></Link>
      </div>
    </div>
  </div>
</div>
      </Container>
    </div>
  )
}

export default Team