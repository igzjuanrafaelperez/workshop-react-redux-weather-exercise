import React from 'react'
import WeatherCard from './WeatherCard'
import styles from './WeatherSearch.css'

const WeatherSearch = (props) => (
  <div>
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="City"
        value={props.searchText}
        onChange={event => {
          props.actions.setSearchText(event.target.value)
        }}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            props.actions.fetchWeather()
          }
        }}
      />
      <div>
        <button onClick={() => props.actions.fetchWeather()}
                disabled={props.loading}
        >
          {props.loading ? 'Loading...' : 'Get weather'}</button>
      </div>
      {props.error && <div>Error trying to fetch a forecast</div>}
    </div>
    {
      Array.isArray(props.weatherList) && props.weatherList.map(weather => <WeatherCard key={weather.id} {...weather}/>)
    }
  </div>
)

export default WeatherSearch
