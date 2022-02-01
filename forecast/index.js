"use strict";
const axios = require ("axios");
var colors = require('colors');





const getForecast = (location, date) => {
  const params = {
  q: location,
  appid: process.env.APP_ID
  }
  axios.get('http://api.openweathermap.org/data/2.5/forecast',{params})
  .then(response => {
    const apiResponse = response.data;

    if(date === ' tomorrow')
    {
      console.log(`\n[` + `WBot`.gray + `] : Weather forecast for ` + location.brightYellow + `:`)
      console.log(`        ` + date.brightYellow + ` the weather will be: ` + apiResponse.list[8].weather[0].main.brightYellow + `\n`)
    }
    if(date === ' the day after tomorrow')
    {
      console.log(`\n[` + `WBot`.gray + `] : Weather forecast for ` + location.brightYellow + `:`)
      console.log(`        ` + date.brightYellow + ` the weather will be: ` + apiResponse.list[16].weather[0].main.brightYellow + `\n`)
    }



    }).catch(error => {
    console.log(`\nSorry, I can't find a city named ${location} in my database.\n`);
  });
}





module.exports = getForecast;