let express = require("express")
let app = express()
let axios = require("axios")

app.get("/",(req,res)=>{
    
    axios.get("https://v2.jokeapi.dev/joke/Any?type=single&amount=10").then((jokes)=>{
    //   console.log(jokes.data.length)
     let length = jokes.data.jokes.length
     let random = Math.round(Math.random()*length)
     let jokearray = jokes.data.jokes
     let joke = [] 
     for(i of jokearray){
        joke.push(i.joke)
     }
     res.send(joke[random])
    
     
    })
   
})
app.listen(8000)
