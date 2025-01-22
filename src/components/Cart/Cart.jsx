import React, { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './cart.scss'

const Cart = () => {

    const data = [
        {
            id: 1,
            title: 'Complete outfit',
            img: '/images/img6.jpg',
            description: 'añsjdkfjañlskjdfklñjaslkjdff lorem klajklsfjlñk asjdlkffjlkajsf',
            price: 12,
            isNew: true
        }
    ]

    return (
        <div className='cart'>
            <h1>Productos en tu carrito</h1>
            {
                data?.map(item => (
                    <div className="item" key={item.id}>
                        <img src={item.img} alt="" />
                        <div className="details">
                            <h1>{item.title}</h1>
                            <p>{item.description?.substring(0, 100)}</p>
                            <div className="price">
                                1 x ${item.price}
                            </div>
                        </div>
                        <DeleteOutlineIcon className='delete'/>
                    </div>
                ))
            }

            <div className="total">
                <span>SUBTOTAL</span>
                <span>$ 123</span>
            </div>
            <button>Proceder con el pago</button>
            <span className="reset">Reiniciar carrito</span>
        </div>
    )
}

export default Cart