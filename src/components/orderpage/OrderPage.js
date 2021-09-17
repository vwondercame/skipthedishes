import React from 'react'
import OrderPageHeader from '../orderpageheader/OrderPageHeader'
import OrderPageFoodCard from '../orderpagefoodcard/OrderPageFoodCard'
import './OrderPage.scss'
function OrderPage() {
    return (
        <>
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
            <section className="order__schedule">
                <h2>Wednesday</h2>
                <p className="order__select-text">Select Delivery Time:</p>
                <div className="order__time-container">
                    <select className="order__time order__time--hour" name="timer">
                        <option>---</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>1:00</option>
                        <option>1:30</option>
                        <option>2:00</option>
                        <option>2:30</option>
                        <option>3:00</option>
                        <option>3:30</option>
                        <option>4:00</option>
                        <option>4:30</option>
                        <option>5:00</option>
                        <option>5:30</option>
                        <option>6:00</option>
                        <option>6:30</option>
                        <option>7:00</option>
                        <option>7:30</option>
                        <option>8:00</option>
                        <option>8:30</option>
                        <option>9:00</option>
                        <option>9:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                    </select>
                    <select name="hour" className="order__time order__time--ap">
                        <option>---</option>
                        <option>AM</option>
                        <option>PM</option>
                    </select>
                    <p className="order__discount">-10%</p>
                    <button className="order__button">ADD TO DAY</button>
                </div>
            </section>
        </>
    )
}


export default OrderPage;