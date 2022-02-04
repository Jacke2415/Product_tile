import { Component } from 'react';

const SizeSelector = () => <div className="text-center"> Cloth Product Sizes are here </div>;

export const HOrderComponent = (WrappedComponent, usesSize, data) => {
	class HOC extends Component {

		constructor(props) {
			super(props);
			this.state = {
				data: data
			};
		}

		render() {
			return (
				<>
					{ usesSize ? 
						<WrappedComponent 
						data={this.state.data }
						{...this.props }>
							<SizeSelector />
						</WrappedComponent> 
					: <WrappedComponent 
						data={this.state.data}
						{...this.props} />
					}
				</>
		)
		}
	}
	return HOC;
}

export default HOrderComponent;
