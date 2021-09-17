import React from 'react'
import food from '../../img/Rectangle 74.png'
import './OrderPageFoodCard.scss'

function OrderPageFoodCard() {
    return (
        <div className="order-page-food-card">
            <img className="order-page-food-card__img" src={food} alt="poke bowl "/>
            <div className="order-page-food-card__description">
                <h3 className="order-page-food-card__restaurant">Ono Poke Bar</h3>
                <p className="order-page-food-card__menu">Ono Torched Salmon Poke Bowl</p>
                <p className="order-page-food-card__calories">140 calories</p>
                <p className="order-page-food-card__like">♡</p>
            </div>
        </div>
    )
}

export default OrderPageFoodCard
