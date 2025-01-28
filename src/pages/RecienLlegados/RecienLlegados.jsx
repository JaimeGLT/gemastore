import React from 'react'
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import './recienLlegados.scss'
import Filters from '../../components/Filters/Filters';

const RecienLlegados = () => {

    const { data, loading, error } = useFetch(`/categorias?fields[0]=titulo`);
    const [ selectedCategories, setSelectedCategories ] = useState([]);
    const [ maxPrice, setMaxPrice ] = useState(500);
    const [ valorRange, setValorRange] = useState(150);
    const [ sort, setSort ] = useState('desc');

    return (
        <div className='recienLlegados'>
            {/* <div className="left">
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
            </div> */}
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
                    <h1>Artículos Nuevos</h1>
                </div>
                <div className='card-container'>       
                    <List selectedCategories={selectedCategories} valorRange={valorRange} sort={sort}/>
                </div>

            </div>
        </div>
    )
}

export default RecienLlegados;