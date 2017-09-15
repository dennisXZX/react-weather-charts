import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from "../actions/index";

import './search_bar.scss';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		}
	}

	onInputChange = (event) => {
		this.setState({
			term: event.target.value
		})
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		// call the fetchWeather action
		this.props.fetchWeather(this.state.term);
		// clear the input
		this.setState({ term: ''});
	};

	render() {
		return (
			<div className="search_bar">
				<form onSubmit={this.onFormSubmit} className="input-group">
					<input
						placeholder="Get a five-day forecast in your favorite city"
						className="form-control"
						value={this.state.term}
						onChange={this.onInputChange}
					/>
					<span className="input-group-btn">
					<button
						type="submit"
						className="btn btn-secondary">
						Submit
					</button>
				</span>
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch);
}

// we do not map state to props so the first argument is null
export default connect(null, mapDispatchToProps)(SearchBar);