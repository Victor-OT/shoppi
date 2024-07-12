import './CardProduct.css'

function CardProduct (data) {
    return (
        <div className='card-product-container'>
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