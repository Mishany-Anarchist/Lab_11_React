import PizzaCard from './components/PizzaCard';
import Pizza from './img/pizza.png';

function App() {
  return (
    <div className="App">
      <PizzaCard img = {Pizza} name = "Пепперони" description = "Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла"  price = "550"/>
    </div>
  );
}

export default App;