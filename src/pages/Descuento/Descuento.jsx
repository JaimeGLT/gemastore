import React from 'react'
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import './descuento.scss'
import Filters from '../../components/Filters/Filters';

const Descuento = () => {

    const { data, loading, error } = useFetch(`/categorias?fields[0]=titulo`);
    const [ selectedCategories, setSelectedCategories ] = useState([]);
    const [ maxPrice, setMaxPrice ] = useState(500);
    const [ valorRange, setValorRange] = useState(150);
    const [ sort, setSort ] = useState('desc');



    return (
        <div className='descuento'>
            <Filters 
                data={data} 
                loading={loading} 
                selectedCategories={selectedCategories} 
                setSelectedCategories={setSelectedCategories}
                valorRange={valorRange}
                setValorRange={setValorRange}
                maxPrice={maxPrice}
                setSort={setSort}
            />

            <div className="right">
                <div>
                    <h1>Ofertas Especiales</h1>
                </div>
                <div className='card-container'>       
                    <List selectedCategories={selectedCategories} valorRange={valorRange} sort={sort}/>
                </div>

            </div>
        </div>
    )
}

export default Descuento;