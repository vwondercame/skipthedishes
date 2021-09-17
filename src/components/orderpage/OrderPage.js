import React from 'react'
import OrderPageHeader from '../orderpageheader/OrderPageHeader'
import OrderPageFoodCard from '../orderpagefoodcard/OrderPageFoodCard'
import './OrderPage.scss'
function OrderPage() {
    return (
        <div className="order-page">
            <OrderPageHeader></OrderPageHeader>
            <OrderPageFoodCard></OrderPageFoodCard>
      <section className="order__week">
            <div className="order__date-container">
                <div className="order__day">Mon</div>
                <div className="order__day">20</div>
            </div>
            <div className="order__date-container">
                <div className="order__day">Tues</div>
                <div className="order__day">21</div>
            </div>
            <div className="order__date-container">
                <div className="order__day">Wed</div>
                <div className="order__day">22</div>
            </div>
            <div className="order__date-container">
                <div className="order__day">Thurs</div>
                <div className="order__day">23</div>
            </div>
            <div className="order__date-container">
                <div className="order__day">Fri</div>
                <div className="order__day">24</div>
            </div>
            <div className="order__date-container">
                <div className="order__day">Sat</div>
                <div className="order__day">25</div>
            </div>
            <div className="order__date-container">
                <div className="order__day">Sun</div>
                <div className="order__day">26</div>
            </div>
        </section>
        </div>
    )}
export default OrderPage