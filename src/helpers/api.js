const urlBase = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeatherData = async (ciudad) => {
    try {
      const res = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
      if (!res.ok) throw new Error("Error al obtener los datos del clima");
      return await res.json();
    } catch (error) {
      throw error;
    }
  };