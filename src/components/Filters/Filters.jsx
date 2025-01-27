import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './filters.scss'

const Filters = ({ 
    data, 
    loading, 
    selectedCategories, 
    setSelectedCategories, 
    valorRange, 
    setValorRange, 
    maxPrice, 
    setSort 
}) => {

    const [ activeBar, setActiveBar ] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedCategories(
            isChecked 
                ? [...selectedCategories, value] 
                : selectedCategories.filter(item => item !== value)
        );
    };

    return (
        <div className="filters">
            <div className='desktop'>
                <div className='item'>
                    <h2>Categorías de productos</h2>
                    <div className='categories'>
                        {
                            loading 
                                ? 'Loading' 
                                : data?.map(item => (
                                    <div key={item.id}>
                                        <input 
                                            type="checkbox" 
                                            id={item.id} 
                                            value={item.id} 
                                            onChange={handleChange}
                                        />
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
                    <h2>Ordenar por</h2>
                    <div className='sort'>
                        <div>
                            <input 
                                type="radio" 
                                id='lower-price'
                                value='asc'
                                name='price'
                                onChange={() => setSort('asc')}
                            />
                            <label htmlFor="lower-price">Precios más bajos</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                id='higher-price'
                                value='desc'
                                name='price'
                                onChange={() => setSort('desc')}
                            />
                            <label htmlFor="higher-price">Precios más altos</label>
                        </div>
                    </div>
                </div>
            </div>
                        {/* mobile */}
            <div className={`mobile `}>
                <button className='filter-products' onClick={() => setActiveBar(!activeBar)}>Filtrar Productos <KeyboardArrowDownIcon /></button>
                <div className={`item ${activeBar ? 'active': ''}`}>
                    <h2>Categorías de productos</h2>
                    <div className='categories'>
                        {
                            loading 
                                ? 'Loading' 
                                : data?.map(item => (
                                    <div key={item.id}>
                                        <input 
                                            type="checkbox" 
                                            id={item.id} 
                                            value={item.id} 
                                            onChange={handleChange}
                                        />
                                        <label htmlFor={item.id}>{item.titulo}</label>
                                    </div>
                                ))
                        }
                    </div>
                </div>
                <div className={`item ${activeBar ? 'active': ''}`}>
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
                <div className={`item ${activeBar ? 'active': ''}`}>
                    <h2>Ordenar por</h2>
                    <div className='sort'>
                        <div>
                            <input 
                                type="radio" 
                                id='lower-price'
                                value='asc'
                                name='price'
                                onChange={() => setSort('asc')}
                            />
                            <label htmlFor="lower-price">Precios más bajos</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                id='higher-price'
                                value='desc'
                                name='price'
                                onChange={() => setSort('desc')}
                            />
                            <label htmlFor="higher-price">Precios más altos</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;
