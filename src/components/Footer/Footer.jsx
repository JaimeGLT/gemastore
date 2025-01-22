import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="left">
                    <span>GemaStore</span>
                    <p>Suscríbase a nuestro boletín para estar al día de nuestras colecciones y promociones.</p>

                    <div className="form">
                        <form action="">
                            <input type="text" placeholder='Su correo electrónico aquí'/>
                            <button>Únase</button>
                        </form>
                    </div>
                    <span>Al suscribirse, acepta recibir actualizaciones.</span>
                </div>

                <div className="right">
                    <div className="item">
                        <h3>Enlaces Rápidos</h3>
                        <div className='container-link'>
                            <span>Comprar ahora</span>
                            <span>Recién llegados</span>
                            <span>Los más vendidos</span>
                            <span>Contáctanos</span>
                            <span>Preguntas frecuentes</span>
                        </div>
                    </div>
                    <div className="item">
                        <h3>Conéctese con Nosotros</h3>
                        <div className='container-link'>
                            <span>Guía de tallas</span>
                            <span>Ubicación de tiendas</span>

                        </div>
                    </div>
                    <div className="item">
                        <h3>Mantente Conectado</h3>
                        <div className='container-link icons'>
                            <div className="icon">
                                <FacebookIcon className='icon-item'/>
                                <span>Facebook</span>
                            </div>
                            <div className="icon">
                                <InstagramIcon className='icon-item'/>
                                <span>Instagram</span>
                            </div>
                            <div className="icon">
                                <WhatsAppIcon className='icon-item'/>
                                <span>WhatsApp</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="bottom">
                <span>© 2025 Gema Store. Todos los derechos reservados.</span>
            </div>
        </div>
    )
}

export default Footer