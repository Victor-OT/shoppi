import './CardProduct.css'

function CardProduct () {
    return (
        <div className='card-product-container'>
            <div className='card-visuals-container'>
                <img src='https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="product"
                className='product-image' />
                <span>
                    <img src="/add.svg" alt="add" className='add-icon'/>
                </span>
                <p>Men´s Clothing</p>
            </div>
            <div className='card-info-container'>
                <h2>Headphones</h2>
                <p>$109.99</p>
            </div>
        </div>
    )
}

export {CardProduct}