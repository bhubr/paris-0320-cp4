import React from 'react'

const Email = () => {
    return(
        <>
          <form>
          <h3>Contenu du message :</h3>
        <label htmlFor='subject'>Sujet :</label>
        <input  type='text'  required />
        <label htmlFor='text'>Message :</label>
        <textarea name='text' required />
        <input type='submit' value='ENVOYER' />
          </form>
        </>
    )
}

export default Email
