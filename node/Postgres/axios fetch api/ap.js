
let express = require("express")
let app = express()
let axios = require("axios")

app.get("/",(req,res)=>{
    axios.get("https://v2.jokeapi.dev/joke/Any?type=single&amount=10").then((response) => {
    let length = response.data.jokes.length
    let jokearr = response.data.jokes
    let jokes = jokearr.map((obj)=>{
       return obj.joke 
    })
    let random = Math.floor(Math.random()*length)

    console.log(jokes[random])
    }).catch((err) => {
        console.log(err)
    });
})

app.listen(3000)


