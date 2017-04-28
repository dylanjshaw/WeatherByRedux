import fetchWeather from '../actions/index';


export default function(state = [], action) {
  switch(action.type){
    case FETCH_WEATHER:
    return [ action.payload.data, ...state ]; 
  }
  return state;
}


// application state in redux should never be mutated;
  // we use 'concat' here to include the data in a NEW state object
