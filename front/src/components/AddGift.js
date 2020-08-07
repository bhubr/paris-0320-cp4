import React, { useState } from 'react'

import axios from 'axios'

import { backURL } from '../config'

import './AddGift.css'

const AddGift = () =>{
  const [file, setFile] = useState('')
  const [show, setShow] = useState(false)
  const [filename, setFilename] = useState('choose a file')
  const [imgname, setImgname] = useState('')

const showAddImg = () => {
  setShow(!show)
}
const onChangeFilename = (e) => {
  setFile(e.target.files[0])
  setFilename(e.target.files[0].name)
}
const onChangeImgname = (e) => {
  setImgname(e.target.value)
}
const onUpload = () => {
  const formData = new FormData()
  formData.append('file', file)
  setShow(false)
  axios.post(`${backURL}/addgift/${filename}/${imgname}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    
}

  return(
    <>
      <div className='modalAddImg' >
        <h4 onClick={showAddImg} >Add gift</h4>
        <div className='showModal' style={show? {display : 'flex'} : {display : 'none' } }>
          <form>
            <input type='file' name={filename} onChange={onChangeFilename} />
            <input type='text' name={imgname} onChange={onChangeImgname}/>
            <button onClick={onUpload}>Add</button>
          </form>
        </div>
      </div>
  </>
)

}

export default AddGift






