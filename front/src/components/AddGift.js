import React, { useState } from 'react'

import axios from 'axios'

import { backURL } from '../config'

import './AddGift.css'

const AddGift = () =>{
  const [file, setFile] = useState('')
  const [show, setShow] = useState(false)
  const [filename, setFilename] = useState('choose a file')
  const [imgname, setImgname] = useState('')


const onChangeFilename = (e) => {
  setFile(e.target.files[0])
  setFilename(e.target.files[0].name)
}
const onChangeImgname = (e) => {
  setImgname(e.target.value)
}
const onUpload = (e) => {
  // e.preventDefault()
  const formData = new FormData()
  formData.append('file', file)
  setShow(false)
  // window.location.reload()
  axios.post(`${backURL}/addgift/${filename}/${imgname}`,formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    
}
  return(
    <>
      <div className='modalAddImg' >
        <h4 onClick={() => setShow(true)} >Add gift</h4>
        <div className='showModal' style={show? {display : 'flex'} : {display : 'none' } }>
          <form onSubmit={onUpload}>
            <input type='file' name={filename} onChange={onChangeFilename} />
            <input type='text' name={imgname} onChange={onChangeImgname}/>
            <input type='submit' value='Add'/>
          </form>
            <button onClick={() => setShow(false)}>Cancel</button>
        </div>
      </div>
  </>
)

}

export default AddGift






