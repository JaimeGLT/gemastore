import React from 'react'
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Filter from '../../components/Filter/Filter';
import './categorias.scss'
import Filters from '../../components/Filters/Filters';

const Categorias = () => {

    const  {nombre}  = useParams();
    console.log(nombre);
    
    const { data, loading, error } = useFetch(`/sub-categorias`);

    const [ selectedSubCats, setSelectedSubCats ] = useState([]);
    const [ maxPrice, setMaxPrice ] = useState(500);
    const [ valorRange, setValorRange] = useState(150);
    const [ sort, setSort ] = useState('desc');

    const handleChange = e => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item => item !== value));
    }

    

    return (
        <div className='categorias'>
            <Filters 
                data={data} 
                loading={loading} 
                selectedCategories={selectedSubCats} 
                setSelectedCategories={setSelectedSubCats}
                valorRange={valorRange}
                setValorRange={setValorRange}
                maxPrice={maxPrice}
                setSort={setSort}
            />

            <div className="right">
                <div>
                    <h1>{nombre?.toUpperCase()}</h1>
                </div>
                <div className='card-container'>       
                    <Filter selectedSubCats={selectedSubCats} valorRange={valorRange} sort={sort}/>
                </div>

            </div>
        </div>
    )
}

export default Categorias