import { useContext } from 'react'
import { shoppiContext } from '../../Context'
import './CardOrder.css'

function CardOrder (data) {
    const context = useContext(shoppiContext)
    
    return (
        <div className='order-card-container'>
            <div className='order-info'>
                <p className='order-date'>15/07/2024</p>
                <p>Articles: {data.articles}</p>
            </div>
            <p className='total-order'>${context.getTotal(data.order)}</p>
        </div>
    )
}

export {CardOrder}