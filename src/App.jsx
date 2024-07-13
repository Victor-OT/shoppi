import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ShoppiContextProvider } from './Context'
import { Home } from './Pages/Home'
import { MyOrders } from './Pages/MyOrders'
import { MyAccount } from './Pages/MyAccount'
import { SignOut } from './Pages/SignOut'
import { Navbar } from './Components/Navbar'
import './App.css'

function AppRoutes () {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/sign-out', element: <SignOut /> },
    { path: '/*', element: <div>Not Found</div> },
    { path: '/mens-clothing', element: <Home /> },
    { path: '/womens-clothing', element: <Home /> },
    { path: '/jewelery', element: <Home /> },
    { path: '/electronics', element: <Home /> },
  ])

  return routes
}

function App() {

  return (
    <ShoppiContextProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppiContextProvider>
  )
}

export default App
