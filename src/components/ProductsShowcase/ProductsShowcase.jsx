import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './productsShowcase.scss'

const ProductsShowcase = () => {

    const [ startSlice, setStartSlice ] = useState(0);
    const [ finishSlice, setFinishSlice ] = useState(4);

    const data = [
        'https://placehold.co/80x80/000000/FFFFFF?text=1',
        'https://placehold.co/80x80/000000/FFFFFF?text=2',
        'https://placehold.co/80x80/000000/FFFFFF?text=3',
        'https://placehold.co/80x80/000000/FFFFFF?text=4',
        'https://placehold.co/80x80/000000/FFFFFF?text=5',
        'https://placehold.co/80x80/000000/FFFFFF?text=6',
        'https://placehold.co/80x80/000000/FFFFFF?text=7',
        'https://placehold.co/80x80/000000/FFFFFF?text=8',
        'https://placehold.co/80x80/000000/FFFFFF?text=9',

      ];

    const prevImage = () => {
        setStartSlice(startSlice <= 1 ? data.length - 4 : startSlice - 4);
        setFinishSlice(startSlice <= 1 ? data.length : finishSlice - 4);
        console.log(startSlice, finishSlice)
    };
    
    


    const nextImage = () => {
        setStartSlice(startSlice >= data.length - 4 ? 0 : startSlice + 4);
        setFinishSlice(startSlice >= data.length - 4 ? 4 : finishSlice + 4);
    };
    


    

    return (
        <div className='productShowcase'>
            <div className="presentation">
                <h1>Exhibición de Productos</h1>
                <p>Explore nuestros últimos modelos y compre sus favoritos.</p>
            </div>

            <div className="products">
                {
                    data.slice(startSlice, finishSlice).map((item, index) => (
                        <img key={index} src={item}/>
                    ))
                }
                <div className="icon">
                    <ArrowBackIcon onClick={prevImage}/>
                </div>
                <div className="icon2">
                    <ArrowForwardIcon onClick={nextImage}/>
                </div>
            </div>

        </div>
    )
}

export default ProductsShowcase