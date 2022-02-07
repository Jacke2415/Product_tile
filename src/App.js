import ProductTile from './components/ProductTile';
import "bootstrap/dist/css/bootstrap.css";
import BubbleB from 'bubble-b';
import HOrderComponent from './components/HOrderComponent';

function App() {
	const ClothProductTile = HOrderComponent(ProductTile, true, {productSize: [], props: ''});
	const ToysProductTile = HOrderComponent(ProductTile, false, {});
  return (
    <div className="App">
      <header className="App-header">
        <BubbleB bubblesNum={30} />
        <ClothProductTile  />
	<ToysProductTile />
      </header>
    </div>
  );
}

export default App;


        // <span>
        //   Nombre:
        // </span>
	// <span>
        //   Fernando
        // </span>
        // <span>
        //   Apellido:
        // </span>
	// <span>
        //   Toledo
        // </span>
