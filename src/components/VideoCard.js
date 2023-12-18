import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistory, removeVideo } from '../service/allapis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uniqid from 'uniqid';
import { compareAsc, format } from 'date-fns'


function VideoCard({ video, updateData }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
        //history
        //id
        let id = uniqid()
        //date
        let date = format(new Date(), 'dd-MM-yyyy  h:mm a')
        console.log(date);
        //title
        let title = video.title

        //videoURL
        let videoURL = video.videoURL

        var body = {
            id, time: date, title, videoURL
        }
        // console.log(body);

        await addHistory(body)

    }

    const hanldeDelete = async (id) => {
        const result = await removeVideo(id)
        if (result.status >= 200 && result.status <= 300) {
            updateData(result.data)
            toast.success('Video Deleted successfully...', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const dragStarted=(e,id)=>{
        console.log("drag started"+id);
        //store dragged data
        e.dataTransfer.setData('cardId',id)
    }


    return (
        <div>
            <Card draggable onDragStart={(e)=>dragStarted(e,video?.id)} className='mt-2' id='l' style={{ width: '18rem', height: '350px' }}>
                <Card.Img className='w-100' style={{ height: '200px' }} onClick={handleShow} variant="top" src={video.coverImage} />
                <Card.Body>
                    <Card.Title>
                        {video?.title.length > 50 ? video?.title.slice(0, 30) + '...' : video?.title}
                    </Card.Title>
                    <div className='text-end'>
                        <Trash2 onClick={() => hanldeDelete(video.id)} size={55} className='text-danger btn'></Trash2>
                    </div>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{ backgroundColor: 'rgb(171, 38, 38)' }}>
                    <Modal.Title className='text-white'>{video.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-black'>
                    <iframe width="470" height="250"
                        src={video.videoURL}
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: 'rgb(171, 38, 38)' }}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </div>
    )
}

export default VideoCard