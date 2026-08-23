import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudIcon from '@mui/icons-material/Cloud';

function getMood(info) {
    const w = (info.weather || "").toLowerCase();
    if (w.includes("rain") || w.includes("drizzle") || w.includes("thunderstorm")) return "rainy";
    if (w.includes("snow")) return "cold";
    if (info.temp <= 10) return "cold";
    if (w.includes("cloud") || w.includes("mist") || w.includes("haze") || w.includes("fog")) return "cloudy";
    return "sunny";
}

function getIcon(mood) {
    switch (mood) {
        case "rainy": return <ThunderstormIcon />;
        case "cold": return <AcUnitIcon />;
        case "cloudy": return <CloudIcon />;
        default: return <SunnyIcon />;
    }
}

export default function InfoBox({ info }) {
    const mood = getMood(info);
    const cityLabel = info.city.charAt(0).toUpperCase() + info.city.slice(1);

    return (
        <div className="infoBox">
            <div className="weatherCard" data-mood={mood}>
                <div className="cardTop">
                    <h3 className="cityName">{cityLabel}</h3>
                    <span className="condition">{getIcon(mood)} {info.weather}</span>
                </div>

                <div className="tempHero">
                    <span className="tempValue">{Math.round(info.temp)}</span>
                    <span className="tempUnit">&deg;C</span>
                </div>
                <p className="feelsLike">Feels like {Math.round(info.feelsLike)}&deg;C</p>

                <div className="statsGrid">
                    <div className="statItem">
                        <span className="statLabel">Humidity</span>
                        <span className="statValue">{info.humidity}%</span>
                    </div>
                    <div className="statItem">
                        <span className="statLabel">Min</span>
                        <span className="statValue">{Math.round(info.tempMin)}&deg;</span>
                    </div>
                    <div className="statItem">
                        <span className="statLabel">Max</span>
                        <span className="statValue">{Math.round(info.tempMax)}&deg;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
