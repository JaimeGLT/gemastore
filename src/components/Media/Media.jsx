import React from 'react'
import './media.scss'

const Media = () => {
    return (
        <div className='media'>
            <div className="left">
                <h1>Manténgase actualizado con Gema Store</h1>
                <p>¡Síguenos en Instagram para obtener actualizaciones exclusivas sobre novedades y promociones especiales!
                </p>
                <div className='buttons'>
                    <button>Seguir</button>
                    <button>Aprender más</button>
                </div>
            </div>
            <div className="right">
                <img src="/images/updated.jpg" alt="" />
            </div>
        </div>
    )
}

export default Media