import React from 'react'
import CardStyles from "../Styles/Card.module.css"

const Card = ({nombre,banda}) => {

  return (
    <>
    <div className={CardStyles.cardContainer}>
    <div className='mensaje-gracias'> Gracias por compartirlo {nombre}!</div>
    <div>{banda} es una gran banda</div>
    </div>
    </>
  )
}

export default Card