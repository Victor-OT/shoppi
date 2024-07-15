import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { shoppiContext } from '../../Context'
import { CartCard } from '../CartCard'
import './ShoppingCart.css'

function ShoppingCart () {
    const context = useContext(shoppiContext)

    const getOrder = () => {
        const addOrder = [...context.orders, context.shoppingCart]
        context.setOrders(addOrder)
        context.setShoppingCart([])
        context.setIsShoppingCartActive(false)
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
                                key={Math.floor(Math.random() * 10000) + 1}
                                product={product}
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}/>
                        ))
                    }
                </div>
                <div className='shopping-cart-total'>
                    <p className='total'>Total:</p>
                    <p className='price'>${context.getTotal(context.shoppingCart)}</p>
                </div>
                <Link to='/my-orders'>
                    <button onClick={() => getOrder()}>
                        Checkout
                    </button>
                </Link>
            </section>
        </div>
    )
}

export {ShoppingCart}