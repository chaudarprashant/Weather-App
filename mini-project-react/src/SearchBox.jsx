import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState(""); 

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0dc32698da1aac4e8c7042d32ce8fbb8";
    
    /// Fetch the weather information
    const getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            let jsonResponse = await response.json();  // Corrected this line
            //console.log(jsonResponse);
            
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity:jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            console.log(result);
            return result;

        } catch (error) {
            console.error("Error fetching weather data: ", error);
        }
    };

    const handleChange =async (evt) => {
        setCity(evt.target.value);  // Update city state when input changes
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
      // Fetch weather info on form submit
        setCity("");  // Clear the input field after submission

        let newInfo = await   getWeatherInfo();
        updateInfo(newInfo);  
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange}  // Handle input changes
                />
                <br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>
        </div>
    );
}
