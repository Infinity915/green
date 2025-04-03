import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

function Contact() {
  // State variables to hold the form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Log the form data to the console
    console.log("Form Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Optionally, show a confirmation alert or message
    alert("Message Sent Successfully!");

    // Clear the form fields after submission
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div>
      <Container className='text-center'>
        <h3 className='border-bottom border-3 w-25 mx-auto d-block pb-3'>Contact</h3>
        <p className='mt-3'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <Row className='mt-4 mb-5 gap-4'>
          <Col md={4} className='shadow p-3'>
            <div className='d-flex'>
              <div className='p-2 text-success div1'>
                <IoLocationOutline className='fs-2'/>
              </div>
              <div className='p-2 text-start'>
                <h5>Address</h5>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            <div className='d-flex'>
              <div className='p-2 text-success div1'>
                <IoCall className='fs-2'/>
              </div>
              <div className='p-2 text-start'>
                <h5>Call Us</h5>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            <div className='d-flex'>
              <div className='p-2 text-success div1'>
                <MdOutlineMailOutline className='fs-2'/>
              </div>
              <div className='p-2 text-start'>
                <h5>Email Us</h5>
                <p>info@example.com</p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.353474265509!2d85.150866273613!3d25.593168015551942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5885e0ab42fd%3A0x1024b41aca17b738!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sin!4v1733821145209!5m2!1sen!2sin"
              width="350" height="300" style={{border:"none"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </Col>
          <Col md={7} className='text-start p-4 shadow'>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Bind input to state
                    required // Make this field required
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Bind input to state
                    required // Make this field required
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type='text'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)} // Bind input to state
                  required // Make this field required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} // Bind input to state
                  required // Make this field required
                />
              </Form.Group>

              <Button variant="success" type="submit" className='rounded-pill px-5 mt-4 mx-auto d-block py-2'>
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
