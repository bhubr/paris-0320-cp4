import React from 'react'

import axios from 'axios'

import { backURL } from '../config'

const DeleteGift = ({ giftid, giftpicture }) => {

    const deleteGift = () => {
        axios.delete(`${backURL}/addgift/${giftid}/${giftpicture}`)
        window.location.reload()
    }
    
    return(
      <>
        <div>
          <input  onClick={deleteGift} type='button' value='Delete' className='remove'/>
        </div>
      </>
      )
}

export default DeleteGift
