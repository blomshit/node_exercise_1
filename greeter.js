
function greet () {
    var greets = ["Hei!", "Hallo!", "Næmmen hallaien!", "Skjera Bagera?"];
    
    var ran = Math.floor((Math.random()*greets.length));
    console.log(greets[ran]);
}

greet();