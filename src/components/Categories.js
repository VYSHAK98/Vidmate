import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, getCategories, getSingleVideo, removeCategory, updateCategory } from '../service/allapis';
import { Trash2 } from 'react-feather';
import { Col, Row } from 'react-bootstrap';




function Categories() {

    const [catInputs, setCatInputs] = useState({
        id: "",
        title: "",
        videos: []
    })

    const [categories, setCategories] = useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const setData = (e) => {
        const { value, name } = e.target
        setCatInputs({ ...catInputs, [name]: value })


    }

    const handleAdd = async () => {
        let id = uniqid()
        setCatInputs({ ...catInputs, ["id"]: id })
        const { title } = catInputs
        if (title == "") {
            toast.error('Please enter a title...', {
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
            const result = await addCategory(catInputs)
            if (result.status >= 200 && result.status <= 300) {
                toast.success('Category added...', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setShow(false)
                getAllCategories()
            }
        }


    }

    const getAllCategories = async () => {
        const result = await getCategories()
        setCategories(result.data);
    }
    useEffect(() => {
        getAllCategories()
    }, [])

    // console.log(categories);

    // console.log(catInputs);

    const hanldeDelete = async (id) => {
        await removeCategory(id)
        toast.error('Category removed...', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        getAllCategories()
    }

    const draggedOver = (e, id) => {
        e.preventDefault()
        console.log("dragged over catogery id.." + id);
    }
    const dropped = async (e, id) => {
        console.log("dropped category id" + id);
        let videoId = e.dataTransfer.getData('cardId')
        console.log("dropped video id - " + videoId);

        //video
        const { data } = await getSingleVideo(videoId)
        console.log(data);

        //category
        let category = categories.find(i => i.id == id)
        console.log(category);

        //add video to videos array of category
        category.videos.push(data)

        console.log(category);

        //update changed category in backend
        await updateCategory(id, category)

        await getAllCategories()

    }


    return (
        <div>
            <Button variant="light" onClick={handleShow} className='w-100 me-4 rounded-pill border border-info'>
                Add category <i class="fa-solid fa-folder-plus fa-beat-fade fa-lg ms-2 text-info"></i>
            </Button>

            {
                categories?.length > 0 && categories.map(i => (
                    <div droppable onDragOver={e => draggedOver(e, i?.id)} onDrop={e => dropped(e, i?.id)} id='l' className='w-100 p-4 me-4 mt-3 rounded border shadow-lg'>
                       <Row> 
                            <Col className='text-start'>
                            <h4>{i.title}</h4>
                            </Col>

                            <Col className='text-end'>
                            <Trash2 onClick={() => hanldeDelete(i.id)} className='btn' size={55} color='red'></Trash2>
                            </Col>
    
                       </Row>

                       <hr />
                        <marquee>
                            <div className='d-flex justify-content-evenly'>
                                {
                                    i?.videos?.map(item => (
                                        <div>
                                            <img className='mt-2 ms-1' style={{ height: '50px', width: '50px' }} src={item.coverImage} alt="" />
                                        </div>
    
                                    ))
                                }
                            </div>
                       </marquee>
                    </div>
                ))
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{ backgroundColor: 'cyan' }}>
                    <Modal.Title id='cat'>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingInput" label="Category Name" className="mb-3">
                        <Form.Control onChange={e => setData(e)} name='title' type="text" placeholder="name" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: 'grey' }}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="light" onClick={handleAdd}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </div>
    )
}

export default Categories