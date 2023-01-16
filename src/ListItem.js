const ListItem = ({ report }) => {
  console.log(report);
  const days = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
  };
  return (
    <li className="ForcastItem">
      <section className="dayWeather">
        <div>
          <div>{days[new Date(`${report.dt_txt}`).getDay()]}</div>
          <div className="forcasttemprature">
            {Math.round(report.main.temp)}
            <span className="otherdegree"> &#8451;</span>
          </div>
        </div>
        <div>
          <img
            src={`http://openweathermap.org/img/w/${report.weather[0].icon}.png`}
            alt="weather icon"
          />
        </div>
      </section>
      <p className="conditions">{report.weather[0].main}</p>
      <section className="HighLow">
        <p>
          High: {Math.round(report.main.temp_max)}
          <span className="otherdegree"> &#8451;</span>
        </p>
        <p>
          Low: {Math.round(report.main.temp_min)}
          <span className="otherdegree"> &#8451;</span>
        </p>
      </section>
    </li>
  );
};

export default ListItem;
