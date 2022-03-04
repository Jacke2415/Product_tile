// import ProductTile from './components/ProductTile';
import "bootstrap/dist/css/bootstrap.css";
import BubbleB from 'bubble-b';
import HOrderComponent from './components/HOrderComponent';
import ProductTileContainer from './components/ProductTile';
import ViewMoreContainer from "./components/ViewMore";

function App() {

	let description = '2022 HP Pavilion 17.3-inch IPS FHD Laptop, Intel Quad Core i5-1135G7 (Beats i7-1065G7,upto 4.2GHz), Iris Xe Graphics, 16GB RAM, 512GB PCIe SSD, Backlit Keyboard, WiFi 5,Webcam, Windows 11+HubxcelCables Anim occaecat sunt in labore incididunt pariatur aliqua eiusmod consequat fugiat nisi aute non esse.';
	let description2 = 'Tempor anim quis ullamco esse reprehenderit eiusmod elit et deserunt mollit duis.';
	let price = 2456985;
	let price2 = 1326580;

	const ClothProductTile = HOrderComponent(ViewMoreContainer, true, { productSize: [], description, price });
	//const ToysProductTile = HOrderComponent(ProductTileContainer, false, { description: description2, price: price2 });
	/* const ClothViewMore = HOrderComponent(ViewMoreContainer, true, { productSize: [], description, price });
	const ToysViewMore = HOrderComponent(ViewMoreContainer, false, { description: description2, price: price2 }); */
	return (
		<div className="App">
			<header className="App-header">
				<BubbleB bubblesNum={30} />
				<div className='d-flex d-row gap-5 p-5'>
					<ViewMoreContainer />
					{/* <ClothProductTile /> */}
					{/* <ToysProductTile /> */}
					<ProductTileContainer
					description={description2}
					price={price2}/>
					{/* <ClothViewMore />
					<ToysViewMore /> */}					
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
