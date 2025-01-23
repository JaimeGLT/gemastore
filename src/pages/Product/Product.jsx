import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './product.scss'

const Product = () => {

    const [ active, setActive ] = useState(0);
    const [ quantity, setQuantity ] = useState(1);

    const data = [
        '/images/img2.jpg',
        '/images/img5.jpg'
    ]

    return (
        <div className='product'>
            <div className="left">
                <div className="top">
                    <div className="images">
                        <img src={data[0]} onClick={() => setActive(0)} alt="" />
                        <img src={data[1]} onClick={() => setActive(1)} alt="" />
                    </div>
                    <div className="main-img">
                        <img src={data[active]} alt="" />
                    </div>
                </div>
                <div className="bottom">
                    <div className='price'>
                        <span>Precio</span>
                        <p>$ 20</p>
                    </div>
                    <div className='addCartItem'>
                        <div className='increase-decrease'>
                            <button>-</button>
                            <span>{quantity}</span>
                            <button>+</button>
                        </div>
                        
                        <div className="addCart">
                            <AddShoppingCartIcon />
                            <span>Añadir al carrito</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <h2>Ropita</h2>
                <h3>Descripcion</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, officia! Natus mollitia facilis, beatae nobis quo dignissimos enim eveniet? Reprehenderit dolor aspernatur delectus culpa tempora dignissimos aliquid officiis excepturi doloribus?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, architecto esse inventore ea obcaecati nihil! Temporibus neque suscipit, labore in, mollitia, id natus saepe voluptatum ut quibusdam repudiandae aspernatur culpa.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Error ea totam animi quod placeat inventore dolore et at numquam, sunt ratione ex voluptates rem eos, quos magnam. Dolorum, recusandae libero!
                </p>
                <h3>Talla</h3>
                <p>S, xl, x</p>
                <h3>Marca</h3>
                <p>Shein, Zara</p>
                <h3>Etiquetas</h3>
                <p>lorem, lorem, lorem.</p>
            </div>
        </div>
    )
}

export default Product