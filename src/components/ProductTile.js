// import { Link } from "react-router-dom";
import { Component, useEffect, useState } from "react";
// productName, ProdDesc, productImage

const ProductTile = (props) => {

	const [count, setCount] = useState(0);
	const [description, setDescription] = useState('');

	useEffect(() => {
		// After mounting!!
		setDescription(props.description.slice(0, 200));
	}, [props.description]);

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
							<span
							className="btn btn-outline-light mt-3 disabled text-black border-2 rounded-3">{count}</span>
							<button
							className="btn btn-outline-light mt-3 text-black border-2 rounded-3"
							onClick={decrease}>-</button>
							<button
							className="btn btn-outline-light mt-3 text-black border-2 rounded-3"
							onClick={() => setCount(count + 1)}>+</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};


export default class ProductTileContainer extends Component {

	constructor() {
		super();
		this.state = {
			desciption: ''
		};
	}

	componentDidMount() {

	}

	render() {
		return(
			<div>
				<span>Container</span> 
				<ProductTile description={this.props.description} />
			</div>
		);
	}
}