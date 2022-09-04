
let weather = {
    apiKey: "6a530a631c600d8bf9f22eca9678984a",
    fetchweather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city 
    + "&units=metric&APPID="
    +this.apiKey

    )

    .then((response)=>response.json())
    .then((data)=> this.displayWeather(data))
},


displayWeather:function(data) {
    const {name}=data;
    const {icon,description}= data.weather[0];
    const {temp,humidity}=data.main;
    const {speed}=data.wind;
    

    document.querySelector(".city").innerText= "weather in" + name;
    document.querySelector(".description").innerText= description;
    document.querySelector(".temperature").innerText= temp+ " ºC ";
    document.querySelector(".humidity").innerText= " + Humidity:" + humidity + " % ";
    document.querySelector(".windy").innerText= "wind speed: " + speed + " km/h ";
},

search : function (){
    this.fetchweather(
        document.querySelector (".search-bar").value);
    
},
     
};
document
.querySelector(".search-button")
.addEventListener("click",function(){
   // console.log("test")
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
if (event.key == "Enter"){
    weather.search();
}
})

