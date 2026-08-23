import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("")
    let [err, setErr] = useState(false)

    let API_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "2cc1fe17e48ef9a1ac9f339db2dc03a7"

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonRes = await response.json();
            console.log(jsonRes)
            let result = {
                city: city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description,
            }
            console.log(result)
            return result;
        } catch (err) {
            throw err;
        }
    }


    let handleChange = (e) => {
        setCity(e.target.value)
    }

    let handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(city)
            setErr(false)
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo)
            setCity("")
        } catch (err) {
            setErr(true)
        }
    }
    return (
        <div className='searchBox'>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} size='small' />
                <Button variant="contained" type='submit' style={{ marginLeft: "10px", padding: "7px 12px" }}>
                    Send
                </Button>
                {
                    err && <p style={{ color: "red" }}>No Such Place Exits! </p>
                }
            </form>
        </div>
    )
}