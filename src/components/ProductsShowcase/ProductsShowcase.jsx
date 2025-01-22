import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios'
import './productsShowcase.scss'
import { Link } from 'react-router-dom';

const ProductsShowcase = () => {

    const [ startSlice, setStartSlice ] = useState(0);
    const [ finishSlice, setFinishSlice ] = useState(4);

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const data = await axios.get(import.meta.env.VITE_API_URL+'/products?populate=*', {
                    headers: {
                        Authorization: 'bearer ' + import.meta.env.VITE_API_TOKEN
                    }
                })
                console.log(data.data.data)
                setProducts(data.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const prevImage = () => {
        setStartSlice(startSlice <= 0 ? products.length - 4 : startSlice - 1);
        setFinishSlice(startSlice <= 0 ? products.length : finishSlice - 1)
    };

    const nextImage = () => {
        setStartSlice( startSlice < products.length - 4 ? startSlice + 1 : 0);
        setFinishSlice( finishSlice < products.length ?  finishSlice + 1 : 4);
        console.log(startSlice, finishSlice)
    }; 

    return (
        <div className='productShowcase'>
            <div className="presentation">
                <h1>Exhibición de Productos</h1>
                <p>Explore nuestros últimos modelos y compre sus favoritos.</p>
            </div>

            <div className="products">
                {
                    products.slice(startSlice, finishSlice).map((item, index) => (
                        <Link className='link' to={item.id} key={item.id}>
                            <div className='image'>
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