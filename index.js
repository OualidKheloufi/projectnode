const information = require("./information");
const cowsay = require("cowsay");
const { campus, name } = require("./information");




console.log(cowsay.say({
    text : `Hello dude, am from ${information.campus} and my name is ${information.name}` ,
    e : "oO",
    T : "U "
}));
