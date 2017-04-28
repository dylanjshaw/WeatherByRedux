import axios from 'axios';
//axios is basically jQuery, but just for AJAX


const API_KEY = 'cc3b58a6050360b8c4271b0fd5084ed2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
 // api.openweathermap.org/data/2.5/forecast?{city name},{country code}

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  // axios returns a 'promise'

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// middlewares are functions that intercept and act on actions...
  // ...(think "gatekeeper") before they reach reducers


//Redux promise sees the 'promise' that is sent as the payload of the action
  //and resolves the promise and creates a NEW action that will be sent to the
  //reducer(s)
