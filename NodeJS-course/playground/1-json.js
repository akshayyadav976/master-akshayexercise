/* 1 const book = {
    Title : 'Java',
    Author: 'andrew'
}

const bookjson = JSON.stringify(book)
console.log(bookjson)

const fs = require('fs')
fs.writeFileSync('1-json.json',bookjson)

const bufferRead = fs.readFileSync('1-json.json')
const josnd = JSON.parse(bufferRead)

console.log(josnd.Title)*/

const fs = require('fs')
const bufferRead = fs.readFileSync('1-json.json')
const datastring= bufferRead.toString();

const josndata = JSON.parse(datastring)

josndata.name = 'Akshay' 
josndata.planet = 'pluto'

const userJSON = JSON.stringify(josndata)
fs.writeFileSync('1-json.json',userJSON)


