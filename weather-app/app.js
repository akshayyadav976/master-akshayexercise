const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const address = process.argv[2]

if(!address){
console.log('please provide address')
}else{
 geocode(address, (error, data) => {
    console.log('Error : ' + error)
     console.log('Data : ' + data)
     forecast(-75.7088,44.1545,(error,data)=>{
        console.log('Error : ' + error)
        console.log('Data : ' + data    )
        
    })
 })
}