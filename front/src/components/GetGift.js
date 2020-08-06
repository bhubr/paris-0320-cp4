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
      <div> 
        <p>{gift.id}</p>
        <p>{gift.name}</p>
        <p>{gift.picture}</p>
      </div>
    )})}
    </div>
  </>
)

}

export default GetGift
