import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}

	myInput = React.createRef();

	goToStore(event) {
		event.preventDefault();
		// 2. get the text from the input
		const inputValue = this.myInput.value.value;
		// 3. Change the page to /store/[input-value]
		this.props.history.push(`/store/${inputValue}`);
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
				<button type="submit">Visit Store →</button>
			</form>
		);
	}
}

export default StorePicker;
