export const WeatherDisplay = ({ dataClima }) => {
    const difKelvin = 273.15;
  
    return (
      <div>
        <h2>{dataClima.name}</h2>
        <p>Temperature : {parseInt(dataClima?.main.temp - difKelvin)}°C</p>
        <p>Meteorologic Condition: {dataClima.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
          alt="Ícono del clima"
        />
      </div>
    );
  };