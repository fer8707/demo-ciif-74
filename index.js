// import express library
const express = require("express")
const app = express()
const PORT = 3000
//Route
app.use(express.static('public'))
app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/views/index.html')
})

app.get('/inclinado', (request,response) => {
    //console.log(__dirname);
    response.sendFile(__dirname + '/views/inclinado.html')
})

app.get('/pendulo', (request,response) => {
    //console.log(__dirname);
    response.sendFile(__dirname + '/views/pendulo.html')
})

app.get('/demo', (request,response) => {
    //console.log(__dirname);
    response.sendFile(__dirname + '/views/demo.html')
})

app.listen(PORT, () =>{
    console.log('Run on port', PORT);
})








// const {Board, Led} = require('johnny-five')

// let myBoard, myLed

// myBoard= new Board()
// myBoard.on ('ready', function(){
//     myLed = new Led (13)
//     myLed.strobe(500)
//     this.repl.inject({
//         contron: myLed
//     })
// })


//Servo

// const {Board, Servo} = require("johnny-five")
// const board = new Board()

// board.on("ready", () => {
//   const servo = new Servo(10)
//   board.repl.inject({
//     servo
//   });
//   servo.sweep();
// });

// LM35


// const { Board, Thermometer } = require("johnny-five");
// const board = new Board();

// board.on("ready", () => {
//   const thermometer = new Thermometer({
//     controller: "LM35",
//     pin: "A0"
//   });

//   thermometer.on("change", () => {
//     const {celsius, fahrenheit, kelvin} = thermometer;
    
//     console.log("Thermometer");
//     console.log("  celsius      : ", celsius);
//     console.log("  fahrenheit   : ", fahrenheit);
//     console.log("  kelvin       : ", kelvin);
//     console.log("--------------------------------------");
//   });
// });

