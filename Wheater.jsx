import humidity from "/Users/abhineetpriyadarshi031gmail.com/Desktop/untitled folder/API/API/src/Assets/humidity.png"
import wind from "/Users/abhineetpriyadarshi031gmail.com/Desktop/untitled folder/API/API/src/Assets/wind.png"
import cloud from "/Users/abhineetpriyadarshi031gmail.com/Desktop/untitled folder/API/API/src/Assets/cloud.png"
import clear from "/Users/abhineetpriyadarshi031gmail.com/Desktop/untitled folder/API/API/src/Assets/clear.png"
import rain from "/Users/abhineetpriyadarshi031gmail.com/Desktop/untitled folder/API/API/src/Assets/rain.png"
import snow from "/Users/abhineetpriyadarshi031gmail.com/Desktop/untitled folder/API/API/src/Assets/snow.png"
import drizzle from "/Users/abhineetpriyadarshi031gmail.com/Desktop/untitled folder/API/API/src/Assets/drizzle.png"
import { useEffect, useState } from "react"

const Wheater = () =>{
    const [city,SetCity] = useState("")
    const [wheater,setWheather] = useState(null)

useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c5ee5ebec6fd76d00f694d0cd07fa5a6&units=metric`)
    .then(res => res.json())
    .then(response => setWheather(response))
},[city])

console.log(wheater)

const getWheater =(condition)=>{
    switch(condition.toLowerCase()){
        case "clouds":
            return cloud
        case "clear":
            return clear
        case "rain":
            return rain
        case "snow":
            return snow
        case "drizzle":
            return drizzle
        default:
            return null
    }
}

    return(
        <div>
            <div className="container">
                <div className="in">
                     <input type="text" placeholder="Enter your city name" value={city} onChange={(e) => SetCity(e.target.value)}/>
                </div>
                
                {wheater && wheater.main && (
                <>
                <div className="top">
                    <h3>{wheater.name}</h3>
                   <h4><strong>Country:</strong> {wheater.sys.country}</h4>
                   <p><b>Temperature : </b>{wheater.main.temp}℃</p>
                   <p>{wheater.weather[0].main}</p>
                   <img src={getWheater(wheater.weather[0].main)} id="weather"/>
                </div>
                
                <div className="Extras">
                    <p><b>Description: </b> <br />{wheater.weather[0].description}</p>
                    <p><b>Feels Like: </b> <br />{wheater.main.feels_like}℃</p>
                    <p><b>Wind : </b> <br />{ wheater.wind.speed} mph <img src={wind} id="wind"/></p>
                </div>   

                <div className="Extra_2">
                    <p><b>Gust: </b><br />{wheater.wind.gust}</p>
                    <p><b>Humidity: </b><br />{wheater.main.humidity}% <img src={humidity}/></p>
                    <p><b>Air Pressure: </b><br />{wheater.main.pressure} hPa </p>
                </div> 
                </>
                
            )}
            </div>
            
            
        </div>
    )

}
export default Wheater