const express = require("express");
const getWeatherInfo = require('./utility/getWeatherInfo')
const app= express()

app.get('/',(req,res)=>{
  getWeatherInfo('solapur',(data)=>{
    res.json(data)
  })
})

app.listen(8080)
