import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { shoppiContext } from '../../Context'
import './Navbar.css'
function Navbar () {
    const context = useContext(shoppiContext)
    return (
        <div className="navbar">
            <div className='navbar-container'>
                <NavLink to='/' className={({isActive}) => 
                        isActive ? 'active-h1' : 'inactive-link h1'}>
                    Shoppi
                </NavLink>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='my-orders' className={({isActive}) => 
                                isActive ? 'active-link' : 'inactive-link'}>
                                My Orders
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='my-account' className={({isActive}) => 
                                isActive ? 'active-link' : 'inactive-link'}>
                                My Account
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='sign-out' className={({isActive}) => 
                                isActive ? 'active-link' : 'inactive-link'}>
                                Sign Out
                            </NavLink>
                        </li>
                        <li 
                            className='shopping-cart-counter'
                            onClick={() => context.setIsShoppingCartActive(true)}>
                            <img src='/shopping-cart.svg' alt="cart" className='shopping-cart-img'/>
                            <p>0</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export {Navbar}