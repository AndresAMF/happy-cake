import React from 'react'
import './styles.css'
import chocoCake from '../../assets/icons/choco-cake.png'
import torta1 from '../../assets/images/torta.png'
import torta2 from '../../assets/images/torta2.png'
import torta3 from '../../assets/images/torta3.png'

function Home() {
  return (
    <>
    <div className='main-container'>
      <h1>Bienvenido a Happy Cake!</h1>
      <p>El lugar de los pasteles felices.</p>
      <img className='home-img' src={chocoCake} alt="" />
    </div>
    <div className='galery'>
    <img className='galery-img' src={torta1} alt="" />
    <img className='galery-img' src={torta2} alt="" />
    <img className='galery-img' src={torta3} alt="" />
    </div>
    </>
  )
}

export default Home