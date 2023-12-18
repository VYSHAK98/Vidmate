import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideo } from '../service/allapis'
import Loader from '../components/Loader';
import { Col, Row } from 'react-bootstrap';




function Videos({ data }) {

  const [allVideos, setVideos] = useState([])

  // state for statelifting between videocard
  const [deleteVideo, setDeleteVideo] = useState("")

  const getAllVideos = async () => {
    const result = await getVideo()
    setVideos(result.data);
  }


  useEffect(() => {
    getAllVideos()
  }, [data, deleteVideo])
  // console.log(allVideos);

  return (
    <Row className='container p-1'>
      {
        allVideos.length > 0 ?
          allVideos.map(i => (
            <Col lg={4} md={6}><VideoCard updateData={setDeleteVideo} video={i}></VideoCard></Col>
          ))
          : <Loader></Loader>
      }

    </Row>
  )
}

export default Videos