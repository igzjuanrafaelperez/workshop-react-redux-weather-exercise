import weatherActionsTypes from '../constants/actions/weather'

export default {
  setSearchText: (searchText) => ({ type: weatherActionsTypes.SET_SEARCH_TEXT, searchText}),
  fetchWeather: () => ({ type: weatherActionsTypes.FETCH_WEATHER }),
  fetchWeatherSuccess: (weatherList) => ({ type: weatherActionsTypes.FETCH_WEATHER_SUCCESS, weatherList }),
  fetchWeatherError: (error) => ({ type: weatherActionsTypes.FETCH_WEATHER_ERROR, error })
}
