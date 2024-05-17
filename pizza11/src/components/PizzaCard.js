import React, { useState } from 'react';

const PizzaCard = (props) => {
    const [count, setCount] = useState(0);
    const [diameter, setDiameter] = useState('Диаметр');

    const add = () => setCount(prevCount => prevCount + 1);
     const remove = () => setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));

    const handleDiameterChange = (event) => {
        setDiameter(event.target.value);
    };

    const handleButtonClick = (event) => {
        if (diameter === 'Диаметр') {
            alert('Диаметр пиццы не выбран');
            event.preventDefault();
        } 
        else if (count === 0) {
            alert('Корзина пуста');
            event.preventDefault();
        } 
        else {
            alert(`Количество заказанного товара: ${count}, Размер: ${diameter}`);
        }
    };

    return (
        <div className="wrapper">
            <img src={props.img} alt="Pizza" className="img" />
            <h2 className="name">{props.name}</h2>
            <p className="description">{props.description}</p>
            <select 
                id="diameter_id" 
                className="diameter" 
                value={diameter} 
                onChange={handleDiameterChange}
            >
                    <option disabled>Диаметр</option>
                    <option>30 см</option>
                    <option>35 см</option>
                    <option>40 см</option>
            </select>
            <p className="price">от {props.price} ₽</p>
            <div className="controls">
                <button className="remove" onClick={remove}>-</button>
                <span className="count">{count}</span>
                <button className="add" onClick={add}>+</button>
                <button className="cart-button" onClick={handleButtonClick}>
                </button>
            </div>
        </div>
    );
};

export default PizzaCard;
