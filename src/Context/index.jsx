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
    const [shoppingCart, setShoppingCart] = useState([])

    const getTotal = (shoppingCart) => {
        let sum = 0
        shoppingCart.forEach(product => {
           sum = sum + product.price
        })
        const total = sum.toFixed(2)
        return total
    }


    //Orders
    const [orders, setOrders] = useState([])

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
            setIsShoppingCartActive,
            shoppingCart,
            setShoppingCart,
            getTotal,
            orders,
            setOrders
        }}>
            {children}
        </shoppiContext.Provider>
    )
} 

export {shoppiContext, ShoppiContextProvider}