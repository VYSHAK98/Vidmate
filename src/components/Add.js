import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../service/allapis';




function Add({ updateData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // create a new state to hold input datas
  const [inputs, setInputs] = useState({
    id: '',
    title: '',
    coverImage: '',
    videoURL: ''
  })

  const takeInput = (e) => {
    const { name, value } = e.target
    // console.log(value);
    // console.log(name);
    setInputs({ ...inputs, [name]: value })

  }

  const convertURL = (e) => {
    var url = e.target.value    // https://www.youtube.com/watch?v=yKDWXC4o5nA to  
    // https://www.youtube.com/embed/yKDWXC4o5nA?autoplay=1

    url = url.slice(-11,)
    console.log(url);

    var convertedURL = `https://www.youtube.com/embed/${url}?autoplay=1`

    const { name } = e.target
    setInputs({ ...inputs, [name]: convertedURL })


  }



  const handleAdd = async () => {
    // id 
    let id = uniqid()
    // console.log(id);
    setInputs({ ...inputs, ["id"]: id })


    //input entered or not by the user
    const { title, coverImage, videoURL } = inputs
    if (title == "" || coverImage == "" || videoURL == "") {
      toast.error('All inputs are required...', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const result = await addVideo(inputs)
      console.log(result);
      if (result.status >= 200 && result.status <= 300) {
        toast.success(`${result.data.title} is added`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        handleClose()

        updateData(result.data)
      }
    }

  }
  // console.log(inputs);


  return (

    <div className='text-center'>
      <img onClick={handleShow} className='w-100 btn' src="https://i.postimg.cc/Gm7xSPBY/cloud-upload.gif" alt="" />

      <Modal show={show} onHide={handleClose} className='w-100'>
        <Modal.Header style={{ backgroundColor: ' rgb(204, 209, 115)' }} closeButton>
          <Modal.Title className='text-white'>Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInput" label="Caption" className="mb-3" >
            <Form.Control name='title' onChange={(e) => takeInput(e)} type="text" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Cover Image URL" className="mb-3" >
            <Form.Control name='coverImage' onChange={(e) => takeInput(e)} type="text" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Youtube Video URL" className="mb-3" >
            <Form.Control name='videoURL' onChange={(e) => convertURL(e)} type="text" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: ' grey' }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </div>
  )
}

export default Add