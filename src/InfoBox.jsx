import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    const img_url1 = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const HOT_URL= "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL= "https://images.unsplash.com/photo-1520889905494-a9ba556b0cf2?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL= "https://plus.unsplash.com/premium_photo-1733259850070-90f3823659c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";


    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAINY_URL: info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/> }
                            <br />{info.city[0].toUpperCase() + info.city.slice(1)}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature : {info.temp}&deg;C</p>
                            <p>Humidity : {info.humidity}</p>
                            <p>Minimum Temperature : {info.tempMin}&deg;C</p>
                            <p>Maximum Temperature : {info.tempMax}&deg;C</p>
                            <p>The Weather Can Be Described as <i>{info.weather}</i> and Feels Like : {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}