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
			<div className="card d-flex bd-highlight mb-3" style={{ width: '50rem', height: '45rem' }}>
				<div className ="btn-toolbar justify-content-between">
					<div>
						<h5 className ="card-title">Laptop HP</h5>
					</div>
					<div>
					<button type="button" className ="btn">X</button>
					</div>

				</div>
				
				
				<img
					className='card-img-top'
					src="https://m.media-amazon.com/images/I/81YRfW97J1L._AC_UY327_FMwebp_QL65_.jpg"
					alt=""
					width="400"
				/>
				<div className="card-body bg-info bg-opacity-50">
					<p className="card-text text-align-justify">{ description } </p>					
					{props.children}
					<div className="d-flex bd-highlight justify-content-center">
						<div className=" border-2 rounder-3">
							<span 
								className="btn btn-outline-light m-2 disabled text-black ">Total: ${ price*count }
							</span>
							<span 
								className="btn btn-outline-light m-2 disabled text-black ">Price: ${ price }
							</span>
							<span
								className="btn  btn-info mb-1 disabled text-black ">Quantity: {count}
							</span>
							<button
								className="btn btn-outline-light mb-1 text-black "
								onClick={decrease}>-
							</button>
							<button
								className="btn btn-outline-light mb-1 text-black "
								onClick={() => setCount(count + 1)}>+
							</button>
							<button
								className="btn btn-outline-light m-2 text-black ">Close
							</button>
							<button
								className="btn btn-info m-2 text-black ">Add Item(s) To Cart
							</button>							
						</div>												
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