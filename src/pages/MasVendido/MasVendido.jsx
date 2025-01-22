import React from 'react'
import Card from '../../components/Card/Card';
import './masVendido.scss'

const MasVendido = () => {

    const data = [
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
        '/images/img4.jpg',
        '/images/img5.jpg',
        '/images/img6.jpg',
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
        '/images/img4.jpg',
        '/images/img5.jpg',
        '/images/img6.jpg',

    ];

    return (
        <div className='masVendido'>
            <div className="left">
                <div className='item'>
                    <h2>Categorias de productos</h2>
                    <div className='categories'>
                        <div>
                            <label htmlFor="1">lorem</label>
                            <input type="checkbox" id='1' />
                        </div>
                        <div>
                            <label htmlFor="1">lorem</label>
                            <input type="checkbox" id='1'/>
                        </div>
                        <div>
                            <label htmlFor="1">lorem</label>
                            <input type="checkbox" id='1'/>
                        </div>
                        <div>
                            <label htmlFor="1">lorem</label>
                            <input type="checkbox" id='1'/>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <h2>Filtrar por Precio</h2>
                    <div className='filter-by-price'>
                        <span>0</span>
                        <input type="range" />
                        <span>500</span>
                    </div>
                </div>
                <div className="item">
                    <h2>Ordernada por</h2>
                    <div className='sort'>
                        <div>
                            <label htmlFor="lower-price">( Precios más bajos )</label>
                            <input type="radio" id='lower-price'/>
                        </div>
                        <div>
                            <label htmlFor="higher-price">( Precios más altos )</label>
                            <input type="radio" id='higher-price'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right">
                <div>
                    <h1>Lo Más Vendido</h1>
                </div>
                <div className='card-container'>
                    {
                        data.map((item, index) => (
                                <Card key={index} className='card' img={item} />

                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default MasVendido