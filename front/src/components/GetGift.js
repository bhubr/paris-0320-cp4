import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { backURL } from '../config'

import './GetGift.css'

const GetGift = () =>{
  const [giftList, setGiftList] = useState([])
  const fetchGiftList = async () => {
    const result = await axios.get(`${backURL}/gifts`)
    setGiftList(result.data)
  }
  
  useEffect(() => {
    fetchGiftList()
  }, [])
  
  return(
    <>
    <div>
    {giftList.map(gift => {
      return(
      <div className='cardGift'>
        <div className='picture'> 
          <p>{gift.id}</p>
          <img src={backURL + '/pictures/' + gift.picture} alt='logo' />
        </div>
        <div className='Gift'>
          <p>{gift.name}</p>
          <button className='remove'>Delete</button>
        </div>
      </div>
    )})}
    </div>
  </>
)

}

export default GetGift
