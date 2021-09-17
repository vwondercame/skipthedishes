import React, { useState, useEffect } from "react";
import menu1 from "../../img/sesamenoodle.png";
import menu2 from "../../img/redcurry.png";
import menu3 from "../../img/goodnesswrap.png";
import menu4 from "../../img/onosalmon.png";
import item1 from "../../img/item1.png";
import item2 from "../../img/item2.png";
import item3 from "../../img/item3.png";

import "./OrderList.scss";
function OrderList() {
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);
  const [counter4, setCounter4] = useState(1);

  const handleCounter1 = (condition) => {
    if (condition === "plus") {
      setCounter1(counter1 + 1);
    }
    if (condition === "minus") {
      setCounter1(counter1 - 1);
    }
  };

  const handleCounter2 = (condition) => {
    if (condition === "plus") {
      setCounter2(counter1 + 1);
    }
    if (condition === "minus") {
      setCounter2(counter1 - 1);
    }
  };

  const handleCounter3 = (condition) => {
    if (condition === "plus") {
      setCounter3(counter1 + 1);
    }
    if (condition === "minus") {
      setCounter3(counter1 - 1);
    }
  };

  const handleCounter4 = (condition) => {
    if (condition === "plus") {
      setCounter4(counter1 + 1);
    }
    if (condition === "minus") {
      setCounter4(counter1 - 1);
    }
  };

  return (
    <div className="order-list">
      <div className="order-list__header">
        <h3 className="order-list__text1">Julia, here's your meal plan for</h3>
        <h2 className="order-list__text2">September 20th - 24th</h2>
      </div>
      <div className="order-list-main">
        <div className="order-list-main__date">
          <h2 className="order-list-main__date--text">Monday 9/20</h2>
        </div>
        <ul className="order-list-main__ul">
          <li className="order-list-main__li">
            <img className="order-list-main__menu" src={menu1} />
            <div className="click-counter">
              <div
                className="click-counter__minus"
                onClick={() => {
                  handleCounter1("minus");
                }}
              ></div>
              <div className="click-counter__count">{counter1}</div>
              <div
                className="click-counter__plus"
                onClick={() => {
                  handleCounter1("plus");
                }}
              ></div>
            </div>
          </li>
          <li className="order-list-main__li">
            <img className="order-list-main__menu" src={menu2} />
            <div className="click-counter">
              <div className="click-counter__minus"                onClick={() => {
                  handleCounter2("minus");
                }}></div>
              <div className="click-counter__count">{counter2}</div>
              <div className="click-counter__plus"                onClick={() => {
                  handleCounter2("plus");
                }}></div>
            </div>
          </li>
          <li className="order-list-main__li">
            <img className="order-list-main__item" src={item1} />
          </li>
        </ul>
        <div className="order-list-main__date">
          <h2 className="order-list-main__date--text">Tuesday 9/22</h2>
        </div>
        <ul className="order-list-main__ul">
          <li className="order-list-main__li">
            <img className="order-list-main__menu" src={menu3} />
            <div className="click-counter">
              <div className="click-counter__minus"                onClick={() => {
                  handleCounter3("minus");
                }}></div>
              <div className="click-counter__count">{counter3}</div>
              <div className="click-counter__plus"                onClick={() => {
                  handleCounter3("plus");
                }}></div>
            </div>
          </li>
          <li className="order-list-main__li">
            <img className="order-list-main__item" src={item2} />
          </li>
        </ul>
        <div className="order-list-main__date">
          <h2 className="order-list-main__date--text">Wednesday 9/23</h2>
        </div>
        <ul className="order-list-main__ul">
          <li className="order-list-main__li">
            <img className="order-list-main__menu" src={menu4} />
            <div className="click-counter">
              <div className="click-counter__minus"                onClick={() => {
                  handleCounter4("minus");
                }}></div>
              <div className="click-counter__count">{counter4}</div>
              <div className="click-counter__plus"                onClick={() => {
                  handleCounter4("plus");
                }}></div>
            </div>
          </li>
          <li className="order-list-main__li">
            <img className="order-list-main__item" src={item3} />
          </li>
        </ul>
      </div>
      <button className="order-list-main__button">CHECK OUT</button>
    </div>
  );
}

export default OrderList;
