import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import './features.scss'

const Features = () => {
    return (
        <div className='features'>
            <div className="top">
                <div className='item'>
                    <span>Elegancia</span>
                    <h1>Descubra nuestras exquisitas colecciones de ropa</h1>
                </div>
                <div className='item'>
                    <p>En Gema Store creemos que toda mujer merece sentirse guapa y segura de sí misma. Nuestras colecciones presentan las últimas tendencias en moda, para que encuentres el conjunto perfecto para cualquier ocasión. Explora nuestra selección y mejora tu armario hoy mismo!</p>

                </div>

            </div>
            <div className="mid">
                <div className="item">
                    <CheckroomIcon className='icon'/>
                    <h2>Impresionantes vestidos para todas las ocasiones</h2>
                    <p>Desde salidas informales a eventos formales, nuestros vestidos están diseñados para impresionar.</p>
                </div>
                <div className="item">
                    <AutoAwesomeIcon className='icon'/>
                    <h2>Conjuntos chic para un estilo sin esfuerzo</h2>
                    <p>Nuestros elegantes conjuntos hacen que vestirse sea coser y cantar.</p>
                </div>
                <div className="item">
                    <SelfImprovementIcon className='icon'/>
                    <h2>Ropa informal cómoda para el día a día</h2>
                    <p>Disfrute de la comodidad sin renunciar al estilo con nuestra gama informal.</p>
                </div>
            </div>
            <div className="bottom">
                    <button><Link to='/' className='link'></Link>Tienda</button>
                    <Link to='/' className='link enlace'>Saber más <KeyboardArrowRightIcon /></Link>
                </div>
        </div>
    )
}

export default Features