import React from 'react'
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Filter from '../../components/Filter/Filter';
import './categorias.scss'

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

    console.log(data);
    

    return (
        <div className='categorias'>
            <div className="left">
                <div className='item'>
                    <h2>Categorias de productos</h2>
                    <div className='categories'>
                        {
                            loading ? 'Loading': data?.map(item => (
                                <div key={item.id}>
                                    <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
                                    <label htmlFor={item.id}>{item.titulo}</label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="item">
                    <h2>Filtrar por Precio</h2>
                    <div className='filter-by-price'>
                        <span>0</span>
                        <input 
                            type="range" 
                            onChange={(e) => setValorRange(e.target.value)} 
                            value={valorRange}
                            min={0}
                            max={maxPrice}
                        />
                        <span>{valorRange}</span>
                    </div>
                </div>
                <div className="item">
                    <h2>Ordernada por</h2>
                    <div className='sort'>
                        <div>
                            <input 
                                type="radio" 
                                id='lower-price'
                                value='asc'
                                name='price'
                                onChange={e => setSort('asc')}
                            />
                            <label htmlFor="lower-price">( Precios más bajos )</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                id='higher-price'
                                value='desc'
                                name='price'
                                onChange={e => setSort('desc')}
                            />
                            <label htmlFor="higher-price">( Precios más altos )</label>
                        </div>
                    </div>
                </div>
            </div>

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