

// productName, ProdDesc, productImage
const ProductTile = (props) => {

	return (
		<>
			<main className="text-center mt-5 position-relative">
				<div className="d-flex flex-column align-items-center text-center">
					<img
						className="img-fluid mb-5 text-center position relative"
						src="https://m.media-amazon.com/images/I/81YRfW97J1L._AC_UY327_FMwebp_QL65_.jpg"
						alt=""
						width="300"
					/>
				</div>
				<div className="d-inline-flex flex-column bg-danger bg-opacity-50">					
					<div>
						<p></p>
						<span className="fw-bold mt-3 mb-3">Laptop HP</span>
					</div>

					<div className="mt-3">
						<p>2022 HP Pavilion 17.3-inch IPS FHD Laptop,</p>
						<p>Intel Quad Core i5-1135G7 (Beats i7-1065G7,upto 4.2GHz),</p>
						<p>Iris Xe Graphics, 16GB RAM, 512GB PCIe SSD, Backlit Keyboard,</p>
						<p> WiFi 5,Webcam, Windows 11+HubxcelCables</p>
					</div>
					{props.children}
					<div className="d-flex bd-highlight mb-3">
						<div className="me-auto p-2 bd-highlight">
							<button className="btn btn-outline-light mt-3 disabled text-black border-2 rounded-3">COP 2.743.897</button>
						</div>
						<div className="p-2 bd-highlight">
							<button className="btn btn-outline-light mt-3 disabled text-black border-2 rounded-3">0</button>
							<button className="btn btn-outline-light mt-3 text-black border-2 rounded-3">-</button>
							<button className="btn btn-outline-light mt-3 text-black border-2 rounded-3">+</button>
						</div>
					</div>
				</div>
			</main>
		</>
	);

}

export default ProductTile;