import ProductTile from './components/ProductTile';
import "bootstrap/dist/css/bootstrap.css";
import BubbleB from 'bubble-b';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BubbleB bubblesNum={20} />
        <ProductTile />
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
