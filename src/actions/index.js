import axios from 'axios';

const weatherAPIKey = 'dbd636d359406b7c46a6ed075dff431e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${weatherAPIKey}`;

// constants to make sure action creator and reducer refer to the same name
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
	// end point for the weather URL request
	const url = `${ROOT_URL}&q=${cityName},us`;

	// make a GET request
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}