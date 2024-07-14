import { useContext } from 'react'
import { shoppiContext } from '../../Context'
import { CartCard } from '../CartCard'
import './ShoppingCart.css'

function ShoppingCart () {
    const context = useContext(shoppiContext)
    return (
        <div className={context.isShoppingCartActive ? 'shopping-cart' : 'inactive-shopping-cart'}>
            <section className='shopping-cart-container'>
                <div className='shopping-cart-header'>
                    <p>Shopping Cart</p>
                    <img 
                        src='/cross.svg' alt="close" 
                        onClick={() => context.setIsShoppingCartActive(false)}/>
                </div>
                <div className='shopping-cart-card-list-container'>
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </div>
                <div className='shopping-cart-total'>
                    <p className='total'>Total:</p>
                    <p className='price'>$109.99</p>
                </div>
                <button>
                    checkout
                </button>
            </section>
        </div>
    )
}

export {ShoppingCart}