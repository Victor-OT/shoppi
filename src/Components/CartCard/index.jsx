import { useContext } from 'react'
import { shoppiContext } from '../../Context'
import './CartCard.css'

function CartCard (product) {
    const context = useContext(shoppiContext)
    const deleteProductFromCart = () => {
        console.log(product.id)
        const newShoppingCart = context.shoppingCart.filter(item => item.id !== product.id)
        context.setShoppingCart(newShoppingCart)
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