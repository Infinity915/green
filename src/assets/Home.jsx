import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { TbWaveSawTool } from "react-icons/tb";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiBroadcastFill } from "react-icons/pi";
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact';
import Slider from "react-slick";
function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div>
      <Carousel className='mb-3'>
        <Carousel.Item>
          <img src='./img/hero-carousel/hero-carousel-1.jpg' className='img-fluid w-100 mx-auto d-block' alt='' style={{ height: "70vh" }} />
          <Carousel.Caption className='bg-success bg-opacity-50'>
            <h1>Welcome To Green</h1>
            <p className='my-4 mx-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button variant='success' className='rounded-pill px-5 mb-4'>Get started</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='./img/hero-carousel/hero-carousel-2.jpg' className='img-fluid w-100 mx-auto d-block' alt='' style={{ height: "70vh" }} />
          <Carousel.Caption className='bg-success bg-opacity-50'>
            <h1>At vero eos et accusamus</h1>
            <p className='my-4 mx-5'>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.
            </p>
            <Button variant='success' className='rounded-pill px-5 mb-4'>Get started</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='./img/hero-carousel/hero-carousel-3.jpg' className='img-fluid w-100 mx-auto d-block' alt='' style={{ height: "70vh" }} />
          <Carousel.Caption className='bg-success bg-opacity-50'>
            <h1>Temporibus autem quibusdam</h1>
            <p className='my-4 mx-5'>
              Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.
            </p>
            <Button variant='success' className='rounded-pill px-5 mb-4'>Get started</Button>
          </Carousel.Caption>

        </Carousel.Item>
      </Carousel>
      <Container>
        <Row className='my-4 c'>
          <Col>
            <Card style={{ width: '16rem' }} className='p-2 border-0'>
              <TbWaveSawTool className='text-success fs-1 ms-3' />
              <Card.Body>
                <Card.Title>Lorem Ipsum</Card.Title>
                <Card.Text>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '16rem' }} className='p-2 border-0'>
              <BsBoundingBoxCircles className='text-success fs-1 ms-3' />
              <Card.Body>
                <Card.Title>Sed ut perspici</Card.Title>
                <Card.Text>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '16rem' }} className='p-2 border-0'>
              <FaRegCalendarAlt className='text-success fs-1 ms-3' />
              <Card.Body>
                <Card.Title>Magni Dolores</Card.Title>
                <Card.Text>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '16rem' }} className='p-2 border-0'>
              <PiBroadcastFill className='text-success fs-1 ms-3' />
              <Card.Body>
                <Card.Title>Nemo Enim</Card.Title>
                <Card.Text>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <About/>
      <Container>
        <table className='table table-bordered'>
          <tr>
            <td className='border'>
              <h2 className='text-success'>01</h2>
              <h3>Lorem Ipsum</h3>
              <p className='text-secondary'>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
            </td>
            <td className='border'>
              <h2 className='text-success'>02</h2>
              <h3>Repellat Nihil</h3>
              <p className='text-secondary'>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
            </td>
            <td className='border'>
              <h2 className='text-success'>03</h2>
              <h3>Ad ad velit qui</h3>
              <p className='text-secondary'>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
            </td>
          </tr>
          <tr>
            <td className='border'>
              <h2 className='text-success'>04</h2>
              <h3>Repellendus molestiae</h3>
              <p className='text-secondary'>Inventore quo sint a sint rerum. Distinctio blanditiis deserunt quod soluta quod nam mider lando casa</p>
            </td>
            <td className='border'>
              <h2 className='text-success'>05</h2>
              <h3>Sapiente Magnam</h3>
              <p className='text-secondary'>Vitae dolorem in deleniti ipsum omnis tempore voluptatem. Qui possimus est repellendus est quibusdam</p>
            </td>
            <td className='border'>
              <h2 className='text-success'>06</h2>
              <h3>Facilis Impedit</h3>
              <p className='text-secondary'>Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus corporis sequi</p>
            </td>
          </tr>
        </table>
      </Container>
      {/* Slick Slider */}
      <Container fluid className='f bg-body-tertiary p-5'>
      <Slider {...settings}>
        <div>
          <img src='./img/clients/client-1.png' className='img-fluid mx-auto d-block w-25 h-25' alt=''/>
        </div>
        <div>
        <img src='./img/clients/client-2.png' className='img-fluid mx-auto d-block w-25 h-25' alt=''/>
        </div>
        <div>
        <img src='./img/clients/client-3.png' className='img-fluid mx-auto d-block w-25 h-25' alt=''/>
        </div>
        <div>
        <img src='./img/clients/client-4.png' className='img-fluid mx-auto d-block w-25 h-25' alt=''/>
        </div>
        <div>
        <img src='./img/clients/client-5.png' className='img-fluid mx-auto d-block w-25 h-25' alt=''/>
        </div>
        <div>
        <img src='./img/clients/client-6.png' className='img-fluid mx-auto d-block w-25 h-25' alt=''/>
        </div>
        <div>
        <img src='./img/clients/client-7.png' className='img-fluid mx-auto d-block w-25 h-25' alt=''/>
        </div>
        <div>
        <img src='./img/clients/client-8.png' className='img-fluid mx-auto d-block w-25 h-25' alt=''/>
        </div>
      </Slider>
    
      </Container>
      <Services/>
      <Container fluid className='bg-success text-white'>
      <Row className='align-items-center p-5'>
        <Col md={9}>
        <h2>Call To Action</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
        <Col md={3}>
        <Button variant='success' className='border-white rounded-pill px-4 py-2 fs-4'>Call to action</Button>
        </Col>
      </Row>
      </Container>
      <Portfolio/>
      <Team/>
      <Contact/>
    </div>
  )
}

export default Home