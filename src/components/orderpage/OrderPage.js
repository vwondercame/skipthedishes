import React from 'react'
import OrderPageHeader from '../orderpageheader/OrderPageHeader'
import OrderPageFoodCard from '../orderpagefoodcard/OrderPageFoodCard'
import './OrderPage.scss'
function OrderPage() {
    return (
        <div className="order-page">
            <OrderPageHeader></OrderPageHeader>
            <OrderPageFoodCard></OrderPageFoodCard>
        </div>
    )
}

export default OrderPage
