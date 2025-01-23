import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Cart from '../Cart/Cart';
import './navbar.scss'
import Colecciones from '../Colecciones/Colecciones';

const Navbar = () => {

    const [ open, setOpen ] = useState(false);


  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <h1><Link to='/' className='link'>GEMASTORE</Link></h1>
            </div>
            <div className="center">
                <div className="item">
                    <Link to='/articulos-nuevos' className='link'>Recién Llegados</Link>
                </div>
                <div className="item">
                    <Link to='/ofertas-especiales' className='link'>Oferatas Especiales</Link>
                </div>
                <div className="item">
                    <Link to='/productos' className='link'>Artículos en venta</Link>
                </div>
                <div className="item" >
            <span className='link marca-colecciones'><Colecciones />Marcas y Colecciones</span>
                    <KeyboardArrowDownIcon className='icon'/>
                </div>
            </div>
            <div className="right">
                <div className="item">
                    <FavoriteIcon className='icon'/>
                </div>
                <div className="item">
                    <ShoppingCartIcon className='icon' onClick={() => setOpen(!open)}/>
                </div>
            </div>
        </div>
        { open && <Cart /> }
    </div>
  )
}

export default Navbar