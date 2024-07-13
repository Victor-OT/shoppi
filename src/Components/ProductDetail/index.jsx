import { useContext } from 'react'
import { shoppiContext } from '../../Context'
import './ProductDetail.css'

function ProductDetail () {
    const context = useContext(shoppiContext)

    return (
        <div className='product-detail-container'>
            <section className='inner-product-detail'>
                <div className='header'>
                    <h2>Detail</h2>
                    <img src="/cross.svg" alt="" 
                        onClick={() => context.setIsProductDetailActive(false)}/>
                </div>
                <div className='product-detail-content'>
                    <img src={context.productToShow.image} alt="product" />
                    <h2>${context.productToShow.price}</h2>
                    <h3>{context.productToShow.title}</h3>
                    <p>{context.productToShow.description}</p>
                </div>
        </section>
        </div>
    )
}

export {ProductDetail}