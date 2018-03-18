import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

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

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="penis-fish" />
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
			</div>
		);
	}
}

export default App;
