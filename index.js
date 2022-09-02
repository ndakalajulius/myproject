let weather ={
    "apiKey":"6a530a631c600d8bf9f22eca9678984a",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city 
    + "&units=metric&APPID="
    +this.apiKey

    )

    .then((response)=>response.json())
    .then((data)=> console.log(data))
},

};