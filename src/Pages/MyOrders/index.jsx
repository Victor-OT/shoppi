import { Layout } from "../../Components/Layout"
import { CardOrder } from "../../Components/CardOrder"
import './MyOrders.css'

function MyOrders () {
    return (
        <Layout>
            <h2>My Orders</h2>
            <div className='orders-container'>
                <CardOrder />
                <CardOrder />
                <CardOrder />
            </div>
        </Layout>
    )
}

export {MyOrders}