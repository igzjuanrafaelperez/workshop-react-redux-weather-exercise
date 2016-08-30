import weatherActionTypes from '../constants/actions/weather'

const initialState = {
  searchText: '',
  weatherList: [],
  loading: false,
  error: null
}

function setSearchText (state, {searchText}) {
  return {
    ...state,
    searchText
  }
}

function fetchWeather (state) {
  return {
    ...state,
    weatherList: [],
    loading: true,
    error: null
  }
}

function fetchWeatherSuccess (state, action) {
  return {
    ...state,
    weatherList: action.weatherList,
    loading: false,
    error: null
  }
}

function fetchWeatherError (state, {error}) {
  return {
    ...state,
    loading: false,
    error
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case weatherActionTypes.SET_SEARCH_TEXT:
      return setSearchText(state, action)
    case weatherActionTypes.FETCH_WEATHER:
      return fetchWeather(state, action)
    case weatherActionTypes.FETCH_WEATHER_SUCCESS:
      return fetchWeatherSuccess(state, action)
    case weatherActionTypes.FETCH_WEATHER_ERROR:
      return fetchWeatherError(state, action)
    default:
      return state
  }
}
