import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <h1>GEMASTORE</h1>
            </div>
            <div className="center">
                <div className="item">
                    <Link to='/' className='link'>Recién Llegados</Link>
                </div>
                <div className="item">
                    <Link to='/' className='link'>Lo más vendido</Link>
                </div>
                <div className="item">
                    <Link to='/' className='link'>Artículos en venta</Link>
                </div>
                <div className="item">
                    <Link to='/' className='link'>Colecciones</Link>
                    <KeyboardArrowDownIcon className='icon'/>
                </div>
            </div>
            <div className="right">
                <div className="item">
                    <FavoriteIcon className='icon'/>
                </div>
                <div className="item">
                    <ShoppingCartIcon className='icon'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar