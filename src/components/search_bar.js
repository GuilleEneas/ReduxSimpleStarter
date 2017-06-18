import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
		// console.log('constructor', this);
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event)} />
			</div>
		);
	}

	onInputChange(event) {
		// console.log('this has changed', event.target.value, this);
		this.setState({ term: event.target.value });
		this.props.onNewTerm(event.target.value);
	}
}