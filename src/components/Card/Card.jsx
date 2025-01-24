import React from 'react'
import './card.scss'
import { useNavigate, useParams } from 'react-router-dom'

const Card = ({ item }) => {

    const navigate = useNavigate();

    return (
        <div className='card' >
            <div className='images' onClick={() => {navigate(`/product/${item.documentId}`);     window.scrollTo(0, 0);}}>
                <img src={import.meta.env.VITE_API_UPLOAD + item.img.url} alt={item.titulo} className='mainImg'/>
                {
                    item?.img2 !== null ?  
                        <img src={import.meta.env.VITE_API_UPLOAD + item?.img2?.url} alt={item.titulo} className='secondImg'/>
                    : ''
                }
            </div>
            <div>
                <h2>{item.titulo}</h2>
                <p>{item.precio}</p>
                <p>{item.precio_con_descuento}</p>
            </div>
        </div>
    )
}

export default Card