import { useContext } from 'react'
import { shoppiContext } from '../../Context'
import './CartCard.css'
import { ShoppingCart } from '../ShoppingCart'

function CartCard (product) {
    const context = useContext(shoppiContext)

    const deleteProductFromCart = (product) => {
        const deletedIndexProduct = context.shoppingCart.indexOf(product.product)
        console.log(deletedIndexProduct)
        const updatedCart = [...context.shoppingCart]
        updatedCart.splice(deletedIndexProduct, 1)
        context.setShoppingCart(updatedCart)
    }
    return (
        <div className="cart-card-container">
            <div className='cart-card-header'>
                <img src={product.image} alt="product" />
                <p>{product.title}</p>
            </div>
            <div className='cart-card-total'>
                <p>${product.price}</p>
                <img 
                    src='/cross.svg' alt="close" 
                    onClick={() => deleteProductFromCart(product)}/>
            </div>
        </div>
    )
}

export {CartCard}