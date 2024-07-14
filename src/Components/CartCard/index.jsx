import './CartCard.css'

function CartCard () {
    return (
        <div className="cart-card-container">
            <div className='cart-card-header'>
                <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product" />
                <p>Headphones</p>
            </div>
            <div className='cart-card-total'>
                <p>$109.99</p>
                <img src='/cross.svg' alt="close" />
            </div>
        </div>
    )
}

export {CartCard}