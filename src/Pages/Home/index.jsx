import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CardProduct } from '../../Components/CardProduct'
import { Layout } from "../../Components/Layout"
import './Home.css'

function Home () {
    const apiUrl = 'https://fakestoreapi.com/products/'
    const [data, setData] = useState([])

    const [userInput , setUserInput] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(null)

    useEffect(() => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(response => {
            setData(response)
            setFilteredProducts(response)
        })
    }, [])

    const filterProductsByTitle = () => {
        if (userInput === '') {
            setFilteredProducts(data)
        } else {
            const filterByTitle = data.filter(product => product.title.toLocaleLowerCase().includes(userInput))
            setFilteredProducts(filterByTitle)
        }
    }

    useEffect(() => {
        filterProductsByTitle()
    }, [userInput])

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
                            <NavLink to='/' className={({isActive}) => 
                                isActive ? 'active-category' : 'inactive-category'}>
                                All
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/mens-clothing' className={({isActive}) => 
                                isActive ? 'active-category' : 'inactive-category'}>
                                Men's Clothing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/womens-clothing' className={({isActive}) => 
                                isActive ? 'active-category' : 'inactive-category'}>
                                Women's Clothing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/jewelery' className={({isActive}) => 
                                isActive ? 'active-category' : 'inactive-category'}>
                                Jewelery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/electronics' className={({isActive}) => 
                                isActive ? 'active-category' : 'inactive-category'}>
                                Electronics
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='search-bar'>
                    <input type="text" placeholder='Search a Product...'
                        onChange={(event) => {
                            const userValue = event.target.value.toLocaleLowerCase()
                            setUserInput(userValue)
                        }}/>
                </div>
                <section className='card-product-global-container'>
                    {
                        filteredProducts?.map(product => (
                            <CardProduct 
                                key={product.id}
                                category={product.category}
                                title={product.title}
                                price={product.price}
                                image={product.image}/>
                        ))
                    }
                </section>
            </div>
        </Layout>
    )
}
export {Home}