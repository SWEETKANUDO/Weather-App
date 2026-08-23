import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';

function getMood(info) {
    const w = (info.weather || "").toLowerCase();
    if (w.includes("rain") || w.includes("drizzle") || w.includes("thunderstorm")) return "rainy";
    if (w.includes("snow")) return "cold";
    if (info.temp <= 10) return "cold";
    if (w.includes("cloud") || w.includes("mist") || w.includes("haze") || w.includes("fog")) return "cloudy";
    return "sunny";
}

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 28.84,
        temp: 28.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "Haze",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    const mood = getMood(weatherInfo);

    return (
        <div className="weatherPage" data-mood={mood}>
            <div className="weatherApp">
                <h2>Weather App by MIHIR</h2>
                <SearchBox updateInfo={updateInfo}></SearchBox>
                <InfoBox info={weatherInfo}></InfoBox>
            </div>
        </div>
    )
}
