const WeatherReport = ({ weatherData, place }) => {
  return (
    <>
      {weatherData.main && (
        <section className="weatherDisplay">
          <h2>{place}</h2>
          <div className="temprature-content">
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt=""
            />
            <p className="Temprature">
              {Math.round(weatherData.main.temp)}
              <span className="degree"> &#8451;</span>
            </p>
          </div>
          <div className="differentTempratures">
            <p>
              Feels Like: {Math.round(weatherData.main.feels_like)}
              <span className="otherdegree"> &#8451;</span>
            </p>
            <p>
              High: {Math.round(weatherData.main.temp_max)}
              <span className="otherdegree"> &#8451;</span>
            </p>
            <p>
              Low: {Math.round(weatherData.main.temp_min)}
              <span className="otherdegree"> &#8451;</span>
            </p>
          </div>
        </section>
      )}
    </>
  );
};
export default WeatherReport;
