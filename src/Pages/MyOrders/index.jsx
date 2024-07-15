import { v4 } from 'uuid'
import { useContext } from "react"
import { shoppiContext } from '../../Context'
import { Layout } from "../../Components/Layout"
import { CardOrder } from "../../Components/CardOrder"
import './MyOrders.css'

function MyOrders () {
    const context = useContext(shoppiContext)

    return (
        <Layout>
            <h2>My Orders</h2>
            <div className='orders-container'>
                {
                    context.orders?.map(order => (
                        <CardOrder
                        key={v4()}
                        order={order}
                        articles={order.length}/>
                    ))
                }
            </div>
        </Layout>
    )
}

export {MyOrders}