import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './benefits.scss'

const Benefits = () => {
    return (
        <div className='benefits'>
            <div className="left">
                <div className="top">
                    <span>Elegancia</span>
                    <h1>Descubra la elegancia moderna en cada puntada</h1>
                    <p>En Gema Store combinamos diseños modernos con una elegancia atemporal. Nuestras colecciones reflejan las últimas tendencias para que luzcas siempre perfecta.</p>
                </div>
                <div className="center">
                    <div className='item'>
                        <h2>Opciones con estilo</h2>
                        <p>Explore nuestra cuidada selección para cada ocasión, desde salidas informales a eventos formales.</p>
                    </div>
                    <div className='item'>
                        <h2>Diseños de moda</h2>
                        <p>Adelántate a la moda con nuestras prendas únicas y con estilo.</p>
                    </div>
                </div>
                <div className="bottom">
                    <button><Link to='/' className='link'></Link>Tienda</button>
                    <Link to='/' className='link'>Saber más <KeyboardArrowRightIcon /></Link>
                </div>
            </div>
            <div className="right">
                <img src="/images/img2.jpg" alt="" />
            </div>
        </div>
    )
}

export default Benefits