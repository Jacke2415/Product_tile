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
						description={this.state.data.description }
						{...this.props }>
							<SizeSelector />
						</WrappedComponent> 
					: <WrappedComponent 
						description={this.state.data.description}
						{...this.props} />
					}
				</>
		)
		}
	}
	return HOC;
}

export default HOrderComponent;
