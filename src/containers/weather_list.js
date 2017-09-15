import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

import "./weather_list.scss";

class WeatherList extends Component {

	renderWeather = (cityData) => {
		const name = cityData.city.name;

		// get the temperature
		const temps = cityData.list.map((weather) => {
			return weather.main.temp
		});
		// get the pressure
		const pressures = cityData.list.map((weather) => {
			return weather.main.pressure
		});
		// get the humidity
		const humidities = cityData.list.map((weather) => {
			return weather.main.humidity
		});
		// get the longitude and latitude
		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units="K" /></td>
				<td><Chart data={pressures} color="blue" units="hPa" /></td>
				<td><Chart data={humidities} color="green" units="%" /></td>
			</tr>
		);
	};

	render() {
		return (
			<div className="weather_list">
				<table className="table table-hover">
					<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
					</thead>
					<tbody>
					{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		weather: state.weather
	}
}

export default connect(mapStateToProps)(WeatherList);