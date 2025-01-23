import React from 'react'
import './card.scss'

const Card = ({ item }) => {


    return (
        <div className='card'>
            <div className='images'>
                <img src={import.meta.env.VITE_API_UPLOAD + item.img.url} alt={item.titulo} className='mainImg'/>
                <img src={import.meta.env.VITE_API_UPLOAD + item.img2.url} alt={item.titulo} className='secondImg'/>
            </div>
            <div>
                <h2>{item.titulo}</h2>
                <p>{item.precio}</p>
            </div>
        </div>
    )
}

export default Card