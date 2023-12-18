import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id='d'>
      <Navbar>
        <Container>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://i.postimg.cc/C1qrsFHh/png-transparent-vidmate-app-logo-tech-companies-removebg-preview.png"
                width="90"
                height="50"
                className="d-inline-block align-to ms-5 mb-2"
              />{' '}
              <b className='Head fs-2'><span id='v1'>V</span>idmate</b>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header