const https = require('https')
const url = 'https://api.darksky.net/forecast/0ca20221a68c468a7041caff7ea60431/55,-22'
const request = https.request(url,(response)=>{
let data=''
    response.on('data',(chunk)=>{
        data = data + chunk.toString()
    })

    response.on('end',()=>{
        console.log(JSON.parse(data))
    })
})
request.on('error',(error)=>{
    console.log('An Error : '+error)
})
request.end()