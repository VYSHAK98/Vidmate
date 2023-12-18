import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <div>
      <Row className='p-5 mt-3 mb-3' style={{ backgroundColor: '#f2f2f2' }}>

        <Col lg={7} md={8} sm={12}>

          <div className='ms-5'>
            <h1 id='h1' className='mt-5 ps-5 fs-1'>Video Uploader</h1>
            <p id='l' className='mt-3 ps-5 fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veritatis perferendis, ullam tempore in aspernatur eius aliquam quo, quia enim atque molestiae delectus suscipit maiores nulla eos amet sequi. Architecto.</p>
            <Link to={'/home'}>
              <Button className='mt-5 ms-5 btn btn-secondary border p-3 rounded'>Get Started
                <i class="fa-solid fa-play fa-beat fa-xl ms-3"></i>
              </Button>
            </Link>
          </div>

        </Col>
        <Col lg={5} md={4} sm={12}>

          <img className='w-100 container' src="https://i.postimg.cc/HL9MbZsg/google-play-loader-animation-800x600.gif" alt="" />

        </Col>

      </Row>
      <div>
        <Container>
          <Row className='ms-5 p-5'>
            <h1 id='h1' className='text-center'>Features</h1>
            <Col lg={4} md={12} sm={12}>
              <Link style={{ textDecoration: 'none' }} to={'/home'}>
                <Card className='ms-4 mt-4 mb-5' style={{ width: '100%' }}>
                  <Card.Img style={{ height: '300px' }} variant="top" src="https://i.postimg.cc/0jfC3BXL/animated-play-button.gif" />
                  <Card.Body>
                    <Card.Title><h3>Managing Videos</h3></Card.Title>
                    <Card.Text>
                      <p className='fs-6'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col lg={4} md={12} sm={12}>
              <Link style={{ textDecoration: 'none' }} to={'/home'}>
                <Card className='ms-3 mt-4 mb-5' style={{ width: '100%' }}>
                  <Card.Img style={{ height: '300px' }} variant="top" src="https://i.postimg.cc/43Hmn2tV/8feef867242968be2d36672879637bc07c9160d216ab0f-ig-HLsp-fw658.webp" />
                  <Card.Body>
                    <Card.Title><h3>Categorise Videos</h3></Card.Title>
                    <Card.Text>
                      <p className='fs-6'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col lg={4} md={12} sm={12}>
              <Link style={{ textDecoration: 'none' }} to={'/history'}>
                <Card className='ms-2 mt-4 mb-5' style={{ width: '100%' }}>
                  <Card.Img style={{ height: '300px' }} variant="top" src="https://i.postimg.cc/rpjFDGbq/giphy.gif" />
                  <Card.Body>
                    <Card.Title><h3>Watch History</h3></Card.Title>
                    <Card.Text>
                      <p className='fs-6'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Row className='p-5'>
        <Col lg={7} md={12} sm={12}>
          <iframe className='ms-5 mb-5 mt-5 w-75' width="600" height="400" src="https://www.youtube.com/embed/SqcY0GlETPk?si=C2hWCjbI4yF0Qjsy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
        <Col lg={5} md={12} sm={12}>
          <h2 className='mt-5 ms-3'>React Tutorial for Beginners</h2>
          <p className='ms-3 mb-5 mt-5'>React JS Tutorial for Beginners - Learn React 18 with TypeScript and build awesome frontend app!
            - Want to learn more? Get my complete React mastery course: http://bit.ly/3l0vWYR
            - Subscribe for more videos like this: https://goo.gl/6PYaGF</p>
        </Col>
      </Row>
    </div>
  )
}

export default Landing