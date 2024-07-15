import { useContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { shoppiContext } from '../../Context'
import { ProductDetail } from '../../Components/ProductDetail'
import { CardProduct } from '../../Components/CardProduct'
import { Layout } from "../../Components/Layout"
import './Home.css'

function Home () {
    const context = useContext(shoppiContext)

    return (
        <Layout>
            <div className='categories-container'>
                <div className='categories-selection'>
                    <img src='/arrow-left.svg' alt="left" />
                    <h2>Categories</h2>
                    <img src='/arrow-right.svg' alt="right" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink 
                                to='/' 
                                className={({isActive}) => 
                                isActive ? 'active-category' : 'inactive-category'}
                                onClick={() => context.setCategory(``)}>
                                All
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/mens-clothing' 
                                className={({isActive}) => 
                                isActive ? 'active-category' : 'inactive-category'}
                                onClick={() => context.setCategory(`men's clothing`)}>
                                Men's Clothing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/womens-clothing' className={({isActive}) => 
                                isActive ? 'active-category' : 'inactive-category'}
                                onClick={() => context.setCategory(`women's clothing`)}>
                                Women's Clothing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/jewelery' className={({isActive}) => 
                                isActive ? 'active-category' : 'inactive-category'}
                                onClick={() => context.setCategory(`jewelery`)}>
                                Jewelery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/electronics' className={({isActive}) => 
                                isActive ? 'active-category' : 'inactive-category'}
                                onClick={() => context.setCategory(`electronics`)}>
                                Electronics
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='search-bar'>
                    <input type="text" id='text' placeholder='Search a Product...'
                        onChange={(event) => {
                            const userValue = event.target.value.toLocaleLowerCase()
                            context.setUserInput(userValue)
                        }}/>
                </div>
                <section className='card-product-global-container'>
                    {
                        context.filteredProducts?.map(product => (
                            <CardProduct 
                                key={product.id}
                                id={product.id}
                                category={product.category}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                description={product.description}
                                />
                        ))
                    }
                </section>
                <div className={context.isProductDetailActive ? 'active-product-detail' : 'inactive-product-detail'}>
                    <ProductDetail />
                </div>
            </div>
        </Layout>
    )
}

export {Home}