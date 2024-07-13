import { useContext } from 'react'
import { shoppiContext } from '../../Context'
import './CardProduct.css'

function CardProduct (data) {
    const context = useContext(shoppiContext)

    return (
        <div 
            className='card-product-container'
            onClick={() => context.setIsProductDetailActive(true)}>
            <div className='card-visuals-container'>
                <img src={data.image} alt="product"
                className='product-image' />
                <span>
                    <img src="/add.svg" alt="add" className='add-icon'/>
                </span>
                <p>{data.category}</p>
            </div>
            <div className='card-info-container'>
                <h2>{data.title}</h2>
                <p>${data.price}</p>
            </div>
        </div>
    )
}

export {CardProduct}