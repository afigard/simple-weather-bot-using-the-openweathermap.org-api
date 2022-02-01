"use strict";
const axios = require ("axios");
var colors = require('colors');





const getWeather = location => {
  const params = {
  q: location,
  appid: process.env.APP_ID
  }

  axios.get('http://api.openweathermap.org/data/2.5/weather',{params})
  .then(response => {
    const apiResponse = response.data;
    const temp_celsius = Math.round(apiResponse.main.temp - 273.15)

    /*temperature*/
    if(temp_celsius < 0)
    {
      console.log(`\n[` + `WBot`.gray + `] : It is ` + `very cold`.brightBlue + ` in ${location}!`)
      console.log(`         The current temperature there is ` + temp_celsius.toString().brightBlue + `°C`);
    }
    if((temp_celsius >= 0)&&(temp_celsius <10))
    {
      console.log(`\n[` + `WBot`.gray + `] : It is ` + `cold`.blue + ` in ${location}.`)
      console.log(`         The current temperature there is ` + temp_celsius.toString().blue + `°C`);
    }
    if((temp_celsius >= 10)&&(temp_celsius <20))
    {
      console.log(`\n[` + `WBot`.gray + `] : It feels ` + `cozy`.brightYellow + ` in ${location}.`)
      console.log(`         The current temperature there is ` + temp_celsius.toString().brightYellow + `°C`);
    }
    if((temp_celsius >= 20)&&(temp_celsius <30))
    {
      console.log(`\n[` + `WBot`.gray + `] : It is ` + `hot`.brightRed + ` in ${location}.`)
      console.log(`         The current temperature there is ` + temp_celsius.toString().brightRed + `°C`);
    }
    if((temp_celsius >= 30))
    {
      console.log(`\n[` + `WBot`.gray + `] : It is ` + `very hot`.red + ` in ${location}!`)
      console.log(`         The current temperature there is ` + temp_celsius.toString().red + `°C`);
    }
    console.log(`         The weather type is actually: ` + apiResponse.weather[0].main.toString().brightYellow + `\n`);


  }).catch(error => {
    console.log(`\nSorry, I can't find a city named ${location} in my database.\n`);
  });
}





module.exports = getWeather;
