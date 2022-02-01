const patternDict = [
  { pattern : '\\b(?<greeting>Hi|Hello|Hey)\\b',
    intent : 'Hello'},

  { pattern : '\\b(bye|exit)\\b',
    intent : 'Exit'},
    
  { pattern : "\\b(weather)\\s(like\\s)?in\\s\\b(?<city>[A-Za -z]+([A-Za -z]+)?)\\b",
    intent : 'get weather'},

  { pattern : "\\b(is it )\\b(?<temp_type>hot|cold|rainy|sunny|cloudy|snowy)\\sin\\s(?<city>[A-Za-z]+([A-Za-z]+)?)\\b(?<time> today| tomorrow)",
    intent : 'get weather'},

  { pattern : "\\b(will it be )\\b(?<w_type>rainy|sunny|cloudy|snowy)\\sin\\s(?<city>[A-Za-z]+([A-Za-z]+)?)\\b(?<time> tomorrow| the day after tomorrow)",
    intent : 'weather type forecast'},
  
  { pattern : "(!help)",
    intent : 'Help'}];


module.exports = patternDict;