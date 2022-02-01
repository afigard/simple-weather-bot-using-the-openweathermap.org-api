'use strict';
const Readline = require('readline');
const rl = Readline.createInterface({
  input : process.stdin,
  output : process.stdout,
  terminal : false
})

const matcher = require('./matcher');
const weather = require("./weather")
const forecast = require("./forecast")


rl.on('line', reply => {
  matcher(reply, cb => {
    switch (cb.intent) {

      case 'Hello':
        console.log(`\n[WBot] : ${cb.entities.groups.greeting}, welcome!\n`)
        break;

      case 'Help':
        console.log(`\nI'm a weather bot made by Adrien Figard, using the api openweathermap.org.\nI'm designed to answer basic questions like : \n- How is the weather in ... ?\n- Is it ... in ... today ?\n- Will it be ... in ... the day after tomorrow?\nTry it yourself!
         `)
        break;

      case 'Exit':
        console.log(`\nThanks for using WBot, see you!\n`)
        rl.close();
        break;

      case 'get weather':
        weather(cb.entities.groups.city)
        break;

      case 'weather type forecast':
        forecast(cb.entities.groups.city, cb.entities.groups.time)
        break;



      default:
        console.log(`\nSorry, I didn't understand.\nType !help for help.\n`)
    }
  });
});


rl.setPrompt(`Hello! Thanks for using WBot!\nAsk your first question or type !help if you need any help.\n`);
rl.prompt();