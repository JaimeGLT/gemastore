import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './product.scss'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Product = () => {

    const [ active, setActive ] = useState('img');
    const [ quantity, setQuantity ] = useState(1);
    
    const { id } = useParams();
    const dispatch = useDispatch();

    const { data, loading, error } = useFetch(`/products/${id}?populate[img][fields][0]=url&populate[img2][fields][1]=url&fields[2]=esNuevo&fields[3]=titulo&fields[4]=precio&fields[5]=descripcion&fields[6]=precio_con_descuento&populate[marcas][fields][0]=titulo&populate[sub_categorias][fields][0]=titulo`);
    console.log(data)
    return (
        <div className='product'>
            <div className="left">
                <div className="top">
                    <div className="images">
                        <img src={data?.img.url} onClick={() => setActive('img')} alt="" />
                        <img src={data?.img2?.url} onClick={() => setActive('img2')} alt="" />
                    </div>
                    <div className="main-img">
                        <img src={data?.[active]?.url} alt="" />
                    </div>
                </div>
                <div className="bottom">
                    <div className='price'>
                        <span>Precio</span>
                        <div>
                            <p>$ {data?.precio}</p>
                            <p className='price-discount'>{data?.precio_con_descuento > 0 && '$ ' + data?.precio_con_descuento}</p>
                        </div>
                    </div>
                    <div className='addCartItem'>
                        <div className='increase-decrease'>
                            <button onClick={() => setQuantity(quantity == 1 ? quantity : quantity - 1)}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        
                        <div className="addCart" onClick={() => dispatch(addToCart({
                            id: data.id,
                            title: data.titulo,
                            description: data.descripcion,
                            img: data.img.url,
                            price: data.precio,
                            quantity
                        }))}>
                            <AddShoppingCartIcon />
                            <span>Añadir al carrito</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <h2>{data?.titulo}</h2>
                <h3>Descripcion</h3>
                <p>{data?.descripcion}</p>
                <h3>Talla</h3>
                <p>S, xl, x</p>
                <h3>Marca</h3>
                <p>{data?.marcas.map(item => item?.titulo).join(' - ')}</p>
                <h3>Etiquetas</h3>
                <p>{data?.sub_categorias.map(item => item?.titulo + ' ')?.join(' - ')}</p>
            </div>
        </div>
    )
}

export default Product