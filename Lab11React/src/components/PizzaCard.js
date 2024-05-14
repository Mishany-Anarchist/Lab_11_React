import {React, useState} from "react";


function PizzaCard(props) {
    const [count, setCount] = useState(0);

    function add() {
        setCount(prevCount => prevCount + 1);
    }

    function remove() {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
    }

    function ButtonClick(event) {
        const pizzaDiameter = document.getElementById("diameter_id").value;
        const pizzaCount = document.getElementById("count_id").value;

        if (pizzaDiameter === "Диаметр") {
            alert("Диаметр пиццы не выбран");
            event.preventDefault();
        }
        else if (pizzaCount === "0") {
            alert("Корзина пуста");
            event.preventDefault();
        }
        else {
            alert(`Количество заказанного товара: ${count}`);
        }
    }

    return (
        <div className="wrapper">
            <img src={props.img} alt="Pizza" className="img"/>
            <h2 className="title">{props.title}</h2>
            <p className="text">{props.text}</p>
            <select id="diameter_id" className="diameter" defaultValue="Диаметр" form="form_id">
                <option disabled>Диаметр</option>
                <option>30 см</option>
                <option>35 см</option>
                <option>40 см</option>
            </select>
            <p className="price">от {props.price}</p>
            <form id="form_id" action="#" method="post" className="form">
                <input type="button" value="-" className="remove" onClick={remove}/>
                <input id="count_id" type="text" value={count} className="count"/>
                <input type="button" value="+" className="add" onClick={add}/>
                <input type="submit" className="button" value=" " onClick={ButtonClick}/>
            </form>
        </div>
    )
}

export default PizzaCard;