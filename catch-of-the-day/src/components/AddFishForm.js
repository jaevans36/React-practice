import React from 'react';

class AddFishForm extends React.Component {
	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();

	createFish = event => {
		event.preventDefault();

		// Create the fish object from the form
		const fish = {
			name: this.nameRef.value.value,
			price: parseFloat(this.priceRef.value.value),
			status: this.statusRef.value.value,
			desc: this.descRef.value.value,
			image: this.imageRef.value.value
		};

		// Pass the fish to App
		this.props.addFish(fish);

		// Reset the form values
		event.currentTarget.reset();
	};

	render() {
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
				<input name="name" ref={this.nameRef} type="text" placeholder="Name" />
				<input name="price" ref={this.priceRef} type="text" placeholder="Price" />
				<select name="status" ref={this.statusRef}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold out!</option>
				</select>
				<textarea name="desc" ref={this.descRef} placeholder="Desc" />
				<input name="image" ref={this.imageRef} type="text" placeholder="Image" />
				<button type="submit">+ Add fish</button>
			</form>
		);
	}
}

export default AddFishForm;
