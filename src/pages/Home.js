import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Add from '../components/Add'
import Videos from '../components/Videos'
import Categories from '../components/Categories'


function Home() {
  // state for state lifting
  const [addUpdate, setAddUpdate] = useState("")



  return (
    <div>
      <Row className='m-5 p-5'>
        <Col lg={8} className='pe-5'>
          <h1 className='p-2' id='home1'>Start Uploading Videos For Free</h1>
          <p className='mt-2 mb-5 fs-5 p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus in blanditiis dignissimos doloribus accusamus porro id dicta, nam, repudiandae molestia.</p>
          <Link style={{ textDecoration: 'none' }} to={'/history'}>
            <h2 id='home2' className='mt-1 p-2'>
              <i class="fa-solid fa-clock-rotate-left fa-spin fa-spin-reverse fa-sm me-1"></i>
              <span className='ms-2'>Watch History</span></h2>
          </Link>
        </Col>
        <Col lg={4}>
          <Add updateData={setAddUpdate}></Add>
        </Col>
      </Row>


      <Row className='p-3 mt-4 mb-5 bg-light'>
        <Col lg={8}>
          <Videos data={addUpdate}></Videos>
        </Col>

        <Col lg={4}>
          <Categories></Categories>
        </Col>
      </Row>
    </div>
  )
}

export default Home