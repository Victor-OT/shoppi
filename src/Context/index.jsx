import { createContext, useState, useEffect } from "react";

const shoppiContext = createContext()

function ShoppiContextProvider ({children}) {
    const [userInput , setUserInput] = useState('')

    //Get Data
    const apiUrl = 'https://fakestoreapi.com/products/'
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(response => {
            setData(response)
            setFilteredProducts(response)
        })
    }, [])

    //Filter Products
    const [filteredProducts, setFilteredProducts] = useState(null)

    //Filter By Title
    const filterProductsByTitle = () => {
        const filterByTitle = data.filter(product => product.title.toLocaleLowerCase().includes(userInput))
        setFilteredProducts(filterByTitle)
    }

    //Filter By Category
    const [category, setCategory] = useState('')

    const filterProductsByCategory = () => {
        const filterByCategory = data.filter(product => product.category === category)
        setFilteredProducts(filterByCategory)
        return filterByCategory
    }

    useEffect(() => {
        if (userInput === '' || category === '') {
            setFilteredProducts(data)
        }
        if(userInput != '') {
            filterProductsByTitle()
        }

        if (category != '') {
            filterProductsByCategory()
        }

        if (category != '' && userInput != ''){
            const doubleFilter = filterProductsByCategory().filter(product => product.title.toLocaleLowerCase().includes(userInput))
            setFilteredProducts(doubleFilter)
        }
        
    }, [userInput, category])

    //Product Detail
    const [isProductDetailActive, setIsProductDetailActive] = useState(false)
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart
    const[isShoppingCartActive, setIsShoppingCartActive] = useState(false)

    return (
        <shoppiContext.Provider value={{
            data,
            setData,
            filteredProducts,
            setFilteredProducts,
            userInput,
            setUserInput,
            category,
            setCategory,
            isProductDetailActive,
            setIsProductDetailActive,
            productToShow,
            setProductToShow,
            isShoppingCartActive,
            setIsShoppingCartActive
        }}>
            {children}
        </shoppiContext.Provider>
    )
} 

export {shoppiContext, ShoppiContextProvider}