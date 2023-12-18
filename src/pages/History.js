import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash2 } from 'react-feather';
import Loader from '../components/Loader';
import { getHistory, removeHistory } from '../service/allapis';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'



function History() {

  const [history, setHistory] = useState([])

  const getHistories = async () => {
    const result = await getHistory()
    setHistory(result.data)
  }

  useEffect(() => {
    getHistories()
  }, [])

  // console.log(history);

  const deleteHistory = async (id) => {
    await removeHistory(id)
    await getHistories()
  }

  return (
    <div>
      <Link to={'/home'}>
        <Button className='mt-3 ms-5 btn btn-secondary border px-3 rounded'>
          <i class="fa-solid fa-house fa-beat-fade fa-sm"></i><span className='ms-2'>Home</span>
        </Button>
      </Link>
      {
        history?.length > 0 ?
          <div>
            <h1 id='l' className='text-center my-5 mt-3 fs-2'>Watch History</h1>
            <Table variant='success' className='container w-75 my-5' striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Video</th>
                  <th>Date</th>
                  <th>Video URL</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  history.map((i, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{i?.title}</td>
                      <td>{i?.time}</td>
                      <td>{i?.videoURL}</td>
                      <td className='text-center'><Trash2 className='text-danger btn' size={55} onClick={() => deleteHistory(i?.id)}></Trash2></td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>

          </div>
          : <Loader></Loader>
      }

    </div>
  )
}

export default History