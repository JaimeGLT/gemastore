import React from 'react'
import './hero.scss'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="left">
                <h1>Descubre tu estilo con Gema Store</h1>
                <p>Adéntrate en el mundo de la elegancia moderna con nuestra última colección para mujer. Desde salidas informales hasta eventos formales, tenemos los conjuntos perfectos para realzar tu guardarropa.</p>
                <div className='buttons'>
                    <button>Explorar</button>
                    <button>Tienda</button>
                </div>
            </div>
            <div className="right">
                <div className='left'>
                    <div className='image'>
                        <img src="/images/img2.jpg" alt="" />
                    </div>
                    <div className='image'>
                        <img src="/images/img1.jpg" alt="" />
                    </div>
                    <div className='image'>

                        <img src="/images/img3.jpg" alt="" />
                    </div>
                </div>

                <div className="right">
                    <div className="image">
                        <img src="/images/img4.jpg" alt="" />
                    </div>
                    <div className="image">
                        <img src="/images/img5.jpg" alt="" />
                    </div>
                    <div className="image">
                        <img src="/images/img6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero