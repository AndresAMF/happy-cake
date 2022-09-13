import React from 'react'
import './styles.css'
import notFound from '../../assets/images/notFound.png'

function Error() {
  return (
    <div className='error-container'>
      <img className='error-img' src={notFound} alt="" />
    </div>
  )
}

export default Error