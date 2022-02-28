// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Component, useEffect, useState } from "react";

const ProductTile = (props) => {

	const [count, setCount] = useState(0);
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	
	useEffect(() => {

		// After mounting!!
		setDescription(props.description.slice(0,100));
		setPrice(props.price)
		console.log(props.price)
	}, [props.description, props.price]);

	const Modal = ({children}) => {
		return(
			<article className="modal is-open">
				<div className="modal-container">
					<button className="modal-close">X</button>
					{children}
				</div>
			</article>
		)
	}

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
					<p className="card-text text-align-justify">{ description + '...' } {Modal}</p>					
					{props.children}
					<div className="d-flex bd-highlight mb-3">
						<div className="me-auto p-2 bd-highlight">
							<span className="btn btn-outline-light mt-3 disabled text-black border-2 rounded-3">{ price }</span>
							
						</div>
						<div className="p-2 bd-highlight">
							<span
							className="btn btn-info mt-3 disabled text-black border-2 rounded-3">{count}</span>
							<button
							className="btn btn-outline-light mt-3 text-black border-2 rounded-3"
							onClick={decrease}>-</button>
							<button
							className="btn btn-outline-light mt-3 text-black border-2 rounded-3"
							onClick={() => setCount(count + 1)}>+</button>
						</div>						
					</div>
					<div className="d-flex flex-column bd-highlight mb-3">
						<span className="btn btn-outline-light mt-3 disabled text-black border-2 rounded-3">Total: $ {count * price}</span>
						
						<button
							className="btn btn-info mt-3 text-black border-2 rounded-3">Add to Cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

ProductTile.propTypes = { 
	children: PropTypes.any,
	description: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}; 

export default class ProductTileContainer extends Component {

	constructor() {
		super();
		this.state = {
			description: ''
		};
	}

	componentDidMount() {

	}

	render() {
		return(
			<div>
				<span>Container</span> 
				<ProductTile description={this.props.description}
				price={this.props.price} />
			</div>
		);
	}
}

// ProductTileContainer.propTypes = {
// 	children: PropTypes.any,
// 	description: PropTypes.string,
// 	price: PropTypes.number
// };
