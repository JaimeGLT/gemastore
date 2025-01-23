import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios'
import './productsShowcase.scss'
import { Link, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const ProductsShowcase = () => {

    const [ startSlice, setStartSlice ] = useState(0);
    const [ finishSlice, setFinishSlice ] = useState(4);

    const navigate = useNavigate();

    const { data, loading, error } = useFetch('/products?fields[0]=titulo&fields[1]=precio&populate[img][fields][0]=url&populate[img2][fields][1]=url');
    
    const prevImage = () => {
        setStartSlice(startSlice <= 0 ? data.length - 4 : startSlice - 1);
        setFinishSlice(startSlice <= 0 ? data.length : finishSlice - 1)
    };

    const nextImage = () => {
        setStartSlice( startSlice < data.length - 4 ? startSlice + 1 : 0);
        setFinishSlice( finishSlice < data.length ?  finishSlice + 1 : 4);
    }; 

    return (
        <div className='productShowcase'>
            <div className="presentation">
                <h1>Exhibición de Productos</h1>
                <p>Explore nuestros últimos modelos y compre sus favoritos.</p>
            </div>

            <div className="products">
                {
                    loading ? 'loading' : data?.slice(startSlice, finishSlice).map((item, index) => (
                        <Link className='link' to={item.id} key={item.id} >
                            <div className='image' onClick={() => {navigate(`/product/${item.id}`);     window.scrollTo(0, 0); }}>
                                <img src={import.meta.env.VITE_API_UPLOAD + item.img.url} className='mainImage'/>
                                <img src={import.meta.env.VITE_API_UPLOAD + item.img2.url} className='secondImage'/>
                            </div>
                            <div>
                                <h2>{item.titulo}</h2>
                                <span>{item.precio}</span>
                            </div>

                        </Link>
                    ))
                }
                <div className="icon">
                    <ArrowBackIcon onClick={prevImage} className='item-icon'/>
                </div>
                <div className="icon2">
                    <ArrowForwardIcon onClick={nextImage} className='item-icon'/>
                </div>
            </div>

        </div>
    )
}

export default ProductsShowcase