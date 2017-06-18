import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div>
				<input
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value })} />
			</div>
		);
	}

	onInputChange(event) {
		// this.state.term = event.target.value;

		// I can't acess this from here... why?

		// this.setState({ term: event.target.value });
		// console.log('this has changed', event.target.value, this.state.term);
		console.log('this has changed', event.target.value);
	}
}