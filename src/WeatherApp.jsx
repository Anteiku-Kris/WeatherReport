import { useState } from "react";
import { fetchWeatherData } from "./helpers/api";
import { WeatherDisplay } from "./components/WeatherDisplay";

export const WeatherApp = () => {
    const [ciudad, setCiudad] = useState("");
    const [dataClima, setDataClima] = useState(null);
  
    const handleCambioCiudad = (e) => {
      setCiudad(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (ciudad.length > 0) {
        try {
          const data = await fetchWeatherData(ciudad);
          setDataClima(data);
        } catch (error) {
          console.error("Ocurrió un problema al obtener los datos del clima", error);
        }
      }
    };
  
    return (
      <div className="container">
        <h1>Weather Report</h1>
  
        <form onSubmit={handleSubmit}>
          <input type="text" value={ciudad} onChange={handleCambioCiudad} />
          <button type="submit">Search</button>
        </form>
  
        {dataClima && <WeatherDisplay dataClima={dataClima} />}
      </div>
    );
  };