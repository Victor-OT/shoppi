import { NavLink } from 'react-router-dom'
import { Layout } from "../../Components/Layout"
import './Home.css'

function Home () {
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
            </div>
        </Layout>
    )
}
export {Home}