import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Card.scss'

const Card = ({ item }) => {

    const navigate = useNavigate();

    return (
        <div className='card' >
            <div className='images' onClick={() => {navigate(`/product/${item?.documentId}`); window.scrollTo(0, 0);}}>
                <img src={item?.img.url} alt={item?.titulo} className='mainImg'/>
                {
                    item?.img2 !== null ?  
                        <img src={item?.img2?.url} alt={item?.titulo} className='secondImg'/>
                    : ''
                }
            </div>
            <div className='info'>
                <div>
                    <h2>{item?.titulo}</h2>
                </div>
                <div className='price'>
                    <p className={item?.precio_con_descuento > 0 ? 'precio-antiguo': ''}>$ {item.precio}</p>
                    <p>{item?.precio_con_descuento > 0 && '$'} {item?.precio_con_descuento}</p>
                </div>
            </div>
        </div>
    )
}

export default Card