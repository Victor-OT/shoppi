import { useContext } from 'react'
import { shoppiContext } from '../../Context'
import { CartCard } from '../CartCard'
import './ShoppingCart.css'

function ShoppingCart () {
    const context = useContext(shoppiContext)
    const getTotal = (shoppingCart) => {
        let sum = 0
        shoppingCart.forEach(product => {
           sum = sum + product.price
        })
        const total = sum.toFixed(2)
        return total
    }
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
                    {
                        context.shoppingCart?.map(product => (
                            <CartCard 
                                key={product.title}
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}/>
                        ))
                    }
                </div>
                <div className='shopping-cart-total'>
                    <p className='total'>Total:</p>
                    <p className='price'>${getTotal(context.shoppingCart)}</p>
                </div>
                <button>
                    checkout
                </button>
            </section>
        </div>
    )
}

export {ShoppingCart}