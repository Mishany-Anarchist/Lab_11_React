import PizzaCard from "./components/PizzaCard";
import PizzaImg from "./images/pizza.png";

function App() {
  return (
      <PizzaCard title="Пепперони" text="Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла" price="550 ₽" img={PizzaImg}/>
  );
}

export default App;