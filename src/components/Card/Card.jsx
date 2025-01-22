import React from 'react'
import './card.scss'

const Card = ({ img }) => {
    return (
        <div className='card'>
            <img src={img} alt="" />
        </div>
    )
}

export default Card