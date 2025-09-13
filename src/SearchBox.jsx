import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css"
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_KEY = "cc5c26651d0aca57b6ee6c718f421d1e";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    let getWeatherInfo = async () => {
        try {
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data = await res.json()
            // console.log(data);

            let result = {
                city: city,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description,
            }

            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }


    let handleChanged = (event) => {
        setCity(event.target.value)
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className="SearchBox" >
            <h1>Search For The Weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Enter City Name" size="small" variant="outlined" value={city} onChange={handleChanged} />
                <Button variant="contained" endIcon={<SendIcon />} type="submit" style={{ marginLeft: "10px", padding: "7px 12px" }}>
                    Search
                </Button>
                {error && <p style={{color: "red"}}>Sorry, No such place exist in out API!</p>}
            </form>
        </div>
    );
}
