import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { backURL } from '../config'

const Email = ({ giftList }) => {
  const [contactList, setContactList] = useState([])
  
  const fetchContactList = async() => {
    const result = await axios.get(`${backURL}/email`)
    setContactList(result.data)
  }
  
  const sendEmail = e => {
      axios.post(`${backURL}/email`, {gifts :  giftList, contact : contactList } )
      
  }
  useEffect(() => {
    fetchContactList()
  }, [])
  
  return(
    <>
      {console.log(giftList)}
      <form onSubmit={sendEmail}>
        <h3>Send email :</h3>
        <input type='submit' value='ENVOYER' />
      </form>
    </>
    )
}

export default Email
