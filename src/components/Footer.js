import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Footer() {
  return (
    <div id='f' >
      <Row >
        <Col className='mt-2' lg={4} md={12} sm={12}>
          <img
            alt=""
            src="https://i.postimg.cc/C1qrsFHh/png-transparent-vidmate-app-logo-tech-companies-removebg-preview.png"
            width="90"
            height="50"
            className="d-inline-block align-to mb-2"
          />{' '}
          <b className='Head fs-2'><span id='v1'>V</span>idmate</b>
          <p className='fs-6 mt-1 pb-5 w-75 ms-4' id='f1'
          >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>

        <Col className='container mt-2' lg={4} md={12} sm={12}>

          <h className='text-light'><span className='p-2 ms-4'><i class="fa-solid fa-link fa-beat fa-lg"></i></span>Links</h>
          <div className='p-2 ms-4'>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Main page</Link><br />
            <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link><br />
            <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }}>Watch history</Link>
          </div>
        </Col>

        <Col className='mt-2' lg={4} md={12} sm={12}>
          <h3 className='d text-white fs-5 ms-4'>Connect With Us</h3>

          <div className='pe-5 ms-4'>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-2"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <Button className='btn btn-light w-100'>Send</Button>
            <div className='mt-2 mb-2 text-center ms-4'>
              <i class="fa-brands fa-instagram fa-2x text-white ms-2"></i>
              <i class="fa-brands fa-facebook fa-2x text-white ms-4"></i>
              <i class="fa-brands fa-twitter fa-2x text-white ms-4"></i>
              <i class="fa-brands fa-github fa-2x text-white ms-4"></i>
              <i class="fa-brands fa-linkedin fa-2x text-white ms-4"></i>
            </div>

          </div>
        </Col>

      </Row>
    </div>
  )
}

export default Footer