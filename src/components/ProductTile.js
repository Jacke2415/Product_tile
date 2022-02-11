import { Link } from "react-router-dom";
import { useState } from "react";
// productName, ProdDesc, productImage
const ProductTile = (props) => {

	let description = '2022 HP Pavilion 17.3-inch IPS FHD Laptop, Intel Quad Core i5-1135G7 (Beats i7-1065G7,upto 4.2GHz), Iris Xe Graphics, 16GB RAM, 512GB PCIe SSD, Backlit Keyboard, WiFi 5,Webcam, Windows 11+HubxcelCables Anim occaecat sunt in labore incididunt pariatur aliqua eiusmod consequat fugiat nisi aute non esse.'.slice(0, 200);

	const [count, setCount] = useState(0);


	const decrease = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

	return (
		<>
			<div className="card d-flex bd-highlight mb-3" style={{ width: '25rem', height: '45rem' }}>
				<img
					className='card-img-top'
					src="https://m.media-amazon.com/images/I/81YRfW97J1L._AC_UY327_FMwebp_QL65_.jpg"
					alt=""
					width="400"
				/>
				<div className="card-body bg-info bg-opacity-50">
					<h5 className="card-title">Laptop HP</h5>
					<p className="card-text text-align-justify">{description + '...'}</p>
					{/* <Link to='https://pluralsight.com'>View more</Link> */}
					{props.children}
					<div className="d-flex bd-highlight mb-3">
						<div className="me-auto p-2 bd-highlight">
							<span className="btn btn-outline-light mt-3 disabled text-black border-2 rounded-3">COP 2.743.897</span>
						</div>
						<div className="p-2 bd-highlight">
							<span className="btn btn-outline-light mt-3 disabled text-black border-2 rounded-3">{count}</span>
							<button className="btn btn-outline-light mt-3 text-black border-2 rounded-3" onClick={decrease}>-</button>
							<button className="btn btn-outline-light mt-3 text-black border-2 rounded-3" onClick={() => setCount(count + 1)}>+</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default ProductTile;