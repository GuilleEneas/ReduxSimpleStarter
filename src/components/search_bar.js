import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.timeout = null;

		this.onInputChange = this.onInputChange.bind(this);
		// console.log('constructor', this);
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={this.onInputChange} />
			</div>
		);
	}

	onInputChange(event) {
		// console.log('this has changed', event.target.value, this);
		const term = event.target.value;
		this.setState({ term });
		if(this.timeout) {
			clearTimeout(this.timeout);
		}
		this.timeout = setTimeout(() => {
			this.props.onNewTerm(term);
		}, 300);
	}
}