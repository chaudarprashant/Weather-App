import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}){
   
    return(
         <div className='InfoBox'>

     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://images.indianexpress.com/2024/02/pune-weather.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
           <p>temprature = {info.temp}&deg;C</p>
           <p>Humidity = {info.humidity}</p>
           <p>Min Temp ={info.tempMin}&deg;C</p>
           <p>Max Temp = {info.tempMax}&deg;C</p>
           <p>The weather feels like {info.feelslike}&DEG;C</p>
      </Typography>
      </CardContent>
     
    </Card>
         </div>
    )
}