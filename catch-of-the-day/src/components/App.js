import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	componentDidMount() {
		const { params } = this.props.match;
		const localStorageRef = localStorage.getItem(params.storeId);
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) });
		}
		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: 'fishes'
		});
	}

	componentDidUpdate() {
		localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	addFish = fish => {
		// Update the state of the object
		// Create a copy of the current state
		const fishes = { ...this.state.fishes };
		// Add the fish to fishes
		fishes[`fish${Date.now()}`] = fish;
		// Set the new Fishes object to state
		this.setState({
			fishes
		});
	};

	updateFish = (key, updatedFish) => {
		// Take a copy of the current state
		const fishes = { ...this.state.fishes };
		// Update that state
		fishes[key] = updatedFish;
		// Set this to state
		this.setState({
			fishes
		});
	};

	deleteFish = key => {
		// take a copy of state
		const fishes = { ...this.state.fishes };
		// change the state
		fishes[key] = null;
		// update state
		this.setState({ fishes });
	};

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};

	addToOrder = key => {
		// take a copy of state
		const order = { ...this.state.order };
		// change the state
		order[key] = order[key] + 1 || 1;
		// update state
		this.setState({ order });
	};

	removeFromOrder = key => {
		// take a copy of state
		const order = { ...this.state.order };
		// change the state
		delete order[key];
		// update state
		this.setState({ order });
	};

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="penis-fish" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key =>
							<Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
						)}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
				<Inventory
					addFish={this.addFish}
					updateFish={this.updateFish}
					deleteFish={this.deleteFish}
					loadSampleFishes={this.loadSampleFishes}
					fishes={this.state.fishes}
				/>
			</div>
		);
	}
}

export default App;
