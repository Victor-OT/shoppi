import './CardOrder.css'

function CardOrder () {
    return (
        <div className='order-card-container'>
            <div className='order-info'>
                <p className='order-date'>15/07/2024</p>
                <p>Arcicles: 4</p>
            </div>
            <p className='total-order'>$109.99</p>
        </div>
    )
}

export {CardOrder}