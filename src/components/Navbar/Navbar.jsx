import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Cart from '../Cart/Cart';
import Colecciones from '../Colecciones/Colecciones';
import { useSelector } from 'react-redux';
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';
import CancelIcon from '@mui/icons-material/Cancel';
import './navbar.scss'

const Navbar = () => {

    const [ open, setOpen ] = useState(false);
    const [ mobileBar, setMobileBar ] = useState(false);
    const products = useSelector(item => item.cart.products)

  return (
    <div className='navbar'>
        <div className='desktop'>
            <div className="wrapper">
                <div className="left">
                    <h1><Link to='/' className='link'>GEMASTORE</Link></h1>
                </div>
                <div className="center">


                    <div className="item">
                        <Link to='/articulos-nuevos' className='link'>Recién Llegados</Link>
                    </div>
                    <div className="item">
                        <Link to='/ofertas-especiales' className='link'>Ofertas Especiales</Link>
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
                        <span>{products.length}</span>
                    </div>
                </div>
            </div>
            { open && <Cart /> }
        </div>

        {/* mobile */}
        <div className='mobile'>
            <div className="wrapper">
                <div className="left">
                    <h1><Link to='/' className='link'>GEMASTORE</Link></h1>
                </div>
                <div className={`center ${mobileBar ? 'active' : ''}`}>
                    <div className='item'>
                        <CancelIcon className='icon' onClick={() => setMobileBar(false)}/>
                    </div>
                    <div className="item ">
                        <Link to='/articulos-nuevos' className='link mobile-text'>Recién Llegados</Link>
                    </div>
                    <div className="item ">
                        <Link to='/ofertas-especiales' className='link mobile-text'>Ofertas Especiales</Link>
                    </div>
                    <div className="item ">
                        <Link to='/productos' className='link mobile-text'>Artículos en venta</Link>
                    </div>
                    <div className="item" >
                        <span className='link marca-colecciones'>Marcas y Colecciones<Colecciones /></span>
                        <KeyboardArrowDownIcon className='icon'/>
                    </div>
                </div>
                <div className="right">
                    <div className="item">
                        <ShoppingCartIcon className='icon' onClick={() => setOpen(!open)}/>
                        <span>{products.length}</span>
                    </div>
                    <div className='item'>
                        <AlignHorizontalRightIcon className='icon' onClick={() => setMobileBar(true)}/>
                    </div>
                </div>
            </div>
            { open && <Cart /> }
        </div>
    </div>
  )
}

export default Navbar