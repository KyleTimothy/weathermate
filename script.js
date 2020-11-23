


var button = document.getElementById("cityButton")



 button.addEventListener('click', show =>{

const URI = "https://api.openweathermap.org./data/2.5/weather";
const  KEY = "b68461234301cb1da1633e42ba19b6f1";
const CITY = document.getElementById("city").value;



fetch(`${URI}?q=${CITY}&units=imperial&appid=${KEY}`).then((res)=>{
  console.log(res)

  return res.json()


}).then((data)=>{
  var cityname = document.getElementById("CityName").innerHTML = data.name 

  var typeOfDay = document.getElementById("CityName").innerHTML = data.weather[0].description


 document.getElementById("CityName").innerHTML ="<br>" + " " + "Current Temp:"+" "+ data.main.humidity + "&#x2109;"+ " " + "<br>" +" "+ "City:" + " " + cityname +  "<br>" +" " + "Type of Weather:"+ 
 " " + typeOfDay;

 if(typeOfDay == "clear sky"){
  let clearSky = document.createElement("img");
  clearSky.src = "./clearSkyDay.png"
  let src = document.getElementById("changeImage")
  src.appendChild(clearSky)
 }else if (typeOfDay == "scattered clouds"){

  let scatteredClouds = document.createElement("img");
     
  let src = document.getElementById("changeImage")
  scatteredClouds.src = "./scatteredClouds.png"
  src.appendChild(scatteredClouds)

 } else if (typeOfDay == "few clouds"){
  let fewClouds = document.createElement("img");
 
  let src = document.getElementById("changeImage")
  fewClouds.src = "./fewClouds.png"
  src.appendChild(fewClouds)
 } else if (typeOfDay == "broken clouds"){
  let brokenClouds = document.createElement("img");
     
  let src = document.getElementById("changeImage")
  brokenClouds.src = "./brokenClouds.png"
  src.appendChild(brokenClouds)

 } else if (typeOfDay == "shower rain"){
  let showerRain = document.createElement("img");
     
  let src = document.getElementById("changeImage")
  showerRain.src = "./showerRain.png"
  src.appendChild(showerRain)
 } else if(typeOfDay == "rain"){
  let Rain = document.createElement("img");
     
  let src = document.getElementById("changeImage")
  Rain.src = "./rain.png"
  src.appendChild(Rain)
 }else if(typeOfDay == "thunderstorm"){
  let Thunderstorm = document.createElement("img");
     
  let src = document.getElementById("changeImage")
  Thunderstorm.src = "./thunderStorm.png"
  src.appendChild(Thunderstorm)
 }else if(typeOfDay == "snow"){
  let Snow = document.createElement("img");
     
  let src = document.getElementById("changeImage")
  Snow.src = "./snow.png"
  src.appendChild(Snow)
 }else if (typeOfDay == "mist"){
  let Mist = document.createElement("img");
     
  let src = document.getElementById("changeImage")
   Mist.src = "./mist.png"
  src.appendChild(Mist)
 }



})


})
 



button.addEventListener('click', showing =>{
 //const seven =`${url}?q=${citi}&units=imperial&${key}`
  const URI = "https://api.openweathermap.org/data/2.5/forecast";
  const  key = "b68461234301cb1da1633e42ba19b6f1";
  const citi = document.getElementById("city").value;
  

  fetch(`${URI}?q=${citi}&units=imperial&appid=${key}`).then((res)=>{
    console.log(res)
  
    return res.json()
  
  
  }).then((data)=>{

 const tempMonday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[0].main.temp)
 const feelsMonday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[0].main.feels_like)

 const tempTuesday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[1].main.temp)
 const feelsTuesday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[1].main.feels_like)

 const tempWednesday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[2].main.temp)
 const feelsWednesday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[2].main.feels_like)

 const tempThursday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[3].main.temp)
 const feelsThursday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[3].main.feels_like)

 const tempFriday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[4].main.temp)
 const feelsFriday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[4].main.feels_like)

 const tempSaturday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[5].main.temp)
 const feelsSaturday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[5].main.feels_like)

 const tempSunday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[6].main.temp)
 const feelSunday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[6].main.feels_like)

return  tables = document.getElementById("sevenForcast").innerHTML = 
`

<table> 
<center><h2> 7 Days Forecast</h2></center>

<tr> 
<th>Monday</th>
<th>Tuesday</th>
<th>Wednesday</th>
<th>Thursday</th>
<th>Friday</th>
<th>Saturday</th>
<th>Sunday</th>
</tr>
<tr>
<td>${tempMonday} &#x2109;
<br>
 ${feelsMonday} &#x2109; feels like</td>


<td>${tempTuesday} &#x2109;
<br>
${feelsTuesday} &#x2109; feels like</td>

<td>
${tempWednesday}&#x2109;<br>
${feelsWednesday}&#x2109; feels like
</td>

<td>${tempThursday}&#x2109;
<br>
${feelsThursday}&#x2109; feels like</td>

<td>${tempFriday} &#x2109;
<br>${feelsFriday}&#x2109; feels like</td>

<td>${tempSaturday} &#x2109;<br>
${feelsSaturday} &#x2109; feels like</td>

<td>${tempSunday} &#x2109;<br>
${tempSunday} &#x2109; feels like</td>




</td>

</tr>

</table>`

 //document.getElementById("sevenForcast").innerHTML = JSON.stringify(data)
//data.weather[0].description
  
  })
  
  
  })



  let Removing = document.getElementById("reset")
  Removing.addEventListener("click", Deleting =>{
  var tableSection =   document.getElementById("sevenForcast")


  
 const tempMonday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[0].main.temp)
 const feelsMonday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[0].main.feels_like)

 const tempTuesday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[1].main.temp)
 const feelsTuesday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[1].main.feels_like)

 const tempWednesday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[2].main.temp)
 const feelsWednesday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[2].main.feels_like)

 const tempThursday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[3].main.temp)
 const feelsThursday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[3].main.feels_like)

 const tempFriday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[4].main.temp)
 const feelsFriday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[4].main.feels_like)

 const tempSaturday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[5].main.temp)
 const feelsSaturday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[5].main.feels_like)

 const tempSunday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[6].main.temp)
 const feelSunday = document.getElementById("sevenForcast").innerHTML = JSON.stringify(data.list[6].main.feels_like)
  tables = document.getElementById("sevenForcast").innerHTML = 
  `
  
  <table> 
  <center><h2> 7 Days Forecast</h2></center>
  
  <tr> 
  <th>Monday</th>
  <th>Tuesday</th>
  <th>Wednesday</th>
  <th>Thursday</th>
  <th>Friday</th>
  <th>Saturday</th>
  <th>Sunday</th>
  </tr>
  <tr>
  <td>${tempMonday} &#x2109;
  <br>
   ${feelsMonday} &#x2109; feels like</td>
  
  
  <td>${tempTuesday} &#x2109;
  <br>
  ${feelsTuesday} &#x2109; feels like</td>
  
  <td>
  ${tempWednesday}&#x2109;<br>
  ${feelsWednesday}&#x2109; feels like
  </td>
  
  <td>${tempThursday}&#x2109;
  <br>
  ${feelsThursday}&#x2109; feels like</td>
  
  <td>${tempFriday} &#x2109;
  <br>${feelsFriday}&#x2109; feels like</td>
  
  <td>${tempSaturday} &#x2109;<br>
  ${feelsSaturday} &#x2109; feels like</td>
  
  <td>${tempSunday} &#x2109;<br>
  ${tempSunday} &#x2109; feels like</td>
  
  
  
  
  </td>
  
  </tr>
  
  </table>`

  tableSection.removeChild(tables)

  })