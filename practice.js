console.log("hello ji gautam here!")
const API_KEY = "bf52a31c973cc4a390d28b23a8818137";
function renderWeatherInfo(data)
{
    let newPara = document.createElement('p');
        newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
    
        document.body.appendChild(newPara);
}
async function showweather(){
    try{
    let city = "goa";
    const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await  response.json();
    console.log("Weather data :-> ",data);
    // let newPara = document.createElement('p');
    //     newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
    
    //     document.body.appendChild(newPara);
    renderWeatherInfo(data);
}
catch(er)
{
    console.log("error found in data",er);
}
}
async function getCustomWeatherDetails (){
    try{
        let latitude = 15.6333;
        let longitude = 18.3333
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        let data = await result.json();
        console.log(data);
        renderWeatherInfo(data)
    }
    catch(err)
    {
        console.log("Error Found",err);
    }
}

function getLocation()
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("no geolaction found");
    }
}
function showPosition(position)
{
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;
    console.log(lat);
    console.log(longi);
}