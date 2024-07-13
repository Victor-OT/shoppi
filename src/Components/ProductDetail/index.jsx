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
                    <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg" alt="product" />
                    <h2>$109.99</h2>
                    <h3>Headphones</h3>
                    <p>
                        great outerwear jackets for Spring/Autumn/
                        Winter, suitable for many occasions, such as 
                        working, hiking, camping, mountain/rock climbing, 
                        cycling, traveling or other outdoors. Good 
                        gift choice for you or your family member. 
                        A warm hearted love to Father, husband 
                        or son in this thanksgiving or Christmas Day
                    </p>
                </div>
        </section>
        </div>
    )
}

export {ProductDetail}