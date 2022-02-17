import { Component, useEffect, useState } from "react";

const ViewMore = (props) => {

	const [count, setCount] = useState(0);
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);

	useEffect(() => {
		// After mounting!!
		setDescription(props.description);
		setPrice(props.price)
		console.log(props.price)
	}, [props.description, props.price]);

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
					<p className="card-text text-align-justify">{ description + '...' } <a href="https://www.google.com">View more</a></p>					
					{props.children}
					<div className="d-flex bd-highlight mb-3">
						<div className="me-auto p-2 bd-highlight">
							<span className="btn btn-outline-light mt-3 disabled text-black border-2 rounded-3">{ price }</span>
							
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
					<div className="d-flex bd-highlight mb-3">
						<div className="d-flex flex-column me-auto bd-highlight">
							<spam className= "btn">Total Price</spam>
							<span className="btn btn-outline-light mt-3 disabled text-black border-2 rounded-3">{count * price}</span>
						</div>
						<button
							className="btn btn-outline-light mt-3 text-black border-2 rounded-3">Add to Cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};


export default class ViewMoreContainer extends Component {

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
				<ViewMore description={this.props.description}
				price={this.props.price} />
			</div>
		);
	}
}