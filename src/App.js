import ProductTile from './components/ProductTile';
import "bootstrap/dist/css/bootstrap.css";
import BubbleB from 'bubble-b';
import HOrderComponent from './components/HOrderComponent';

function App() {
  const ClothProductTile = HOrderComponent(ProductTile, true, { productSize: [], props: '' });
  const ToysProductTile = HOrderComponent(ProductTile, false, {});
  return (
    <div className="App">
      <header className="App-header">
        <BubbleB bubblesNum={30} />
        <div className='d-flex d-row gap-5 p-5'>
        <ClothProductTile />
        <ToysProductTile />
        </div>
      </header>
    </div>
  );
}

export default App;

// header.App-header main {
//     width: 25rem;
//     margin: 0 2rem !important;
//     float: left;
// }


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
