import React, { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import './cart.scss'
import { removeItem, resetCart } from '../../redux/cartReducer';

const Cart = () => {

    const products = useSelector(state => state.cart.products);

    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach(item => total+=item.quantity * item.price);
        return total.toFixed(2);
    };

    return (
        <div className='cart'>
            <h1>Productos en tu carrito</h1>
            {
                products?.map(item => (
                    <div className="item" key={item.id}>
                        <img src={item.img} alt="" />
                        <div className="details">
                            <h1>{item.title}</h1>
                            <p>{item.description?.substring(0, 50)}</p>
                            <div className="price">
                                {item.quantity} x ${item.price}
                            </div>
                        </div>
                        <DeleteOutlineIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
                    </div>
                ))
            }

            <div className="total">
                <span>SUBTOTAL</span>
                <span>$ {totalPrice()}</span>
            </div>
            <button>Proceder con el pago</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>Reiniciar carrito</span>
        </div>
    )
}

export default Cart