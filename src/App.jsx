import { BrowserRouter, useRoutes } from 'react-router-dom'
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
    { path: '/sign-out', element: <SignOut /> }
  ])

  return routes
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
